import type { NextApiRequest, NextApiResponse } from "next";
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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    const { results, adminId } = req.body as RequestBody;

    if (!results || results.length === 0) {
        return res.status(400).json({ error: "No results to upload" });
    }

    try {
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

        res.status(200).json({ message: "Results and students uploaded successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to upload results" });
    }
}
