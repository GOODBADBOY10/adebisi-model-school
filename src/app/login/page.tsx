"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
    email: string;
    firstName: string;
    year: string;
    class: string;
}

export default function LoginPage() {
    const [formData, setFormData] = useState<FormData>({
        email: "",
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
    for (let year = 2018; year <= 2030; year++) {
        yearOptions.push(year.toString());
    }

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        setError(null);

        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                console.log("✅ Login successful:", data.student);

                // Save to localStorage
                localStorage.setItem("student", JSON.stringify(data.student));

                // Redirect
                router.push("/dashboard");
            } else {
                setError(data.error || "❌ Login failed");
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h1 className="text-center text-3xl font-extrabold text-gray-900">
                    Login
                </h1>

                <div className="space-y-4">
                    {/* email */}
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1 w-full border px-3 py-2 rounded-md"
                        />
                    </div>

                    {/* firstName */}
                    <div>
                        <label className="block text-sm font-medium">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="mt-1 w-full border px-3 py-2 rounded-md"
                        />
                    </div>

                    {/* class */}
                    <div>
                        <label className="block text-sm font-medium">Class</label>
                        <select
                            name="class"
                            value={formData.class}
                            onChange={handleInputChange}
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

                    {/* year */}
                    <div>
                        <label className="block text-sm font-medium">Year</label>
                        <select
                            name="year"
                            value={formData.year}
                            onChange={handleInputChange}
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

                    {/* button */}
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                    >
                        Login
                    </button>

                    {/* error */}
                    {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
                </div>
            </div>
        </div>
    );
}
