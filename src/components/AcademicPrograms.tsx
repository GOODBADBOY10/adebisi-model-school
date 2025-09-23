import Link from "next/link";

export default function AcademicPrograms() {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Academic Excellence
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                        Our comprehensive academic programs are designed to nurture curious minds, develop critical thinking,
                        and prepare students for success at every stage of their educational journey.
                    </p>
                    <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                        <div className="flex items-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                            <span>Nigerian Curriculum</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                            <span>British Curriculum</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                            <span>STEM Focus</span>
                        </div>
                    </div>
                </div>

                {/* Academic Programs Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {/* Early Years */}
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                        <div className="bg-gradient-to-r from-pink-400 to-rose-500 h-2"></div>
                        <div className="p-8">
                            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-2xl">🌱</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Early Years</h3>
                            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                Foundation learning through play, creativity, and exploration for ages 3-5.
                            </p>
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center text-sm text-gray-600">
                                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                                    <span>Nursery 1 & 2</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                                    <span>Pre-School</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                                    <span>Reception Class</span>
                                </div>
                            </div>
                            <div className="bg-pink-50 p-3 rounded-lg mb-4">
                                <p className="text-xs text-pink-700 font-medium">Key Focus Areas:</p>
                                <p className="text-xs text-pink-600">Language Development • Numeracy • Creative Arts • Social Skills</p>
                            </div>
                            <Link href="/programs/early-years" className="text-pink-600 font-semibold text-sm hover:text-pink-700 transition-colors">
                                Learn More →
                            </Link>
                        </div>
                    </div>

                    {/* Primary */}
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                        <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2"></div>
                        <div className="p-8">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-2xl">📚</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Primary School</h3>
                            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                Building strong academic foundations with personalized learning for ages 6-11.
                            </p>
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center text-sm text-gray-600">
                                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                                    <span>Primary 1-6</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                                    <span>British & Nigerian Curriculum</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                                    <span>Small Class Sizes (Max 20)</span>
                                </div>
                            </div>
                            <div className="bg-green-50 p-3 rounded-lg mb-4">
                                <p className="text-xs text-green-700 font-medium">Core Subjects:</p>
                                <p className="text-xs text-green-600">English • Mathematics • Science • Social Studies • ICT</p>
                            </div>
                            <Link href="/programs/primary" className="text-green-600 font-semibold text-sm hover:text-green-700 transition-colors">
                                Learn More →
                            </Link>
                        </div>
                    </div>

                    {/* Middle School */}
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                        <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-2"></div>
                        <div className="p-8">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-2xl">🔬</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Middle School</h3>
                            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                Preparing for adolescence with advanced academics and character development, ages 12-14.
                            </p>
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center text-sm text-gray-600">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                    <span>JSS 1-3</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                    <span>BECE Preparation</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                                    <span>Leadership Programs</span>
                                </div>
                            </div>
                            <div className="bg-blue-50 p-3 rounded-lg mb-4">
                                <p className="text-xs text-blue-700 font-medium">Specializations:</p>
                                <p className="text-xs text-blue-600">Sciences • Arts • Technology • Languages • Business Studies</p>
                            </div>
                            <Link href="/programs/middle-school" className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                                Learn More →
                            </Link>
                        </div>
                    </div>

                    {/* Senior School */}
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                        <div className="bg-gradient-to-r from-purple-400 to-violet-500 h-2"></div>
                        <div className="p-8">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-2xl">🎓</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Senior School</h3>
                            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                University preparation with specialized tracks and career guidance, ages 15-18.
                            </p>
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center text-sm text-gray-600">
                                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                    <span>SSS 1-3</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                    <span>WAEC/NECO Preparation</span>
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                    <span>University Counseling</span>
                                </div>
                            </div>
                            <div className="bg-purple-50 p-3 rounded-lg mb-4">
                                <p className="text-xs text-purple-700 font-medium">Career Tracks:</p>
                                <p className="text-xs text-purple-600">Science • Commercial • Arts • Technical • Hybrid Programs</p>
                            </div>
                            <Link href="/programs/senior-school" className="text-purple-600 font-semibold text-sm hover:text-purple-700 transition-colors">
                                Learn More →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Academic Excellence Highlights */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Academic Programs?</h3>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Our commitment to academic excellence goes beyond textbooks, fostering critical thinking, creativity, and character development.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl font-bold">98%</span>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">WAEC Success Rate</h4>
                            <p className="text-gray-600 text-sm">
                                Our students consistently achieve outstanding results in external examinations,
                                with 98% pass rate in WAEC over the last 5 years.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gradient-to-r from-green-500 to-teal-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl font-bold">15:1</span>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">Student-Teacher Ratio</h4>
                            <p className="text-gray-600 text-sm">
                                Small class sizes ensure personalized attention and support for every student's
                                unique learning needs and potential.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-gradient-to-r from-orange-500 to-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl font-bold">95%</span>
                            </div>
                            <h4 className="text-xl font-semibold text-gray-800 mb-2">University Admission</h4>
                            <p className="text-gray-600 text-sm">
                                95% of our graduates gain admission to top universities in Nigeria and abroad,
                                with many receiving scholarships and awards.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <div className="inline-flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/academic-programs"
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Explore All Programs
                        </Link>
                        <Link
                            href="/admissions"
                            className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
                        >
                            Apply Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}