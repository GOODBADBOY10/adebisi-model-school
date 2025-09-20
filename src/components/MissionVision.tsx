"use client";

import { motion } from "framer-motion";

export default function MissionVision() {
    return (
        <section className="py-16 bg-white">
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
                    >
                        <h3 className="text-2xl font-semibold text-blue-700 mb-6">
                            Our Mission
                        </h3>
                        <ul className="list-disc list-inside space-y-4 text-gray-700 leading-relaxed">
                            <li>
                                To provide a challenging and supportive academic environment
                                that fosters critical thinking, creativity, and a lifelong love
                                of learning, preparing students for success in a global society.
                            </li>
                            <li>
                                To empower every student with the knowledge, skills, and
                                character necessary to achieve their full academic potential and
                                become responsible, engaged citizens.
                            </li>
                            <li>
                                To cultivate a nurturing community where every student thrives
                                intellectually, socially, emotionally, and physically,
                                developing into well-rounded individuals ready to make a
                                positive impact.
                            </li>
                            <li>
                                Our mission is to create a forward-thinking educational
                                experience that leverages technology and creativity to prepare
                                students for the challenges and opportunities of the 21st
                                century.
                            </li>
                            <li>
                                To build a diverse and inclusive learning community where
                                respect, empathy, and integrity are paramount, encouraging
                                students to contribute positively to their local and global
                                communities.
                            </li>
                        </ul>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold text-blue-700 mb-6">
                            Our Vision
                        </h3>
                        <ul className="list-disc list-inside space-y-4 text-gray-700 leading-relaxed">
                            <li>
                                To build a future where every graduate is a confident,
                                compassionate, and courageous leader, equipped to innovate and
                                inspire positive change in the world.
                            </li>
                            <li>
                                To be a beacon of educational excellence, continually evolving
                                to meet the needs of a changing world and setting new standards
                                for student achievement and well-being.
                            </li>
                            <li>
                                To create an environment where diversity is celebrated,
                                collaboration is key, and every member feels a sense of
                                belonging and purpose, contributing to a thriving and sustainable
                                future.
                            </li>
                            <li>
                                To be at the forefront of educational innovation, consistently
                                adapting our practices to provide cutting-edge learning
                                experiences that inspire and prepare students for an
                                unpredictable future.
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
