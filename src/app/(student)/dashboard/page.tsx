// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// interface Result { subject: string; score: number; grade: string; }
// interface TermResults { firstTerm?: Result[]; secondTerm?: Result[]; thirdTerm?: Result[]; }
// interface Student { firstName: string; email: string; class: string; year: number; results?: TermResults; }

// type PageView = "dashboard" | "payment" | "results" | "course";

// export default function DashboardPage() {
//     const router = useRouter();
//     const [student, setStudent] = useState<Student | null>(null);
//     const [activePage, setActivePage] = useState<PageView>("dashboard");
//     const [selectedTerm, setSelectedTerm] = useState<keyof TermResults | null>(null);
//     const [sidebarOpen, setSidebarOpen] = useState(false);

//     useEffect(() => {
//         const stored = localStorage.getItem("student");
//         if (!stored) return router.push("/login");
//         setStudent(JSON.parse(stored) as Student);
//     }, [router]);

//     if (!student) return <p className="text-center mt-20">Loading dashboard...</p>;

//     const handleLogout = () => {
//         localStorage.removeItem("student");
//         router.push("/login");
//     };

//     const handleMenuClick = (page: PageView) => {
//         setActivePage(page);
//         setSidebarOpen(false); // close mobile sidebar
//     };

//     const handleTermClick = (term: keyof TermResults) => {
//         setSelectedTerm(term);
//         setSidebarOpen(false); // close mobile sidebar
//     };

//     const renderResults = () => {
//         if (!selectedTerm) return <p>Select a term to view results.</p>;
//         const termResults = student.results?.[selectedTerm];
//         if (!termResults || termResults.length === 0) return <p>Results not available.</p>;

//         return (
//             <>
//                 <ul className="list-disc list-inside">
//                     {termResults.map((res, idx) => (
//                         <li key={idx}>
//                             {res.subject}: {res.score} ({res.grade})
//                         </li>
//                     ))}
//                 </ul>
//                 <button
//                     onClick={() => window.print()}
//                     className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//                 >
//                     Print / Download
//                 </button>
//             </>
//         );
//     };

//     const SidebarContent = (
//         <div className="flex flex-col h-full justify-between p-6 bg-gray-800 text-white w-64">
//             <div className="space-y-4">
//                 <h2 className="text-xl font-bold mb-4">Menu</h2>
//                 <button className="block w-full text-left hover:bg-gray-700 p-2 rounded" onClick={() => handleMenuClick("dashboard")}>
//                     Dashboard
//                 </button>
//                 <button className="block w-full text-left hover:bg-gray-700 p-2 rounded" onClick={() => handleMenuClick("payment")}>
//                     Payment of Fees
//                 </button>
//                 <button className="block w-full text-left hover:bg-gray-700 p-2 rounded" onClick={() => handleMenuClick("course")}>
//                     Course Registration
//                 </button>
//                 <div>
//                     <button
//                         className="block w-full text-left hover:bg-gray-700 p-2 rounded mb-2"
//                         onClick={() => setActivePage("results")}
//                     >
//                         Check Results
//                     </button>
//                     {activePage === "results" && (
//                         <div className="ml-4 space-y-1">
//                             <button className="block hover:bg-gray-700 p-1 rounded w-full text-left" onClick={() => handleTermClick("firstTerm")}>
//                                 First Term
//                             </button>
//                             <button className="block hover:bg-gray-700 p-1 rounded w-full text-left" onClick={() => handleTermClick("secondTerm")}>
//                                 Second Term
//                             </button>
//                             <button className="block hover:bg-gray-700 p-1 rounded w-full text-left" onClick={() => handleTermClick("thirdTerm")}>
//                                 Third Term
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             <button className="p-4 bg-red-600 hover:bg-red-700 w-full text-left" onClick={handleLogout}>
//                 Logout
//             </button>
//         </div>
//     );

//     return (
//         <div className="flex min-h-screen">
//             {/* Sidebar for large screens */}
//             <aside className="hidden md:flex fixed h-full">{SidebarContent}</aside>

//             {/* Mobile Sidebar */}
//             {sidebarOpen && (
//                 <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
//                     <div className="absolute left-0 top-0 h-full">{SidebarContent}</div>
//                     <button
//                         className="absolute top-4 right-4 text-white text-2xl"
//                         onClick={() => setSidebarOpen(false)}
//                     >
//                         &times;
//                     </button>
//                 </div>
//             )}

//             {/* Main Content */}
//             <main className="flex-1 md:ml-64">
//                 {/* Header */}
//                 <header className="fixed top-0 left-0 right-0 md:left-64 bg-white shadow p-4 flex justify-between z-10">
//                     <h1 className="text-xl font-bold">Welcome, {student.firstName} 👋</h1>
//                     <button className="md:hidden bg-gray-800 text-white px-3 py-1 rounded" onClick={() => setSidebarOpen(true)}>
//                         ☰
//                     </button>
//                 </header>

//                 {/* Content */}
//                 <div className="pt-20 p-6">
//                     {activePage === "dashboard" && (
//                         <div>
//                             <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
//                             <p>Email: {student.email}</p>
//                             <p>Class: {student.class}</p>
//                             <p>Year: {student.year}</p>
//                         </div>
//                     )}

//                     {activePage === "payment" && <p>Payment of Fees page content...</p>}
//                     {activePage === "course" && <p>Course Registration page content...</p>}
//                     {activePage === "results" && (
//                         <div>
//                             <h2 className="text-2xl font-bold mb-4">Results</h2>
//                             {renderResults()}
//                         </div>
//                     )}
//                 </div>
//             </main>
//         </div>
//     );
// }

"use client";

import { useState } from 'react';
import { Menu, X, User, CreditCard, BookOpen, FileText, LogOut, ChevronDown, ChevronRight, Download } from 'lucide-react';

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

export default function StudentDashboard():  React.ReactNode {
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

    // const renderContent = (): JSX.Element => {
    const renderContent = ():  React.ReactNode => {
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
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-gray-900">Payment of School Fees</h1>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-700 mb-4">Fee Structure - 2024/2025 Session</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                                    <span>Tuition Fee</span>
                                    <span className="font-semibold">$2,500.00</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                                    <span>Development Levy</span>
                                    <span className="font-semibold">$300.00</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                                    <span>Library Fee</span>
                                    <span className="font-semibold">$50.00</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-green-100 rounded border-t-2 border-green-500">
                                    <span className="font-bold">Total Amount</span>
                                    <span className="font-bold text-green-600">$2,850.00</span>
                                </div>
                                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                                    Proceed to Payment
                                </button>
                            </div>
                        </div>
                    </div>
                );

            case 'registration':
                return (
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-gray-900">Course Registration</h1>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-700 mb-4">Available Courses - Second Semester</h3>
                            <div className="space-y-3">
                                {['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English Language'].map((course: string, index: number) => (
                                    <div key={index} className="flex items-center justify-between p-3 border rounded">
                                        <div>
                                            <span className="font-medium">{course}</span>
                                            <span className="ml-2 text-sm text-gray-500">(Core Subject)</span>
                                        </div>
                                        <button className="bg-green-600 text-white px-4 py-1 rounded text-sm hover:bg-green-700">
                                            Registered
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 p-4 bg-blue-50 rounded">
                                <p className="text-blue-800 text-sm">
                                    <strong>Note:</strong> All courses for this semester have been successfully registered.
                                    If you need to make changes, please contact the academic office.
                                </p>
                            </div>
                        </div>
                    </div>
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
                        <button className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <LogOut size={20} />
                            <span className="font-medium">Logout</span>
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
