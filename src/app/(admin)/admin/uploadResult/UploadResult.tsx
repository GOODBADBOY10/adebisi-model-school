"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import Papa from "papaparse";

interface UploadResultProps {
    selectedTerm: string;
    selectedSession: string;
    setSelectedSession: React.Dispatch<React.SetStateAction<string>>;
    setSelectedTerm: React.Dispatch<React.SetStateAction<string>>;
}

function generateStudentId(className: string, year: string) {
    const randomNum = Math.floor(1000 + Math.random() * 9000); // 4-digit random number
    return `${className}-${year}-${randomNum}`;
}


export default function UploadResult({
    selectedTerm,
    setSelectedTerm,
    selectedSession,
    setSelectedSession,
}: UploadResultProps) {
    const [student, setStudent] = useState({
        name: "",
        email: "",
        class: "",
        year: "",
        subject: "",
        term: selectedTerm || "firstTerm",
        session: selectedSession || "2024/2025",
        score: 0,
        grade: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {

            const studentWithId = {
                ...student,
                studentId: generateStudentId(student.class, student.year),
                term: student.term,   // ✅ include term
                session: student.session, // ✅ include session
            };

            const res = await fetch("/api/admin/upload-result", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(studentWithId),
            });

            const data = await res.json();
            console.log('data', data);

            if (res.ok) {
                // setMessage(`✅ Result uploaded for ${data.email}`);
                setMessage(`✅ Result uploaded for ${studentWithId.email}`);

                setStudent({
                    name: "",
                    email: "",
                    class: "",
                    year: "",
                    subject: "",
                    term: selectedTerm,
                    session: selectedSession,
                    score: 0,
                    grade: "",
                });
            } else {
                setMessage(`❌ Error: ${data.error}`);
            }
        } catch (err) {
            console.error(err);
            setMessage("⚠️ An unexpected error occurred");
        }

        setLoading(false);
    };

    // Handle Bulk CSV Upload
    const handleBulkUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: async (results) => {
                try {
                    const bulkData = results.data; // parsed array of students

                    const res = await fetch("/api/bulk-upload", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(bulkData),
                    });

                    const data = await res.json();
                    if (res.ok) {
                        setMessage(`✅ Uploaded ${data.count} results successfully`);
                    } else {
                        setMessage(`❌ Bulk upload failed: ${data.error}`);
                    }
                } catch (err) {
                    console.error(err);
                    setMessage("⚠️ Bulk upload failed");
                }
            },
        });
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Upload Student Results</h1>

            {message && (
                <div className="p-3 bg-gray-100 text-sm text-gray-700 rounded">{message}</div>
            )}

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Upload Options</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Individual Upload */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-700 mb-4">
                            Individual Student Result
                        </h4>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Student Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={student.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email (unique)
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={student.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Class
                                    </label>
                                    <input
                                        type="text"
                                        name="class"
                                        value={student.class}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Year
                                    </label>
                                    <input
                                        type="text"
                                        name="year"
                                        value={student.year}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Term
                                    </label>
                                    <select
                                        name="term"
                                        value={student.term}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="firstTerm">First Term</option>
                                        <option value="secondTerm">Second Term</option>
                                        <option value="thirdTerm">Third Term</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Session
                                    </label>
                                    <select
                                        name="session"
                                        value={student.session}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="2024/2025">2024/2025</option>
                                        <option value="2023/2024">2023/2024</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={student.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Score
                                    </label>
                                    <input
                                        type="number"
                                        name="score"
                                        value={student.score}
                                        min="0"
                                        max="100"
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Grade
                                    </label>
                                    <input
                                        type="text"
                                        name="grade"
                                        value={student.grade}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                            >
                                {loading ? "Uploading..." : "Upload Result"}
                            </button>
                        </form>
                    </div>

                    {/* Bulk Upload */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-700 mb-4">
                            Bulk Upload (CSV/Excel)
                        </h4>
                        <div className="text-center space-y-4">
                            <Upload size={48} className="mx-auto text-gray-400" />
                            <div>
                                <p className="text-sm text-gray-600 mb-2">
                                    Drag and drop your file here, or click to browse
                                </p>
                                <input
                                    type="file"
                                    accept=".csv,.xlsx,.xls"
                                    className="hidden"
                                    id="bulk-upload"
                                    onChange={handleBulkUpload}
                                />
                                <label
                                    htmlFor="bulk-upload"
                                    className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded cursor-pointer hover:bg-gray-200 transition-colors"
                                >
                                    Choose File
                                </label>
                            </div>
                            <div className="text-xs text-gray-500">
                                <p>Supported formats: CSV, Excel (.xlsx, .xls)</p>
                                <a
                                    href="/templates/result-template.csv"
                                    download
                                    className="text-blue-600 hover:underline"
                                >
                                    Download template
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}