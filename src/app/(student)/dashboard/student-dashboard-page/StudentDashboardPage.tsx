"use client";

import React from "react";

interface StudentData {
    name: string;
    email: string;
    studentId: string;
    class: string;
    department: string;
}

export default function StudentDashboardPage({ studentData }: { studentData: StudentData }) {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Student Info */}
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

                {/* Academic Overview */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Academic Overview</h3>
                    <div className="space-y-2 text-sm">
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
                        <button className="w-full text-left p-2 text-sm text-blue-600 hover:bg-blue-50 rounded">
                            Pay School Fees
                        </button>
                        <button className="w-full text-left p-2 text-sm text-blue-600 hover:bg-blue-50 rounded">
                            Register Courses
                        </button>
                        <button className="w-full text-left p-2 text-sm text-blue-600 hover:bg-blue-50 rounded">
                            View Results
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}