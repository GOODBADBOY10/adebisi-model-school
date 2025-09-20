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
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Image */}
                    <div className="relative">
                        <Image
                            src="/GOODBADBOY.jpg"
                            alt="Welcome to our school"
                            width={1920}
                            height={1080}
                            className="rounded-lg shadow-lg w-full h-[83vh] object-cover"
                        />
                    </div>

                    {/* Right Column: Text + Features (Animated) */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">
                            Welcome to Our School
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            We are delighted to welcome you to{" "}
                            <span className="font-semibold">ADEBISI MODEL SCHOOLS</span>.
                        </p>

                        {/* Features with staggered animation */}
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
                                className="bg-white p-6 rounded-lg shadow-md"
                            >
                                <h3 className="text-xl font-semibold mb-3">Quality Education</h3>
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
                                className="bg-white p-6 rounded-lg shadow-md"
                            >
                                <h3 className="text-xl font-semibold mb-3">Community Focus</h3>
                                <p className="text-gray-600">
                                    Education is a partnership among students, parents, and
                                    teachers. Our school is more than a place of learning; it’s a
                                    community where every member is valued.
                                </p>
                            </motion.div>

                            {/* Feature 3 */}
                            <motion.div
                                variants={item}
                                className="bg-white p-6 rounded-lg shadow-md md:col-span-2"
                            >
                                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
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
