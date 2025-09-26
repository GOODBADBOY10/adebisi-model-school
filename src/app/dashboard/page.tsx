"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const router = useRouter();
    const [student, setStudent] = useState<any>(null);

    useEffect(() => {
        const stored = localStorage.getItem("student");
        if (!stored) {
            // if no student, redirect back to login
            router.push("/login");
            return;
        }
        setStudent(JSON.parse(stored));
    }, [router]);

    if (!student) {
        return <p className="text-center mt-20">Loading dashboard...</p>;
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-4">
                Welcome, {student.firstName} 👋
            </h1>

            <div className="bg-white p-4 rounded-md shadow-md">
                <p><strong>Email:</strong> {student.email}</p>
                <p><strong>Class:</strong> {student.class}</p>
                <p><strong>Year:</strong> {student.year}</p>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Your Results</h2>
                {student.results?.firstTerm?.length ? (
                    <ul className="list-disc list-inside">
                        {student.results.firstTerm.map((res: any, idx: number) => (
                            <li key={idx}>
                                {res.subject}: {res.score} ({res.grade})
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No results found yet.</p>
                )}
            </div>
        </div>
    );
}
