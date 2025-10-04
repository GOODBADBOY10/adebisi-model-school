"use client";

import { CreditCard, BookOpen, FileText } from "lucide-react";
import React from "react";

interface StudentData {
    name: string;
    email: string;
    studentId: string;
    class: string;
    department: string;
}

interface DashboardPagesProps {
    studentData: StudentData;
    handleMenuClick: (menu: string) => void;
}


export default function StudentDashboardPage({ studentData, handleMenuClick }: DashboardPagesProps) {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Student Info */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Student Information</h3>
                    <div className="space-y-2 text-sm text-black">
                        <p><span className="font-medium">Name:</span> {studentData.name}</p>
                        <p><span className="font-medium">Email:</span> {studentData.email}</p>
                        <p><span className="font-medium">Student ID:</span> {studentData.studentId}</p>
                        <p><span className="font-medium">Class:</span> {studentData.class}</p>
                        <p><span className="font-medium">Department:</span> {studentData.department}</p>
                    </div>
                </div>

                {/* Academic Overview */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Academic Overview</h3>
                    <div className="space-y-2 text-sm text-black">
                        <p><span className="font-medium">Current Session:</span> 2024/2025</p>
                        <p><span className="font-medium">Semester:</span> Second</p>
                        <p><span className="font-medium">Total Subjects:</span> 5</p>
                        <p><span className="font-medium">Status:</span> <span className="text-green-600 font-medium">Active</span></p>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Quick Actions</h3>
                    <div className="space-y-2">
                        <button
                            onClick={() => handleMenuClick("payment")}
                            className="w-full flex cursor-pointer items-center space-x-3 p-3 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition-colors"
                        >
                            <CreditCard size={18} />
                            <span>Pay School Fees</span>
                        </button>

                        <button
                            onClick={() => handleMenuClick("registration")}
                            className="w-full flex items-center cursor-pointer space-x-3 p-3 bg-green-50 text-green-700 rounded hover:bg-green-100 transition-colors"
                        >
                            <BookOpen size={18} />
                            <span>Register Courses</span>
                        </button>

                        <button
                            onClick={() => handleMenuClick("results")}
                            className="w-full flex items-center space-x-3 p-3 cursor-pointer bg-purple-50 text-purple-700 rounded hover:bg-purple-100 transition-colors"
                        >
                            <FileText size={18} />
                            <span>View Results</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}