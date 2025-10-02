import { Download } from "lucide-react";

export default function ReportsPage() {
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
}