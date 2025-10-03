import { db } from "@/lib/firebaseAdmin";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: Promise<{ studentId: string }> }
) {
    try {
        // Await params in Next.js 15
        const { studentId } = await params;

        const snapshot = await db
            .collection("students")
            .where("studentId", "==", studentId.trim())
            .get();

        if (snapshot.empty) {
            return NextResponse.json({ error: "Student not found" }, { status: 404 });
        }

        // Return the first matching student
        const studentData = snapshot.docs[0].data();
        return NextResponse.json(studentData);

    } catch (err: unknown) {
        // Narrow error type safely
        const message = err instanceof Error ? err.message : "Unknown error";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}