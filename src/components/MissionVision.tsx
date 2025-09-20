"use client";

import { motion } from "framer-motion";
import { CheckCircle, Globe, GraduationCap, Users, Lightbulb } from "lucide-react";

export default function MissionVision() {
    return (
        // <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50"> real
        <section id="mission" className="py-16 bg-gradient-to-br from-blue-200 via-indigo-100 to-cyan-100">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
                    Our Mission & Vision
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Mission */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-600"
                    >
                        <h3 className="text-2xl font-semibold text-blue-700 mb-6">
                            Our Mission
                        </h3>
                        <ul className="space-y-4 text-gray-700 leading-relaxed">
                            <li className="flex items-start gap-3">
                                <GraduationCap className="w-6 h-6 text-blue-600 mt-1" />
                                To provide a challenging and supportive academic environment
                                that fosters critical thinking, creativity, and a lifelong love
                                of learning.
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                To empower every student with the knowledge, skills, and
                                character necessary to achieve their full potential.
                            </li>
                            <li className="flex items-start gap-3">
                                <Users className="w-6 h-6 text-purple-600 mt-1" />
                                To cultivate a nurturing community where every student thrives
                                intellectually, socially, and emotionally.
                            </li>
                            <li className="flex items-start gap-3">
                                <Lightbulb className="w-6 h-6 text-yellow-500 mt-1" />
                                To create a forward-thinking educational experience that uses
                                technology and creativity to prepare students for the future.
                            </li>
                            <li className="flex items-start gap-3">
                                <Globe className="w-6 h-6 text-indigo-600 mt-1" />
                                To build a diverse and inclusive community where respect and
                                empathy guide positive contributions to society.
                            </li>
                        </ul>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="bg-white p-8 rounded-xl shadow-md border-l-4 border-indigo-600"
                    >
                        <h3 className="text-2xl font-semibold text-indigo-700 mb-6">
                            Our Vision
                        </h3>
                        <ul className="space-y-4 text-gray-700 leading-relaxed">
                            <li className="flex items-start gap-3">
                                <Lightbulb className="w-6 h-6 text-yellow-500 mt-1" />
                                To build a future where every graduate is a confident,
                                compassionate, and courageous leader.
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                To be a beacon of educational excellence, evolving to meet the
                                needs of a changing world.
                            </li>
                            <li className="flex items-start gap-3">
                                <Users className="w-6 h-6 text-purple-600 mt-1" />
                                To create an environment where diversity is celebrated,
                                collaboration is key, and belonging is universal.
                            </li>
                            <li className="flex items-start gap-3">
                                <Globe className="w-6 h-6 text-indigo-600 mt-1" />
                                To lead in educational innovation, preparing students for an
                                unpredictable but opportunity-filled future.
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>

    );
}
