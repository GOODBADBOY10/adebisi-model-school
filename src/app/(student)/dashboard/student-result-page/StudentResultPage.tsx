"use client";

import React from "react";
import { Download } from "lucide-react";

interface Result {
    subject: string;
    score: number;
    grade: string;
}

interface Results {
    firstTerm: Result[];
    secondTerm: Result[];
    thirdTerm: Result[];
}

type TermKey = keyof Results;

export default function StudentResultPage({
    results,
    selectedTerm,
    setSelectedTerm
}: {
    results: Results;
    selectedTerm: TermKey | null;
    setSelectedTerm: (term: TermKey | null) => void;
}) {
    const termLabels: Record<TermKey, string> = {
        firstTerm: "First Term",
        secondTerm: "Second Term",
        thirdTerm: "Third Term",
    };

    const calculateAverage = (results: Result[]): number => {
        if (!results || results.length === 0) return 0;
        const total = results.reduce((sum, result) => sum + result.score, 0);
        return Math.round(total / results.length);
    };

    const getGradeColor = (grade: string): string => {
        const colors: Record<string, string> = {
            "A+": "text-green-600",
            "A": "text-green-500",
            "A-": "text-green-400",
            "B+": "text-blue-500",
            "B": "text-blue-400",
            "B-": "text-yellow-500",
            "C+": "text-orange-500",
            "C": "text-orange-400",
            "D": "text-red-400",
            "F": "text-red-600",
        };
        return colors[grade] || "text-gray-500";
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Academic Results</h1>

            {selectedTerm ? (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold text-gray-700">
                            {termLabels[selectedTerm]} Results
                        </h3>
                        <button
                            onClick={() => window.print()}
                            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            <Download size={16} />
                            <span>Download</span>
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-4 py-3 text-left font-semibold">Subject</th>
                                    <th className="px-4 py-3 text-center font-semibold">Score</th>
                                    <th className="px-4 py-3 text-center font-semibold">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedTerm && results[selectedTerm]?.length > 0 ? (
                                    results[selectedTerm].map((result: Result, index: number) => (
                                        <tr key={index} className="border-b hover:bg-gray-50">
                                            <td className="px-4 py-3">{result.subject}</td>
                                            <td className="px-4 py-3 text-center font-medium">{result.score}</td>
                                            <td
                                                className={`px-4 py-3 text-center font-bold ${getGradeColor(
                                                    result.grade
                                                )}`}
                                            >
                                                {result.grade}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={3} className="px-4 py-3 text-center text-gray-500">
                                            No results available for {selectedTerm ? termLabels[selectedTerm] : "this term"}.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 p-4 bg-gray-50 rounded">
                        <div className="flex justify-between items-center">
                            <span className="font-semibold text-gray-700">Term Average:</span>
                            <span className="text-xl font-bold text-blue-600">
                                {calculateAverage(results[selectedTerm])}%
                            </span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4">
                        Select a Term to View Results
                    </h3>
                    <p className="text-gray-600">
                        Please select a term from the sidebar to view your academic results.
                    </p>
                </div>
            )}
        </div>
    );
}