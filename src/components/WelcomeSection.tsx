"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WelcomeSection() {
    // Variants for parent (stagger controller)
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    // Variants for each card
    const item = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const },
        },
    };

    return (
        // <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-gray-50"> real
        // <section className="py-16 bg-gradient-to-br from-blue-100 via-amber-50 to-white">
        // {/* <section className="py-16 bg-gradient-to-br from-blue-200 via-blue-100 to-blue-50"> */}
        <section className="py-16 bg-gradient-to-br from-blue-100 via-blue-50 to-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Image */}
                    <div className="relative">
                        <Image
                            src="/GOODBADBOY.jpg"
                            alt="Welcome to our school"
                            width={1920}
                            height={1080}
                            className="rounded-xl shadow-2xl w-full h-[83vh] object-cover border-4 border-blue-200"
                        />
                    </div>

                    {/* Right Column: Text + Features */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <h2 className="text-4xl font-extrabold text-blue-700 mb-6">
                            Welcome to Our School
                        </h2>
                        <p className="text-lg text-gray-700 mb-8">
                            We are delighted to welcome you to{" "}
                            <span className="font-semibold text-amber-600">
                                ADEBISI MODEL SCHOOLS
                            </span>.
                        </p>

                        {/* Features */}
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.3 }}
                            className="grid md:grid-cols-2 gap-6"
                        >
                            {/* Feature 1 */}
                            <motion.div
                                variants={item}
                                className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition"
                            >
                                <h3 className="text-xl font-semibold mb-3 text-blue-700">
                                    Quality Education
                                </h3>
                                <p className="text-gray-600">
                                    We believe in fostering a community where every student can
                                    thrive. Our commitment is to provide a nurturing and
                                    challenging environment that inspires a lifelong love of
                                    learning.
                                </p>
                            </motion.div>

                            {/* Feature 2 */}
                            <motion.div
                                variants={item}
                                className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-amber-500 hover:shadow-xl transition"
                            >
                                <h3 className="text-xl font-semibold mb-3 text-amber-600">
                                    Community Focus
                                </h3>
                                <p className="text-gray-600">
                                    Education is a partnership among students, parents, and
                                    teachers. Our school is more than a place of learning; it’s a
                                    community where every member is valued.
                                </p>
                            </motion.div>

                            {/* Feature 3 */}
                            <motion.div
                                variants={item}
                                className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition md:col-span-2"
                            >
                                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                                    Excellence
                                </h3>
                                <p className="text-gray-600">
                                    We strive for excellence in academics, character, and
                                    leadership—preparing our students for success in school and
                                    beyond.
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>

    );
}
