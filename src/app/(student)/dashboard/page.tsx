"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Result { subject: string; score: number; grade: string; }
interface TermResults { firstTerm?: Result[]; secondTerm?: Result[]; thirdTerm?: Result[]; }
interface Student { firstName: string; email: string; class: string; year: number; results?: TermResults; }

type PageView = "dashboard" | "payment" | "results" | "course";

export default function DashboardPage() {
    const router = useRouter();
    const [student, setStudent] = useState<Student | null>(null);
    const [activePage, setActivePage] = useState<PageView>("dashboard");
    const [selectedTerm, setSelectedTerm] = useState<keyof TermResults | null>(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("student");
        if (!stored) return router.push("/login");
        setStudent(JSON.parse(stored) as Student);
    }, [router]);

    if (!student) return <p className="text-center mt-20">Loading dashboard...</p>;

    const handleLogout = () => {
        localStorage.removeItem("student");
        router.push("/login");
    };

    const handleMenuClick = (page: PageView) => {
        setActivePage(page);
        setSidebarOpen(false); // close mobile sidebar
    };

    const handleTermClick = (term: keyof TermResults) => {
        setSelectedTerm(term);
        setSidebarOpen(false); // close mobile sidebar
    };

    const renderResults = () => {
        if (!selectedTerm) return <p>Select a term to view results.</p>;
        const termResults = student.results?.[selectedTerm];
        if (!termResults || termResults.length === 0) return <p>Results not available.</p>;

        return (
            <>
                <ul className="list-disc list-inside">
                    {termResults.map((res, idx) => (
                        <li key={idx}>
                            {res.subject}: {res.score} ({res.grade})
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => window.print()}
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Print / Download
                </button>
            </>
        );
    };

    const SidebarContent = (
        <div className="flex flex-col h-full justify-between p-6 bg-gray-800 text-white w-64">
            <div className="space-y-4">
                <h2 className="text-xl font-bold mb-4">Menu</h2>
                <button className="block w-full text-left hover:bg-gray-700 p-2 rounded" onClick={() => handleMenuClick("dashboard")}>
                    Dashboard
                </button>
                <button className="block w-full text-left hover:bg-gray-700 p-2 rounded" onClick={() => handleMenuClick("payment")}>
                    Payment of Fees
                </button>
                <button className="block w-full text-left hover:bg-gray-700 p-2 rounded" onClick={() => handleMenuClick("course")}>
                    Course Registration
                </button>
                <div>
                    <button
                        className="block w-full text-left hover:bg-gray-700 p-2 rounded mb-2"
                        onClick={() => setActivePage("results")}
                    >
                        Check Results
                    </button>
                    {activePage === "results" && (
                        <div className="ml-4 space-y-1">
                            <button className="block hover:bg-gray-700 p-1 rounded w-full text-left" onClick={() => handleTermClick("firstTerm")}>
                                First Term
                            </button>
                            <button className="block hover:bg-gray-700 p-1 rounded w-full text-left" onClick={() => handleTermClick("secondTerm")}>
                                Second Term
                            </button>
                            <button className="block hover:bg-gray-700 p-1 rounded w-full text-left" onClick={() => handleTermClick("thirdTerm")}>
                                Third Term
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <button className="p-4 bg-red-600 hover:bg-red-700 w-full text-left" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );

    return (
        <div className="flex min-h-screen">
            {/* Sidebar for large screens */}
            <aside className="hidden md:flex fixed h-full">{SidebarContent}</aside>

            {/* Mobile Sidebar */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
                    <div className="absolute left-0 top-0 h-full">{SidebarContent}</div>
                    <button
                        className="absolute top-4 right-4 text-white text-2xl"
                        onClick={() => setSidebarOpen(false)}
                    >
                        &times;
                    </button>
                </div>
            )}

            {/* Main Content */}
            <main className="flex-1 md:ml-64">
                {/* Header */}
                <header className="fixed top-0 left-0 right-0 md:left-64 bg-white shadow p-4 flex justify-between z-10">
                    <h1 className="text-xl font-bold">Welcome, {student.firstName} 👋</h1>
                    <button className="md:hidden bg-gray-800 text-white px-3 py-1 rounded" onClick={() => setSidebarOpen(true)}>
                        ☰
                    </button>
                </header>

                {/* Content */}
                <div className="pt-20 p-6">
                    {activePage === "dashboard" && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
                            <p>Email: {student.email}</p>
                            <p>Class: {student.class}</p>
                            <p>Year: {student.year}</p>
                        </div>
                    )}

                    {activePage === "payment" && <p>Payment of Fees page content...</p>}
                    {activePage === "course" && <p>Course Registration page content...</p>}
                    {activePage === "results" && (
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Results</h2>
                            {renderResults()}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}