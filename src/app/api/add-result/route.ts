import { NextResponse } from "next/server";
import admin from "firebase-admin";
import { db } from "@/lib/firebaseAdmin";

interface ResultRow {
    studentId: string;
    email: string;
    firstName: string;
    lastName: string;
    className: string;
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

export async function POST(req: Request) {
    try {
        const { results, adminId } = (await req.json()) as RequestBody;

        if (!results || results.length === 0) {
            return NextResponse.json({ error: "No results to upload" }, { status: 400 });
        }

        for (const r of results) {
            const studentRef = db.collection("students").doc(r.studentId);
            const studentDoc = await studentRef.get();

            // Create student if it doesn't exist
            if (!studentDoc.exists) {
                await studentRef.set({
                    email: r.email,
                    firstName: r.firstName,
                    lastName: r.lastName,
                    class: r.className,
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

        return NextResponse.json({ message: "Results and students uploaded successfully" });
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(err.message);
            return NextResponse.json({ error: err.message }, { status: 500 });
        }
        console.error(err);
        return NextResponse.json({ error: "Failed to upload results" }, { status: 500 });
    }
}

// } catch (err) {
//   console.error(err);
//   return NextResponse.json({ error: "Failed to upload results" }, { status: 500 });
// }
