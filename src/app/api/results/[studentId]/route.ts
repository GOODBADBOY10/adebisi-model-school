// import { db } from "@/lib/firebaseAdmin";
// import { NextResponse } from "next/server";

// export async function GET(
//     req: Request,
//     { params }: { params: { studentId: string } }
// ) {
//     try {
//         const studentId = params.studentId;

//         const snapshot = await db
//             .collection("students")
//             .where("studentId", "==", studentId.trim())
//             .get();

//         if (snapshot.empty) {
//             return NextResponse.json({ error: "Student not found" }, { status: 404 });
//         }

//         // Return the first matching student
//         const studentData = snapshot.docs[0].data();
//         return NextResponse.json(studentData);

//     } catch (err: unknown) {
//         // Narrow error type safely
//         const message = err instanceof Error ? err.message : "Unknown error";
//         return NextResponse.json({ error: message }, { status: 500 });
//     }
// }


import { db } from "@/lib/firebaseAdmin";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    context: { params: { studentId: string } }
) {
    const { studentId } = context.params;

    try {
        const snapshot = await db
            .collection("students")
            .where("studentId", "==", studentId.trim())
            .get();

        if (snapshot.empty) {
            return NextResponse.json({ error: "Student not found" }, { status: 404 });
        }

        const studentData = snapshot.docs[0].data();
        return NextResponse.json(studentData);
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Unknown error";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}