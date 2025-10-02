import { analyticsData } from "@/lib/utils/dummyData";
import { BarChart3 } from "lucide-react";

export default function AnalyticsPage() {
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
}