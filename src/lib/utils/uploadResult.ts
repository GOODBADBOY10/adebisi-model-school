// import { db } from "../firebaseAdmin";
// import admin from "firebase-admin";

// interface StudentResult {
//     subject: string;
//     score: number;
//     grade: string;
// }

// interface Student {
//     studentId: string; // add this
//     name: string;
//     email: string;
//     class: string;
//     year: string;
//     results: StudentResult[];
// }


// interface StudentData {
//     studentId?: string; // optional if you want to generate it in the function
//     name: string;
//     email: string;
//     class: string;
//     year: string;
//     subject: string;
//     score: number;
//     grade: string;
// }

// function generateStudentId(className: string, year: string): string {
//     const safeClass = (className || "CLASS").replace(/[^a-zA-Z0-9]/g, "");
//     const safeYear = (year || "YEAR").replace(/[^0-9]/g, "");
//     const randomNum = Math.floor(1000 + Math.random() * 9000); // 4-digit random
//     return `${safeClass}-${safeYear}-${randomNum}`;
// }


// export async function uploadStudentResult(studentData: StudentData) {
//     try {
//         const email = studentData.email.trim().toLowerCase(); // normalize email
//         const studentRef = db.collection("students").doc(email);

//         const studentSnap = await studentRef.get();

//         // If student already exists, merge result
//         if (studentSnap.exists) {
//             const student = studentSnap.data() as Student;
//              if (!student.studentId) {
//                 await studentRef.update({ studentId: generateStudentId(student.class, student.year) });
//             }
//             const existingResults: StudentResult[] = student?.results || [];

//             // check if subject already exists for that student
//             const alreadyHasSubject = existingResults.some(
//                 (res: StudentResult) =>
//                     res.subject.toLowerCase() === studentData.subject.toLowerCase()
//             );

//             if (alreadyHasSubject) {
//                 // update the score/grade for that subject instead of duplicating
//                 const updatedResults: StudentResult[] = existingResults.map(
//                     (res: StudentResult) =>
//                         res.subject.toLowerCase() === studentData.subject.toLowerCase()
//                             ? {
//                                 ...res,
//                                 score: studentData.score,
//                                 grade: studentData.grade,
//                             }
//                             : res
//                 );

//                 await studentRef.update({
//                     name: studentData.name,
//                     class: studentData.class,
//                     year: studentData.year,
//                     results: updatedResults,
//                 });
//             } else {
//                 // add new subject result
//                 await studentRef.update({
//                     name: studentData.name,
//                     class: studentData.class,
//                     year: studentData.year,
//                     results: admin.firestore.FieldValue.arrayUnion({
//                         subject: studentData.subject,
//                         score: studentData.score,
//                         grade: studentData.grade,
//                     } as StudentResult),
//                 });
//             }
//         } else {
//             // Create new student
//             // Create new student
//             const newStudent: Student = {
//                 studentId: studentData.studentId || generateStudentId(studentData.class, studentData.year),
//                 name: studentData.name,
//                 email,
//                 class: studentData.class,
//                 year: studentData.year,
//                 results: [
//                     {
//                         subject: studentData.subject,
//                         score: studentData.score,
//                         grade: studentData.grade,
//                     },
//                 ],
//             };

//             await studentRef.set(newStudent);
//         }

//         return { success: true, email };
//     } catch (error: unknown) {
//         if (error instanceof Error) {
//             console.error("uploadStudentResult error:", error.message);
//             throw new Error(error.message);
//         } else {
//             console.error("uploadStudentResult unknown error:", error);
//             throw new Error("Unknown error occurred");
//         }
//     }
// }




import { db } from "../firebaseAdmin";
import admin from "firebase-admin";

interface StudentResult {
    subject: string;
    score: number;
    grade: string;
    term: string; // ✅ include term
}

interface Student {
    studentId: string;
    name: string;
    email: string;
    class: string;
    year: string;
    results: StudentResult[];
}

interface StudentData {
    studentId?: string; // optional if you want to generate it
    name: string;
    email: string;
    class: string;
    year: string;
    subject: string;
    score: number;
    grade: string;
    term: string; // ✅ term provided
}

function generateStudentId(className: string, year: string): string {
    const safeClass = (className || "CLASS").replace(/[^a-zA-Z0-9]/g, "");
    const safeYear = (year || "YEAR").replace(/[^0-9]/g, "");
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `${safeClass}-${safeYear}-${randomNum}`;
}

export async function uploadStudentResult(studentData: StudentData) {
    try {
        const email = studentData.email.trim().toLowerCase();
        const studentRef = db.collection("students").doc(email);

        const studentSnap = await studentRef.get();

        if (studentSnap.exists) {
            const student = studentSnap.data() as Student;

            // Ensure studentId exists
            if (!student.studentId) {
                await studentRef.update({ studentId: generateStudentId(student.class, student.year) });
            }

            const existingResults: StudentResult[] = student.results || [];

            // Check if same subject & term already exists
            const alreadyHasSubjectTerm = existingResults.some(
                (res) =>
                    res.subject.toLowerCase() === studentData.subject.toLowerCase() &&
                    res.term.toLowerCase() === studentData.term.toLowerCase()
            );

            if (alreadyHasSubjectTerm) {
                // Update existing result
                const updatedResults = existingResults.map((res) =>
                    res.subject.toLowerCase() === studentData.subject.toLowerCase() &&
                        res.term.toLowerCase() === studentData.term.toLowerCase()
                        ? { ...res, score: studentData.score, grade: studentData.grade }
                        : res
                );

                await studentRef.update({
                    name: studentData.name,
                    class: studentData.class,
                    year: studentData.year,
                    results: updatedResults,
                });
            } else {
                // Add new subject result for the term
                await studentRef.update({
                    name: studentData.name,
                    class: studentData.class,
                    year: studentData.year,
                    results: admin.firestore.FieldValue.arrayUnion({
                        subject: studentData.subject,
                        score: studentData.score,
                        grade: studentData.grade,
                        term: studentData.term,
                    } as StudentResult),
                });
            }
        } else {
            // Create new student
            const newStudent: Student = {
                studentId: studentData.studentId || generateStudentId(studentData.class, studentData.year),
                name: studentData.name,
                email,
                class: studentData.class,
                year: studentData.year,
                results: [
                    {
                        subject: studentData.subject,
                        score: studentData.score,
                        grade: studentData.grade,
                        term: studentData.term,
                    },
                ],
            };

            await studentRef.set(newStudent);
        }

        return { success: true, email };
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("uploadStudentResult error:", error.message);
            throw new Error(error.message);
        } else {
            console.error("uploadStudentResult unknown error:", error);
            throw new Error("Unknown error occurred");
        }
    }
}