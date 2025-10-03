// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//     const [isAdmin, setIsAdmin] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [formData, setFormData] = useState({
//         email: "",
//         password: "", // only for admin
//         firstName: "",
//         year: "",
//         class: "",
//     });
//     const [error, setError] = useState<string | null>(null);
//     const router = useRouter();

//     const classOptions = [
//         "NUR 1", "NUR 2", "KG1", "KG2", "Creche",
//         "BASIC 1", "BASIC 2", "BASIC 3", "BASIC 4", "BASIC 5",
//         "JSS1", "JSS2", "JSS3",
//         "SS1", "SS2", "SS3",
//     ];

//     const yearOptions: string[] = [];
//     for (let year = 2018; year <= 2030; year++) yearOptions.push(year.toString());

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//         setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     };

//     const handleSubmit = async () => {
//         if (loading) return; // prevent double-click
//         setError(null);
//         setLoading(true);
//         try {
//             const endpoint = isAdmin ? "/api/admin/login" : "/api/login";

//             const res = await fetch(endpoint, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(formData),
//             });

//             const data = await res.json();

//             if (res.ok) {
//                 if (isAdmin) {
//                     localStorage.setItem("admin", JSON.stringify(data.admin));
//                     router.push("/admin/dashboard"); // go to admin dashboard
//                 } else {
//                     localStorage.setItem("student", JSON.stringify(data.student));
//                     router.push("/dashboard"); // go to student dashboard
//                 }
//             } else {
//                 setError(data.error || "Login failed");
//             }
//         } catch (err) {
//             setError("Something went wrong. Try again.");
//         } finally {
//             setLoading(false); // stop loading
//         }
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//             <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md space-y-4">
//                 <h1 className="text-center text-2xl font-bold">
//                     {isAdmin ? "Admin Login" : "Student Login"}
//                 </h1>

//                 {/* Toggle */}
//                 <label className="flex items-center space-x-2 cursor-pointer">
//                     <input
//                         type="checkbox"
//                         checked={isAdmin}
//                         onChange={() => setIsAdmin(!isAdmin)}
//                     />
//                     <span className="text-sm">Login as Admin</span>
//                 </label>

//                 {/* Common field: Email */}
//                 <div>
//                     <label className="block text-sm font-medium">Email</label>
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="mt-1 w-full border px-3 py-2 rounded-md"
//                     />
//                 </div>

//                 {/* Admin only field: Password */}
//                 {isAdmin && (
//                     <div>
//                         <label className="block text-sm font-medium">Password</label>
//                         <input
//                             type="password"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             className="mt-1 w-full border px-3 py-2 rounded-md"
//                         />
//                     </div>
//                 )}

//                 {/* Student fields */}
//                 {!isAdmin && (
//                     <>
//                         <div>
//                             <label className="block text-sm font-medium">First Name</label>
//                             <input
//                                 type="text"
//                                 name="firstName"
//                                 value={formData.firstName}
//                                 onChange={handleChange}
//                                 className="mt-1 w-full border px-3 py-2 rounded-md"
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium">Class</label>
//                             <select
//                                 name="class"
//                                 value={formData.class}
//                                 onChange={handleChange}
//                                 className="mt-1 w-full border px-3 py-2 rounded-md"
//                             >
//                                 <option value="">Select class</option>
//                                 {classOptions.map((cls) => (
//                                     <option key={cls} value={cls}>
//                                         {cls}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium">Year</label>
//                             <select
//                                 name="year"
//                                 value={formData.year}
//                                 onChange={handleChange}
//                                 className="mt-1 w-full border px-3 py-2 rounded-md"
//                             >
//                                 <option value="">Select year</option>
//                                 {yearOptions.map((yr) => (
//                                     <option key={yr} value={yr}>
//                                         {yr}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>
//                     </>
//                 )}

//                 {/* Submit */}
//                 <button
//                     onClick={handleSubmit}
//                     disabled={loading}
//                     className={`w-full py-2 rounded-md text-white transition
//                     ${loading ? "bg-blue-400 cursor-not-allowed opacity-70" : "bg-blue-600 hover:bg-blue-700 cursor-pointer"}
//                     `}
//                 >
//                     {loading ? "Logging in..." : "Login"}
//                 </button>

//                 {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
//             </div>
//         </div>
//     );
// }


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        firstName: "",
        year: "",
        class: "",
    });
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    
    const classOptions = [
        "NUR 1", "NUR 2", "KG1", "KG2", "Creche",
        "BASIC 1", "BASIC 2", "BASIC 3", "BASIC 4", "BASIC 5",
        "JSS1", "JSS2", "JSS3",
        "SS1", "SS2", "SS3",
    ];

    const yearOptions: string[] = [];
    for (let year = 2018; year <= 2030; year++) yearOptions.push(year.toString());

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async () => {
        if (loading) return; // prevent double-click
        setError(null);
        setLoading(true);
        try {
            const endpoint = isAdmin ? "/api/admin/login" : "/api/login";

            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                if (isAdmin) {
                    localStorage.setItem("admin", JSON.stringify(data.admin));
                    router.push("/admin/dashboard"); // go to admin dashboard
                } else {
                    localStorage.setItem("student", JSON.stringify(data.student));
                    router.push("/dashboard"); // go to student dashboard
                }
            } else {
                setError(data.error || "Login failed");
            }
        } catch (err) {
            setError("Something went wrong. Try again.");
        } finally {
            setLoading(false); // stop loading
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100 space-y-6">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-gray-900">
                        {isAdmin ? "Admin Login" : "Student Login"}
                    </h1>
                    <p className="text-sm text-gray-500">
                        {isAdmin ? "Enter your credentials to continue" : "Access your student dashboard"}
                    </p>
                </div>

                {/* Toggle */}
                <div className="flex items-center justify-center">
                    <label className="flex items-center space-x-3 cursor-pointer bg-gray-50 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                        <input
                            type="checkbox"
                            checked={isAdmin}
                            onChange={() => setIsAdmin(!isAdmin)}
                            className="w-4 h-4 text-indigo-600 focus:ring-2 focus:ring-indigo-500 rounded"
                        />
                        <span className="text-sm font-medium text-gray-700">Login as Admin</span>
                    </label>
                </div>

                {/* Common field: Email */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                    />
                </div>

                {/* Admin only field: Password */}
                {isAdmin && (
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        />
                    </div>
                )}

                {/* Student fields */}
                {!isAdmin && (
                    <>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Enter your first name"
                                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Class
                            </label>
                            <select
                                name="class"
                                value={formData.class}
                                onChange={handleChange}
                                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-white"
                            >
                                <option value="">Select your class</option>
                                {classOptions.map((cls) => (
                                    <option key={cls} value={cls}>
                                        {cls}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Academic Year
                            </label>
                            <select
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                                className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-white"
                            >
                                <option value="">Select year</option>
                                {yearOptions.map((yr) => (
                                    <option key={yr} value={yr}>
                                        {yr}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </>
                )}

                {/* Submit */}
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className={`w-full py-3 rounded-lg font-semibold text-white transition-all transform
                    ${loading
                            ? "bg-indigo-400 cursor-not-allowed"
                            : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg active:scale-95"
                        }`}
                >
                    {loading ? (
                        <span className="flex items-center justify-center space-x-2">
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Logging in...</span>
                        </span>
                    ) : (
                        "Login"
                    )}
                </button>

                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
}