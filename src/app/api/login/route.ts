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
        const snapshot = await db
            .collection("students")
            .where("email", "==", email.trim().toLowerCase())
            .where("firstName", "==", firstName.trim())
            .where("year", "==", year)
            .where("class", "==", studentClass)
            .limit(1)
            .get();

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
    } catch (error: any) {
        console.error("❌ Login API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}