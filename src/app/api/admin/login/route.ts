import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required" },
                { status: 400 }
            );
        }

        if (
            email === process.env.ADMIN_EMAIL &&
            password === process.env.ADMIN_PASSWORD
        ) {
            // Return admin object so frontend can store it
            return NextResponse.json({
                admin: {
                    email,
                    role: "admin",
                },
                message: "Admin login successful",
            });
        }

        return NextResponse.json(
            { error: "Invalid credentials" },
            { status: 401 }
        );
    } catch (error) {
        console.error("❌ Admin login error:", error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}
