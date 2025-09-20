"use client";

import { useState, useEffect } from "react";
import {
    Menu,
    ChevronDown,
    ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [schoolOpen, setSchoolOpen] = useState(false);
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    const closeAll = () => {
        setMobileOpen(false);
        setAboutOpen(false);
        setSchoolOpen(false);
        setGalleryOpen(false);
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 border-b-2 border-blue-600">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 relative">
                            <Image
                                src="/logo.jpg"
                                alt="School logo"
                                fill
                                className="rounded-full object-cover shadow-md"
                            />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-800">
                                ADEBISI MODEL SCHOOL
                            </h1>
                            <p className="text-xs text-gray-600">Learning and Piety</p>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors"
                    >
                        <Menu className="w-7 h-7" />
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                        >
                            Home
                        </Link>

                        {/* About Us Dropdown */}
                        {/* About Us Parent Menu */}
                        <div
                            className="relative"
                            onMouseEnter={() => setAboutOpen(true)}
                            onMouseLeave={() => {
                                setAboutOpen(false);
                                setSchoolOpen(false);
                                setGalleryOpen(false);
                            }}
                        >
                            <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                                About Us <ChevronDown className="ml-1 w-4 h-4" />
                            </button>

                            {/* Main dropdown: visible only when aboutOpen is true */}
                            <div
                                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border py-2 z-50 ${aboutOpen ? "block" : "hidden"
                                    }`}
                            >
                                <Link href="/directors-message" className="dropdown-item">
                                    Director&apos;s Message
                                </Link>
                                <Link href="/our-values" className="dropdown-item">
                                    Our Values
                                </Link>
                                <Link href="/our-history" className="dropdown-item">
                                    Our History
                                </Link>
                                <Link href="/our-ethos" className="dropdown-item">
                                    Our Ethos
                                </Link>
                                <Link href="/facilities" className="dropdown-item">
                                    Facilities
                                </Link>
                                <Link href="/affiliates" className="dropdown-item">
                                    Affiliates
                                </Link>
                                <Link href="/management" className="dropdown-item">
                                    Management
                                </Link>

                                {/* School Activities nested menu — opens only when you hover this wrapper */}
                                <div
                                    className="relative"
                                    onMouseEnter={() => setSchoolOpen(true)}
                                    onMouseLeave={() => setSchoolOpen(false)}
                                >
                                    <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                                        School Activities <ChevronRight className="w-3 h-3" />
                                    </div>

                                    <div
                                        className={`absolute top-0 left-full ml-1 w-48 bg-white rounded-lg shadow-xl border py-2 z-50 ${schoolOpen ? "block" : "hidden"
                                            }`}
                                    >
                                        <Link href="/sports-athletics" className="dropdown-item">
                                            Sports & Athletics
                                        </Link>
                                        <Link href="/cultural-events" className="dropdown-item">
                                            Cultural Events
                                        </Link>
                                    </div>
                                </div>

                                {/* Gallery nested menu — opens only when you hover this wrapper */}
                                <div
                                    className="relative"
                                    onMouseEnter={() => setGalleryOpen(true)}
                                    onMouseLeave={() => setGalleryOpen(false)}
                                >
                                    <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                                        Gallery <ChevronRight className="w-3 h-3" />
                                    </div>

                                    <div
                                        className={`absolute top-0 left-full ml-1 w-48 bg-white rounded-lg shadow-xl border py-2 z-50 ${galleryOpen ? "block" : "hidden"
                                            }`}
                                    >
                                        <Link href="/photo-gallery" className="dropdown-item">
                                            Photo Gallery
                                        </Link>
                                        <Link href="/video-gallery" className="dropdown-item">
                                            Video Gallery
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Learning Journey Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                                Learning Journey <ChevronDown className="ml-1 w-4 h-4" />
                            </button>
                            <div className="absolute top-full left-0 hidden group-hover:block mt-2 w-56 bg-white rounded-lg shadow-xl border py-2">
                                <Link href="/early-years" className="dropdown-item">
                                    Early Years Foundation
                                </Link>
                                <Link href="/primary-education" className="dropdown-item">
                                    Primary Education
                                </Link>
                                <Link href="/middle-school" className="dropdown-item">
                                    Middle School
                                </Link>
                                <Link href="/senior-secondary" className="dropdown-item">
                                    Senior Secondary
                                </Link>
                                <Link href="/career-guidance" className="dropdown-item">
                                    Career Guidance
                                </Link>
                            </div>
                        </div>

                        <Link
                            href="/events"
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                        >
                            Events
                        </Link>
                        <Link
                            href="/eld"
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                        >
                            ELD
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                        >
                            Contact Us
                        </Link>
                    </nav>
                </div>

                {/* Mobile Navigation */}
                {/* {mobileOpen && (
                    <div className="lg:hidden pb-4">
                        <div className="space-y-2">
                            <Link href="/" className="mobile-link">
                                Home
                            </Link>
                            <Link href="/about" className="mobile-link">
                                About Us
                            </Link>
                            <Link href="/learning-journey" className="mobile-link">
                                Learning Journey
                            </Link>
                            <Link href="/events" className="mobile-link">
                                Events
                            </Link>
                            <Link href="/eld" className="mobile-link">
                                ELD
                            </Link>
                            <Link href="/contact" className="mobile-link">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                )} */}

                {mobileOpen && (
                    <div className="lg:hidden pb-4">
                        <div className="space-y-2">
                            <Link href="/" className="mobile-link" onClick={closeAll}>
                                Home
                            </Link>

                            {/* About Us with toggle */}
                            <div>
                                <button
                                    onClick={() => setAboutOpen(!aboutOpen)}
                                    className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:text-blue-600"
                                >
                                    About Us{" "}
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {aboutOpen && (
                                    <div className="pl-6 space-y-1">
                                        <Link href="/directors-message" className="mobile-link" onClick={closeAll}>
                                            Director&apos;s Message
                                        </Link>
                                        <Link href="/our-values" className="mobile-link" onClick={closeAll}>
                                            Our Values
                                        </Link>
                                        <Link href="/our-history" className="mobile-link" onClick={closeAll}>
                                            Our History
                                        </Link>
                                        <Link href="/our-ethos" className="mobile-link" onClick={closeAll}>
                                            Our Ethos
                                        </Link>
                                        <Link href="/facilities" className="mobile-link" onClick={closeAll}>
                                            Facilities
                                        </Link>
                                        <Link href="/affiliates" className="mobile-link" onClick={closeAll}>
                                            Affiliates
                                        </Link>
                                        <Link href="/management" className="mobile-link" onClick={closeAll}>
                                            Management
                                        </Link>

                                        {/* School Activities nested */}
                                        <div>
                                            <button
                                                onClick={() => setSchoolOpen(!schoolOpen)}
                                                className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:text-blue-600"
                                            >
                                                School Activities{" "}
                                                <ChevronRight
                                                    className={`w-3 h-3 transition-transform ${schoolOpen ? "rotate-90" : ""}`}
                                                />
                                            </button>
                                            {schoolOpen && (
                                                <div className="pl-6 space-y-1">
                                                    <Link href="/sports-athletics" className="mobile-link" onClick={closeAll}>
                                                        Sports & Athletics
                                                    </Link>
                                                    <Link href="/cultural-events" className="mobile-link" onClick={closeAll}>
                                                        Cultural Events
                                                    </Link>
                                                </div>
                                            )}
                                        </div>

                                        {/* Gallery nested */}
                                        <div>
                                            <button
                                                onClick={() => setGalleryOpen(!galleryOpen)}
                                                className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:text-blue-600"
                                            >
                                                Gallery{" "}
                                                <ChevronRight
                                                    className={`w-3 h-3 transition-transform ${galleryOpen ? "rotate-90" : ""}`}
                                                />
                                            </button>
                                            {galleryOpen && (
                                                <div className="pl-6 space-y-1">
                                                    <Link href="/photo-gallery" className="mobile-link" onClick={closeAll}>
                                                        Photo Gallery
                                                    </Link>
                                                    <Link href="/video-gallery" className="mobile-link" onClick={closeAll}>
                                                        Video Gallery
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Other links */}
                            <Link href="/learning-journey" className="mobile-link" onClick={closeAll}>
                                Learning Journey
                            </Link>
                            <Link href="/events" className="mobile-link" onClick={closeAll}>
                                Events
                            </Link>
                            <Link href="/eld" className="mobile-link" onClick={closeAll}>
                                ELD
                            </Link>
                            <Link href="/contact" className="mobile-link" onClick={closeAll}>
                                Contact Us
                            </Link>
                        </div>
                    </div>
                )}

            </div>
        </header>
    );
}

/* ✅ Tailwind helper classes for links */
// const linkClasses =
    // "block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600";

// function DropdownLink({ href, children }: { href: string; children: React.ReactNode }) {
//     return (
//         <Link href={href} className={linkClasses}>
//             {children}
//         </Link>
//     );
// }
