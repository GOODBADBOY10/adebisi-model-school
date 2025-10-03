"use client";

import { useState, useEffect } from "react";
import { Menu, X, User, CreditCard, BookOpen, FileText, LogOut, ChevronDown, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import StudentRegistrationPage from "./student-registration/StudentRegistrationPage";
import StudentPaymentPage from "./studentPaymentPage/StudentPaymentPage";
import StudentDashboardPage from "./student-dashboard-page/StudentDashboardPage";
import StudentResultPage from "./student-result-page/StudentResultPage";
import { MenuItem, Result, Results, StudentData } from "@/lib/utils/dummyData";


type ActiveSection = "dashboard" | "payment" | "registration" | "results";
type TermKey = keyof Results;

export default function StudentDashboard(): React.ReactNode {
    const [activeSection, setActiveSection] = useState<ActiveSection>("dashboard");
    const [selectedTerm, setSelectedTerm] = useState<TermKey | null>(null);
    const [showResults, setShowResults] = useState<boolean>(false);
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [results, setResults] = useState<Results>({
        firstTerm: [],
        secondTerm: [],
        thirdTerm: [],
    });


    const [studentData, setStudentData] = useState<StudentData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const menuItems: MenuItem[] = [
        { id: "dashboard", label: "Dashboard", icon: User },
        { id: "payment", label: "Payment of School Fees", icon: CreditCard },
        { id: "registration", label: "Course Registration", icon: BookOpen },
        { id: "results", label: "Check Results", icon: FileText, hasSubmenu: true },
    ];

    // Add this helper function inside the component file
    function groupResultsByTerm(rawResults: Result[]): Results {
        return {
            firstTerm: rawResults.filter(r => r.term === 'firstTerm'),
            secondTerm: rawResults.filter(r => r.term === 'secondTerm'),
            thirdTerm: rawResults.filter(r => r.term === 'thirdTerm'),
        };
    }



    const termLabels: Record<TermKey, string> = {
        firstTerm: "First Term",
        secondTerm: "Second Term",
        thirdTerm: "Third Term",
    };

    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("student");
        router.push("/"); // redirect back to login
    };

    const handleMenuClick = (sectionId: string): void => {
        if (sectionId === "results") {
            setShowResults(!showResults);
            setActiveSection("results");
        } else {
            setActiveSection(sectionId as ActiveSection);
            setShowResults(false);
            setSelectedTerm(null);
        }
        setSidebarOpen(false);
    };

    const handleTermClick = (term: TermKey): void => {
        setSelectedTerm(term);
        setActiveSection("results");
        setSidebarOpen(false);
    };

    // 🔹 Fetch student data from API
    // 🔹 Fetch student data from API
    useEffect(() => {
        const studentStr = localStorage.getItem("student");
        if (!studentStr) {
            router.push("/login");
            return;
        }

        const student = JSON.parse(studentStr);
        const { studentId } = student;

        if (!studentId) {
            console.error("Student ID missing in localStorage!");
            setError("Student ID not found. Please login again.");
            return;
        }

        async function fetchStudentData() {
            try {
                setLoading(true);
                const res = await fetch(`/api/results/${studentId}`);
                if (!res.ok) {
                    throw new Error(`Failed to fetch student data (${res.status})`);
                }
                const data = await res.json();
                setStudentData(data);

                // ✅ Group results by term
                const groupedResults = groupResultsByTerm(data.results || []);
                setResults(groupedResults);
            } catch (err: unknown) {
                const message = err instanceof Error ? err.message : "Failed to fetch student data";
                console.error(message);
                setError(message);
            } finally {
                setLoading(false);
            }
        }

        fetchStudentData();
    }, [router]);


    const renderContent = (): React.ReactNode => {
        if (loading) {
            return <div className="p-6">Loading student data...</div>;
        }

        if (error) {
            return <div className="p-6 text-red-600">Error: {error}</div>;
        }

        if (!studentData) {
            return <div className="p-6 text-red-600">No student data found</div>;
        }

        switch (activeSection) {
            case "dashboard":
                return <StudentDashboardPage studentData={studentData} />;

            case "payment":
                return <StudentPaymentPage />;

            case "registration":
                return <StudentRegistrationPage />;

            case "results":
                return (
                    <StudentResultPage
                        results={results}
                        // results={studentData.results}
                        selectedTerm={selectedTerm}
                        setSelectedTerm={setSelectedTerm}
                    />
                );

            default:
                return <div>Select a menu item</div>;
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="p-6 border-b">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-gray-800">Student Portal</h2>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="lg:hidden text-gray-600 hover:text-gray-800"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                            Welcome, {studentData?.name ?? "Student"}
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                        {menuItems.map((item: MenuItem) => {
                            const Icon = item.icon;
                            const isActive: boolean = activeSection === item.id;

                            return (
                                <div key={item.id}>
                                    <button
                                        onClick={() => handleMenuClick(item.id)}
                                        className={`
                      w-full flex items-center justify-between px-4 py-3 rounded-lg text-left transition-colors
                      ${isActive
                                                ? "bg-blue-100 text-blue-700 border-l-4 border-blue-500"
                                                : "text-gray-700 hover:bg-gray-100"
                                            }
                    `}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <Icon size={20} />
                                            <span className="font-medium">{item.label}</span>
                                        </div>
                                        {item.hasSubmenu && (
                                            <div className="ml-2">
                                                {showResults && activeSection === "results" ? (
                                                    <ChevronDown size={16} />
                                                ) : (
                                                    <ChevronRight size={16} />
                                                )}
                                            </div>
                                        )}
                                    </button>

                                    {/* Results Submenu */}
                                    {item.id === "results" &&
                                        showResults &&
                                        activeSection === "results" && (
                                            <div className="ml-6 mt-2 space-y-1">
                                                {/* {Object.entries(termLabels).map(
                                                    ([termKey, termLabel]: [string, string]) => (
                                                        <button
                                                            key={termKey}
                                                            onClick={() =>
                                                                handleTermClick(termKey as TermKey)
                                                            }
                                                            className={`
                            w-full text-left px-4 py-2 rounded text-sm transition-colors
                            ${selectedTerm === termKey
                                                                    ? "bg-blue-50 text-blue-600 font-medium"
                                                                    : "text-gray-600 hover:bg-gray-50"
                                                                }
                          `}
                                                        >
                                                            {termLabel}
                                                        </button>
                                                    )
                                                )} */}
                                                {(Object.entries(termLabels) as [TermKey, string][]).map(
                                                    ([termKey, termLabel]) => (
                                                        <button
                                                            key={termKey}
                                                            onClick={() => handleTermClick(termKey)}
                                                            className={`
                                                                    w-full text-left px-4 py-2 rounded text-sm transition-colors
                                                                        ${selectedTerm === termKey
                                                                    ? "bg-blue-50 text-blue-600 font-medium"
                                                                    : "text-gray-600 hover:bg-gray-50"
                                                                }
                                                            `}
                                                        >
                                                            {termLabel}
                                                        </button>
                                                    )
                                                )}

                                            </div>
                                        )}
                                </div>
                            );
                        })}
                    </nav>

                    {/* Logout */}
                    <div className="p-4 border-t">
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                            <LogOut size={20} />
                            <span className="font-medium cursor-pointer">Logout</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden">
                {/* Mobile Header */}
                <header className="lg:hidden bg-white shadow-sm p-4 flex items-center justify-between">
                    <h1 className="text-lg font-semibold text-gray-800">
                        Student Dashboard
                    </h1>
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="text-gray-600 hover:text-gray-800"
                    >
                        <Menu size={24} />
                    </button>
                </header>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-6">{renderContent()}</div>
            </main>
        </div>
    );
}