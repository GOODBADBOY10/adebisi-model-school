
export default function SettingsPage() {
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
}