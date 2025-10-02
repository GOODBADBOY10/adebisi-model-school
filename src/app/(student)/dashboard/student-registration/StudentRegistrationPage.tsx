export default function StudentRegistrationPage() {
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
}