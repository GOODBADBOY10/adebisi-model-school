"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Result {
    subject: string;
    score: number;
    grade: string;
}

interface TermResults {
    firstTerm?: Result[];
    secondTerm?: Result[];
}

interface Student {
    firstName: string;
    email: string;
    class: string;
    year: number;
    results?: TermResults;
}

export default function DashboardPage() {
    const router = useRouter();
    const [student, setStudent] = useState<Student | null>(null);

    useEffect(() => {
        const stored = localStorage.getItem("student");
        if (!stored) {
            router.push("/login");
            return;
        }
        setStudent(JSON.parse(stored) as Student);
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
                        {student.results.firstTerm.map((res: Result, idx: number) => (
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