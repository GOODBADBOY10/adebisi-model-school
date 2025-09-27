// import { useState, ChangeEvent } from "react";
// import Papa from "papaparse";

// interface Result {
//     studentId: string;
//     email: string;
//     firstName: string;
//     lastName: string;
//     className: string;
//     subject: string;
//     firstTest: number;
//     exam: number;
//     total: number;
//     grade: string;
//     remarks: string;
// }

// export default function AdminResults() {
//     const [results, setResults] = useState<Result[]>([]);
//     const [fileName, setFileName] = useState("");

//     // Parse CSV file
//     const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files?.[0];
//         if (!file) return;

//         setFileName(file.name);

//         Papa.parse(file, {
//             header: true,
//             skipEmptyLines: true,
//             complete: (data) => {
//                 const parsedResults: Result[] = (data.data as any).map((row: any) => ({
//                     studentId: row.studentId,
//                     email: row.email,
//                     firstName: row.firstName,
//                     lastName: row.lastName,
//                     className: row.class,
//                     subject: row.subject,
//                     firstTest: Number(row.firstTest),
//                     exam: Number(row.exam),
//                     total: Number(row.total),
//                     grade: row.grade,
//                     remarks: row.remarks,
//                 }));
//                 setResults(parsedResults);
//             },
//         });
//     };

//     // Upload to backend
//     const handleSaveResults = async () => {
//         try {
//             const adminId = "admin123"; // replace with logged-in admin ID
//             const res = await fetch("/api/upload-results", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ results, adminId }),
//             });
//             const data = await res.json();
//             if (!res.ok) throw new Error(data.error || "Failed to save results");
//             alert(data.message);
//             setResults([]);
//             setFileName("");
//         } catch (err: any) {
//             console.error(err);
//             alert(err.message);
//         }
//     };

//     return (
//         <div className="p-8">
//             <h1 className="text-2xl font-bold mb-4">Upload Student Results (CSV)</h1>

//             <input type="file" accept=".csv" onChange={handleFileUpload} className="mb-4" />
//             {fileName && <p>Selected file: {fileName}</p>}

//             {results.length > 0 && (
//                 <div className="mt-4">
//                     <h2 className="text-xl font-semibold mb-2">Preview Results</h2>
//                     <div className="overflow-x-auto max-h-96 border">
//                         <table className="w-full border-collapse border">
//                             <thead className="bg-gray-100 sticky top-0">
//                                 <tr>
//                                     {["Student ID", "Email", "First Name", "Last Name", "Class", "Subject", "1st Test", "Exam", "Total", "Grade", "Remarks"].map(h => (
//                                         <th key={h} className="border p-2">{h}</th>
//                                     ))}
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {results.map((r, idx) => (
//                                     <tr key={idx}>
//                                         <td className="border p-2">{r.studentId}</td>
//                                         <td className="border p-2">{r.email}</td>
//                                         <td className="border p-2">{r.firstName}</td>
//                                         <td className="border p-2">{r.lastName}</td>
//                                         <td className="border p-2">{r.className}</td>
//                                         <td className="border p-2">{r.subject}</td>
//                                         <td className="border p-2">{r.firstTest}</td>
//                                         <td className="border p-2">{r.exam}</td>
//                                         <td className="border p-2">{r.total}</td>
//                                         <td className="border p-2">{r.grade}</td>
//                                         <td className="border p-2">{r.remarks}</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>

//                     <button
//                         onClick={handleSaveResults}
//                         className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
//                     >
//                         Save All to Database
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }


export default function AdminResults() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Admin Results Page</h1>
            <p>This page is under construction.</p>
        </div>
    );
}