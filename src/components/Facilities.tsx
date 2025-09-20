"use client";

import { motion } from "framer-motion";

const facilities = [
    {
        title: "Science Labs",
        image: "/GOODBADBOY.jpg",
        desc: "State-of-the-art science laboratories for hands-on experiments and discovery.",
        color: "from-blue-400 to-blue-600",
    },
    {
        title: "Sports Complex",
        image: "/GOODBADBOY.jpg",
        desc: "Modern sports facilities supporting physical fitness and teamwork.",
        color: "from-green-400 to-green-600",
    },
    {
        title: "Library",
        image: "/GOODBADBOY.jpg",
        desc: "A vast library collection offering knowledge and quiet study spaces.",
        color: "from-purple-400 to-purple-600",
    },
    {
        title: "Computer Pool",
        image: "/GOODBADBOY.jpg",
        desc: "High-tech computer pool with fast internet and the latest software tools.",
        color: "from-yellow-400 to-yellow-600",
    },
];

export default function Facilities() {
    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    World-Class Facilities
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                    Explore our modern, top-tier facilities designed to inspire learning, creativity, and growth.
                </p>

                <div className="overflow-hidden relative">
                    <motion.div
                        className="flex space-x-6"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 20,
                                ease: "linear",
                            },
                        }}
                    >
                        {[...facilities, ...facilities].map((facility, index) => (
                            <div
                                key={index}
                                className={`relative group overflow-hidden rounded-2xl shadow-lg min-w-[300px] bg-gradient-to-br ${facility.color}`}
                            >
                                <img
                                    src={facility.image}
                                    alt={facility.title}
                                    className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl">
                                    <p className="text-white text-lg px-4">{facility.desc}</p>
                                </div>
                                <h3 className="mt-4 text-xl font-bold text-white">{facility.title}</h3>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}