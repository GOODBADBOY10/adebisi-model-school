import Link from "next/link";
import {
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Linkedin,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                {/* Grid Columns */}
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Column 1: About */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">About Our School</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><Link href="#mission" className="footer-link">Our Mission</Link></li>
                            <li><Link href="#mission" className="footer-link">Our Vision</Link></li>
                            <li><Link href="#" className="footer-link">Leadership Team</Link></li>
                            <li><Link href="#" className="footer-link">School History</Link></li>
                            <li><Link href="#" className="footer-link">Accreditations</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Academics */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Academics</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><Link href="#" className="footer-link">Curriculum</Link></li>
                            <li><Link href="#" className="footer-link">Programs</Link></li>
                            <li><Link href="#" className="footer-link">Faculty</Link></li>
                            <li><Link href="#" className="footer-link">Academic Calendar</Link></li>
                            <li><Link href="#" className="footer-link">Assessment</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Student Life */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Student Life</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><Link href="#" className="footer-link">Clubs & Societies</Link></li>
                            <li><Link href="#" className="footer-link">Sports Teams</Link></li>
                            <li><Link href="#" className="footer-link">Events</Link></li>
                            <li><Link href="#" className="footer-link">Student Support</Link></li>
                            <li><Link href="#" className="footer-link">Alumni</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><Link href="#" className="footer-link">Admissions</Link></li>
                            <li><Link href="#" className="footer-link">Fee Structure</Link></li>
                            <li><Link href="#" className="footer-link">Transport</Link></li>
                            <li><Link href="#" className="footer-link">Parent Portal</Link></li>
                            <li><Link href="#" className="footer-link">Careers</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-300 mb-4 md:mb-0">
                        © 2025 Adebisi Model School. All Rights Reserved.
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-6">
                        <Link href="#" className="social-link">
                            <Facebook className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="social-link">
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="social-link">
                            <Instagram className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="social-link">
                            <Youtube className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="social-link">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

/* ✅ Tailwind helper classes */
// const linkStyles =
//     "hover:text-white transition-colors";
