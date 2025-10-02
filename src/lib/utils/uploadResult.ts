import { db } from "../firebaseAdmin";
import admin from "firebase-admin";

interface StudentData {
    name: string;
    email: string;
    class: string;
    year: string;
    subject: string;
    score: number;
    grade: string;
}

export async function uploadStudentResult(studentData: StudentData) {
    try {
        const email = studentData.email.trim().toLowerCase(); // normalize email
        const studentRef = db.collection("students").doc(email);

        const studentSnap = await studentRef.get();

        // If student already exists, merge result
        if (studentSnap.exists) {
            const student = studentSnap.data();

            // check if subject already exists for that student
            const existingResults = student?.results || [];
            const alreadyHasSubject = existingResults.some(
                (res: any) => res.subject?.toLowerCase() === studentData.subject.toLowerCase()
            );

            if (alreadyHasSubject) {
                // update the score/grade for that subject instead of duplicating
                const updatedResults = existingResults.map((res: any) =>
                    res.subject.toLowerCase() === studentData.subject.toLowerCase()
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
                // add new subject result
                await studentRef.update({
                    name: studentData.name,
                    class: studentData.class,
                    year: studentData.year,
                    results: admin.firestore.FieldValue.arrayUnion({
                        subject: studentData.subject,
                        score: studentData.score,
                        grade: studentData.grade,
                    }),
                });
            }
        } else {
            // Create new student
            await studentRef.set({
                name: studentData.name,
                email,
                class: studentData.class,
                year: studentData.year,
                results: [
                    {
                        subject: studentData.subject,
                        score: studentData.score,
                        grade: studentData.grade,
                    },
                ],
            });
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