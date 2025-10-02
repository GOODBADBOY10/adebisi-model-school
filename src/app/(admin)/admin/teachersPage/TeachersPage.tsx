import { Plus } from "lucide-react";

export default function TeachersPage() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">Manage Teachers</h1>
                <button className="bg-blue-600 text-white px-4 cursor-pointer py-2 rounded hover:bg-blue-700 flex items-center space-x-2">
                    <Plus size={16} />
                    <span>Add Teacher</span>
                </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600">Teacher management functionality will be implemented here.</p>
            </div>
        </div>
    );
}