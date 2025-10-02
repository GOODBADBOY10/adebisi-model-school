// import { uploadStudentResult } from '@/lib/utils/uploadResult';
// import Papa from 'papaparse';

// export async function POST(req: Request) {
//     try {
//         const contentType = req.headers.get("content-type") || "";

//         // ---- CASE 1: Manual JSON upload ----
//         if (contentType.includes("application/json")) {
//             const body = await req.json();

//             const studentData = {
//                 name: body.name?.trim() || "",
//                 email: body.email?.trim().toLowerCase() || "",
//                 class: body.class?.trim() || "",
//                 year: body.year?.trim() || "",
//                 subject: body.subject?.trim() || "",
//                 term: body.term?.trim() || "",
//                 session: body.session?.trim() || "",
//                 score: Number(body.score) || 0,
//                 grade: body.grade?.trim() || "",
//             };

//             const result = await uploadStudentResult(studentData);

//             // ✅ wrap result in array for consistency with bulk upload
//             return Response.json(
//                 { ok: true, results: [result] },
//                 { status: 200 }
//             );
//         }

//         // ---- CASE 2: Bulk upload (CSV) ----
//         if (contentType.includes("multipart/form-data")) {
//             const form = await req.formData();
//             const file = form.get("file") as File;

//             if (!file) {
//                 return Response.json(
//                     { ok: false, error: "No file uploaded" },
//                     { status: 400 }
//                 );
//             }

//             const csvText = await file.text();
//             const parsed = Papa.parse(csvText, {
//                 header: true,
//                 skipEmptyLines: true,
//                 dynamicTyping: true,
//                 transformHeader: (h) => h.trim().toLowerCase(),
//             });

//             if (parsed.errors.length > 0) {
//                 return Response.json(
//                     { ok: false, error: "Invalid CSV format", details: parsed.errors },
//                     { status: 400 }
//                 );
//             }

//             const results: any[] = [];
//             const emailsSeen = new Set<string>();

//             for (const row of parsed.data as any[]) {
//                 if (!row.email) continue;

//                 const email = row.email.trim().toLowerCase();
//                 if (emailsSeen.has(email)) {
//                     results.push({ email, success: false, error: "Duplicate email in file" });
//                     continue;
//                 }
//                 emailsSeen.add(email);

//                 const studentData = {
//                     name: row.name?.trim() || "",
//                     email,
//                     class: row.class?.trim() || "",
//                     year: row.year?.trim() || "",
//                     subject: row.subject?.trim() || "",
//                     term: row.term?.trim() || "",
//                     session: row.session?.trim() || "",
//                     score: Number(row.score) || 0,
//                     grade: row.grade?.trim() || "",
//                 };

//                 try {
//                     const result = await uploadStudentResult(studentData);
//                     results.push({ email: studentData.email, success: true, result });
//                 } catch (err: any) {
//                     results.push({ email: studentData.email, success: false, error: err.message });
//                 }
//             }

//             return Response.json({ ok: true, results }, { status: 200 });
//         }

//         return Response.json(
//             { ok: false, error: "Unsupported content type" },
//             { status: 415 }
//         );

//     } catch (error: any) {
//         console.error("Upload handler error:", error.message);
//         return Response.json(
//             { ok: false, error: "Failed to upload results" },
//             { status: 500 }
//         );
//     }
// }


import { uploadStudentResult } from '@/lib/utils/uploadResult';
import Papa from 'papaparse';

interface StudentData {
    name: string;
    email: string;
    class: string;
    year: string;
    subject: string;
    term: string;
    session: string;
    score: number;
    grade: string;
}

interface UploadResult {
    email: string;
    success: boolean;
    result?: unknown;
    error?: string;
}

export async function POST(req: Request) {
    try {
        const contentType = req.headers.get("content-type") || "";

        // ---- CASE 1: Manual JSON upload ----
        if (contentType.includes("application/json")) {
            const body = await req.json();

            const studentData: StudentData = {
                name: (body.name ?? "").trim(),
                email: (body.email ?? "").trim().toLowerCase(),
                class: (body.class ?? "").trim(),
                year: (body.year ?? "").trim(),
                subject: (body.subject ?? "").trim(),
                term: (body.term ?? "").trim(),
                session: (body.session ?? "").trim(),
                score: Number(body.score) || 0,
                grade: (body.grade ?? "").trim(),
            };

            const result = await uploadStudentResult(studentData);

            // ✅ wrap result in array for consistency with bulk upload
            return Response.json(
                { ok: true, results: [result] },
                { status: 200 }
            );
        }

        // ---- CASE 2: Bulk upload (CSV) ----
        if (contentType.includes("multipart/form-data")) {
            const form = await req.formData();
            const file = form.get("file") as File;

            if (!file) {
                return Response.json(
                    { ok: false, error: "No file uploaded" },
                    { status: 400 }
                );
            }

            const csvText = await file.text();
            const parsed = Papa.parse<Record<string, string>>(csvText, {
                header: true,
                skipEmptyLines: true,
                dynamicTyping: true,
                transformHeader: (h) => h.trim().toLowerCase(),
            });

            if (parsed.errors.length > 0) {
                return Response.json(
                    { ok: false, error: "Invalid CSV format", details: parsed.errors },
                    { status: 400 }
                );
            }

            const results: UploadResult[] = [];
            const emailsSeen = new Set<string>();

            for (const row of parsed.data) {
                if (!row.email) continue;

                const email = row.email.trim().toLowerCase();
                if (emailsSeen.has(email)) {
                    results.push({ email, success: false, error: "Duplicate email in file" });
                    continue;
                }
                emailsSeen.add(email);

                const studentData: StudentData = {
                    name: (row.name ?? "").trim(),
                    email,
                    class: (row.class ?? "").trim(),
                    year: (row.year ?? "").trim(),
                    subject: (row.subject ?? "").trim(),
                    term: (row.term ?? "").trim(),
                    session: (row.session ?? "").trim(),
                    score: Number(row.score) || 0,
                    grade: (row.grade ?? "").trim(),
                };

                try {
                    const result = await uploadStudentResult(studentData);
                    results.push({ email: studentData.email, success: true, result });
                } catch (err: unknown) {
                    const errorMsg = err instanceof Error ? err.message : "Unknown error";
                    results.push({ email: studentData.email, success: false, error: errorMsg });
                }
            }

            return Response.json({ ok: true, results }, { status: 200 });
        }

        return Response.json(
            { ok: false, error: "Unsupported content type" },
            { status: 415 }
        );

    } catch (error: unknown) {
        const errorMsg = error instanceof Error ? error.message : "Failed to upload results";
        console.error("Upload handler error:", errorMsg);
        return Response.json(
            { ok: false, error: errorMsg },
            { status: 500 }
        );
    }
}