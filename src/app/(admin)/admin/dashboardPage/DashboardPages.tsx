import { Result, analyticsData, recentResults } from "@/lib/utils/dummyData";
import { Users, TrendingUp, GraduationCap, BarChart3, TrendingDown, Upload, Plus, FileText } from "lucide-react";

const typedRecentResults: Result[] = recentResults;


interface DashboardPagesProps {
handleMenuClick: (menu: string) => void;
}

export default function DashboardPages({ handleMenuClick }: DashboardPagesProps) {
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
                        {typedRecentResults.map((result, index) => (
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
                            className="w-full flex items-center space-x-3 p-3 bg-blue-50 cursor-pointer text-blue-700 rounded hover:bg-blue-100 transition-colors"
                        >
                            <Upload size={20} />
                            <span>Upload New Results</span>
                        </button>
                        <button
                            onClick={() => handleMenuClick('students')}
                            className="w-full flex items-center space-x-3 p-3 cursor-pointer bg-green-50 text-green-700 rounded hover:bg-green-100 transition-colors"
                        >
                            <Plus size={20} />
                            <span>Add New Student</span>
                        </button>
                        <button
                            onClick={() => handleMenuClick('reports')}
                            className="w-full flex items-center space-x-3 p-3 bg-purple-50 cursor-pointer text-purple-700 rounded hover:bg-purple-100 transition-colors"
                        >
                            <FileText size={20} />
                            <span>Generate Reports</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}