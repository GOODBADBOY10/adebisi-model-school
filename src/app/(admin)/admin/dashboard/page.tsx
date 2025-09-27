"use client";

import { useState } from 'react';
import {
    Menu, X, LayoutDashboard, Upload, BarChart3, Users,
    Settings, FileText, GraduationCap, Calendar,
    LogOut, ChevronDown, Search, Plus, Eye, Edit, Trash2,
    TrendingUp, TrendingDown, Download
} from 'lucide-react';

// TypeScript interfaces
interface Student {
    id: string;
    name: string;
    email: string;
    class: string;
    department: string;
    status: 'active' | 'inactive';
}

interface Result {
    studentId: string;
    studentName: string;
    subject: string;
    score: number;
    grade: string;
    term: 'firstTerm' | 'secondTerm' | 'thirdTerm';
    session: string;
}

interface AnalyticsData {
    totalStudents: number;
    totalTeachers: number;
    averageScore: number;
    passRate: number;
    recentUploads: number;
    pendingApprovals: number;
}

interface MenuItem {
    id: string;
    label: string;
    icon: React.ComponentType<{ size: number }>;
    hasSubmenu?: boolean;
}

type ActiveSection = 'dashboard' | 'upload-results' | 'analytics' | 'students' | 'teachers' | 'settings' | 'reports';

// Sample data
const sampleStudents: Student[] = [
    { id: '1', name: 'John Doe', email: 'john@school.edu', class: 'Grade 12', department: 'Science', status: 'active' },
    { id: '2', name: 'Jane Smith', email: 'jane@school.edu', class: 'Grade 11', department: 'Arts', status: 'active' },
    { id: '3', name: 'Mike Johnson', email: 'mike@school.edu', class: 'Grade 10', department: 'Science', status: 'inactive' },
    { id: '4', name: 'Sarah Wilson', email: 'sarah@school.edu', class: 'Grade 12', department: 'Commercial', status: 'active' },
];

const analyticsData: AnalyticsData = {
    totalStudents: 1234,
    totalTeachers: 89,
    averageScore: 78.5,
    passRate: 92.3,
    recentUploads: 45,
    pendingApprovals: 12
};

const recentResults: Result[] = [
    { studentId: '1', studentName: 'John Doe', subject: 'Mathematics', score: 85, grade: 'A', term: 'firstTerm', session: '2024/2025' },
    { studentId: '2', studentName: 'Jane Smith', subject: 'English', score: 92, grade: 'A+', term: 'firstTerm', session: '2024/2025' },
    { studentId: '3', studentName: 'Mike Johnson', subject: 'Physics', score: 76, grade: 'B+', term: 'firstTerm', session: '2024/2025' },
];

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

    const renderContent = (): React.ReactNode => {
        switch (activeSection) {
            case 'dashboard':
                return (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                            <div className="text-sm text-gray-600">
                                Welcome back, Administrator
                            </div>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Total Students</p>
                                        <p className="text-2xl font-bold text-blue-600">{analyticsData.totalStudents}</p>
                                    </div>
                                    <Users className="h-8 w-8 text-blue-600" />
                                </div>
                                <div className="mt-2 flex items-center text-sm">
                                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                                    <span className="text-green-500">+12% from last month</span>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Total Teachers</p>
                                        <p className="text-2xl font-bold text-green-600">{analyticsData.totalTeachers}</p>
                                    </div>
                                    <GraduationCap className="h-8 w-8 text-green-600" />
                                </div>
                                <div className="mt-2 flex items-center text-sm">
                                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                                    <span className="text-green-500">+3% from last month</span>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Average Score</p>
                                        <p className="text-2xl font-bold text-purple-600">{analyticsData.averageScore}%</p>
                                    </div>
                                    <BarChart3 className="h-8 w-8 text-purple-600" />
                                </div>
                                <div className="mt-2 flex items-center text-sm">
                                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                                    <span className="text-green-500">+5.2% from last term</span>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">Pass Rate</p>
                                        <p className="text-2xl font-bold text-orange-600">{analyticsData.passRate}%</p>
                                    </div>
                                    <TrendingUp className="h-8 w-8 text-orange-600" />
                                </div>
                                <div className="mt-2 flex items-center text-sm">
                                    <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                                    <span className="text-red-500">-2.1% from last term</span>
                                </div>
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Result Uploads</h3>
                                <div className="space-y-3">
                                    {recentResults.map((result, index) => (
                                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                                            <div>
                                                <p className="font-medium text-sm">{result.studentName}</p>
                                                <p className="text-xs text-gray-600">{result.subject} - {result.term}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold text-sm">{result.score}</p>
                                                <p className={`text-xs font-medium ${getGradeColor(result.grade)}`}>{result.grade}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-700 mb-4">Quick Actions</h3>
                                <div className="space-y-3">
                                    <button
                                        onClick={() => handleMenuClick('upload-results')}
                                        className="w-full flex items-center space-x-3 p-3 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition-colors"
                                    >
                                        <Upload size={20} />
                                        <span>Upload New Results</span>
                                    </button>
                                    <button
                                        onClick={() => handleMenuClick('students')}
                                        className="w-full flex items-center space-x-3 p-3 bg-green-50 text-green-700 rounded hover:bg-green-100 transition-colors"
                                    >
                                        <Plus size={20} />
                                        <span>Add New Student</span>
                                    </button>
                                    <button
                                        onClick={() => handleMenuClick('reports')}
                                        className="w-full flex items-center space-x-3 p-3 bg-purple-50 text-purple-700 rounded hover:bg-purple-100 transition-colors"
                                    >
                                        <FileText size={20} />
                                        <span>Generate Reports</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'upload-results':
                return (
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-gray-900">Upload Student Results</h1>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-700 mb-4">Upload Options</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Individual Upload */}
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                                    <h4 className="font-semibold text-gray-700 mb-4">Individual Student Result</h4>
                                    <form className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Student</label>
                                            <select className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500">
                                                <option>Select Student</option>
                                                {sampleStudents.map(student => (
                                                    <option key={student.id} value={student.id}>{student.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Term</label>
                                                <select
                                                    value={selectedTerm}
                                                    onChange={(e) => setSelectedTerm(e.target.value)}
                                                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                                >
                                                    <option value="firstTerm">First Term</option>
                                                    <option value="secondTerm">Second Term</option>
                                                    <option value="thirdTerm">Third Term</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Session</label>
                                                <select
                                                    value={selectedSession}
                                                    onChange={(e) => setSelectedSession(e.target.value)}
                                                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                                >
                                                    <option value="2024/2025">2024/2025</option>
                                                    <option value="2023/2024">2023/2024</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                            <input type="text" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Score</label>
                                                <input type="number" min="0" max="100" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Grade</label>
                                                <input type="text" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" />
                                            </div>
                                        </div>
                                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
                                            Upload Result
                                        </button>
                                    </form>
                                </div>

                                {/* Bulk Upload */}
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                                    <h4 className="font-semibold text-gray-700 mb-4">Bulk Upload (CSV/Excel)</h4>
                                    <div className="text-center space-y-4">
                                        <Upload size={48} className="mx-auto text-gray-400" />
                                        <div>
                                            <p className="text-sm text-gray-600 mb-2">Drag and drop your file here, or click to browse</p>
                                            <input type="file" accept=".csv,.xlsx,.xls" className="hidden" id="bulk-upload" />
                                            <label
                                                htmlFor="bulk-upload"
                                                className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded cursor-pointer hover:bg-gray-200 transition-colors"
                                            >
                                                Choose File
                                            </label>
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            <p>Supported formats: CSV, Excel (.xlsx, .xls)</p>
                                            <a href="#" className="text-blue-600 hover:underline">Download template</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'analytics':
                return (
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>

                        {/* Analytics Overview */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-700 mb-4">Performance Trends</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Mathematics</span>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-20 bg-gray-200 rounded-full h-2">
                                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                                            </div>
                                            <span className="text-sm font-medium">85%</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">English</span>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-20 bg-gray-200 rounded-full h-2">
                                                <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                                            </div>
                                            <span className="text-sm font-medium">92%</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Physics</span>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-20 bg-gray-200 rounded-full h-2">
                                                <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '76%' }}></div>
                                            </div>
                                            <span className="text-sm font-medium">76%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-700 mb-4">Class Performance</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Grade 12</span>
                                        <span className="text-sm font-medium text-green-600">Excellent</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Grade 11</span>
                                        <span className="text-sm font-medium text-blue-600">Good</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Grade 10</span>
                                        <span className="text-sm font-medium text-yellow-600">Average</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Activity</h3>
                                <div className="space-y-2 text-sm">
                                    <p className="text-gray-600">{analyticsData.recentUploads} results uploaded today</p>
                                    <p className="text-gray-600">{analyticsData.pendingApprovals} pending approvals</p>
                                    <p className="text-gray-600">Last backup: 2 hours ago</p>
                                </div>
                            </div>
                        </div>

                        {/* Charts placeholder */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-700 mb-4">Performance Chart</h3>
                            <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                                <div className="text-center text-gray-500">
                                    <BarChart3 size={48} className="mx-auto mb-2" />
                                    <p>Performance charts will be displayed here</p>
                                    <p className="text-sm">Integration with charting library needed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'students':
                return (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h1 className="text-3xl font-bold text-gray-900">Manage Students</h1>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center space-x-2">
                                <Plus size={16} />
                                <span>Add Student</span>
                            </button>
                        </div>

                        {/* Search and Filters */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                                        <input
                                            type="text"
                                            placeholder="Search students..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                                <select className="px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500">
                                    <option>All Classes</option>
                                    <option>Grade 12</option>
                                    <option>Grade 11</option>
                                    <option>Grade 10</option>
                                </select>
                                <select className="px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500">
                                    <option>All Departments</option>
                                    <option>Science</option>
                                    <option>Arts</option>
                                    <option>Commercial</option>
                                </select>
                            </div>
                        </div>

                        {/* Students Table */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full table-auto">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {filteredStudents.map((student) => (
                                            <tr key={student.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                                                        <div className="text-sm text-gray-500">{student.email}</div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.class}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.department}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(student.status)}`}>
                                                        {student.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <div className="flex space-x-2">
                                                        <button className="text-blue-600 hover:text-blue-900">
                                                            <Eye size={16} />
                                                        </button>
                                                        <button className="text-green-600 hover:text-green-900">
                                                            <Edit size={16} />
                                                        </button>
                                                        <button className="text-red-600 hover:text-red-900">
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                );

            case 'teachers':
                return (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h1 className="text-3xl font-bold text-gray-900">Manage Teachers</h1>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center space-x-2">
                                <Plus size={16} />
                                <span>Add Teacher</span>
                            </button>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <p className="text-gray-600">Teacher management functionality will be implemented here.</p>
                        </div>
                    </div>
                );

            case 'reports':
                return (
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-700 mb-4">Academic Report</h3>
                                <p className="text-sm text-gray-600 mb-4">Generate comprehensive academic performance reports</p>
                                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 flex items-center justify-center space-x-2">
                                    <Download size={16} />
                                    <span>Generate Report</span>
                                </button>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-700 mb-4">Student List</h3>
                                <p className="text-sm text-gray-600 mb-4">Export complete student database</p>
                                <button className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 flex items-center justify-center space-x-2">
                                    <Download size={16} />
                                    <span>Export List</span>
                                </button>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold text-gray-700 mb-4">Financial Report</h3>
                                <p className="text-sm text-gray-600 mb-4">Generate fee payment and financial reports</p>
                                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 flex items-center justify-center space-x-2">
                                    <Download size={16} />
                                    <span>Generate Report</span>
                                </button>
                            </div>
                        </div>
                    </div>
                );

            case 'settings':
                return (
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-700 mb-4">System Settings</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">School Name</label>
                                    <input type="text" defaultValue="Greenwood High School" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Academic Session</label>
                                    <select className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500">
                                        <option>2024/2025</option>
                                        <option>2023/2024</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Term</label>
                                    <select className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500">
                                        <option>First Term</option>
                                        <option>Second Term</option>
                                        <option>Third Term</option>
                                    </select>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" id="notifications" className="rounded" />
                                    <label htmlFor="notifications" className="text-sm text-gray-700">Enable email notifications</label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" id="auto-backup" className="rounded" defaultChecked />
                                    <label htmlFor="auto-backup" className="text-sm text-gray-700">Enable automatic backups</label>
                                </div>
                                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                                    Save Settings
                                </button>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-700 mb-4">Security</h3>
                            <div className="space-y-4">
                                <button className="w-full md:w-auto bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
                                    Change Password
                                </button>
                                <button className="w-full md:w-auto bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 ml-0 md:ml-4">
                                    Reset System
                                </button>
                            </div>
                        </div>
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