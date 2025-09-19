"use client";

import DepartmentContact from "@/components/DepartmentContact";
import FAQ from "@/components/FAQ";
import { FormEvent } from "react";

export default function ContactPage() {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // TODO: connect to backend or email service
        alert("Form submitted!");
    };

    return (
        <main className="pt-24">
            {/* Page Header */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-blue-100">
                        We&apos;d love to hear from you. Get in touch with us today!
                    </p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        {/* Phone */}
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-phone text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Phone</h3>
                            <p className="text-gray-600 mb-2">Main Office:</p>
                            <p className="text-lg font-medium text-blue-600">+1 (555) 123-4567</p>
                            <p className="text-gray-600 mb-2 mt-4">Admissions:</p>
                            <p className="text-lg font-medium text-blue-600">+1 (555) 123-4568</p>
                        </div>

                        {/* Email */}
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg text-center">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-envelope text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Email</h3>
                            <p className="text-gray-600 mb-2">General Inquiries:</p>
                            <p className="text-lg font-medium text-green-600">
                                info@pinnacleacademy.edu
                            </p>
                            <p className="text-gray-600 mb-2 mt-4">Admissions:</p>
                            <p className="text-lg font-medium text-green-600">
                                admissions@pinnacleacademy.edu
                            </p>
                        </div>

                        {/* Address */}
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg text-center">
                            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i className="fas fa-map-marker-alt text-white text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Address</h3>
                            <p className="text-gray-600 mb-2">123 Education Street</p>
                            <p className="text-gray-600 mb-2">Learning City, LC 12345</p>
                            <p className="text-gray-600">United States</p>
                        </div>
                    </div>

                    {/* Contact Form + Map */}
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Form */}
                        <div className="bg-white border rounded-lg p-8 shadow-lg">
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
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                        placeholder="Please share your message..."
                                    />
                                </div>

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="newsletter"
                                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                                    />
                                    <label htmlFor="newsletter" className="ml-2 text-sm text-gray-700">
                                        I would like to receive updates about school events and news
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                                >
                                    <i className="fas fa-paper-plane mr-2" /> Send Message
                                </button>
                            </form>
                        </div>

                        {/* Map + Office Hours */}
                        <div className="space-y-8">
                            {/* Map placeholder */}
                            <div className="bg-white border rounded-lg overflow-hidden shadow-lg p-8 text-center">
                                <i className="fas fa-map-marked-alt text-6xl text-blue-600 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    Interactive Map
                                </h3>
                                <p className="text-gray-600">
                                    Click to view our location on Google Maps
                                </p>
                                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                    <i className="fas fa-external-link-alt mr-2" /> Open in Maps
                                </button>
                            </div>

                            {/* Office Hours */}
                            <div className="bg-white border rounded-lg p-6 shadow-lg">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Office Hours
                                </h3>
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
                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-red-800 mb-3">
                                    Emergency Contact
                                </h3>
                                <p className="text-red-700 mb-3">
                                    For urgent matters outside office hours:
                                </p>
                                <p className="text-lg font-semibold text-red-800">
                                    <i className="fas fa-phone mr-2" /> +1 (555) 123-4569
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <DepartmentContact />
            <FAQ />
        </main>
    );
}
