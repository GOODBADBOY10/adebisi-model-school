"use client";

import { useState, useEffect } from 'react';
import { Menu, X, User, CreditCard, BookOpen, FileText, LogOut, ChevronDown, ChevronRight, Download } from 'lucide-react';
import { useRouter } from "next/navigation";
import StudentRegistrationPage from './student-registration/StudentRegistrationPage';
import StudentPaymentPage from './studentPaymentPage/StudentPaymentPage';

// TypeScript interfaces
interface Result {
    subject: string;
    score: number;
    grade: string;
}

interface Results {
    firstTerm: Result[];
    secondTerm: Result[];
    thirdTerm: Result[];
}

interface StudentData {
    name: string;
    email: string;
    studentId: string;
    class: string;
    department: string;
    results: Results;
}

interface MenuItem {
    id: string;
    label: string;
    icon: React.ComponentType<{ size: number }>;
    hasSubmenu?: boolean;
}

type ActiveSection = 'dashboard' | 'payment' | 'registration' | 'results';
type TermKey = keyof Results;

// Sample student data
const studentData: StudentData = {
    name: "John Doe",
    email: "john.doe@school.edu",
    studentId: "STU2024001",
    class: "Grade 12",
    department: "Science",
    results: {
        firstTerm: [
            { subject: "Mathematics", score: 85, grade: "A" },
            { subject: "Physics", score: 78, grade: "B+" },
            { subject: "Chemistry", score: 92, grade: "A+" },
            { subject: "Biology", score: 80, grade: "B+" },
            { subject: "English", score: 88, grade: "A" }
        ],
        secondTerm: [
            { subject: "Mathematics", score: 90, grade: "A+" },
            { subject: "Physics", score: 82, grade: "A-" },
            { subject: "Chemistry", score: 88, grade: "A" },
            { subject: "Biology", score: 85, grade: "A" },
            { subject: "English", score: 86, grade: "A" }
        ],
        thirdTerm: [
            { subject: "Mathematics", score: 87, grade: "A" },
            { subject: "Physics", score: 89, grade: "A" },
            { subject: "Chemistry", score: 94, grade: "A+" },
            { subject: "Biology", score: 83, grade: "A-" },
            { subject: "English", score: 91, grade: "A+" }
        ]
    }
};

export default function StudentDashboard(): React.ReactNode {
    const [activeSection, setActiveSection] = useState<ActiveSection>('dashboard');
    const [selectedTerm, setSelectedTerm] = useState<TermKey | null>(null);
    const [showResults, setShowResults] = useState<boolean>(false);
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    const menuItems: MenuItem[] = [
        { id: 'dashboard', label: 'Dashboard', icon: User },
        { id: 'payment', label: 'Payment of School Fees', icon: CreditCard },
        { id: 'registration', label: 'Course Registration', icon: BookOpen },
        { id: 'results', label: 'Check Results', icon: FileText, hasSubmenu: true }
    ];

    const termLabels: Record<TermKey, string> = {
        firstTerm: 'First Term',
        secondTerm: 'Second Term',
        thirdTerm: 'Third Term'
    };

    const router = useRouter();

    const handleLogout = () => {
        // localStorage.removeItem("student");
        // localStorage.removeItem("admin");
        localStorage.removeItem("student"); // clear student data
        // router.push("/login"); // redirect back to login
        router.push("/"); // redirect back to login
    };

    const handleMenuClick = (sectionId: string): void => {
        if (sectionId === 'results') {
            setShowResults(!showResults);
            setActiveSection('results');
        } else {
            setActiveSection(sectionId as ActiveSection);
            setShowResults(false);
            setSelectedTerm(null);
        }
        // Close mobile sidebar when menu item is clicked
        setSidebarOpen(false);
    };

    const handleTermClick = (term: TermKey): void => {
        setSelectedTerm(term);
        setActiveSection('results');
        setSidebarOpen(false);
    };

    const calculateAverage = (results: Result[]): number => {
        if (!results || results.length === 0) return 0;
        const total = results.reduce((sum, result) => sum + result.score, 0);
        return Math.round(total / results.length);
    };

    const getGradeColor = (grade: string): string => {
        const colors: Record<string, string> = {
            'A+': 'text-green-600',
            'A': 'text-green-500',
            'A-': 'text-green-400',
            'B+': 'text-blue-500',
            'B': 'text-blue-400',
            'B-': 'text-yellow-500',
            'C+': 'text-orange-500',
            'C': 'text-orange-400',
            'D': 'text-red-400',
            'F': 'text-red-600'
        };
        return colors[grade] || 'text-gray-500';
    };

    useEffect(() => {
        const student = localStorage.getItem("student");
        if (!student) {
            router.push("/login");
        }
    }, []);

    // const renderContent = (): JSX.Element => {
    const renderContent = (): React.ReactNode => {
        switch (activeSection) {
            case 'dashboard':
                return (
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Student Information</h3>
                                <div className="space-y-2 text-sm">
                                    <p><span className="font-medium">Name:</span> {studentData.name}</p>
                                    <p><span className="font-medium">Email:</span> {studentData.email}</p>
                                    <p><span className="font-medium">Student ID:</span> {studentData.studentId}</p>
                                    <p><span className="font-medium">Class:</span> {studentData.class}</p>
                                    <p><span className="font-medium">Department:</span> {studentData.department}</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Academic Overview</h3>
                                <div className="space-y-2 text-sm">
                                    <p><span className="font-medium">Current Session:</span> 2024/2025</p>
                                    <p><span className="font-medium">Semester:</span> Second</p>
                                    <p><span className="font-medium">Total Subjects:</span> 5</p>
                                    <p><span className="font-medium">Status:</span> <span className="text-green-600 font-medium">Active</span></p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Quick Actions</h3>
                                <div className="space-y-2">
                                    <button
                                        onClick={() => handleMenuClick('payment')}
                                        className="w-full text-left p-2 text-sm text-blue-600 hover:bg-blue-50 rounded"
                                    >
                                        Pay School Fees
                                    </button>
                                    <button
                                        onClick={() => handleMenuClick('registration')}
                                        className="w-full text-left p-2 text-sm text-blue-600 hover:bg-blue-50 rounded"
                                    >
                                        Register Courses
                                    </button>
                                    <button
                                        onClick={() => handleMenuClick('results')}
                                        className="w-full text-left p-2 text-sm text-blue-600 hover:bg-blue-50 rounded"
                                    >
                                        View Results
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'payment':
                return (
                    <StudentPaymentPage />
                );

            case 'registration':
                return (
                    <StudentRegistrationPage />
                );

            case 'results':
                return (
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-gray-900">Academic Results</h1>
                        {selectedTerm ? (
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-semibold text-gray-700">
                                        {termLabels[selectedTerm]} Results
                                    </h3>
                                    <button
                                        onClick={() => window.print()}
                                        className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                    >
                                        <Download size={16} />
                                        <span>Download</span>
                                    </button>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full table-auto">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="px-4 py-3 text-left font-semibold">Subject</th>
                                                <th className="px-4 py-3 text-center font-semibold">Score</th>
                                                <th className="px-4 py-3 text-center font-semibold">Grade</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {studentData.results[selectedTerm].map((result: Result, index: number) => (
                                                <tr key={index} className="border-b hover:bg-gray-50">
                                                    <td className="px-4 py-3">{result.subject}</td>
                                                    <td className="px-4 py-3 text-center font-medium">{result.score}</td>
                                                    <td className={`px-4 py-3 text-center font-bold ${getGradeColor(result.grade)}`}>
                                                        {result.grade}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="mt-6 p-4 bg-gray-50 rounded">
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-gray-700">Term Average:</span>
                                        <span className="text-xl font-bold text-blue-600">
                                            {calculateAverage(studentData.results[selectedTerm])}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-700 mb-4">Select a Term to View Results</h3>
                                <p className="text-gray-600">
                                    Please select a term from the sidebar to view your academic results.
                                </p>
                            </div>
                        )}
                    </div>
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
            <aside className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
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
                        <p className="text-sm text-gray-600 mt-1">Welcome, {studentData.name}</p>
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
                                                ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500'
                                                : 'text-gray-700 hover:bg-gray-100'
                                            }
                    `}
                                    >
                                        <div className="flex items-center space-x-3">
                                            <Icon size={20} />
                                            <span className="font-medium">{item.label}</span>
                                        </div>
                                        {item.hasSubmenu && (
                                            <div className="ml-2">
                                                {showResults && activeSection === 'results' ?
                                                    <ChevronDown size={16} /> :
                                                    <ChevronRight size={16} />
                                                }
                                            </div>
                                        )}
                                    </button>

                                    {/* Results Submenu */}
                                    {item.id === 'results' && showResults && activeSection === 'results' && (
                                        <div className="ml-6 mt-2 space-y-1">
                                            {Object.entries(termLabels).map(([termKey, termLabel]: [string, string]) => (
                                                <button
                                                    key={termKey}
                                                    onClick={() => handleTermClick(termKey as TermKey)}
                                                    className={`
                            w-full text-left px-4 py-2 rounded text-sm transition-colors
                            ${selectedTerm === termKey
                                                            ? 'bg-blue-50 text-blue-600 font-medium'
                                                            : 'text-gray-600 hover:bg-gray-50'
                                                        }
                          `}
                                                >
                                                    {termLabel}
                                                </button>
                                            ))}
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
                            className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
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
                    <h1 className="text-lg font-semibold text-gray-800">Student Dashboard</h1>
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="text-gray-600 hover:text-gray-800"
                    >
                        <Menu size={24} />
                    </button>
                </header>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-6">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
}
