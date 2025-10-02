"use client";

import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import {
    Menu, X, LayoutDashboard, Upload, BarChart3, Users,
    Settings, FileText, GraduationCap, Calendar,
    LogOut, ChevronDown, Search, Plus, Eye, Edit, Trash2,
    TrendingUp, TrendingDown, Download
} from 'lucide-react';
import TeachersPage from '../teachersPage/page';
import ReportsPage from '../reportsPage/page';
import SettingsPage from '../settingsPage/page';
import AnalyticsPage from '../analyticsPage/page';
import StudentsPage from '../studentsPage/page';
import { ActiveSection, analyticsData, MenuItem, recentResults, sampleStudents } from '@/lib/utils/dummyData';
import UploadResult from '../uploadResult/page';
import DashboardPages from '../dashboardPage/DashboardPages';

export default function AdminDashboard(): React.ReactNode {
    const [activeSection, setActiveSection] = useState<ActiveSection>('dashboard');
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedTerm, setSelectedTerm] = useState<string>('firstTerm');
    const [selectedSession, setSelectedSession] = useState<string>('2024/2025');

    const menuItems: MenuItem[] = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'upload-results', label: 'Upload Results', icon: Upload },
        { id: 'analytics', label: 'Analytics', icon: BarChart3 },
        { id: 'students', label: 'Manage Students', icon: Users },
        { id: 'teachers', label: 'Manage Teachers', icon: GraduationCap },
        { id: 'reports', label: 'Reports', icon: FileText },
        { id: 'settings', label: 'Settings', icon: Settings }
    ];

    const handleMenuClick = (sectionId: string): void => {
        setActiveSection(sectionId as ActiveSection);
        setSidebarOpen(false);
    };

    const router = useRouter();

    const handleLogout = () => {
        // localStorage.removeItem("student");
        localStorage.removeItem("admin");
        // router.push("/login"); // redirect back to login
        router.push("/"); // redirect back to login
    };

    const getStatusColor = (status: string): string => {
        return status === 'active' ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100';
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

    const filteredStudents = sampleStudents.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.class.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        const admin = localStorage.getItem("admin");
        // const student = localStorage.getItem("student");
        if (!admin) {
            router.push("/login");
        }
    }, []);

    const renderContent = (): React.ReactNode => {
        switch (activeSection) {
            case 'dashboard':
                return (
                    <DashboardPages handleMenuClick={handleMenuClick} />
                );

            case 'upload-results':
                return (
                    <UploadResult
                        selectedSession={selectedSession}
                        setSelectedSession={setSelectedSession}
                        selectedTerm={selectedTerm}
                        setSelectedTerm={setSelectedTerm}
                    />
                );

            case 'analytics':
                return (
                    <AnalyticsPage />
                );

            case 'students':
                return (
                    <StudentsPage
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm} />
                );

            case 'teachers':
                return (
                    <TeachersPage />
                );

            case 'reports':
                return (
                    <ReportsPage />
                );

            case 'settings':
                return (
                    <SettingsPage />
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
                            <h2 className="text-xl font-bold text-gray-800">Admin Portal</h2>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="lg:hidden text-gray-600 hover:text-gray-800"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Administrator Panel</p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                        {menuItems.map((item: MenuItem) => {
                            const Icon = item.icon;
                            const isActive: boolean = activeSection === item.id;

                            return (
                                <button
                                    key={item.id}
                                    onClick={() => handleMenuClick(item.id)}
                                    className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors
                    ${isActive
                                            ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500'
                                            : 'text-gray-700 hover:bg-gray-100'
                                        }
                  `}
                                >
                                    <Icon size={20} />
                                    <span className="font-medium">{item.label}</span>
                                </button>
                            );
                        })}
                    </nav>

                    {/* Logout */}
                    <div className="p-4 border-t">
                        <button
                            onClick={handleLogout}
                            className="w-full cursor-pointer flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
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
                    <h1 className="text-lg font-semibold text-gray-800">Admin Dashboard</h1>
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