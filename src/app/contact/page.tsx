"use client";

import { motion } from "framer-motion";
import DepartmentContact from "@/components/DepartmentContact";
import FAQ from "@/components/FAQ";
import { FormEvent } from "react";

export default function ContactPage() {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert("Form submitted!");
    };

    // Motion variants for staggered cards
    const cardVariant = {
        hidden: { opacity: 0, y: 30 },
        show: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" as const } 
        },
    };

    return (
        <main className="pt-10">
            {/* Page Header */}
            {/* <section className="bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white py-20"> */}
            <section className="bg-gray-50 text-black py-20">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-5xl font-bold mb-4"
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        // className="text-xl text-cyan-100"
                        className="text-xl text-black"
                    >
                        We'd love to hear from you. Get in touch with us today!
                    </motion.p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.2 }}
                        className="grid lg:grid-cols-3 gap-8 mb-16"
                    >
                        {/* Phone */}
                        <motion.div
                            variants={cardVariant}
                            className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-xl text-center shadow-lg hover:shadow-2xl transition-shadow duration-500"
                        >
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                                <i className="fas fa-phone" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Phone</h3>
                            <p className="text-gray-700 mb-2">Main Office:</p>
                            <p className="text-lg font-semibold text-blue-700">+1 (555) 123-4567</p>
                            <p className="text-gray-700 mb-2 mt-4">Admissions:</p>
                            <p className="text-lg font-semibold text-blue-700">+1 (555) 123-4568</p>
                        </motion.div>

                        {/* Email */}
                        <motion.div
                            variants={cardVariant}
                            className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-xl text-center shadow-lg hover:shadow-2xl transition-shadow duration-500"
                        >
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                                <i className="fas fa-envelope" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Email</h3>
                            <p className="text-gray-700 mb-2">General Inquiries:</p>
                            <p className="text-lg font-semibold text-green-700">
                                info@pinnacleacademy.edu
                            </p>
                            <p className="text-gray-700 mb-2 mt-4">Admissions:</p>
                            <p className="text-lg font-semibold text-green-700">
                                admissions@pinnacleacademy.edu
                            </p>
                        </motion.div>

                        {/* Address */}
                        <motion.div
                            variants={cardVariant}
                            className="bg-gradient-to-br from-purple-100 to-purple-200 p-8 rounded-xl text-center shadow-lg hover:shadow-2xl transition-shadow duration-500"
                        >
                            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                                <i className="fas fa-map-marker-alt" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Address</h3>
                            <p className="text-gray-700 mb-2">123 Education Street</p>
                            <p className="text-gray-700 mb-2">Learning City, LC 12345</p>
                            <p className="text-gray-700">United States</p>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form + Map */}
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white border rounded-xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-500"
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                Send us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                            placeholder="Your first name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                            placeholder="Your last name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="admissions">Admissions Inquiry</option>
                                        <option value="general">General Information</option>
                                        <option value="academic">Academic Programs</option>
                                        <option value="facilities">Facilities Tour</option>
                                        <option value="events">Events & Activities</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        rows={5}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        placeholder="Please share your message..."
                                    />
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="newsletter"
                                        className="h-4 w-4 text-blue-600 border-gray-300 rounded transition"
                                    />
                                    <label htmlFor="newsletter" className="ml-2 text-sm text-gray-700">
                                        I would like to receive updates about school events and news
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-800 transition-all flex items-center justify-center"
                                >
                                    <i className="fas fa-paper-plane mr-2" /> Send Message
                                </button>
                            </form>
                        </motion.div>

                        {/* Map + Office Hours */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            {/* Map */}
                            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border rounded-xl overflow-hidden shadow-xl p-8 text-center hover:shadow-2xl transition-shadow duration-500">
                                <i className="fas fa-map-marked-alt text-6xl text-blue-600 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Interactive Map</h3>
                                <p className="text-gray-700">
                                    Click to view our location on Google Maps
                                </p>
                                <button className="mt-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-2 rounded-xl hover:from-blue-700 hover:to-purple-800 transition-all">
                                    <i className="fas fa-external-link-alt mr-2" /> Open in Maps
                                </button>
                            </div>

                            {/* Office Hours */}
                            <div className="bg-gradient-to-br from-green-50 to-green-100 border rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-500">
                                <h3 className="text-2xl font-semibold text-green-700 mb-4">Office Hours</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="font-medium text-gray-700">Mon - Fri</span>
                                        <span className="text-gray-600">8:00 AM - 5:00 PM</span>
                                    </div>
                                    <div className="flex justify-between border-b pb-2">
                                        <span className="font-medium text-gray-700">Saturday</span>
                                        <span className="text-gray-600">9:00 AM - 2:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="font-medium text-gray-700">Sunday</span>
                                        <span className="text-red-600">Closed</span>
                                    </div>
                                </div>
                            </div>

                            {/* Emergency Contact */}
                            <div className="bg-red-50 border border-red-200 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-500">
                                <h3 className="text-xl font-semibold text-red-800 mb-3">Emergency Contact</h3>
                                <p className="text-red-700 mb-3">
                                    For urgent matters outside office hours:
                                </p>
                                <p className="text-lg font-semibold text-red-800">
                                    <i className="fas fa-phone mr-2" /> +1 (555) 123-4569
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <DepartmentContact />
            <FAQ />
        </main>
    );
}