import { NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";

export async function POST(req: Request) {
    try {
        const { email, firstName, year, class: studentClass } = await req.json();

        // Basic validation
        if (![email, firstName, year, studentClass].every(Boolean)) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Firestore query
        let snapshot;
        try {
            snapshot = await db
                .collection("students")
                .where("email", "==", email.trim().toLowerCase())
                .where("firstName", "==", firstName.trim())
                .where("year", "==", year)
                .where("class", "==", studentClass)
                .limit(1)
                .get();
        } catch (firestoreError) {
            console.error("❌ Firestore query failed:", firestoreError);
            return NextResponse.json(
                { error: "Database error" },
                { status: 500 }
            );
        }

        if (snapshot.empty) {
            return NextResponse.json(
                { error: "No matching student found" },
                { status: 404 }
            );
        }

        // Student found
        const student = snapshot.docs[0].data();

        return NextResponse.json({
            message: "Login successful",
            student,
        });
    } catch (error: unknown) {
        console.error("❌ Login API error:", error);

        // Narrow the error type
        const message =
            error instanceof Error ? error.message : "Internal server error";

        return NextResponse.json(
            { error: message },
            { status: 500 }
        );
    }
}
