import { NextResponse } from "next/server";
import admin from "firebase-admin";
import { db } from "@/lib/firebaseAdmin";

interface ResultRow {
    studentId?: string;  // optional now
    email: string;
    firstName: string;
    lastName: string;
    className: string;
    year: string;
    subject: string;
    firstTest: number;
    exam: number;
    total: number;
    grade: string;
    remarks: string;
}

interface RequestBody {
    results: ResultRow[];
    adminId: string;
}

// Helper to generate a unique studentId
function generateStudentId(className: string, year: string): string {
    const randomNum = Math.floor(1000 + Math.random() * 9000); // 4-digit random number
    return `${className}-${year}-${randomNum}`; // e.g., SS2-2025-4821
}

export async function POST(req: Request) {
    try {
        const { results, adminId } = (await req.json()) as RequestBody;

        if (!results || results.length === 0) {
            return NextResponse.json({ error: "No results to upload" }, { status: 400 });
        }

        for (const r of results) {
            // Generate studentId if missing
            const studentId = r.studentId || generateStudentId(r.className, r.year);

            const studentRef = db.collection("students").doc(studentId);
            const studentDoc = await studentRef.get();

            if (!studentDoc.exists) {
                await studentRef.set({
                    email: r.email,
                    firstName: r.firstName,
                    lastName: r.lastName,
                    class: r.className,
                    year: r.year,
                    createdBy: adminId,
                    createdAt: admin.firestore.FieldValue.serverTimestamp(),
                });
            }

            // Save the result in subcollection
            const resultRef = studentRef.collection("results").doc(r.subject);
            await resultRef.set({
                firstTest: r.firstTest,
                exam: r.exam,
                total: r.total,
                grade: r.grade,
                remarks: r.remarks,
                createdBy: adminId,
                createdAt: admin.firestore.FieldValue.serverTimestamp(),
            });
        }

        return NextResponse.json({ message: "Results uploaded successfully" });
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(err.message);
            return NextResponse.json({ error: err.message }, { status: 500 });
        }
        console.error(err);
        return NextResponse.json({ error: "Failed to upload results" }, { status: 500 });
    }
}