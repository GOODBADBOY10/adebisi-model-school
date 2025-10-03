import { sampleStudents } from "@/lib/utils/dummyData";
import { Plus, Search, Eye, Edit, Trash2 } from "lucide-react";

export default function StudentsPage(
    {searchTerm,setSearchTerm,}: 
    { searchTerm: string; setSearchTerm: React.Dispatch<React.SetStateAction<string>>;}
) {

    const getStatusColor = (status: string): string => {
        return status === 'active' ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100';
    };

    const filteredStudents = sampleStudents.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.class.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">Manage Students</h1>
                <button className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center space-x-2">
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
}