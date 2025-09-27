"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "", // only for admin
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
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md space-y-4">
                <h1 className="text-center text-2xl font-bold">
                    {isAdmin ? "Admin Login" : "Student Login"}
                </h1>

                {/* Toggle */}
                <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={isAdmin}
                        onChange={() => setIsAdmin(!isAdmin)}
                    />
                    <span className="text-sm">Login as Admin</span>
                </label>

                {/* Common field: Email */}
                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 w-full border px-3 py-2 rounded-md"
                    />
                </div>

                {/* Admin only field: Password */}
                {isAdmin && (
                    <div>
                        <label className="block text-sm font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="mt-1 w-full border px-3 py-2 rounded-md"
                        />
                    </div>
                )}

                {/* Student fields */}
                {!isAdmin && (
                    <>
                        <div>
                            <label className="block text-sm font-medium">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="mt-1 w-full border px-3 py-2 rounded-md"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Class</label>
                            <select
                                name="class"
                                value={formData.class}
                                onChange={handleChange}
                                className="mt-1 w-full border px-3 py-2 rounded-md"
                            >
                                <option value="">Select class</option>
                                {classOptions.map((cls) => (
                                    <option key={cls} value={cls}>
                                        {cls}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Year</label>
                            <select
                                name="year"
                                value={formData.year}
                                onChange={handleChange}
                                className="mt-1 w-full border px-3 py-2 rounded-md"
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
                    className={`w-full py-2 rounded-md text-white transition
                    ${loading ? "bg-blue-400 cursor-not-allowed opacity-70" : "bg-blue-600 hover:bg-blue-700 cursor-pointer"}
                    `}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

                {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
            </div>
        </div>
    );
}
