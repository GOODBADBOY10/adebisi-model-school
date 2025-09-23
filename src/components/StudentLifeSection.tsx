"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function StudentLifeSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Intro */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Vibrant Student Life
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        At Adebisi Model Schools, learning goes beyond the classroom.
                        Our students thrive in academics, sports, creativity, and
                        friendships — creating a community where everyone belongs.
                    </p>
                </div>

                {/* Activities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
                        <Image
                            src="/GOODBADBOY.jpg"
                            alt="Sports"
                            width={500}
                            height={300}
                            className="w-full h-48 object-cover rounded-xl mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                            Sports & Athletics
                        </h3>
                        <p className="text-gray-600 text-sm">
                            From football to athletics, students learn teamwork and discipline
                            while staying active.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
                        <Image
                            src="/GOODBADBOY.jpg"
                            alt="Arts"
                            width={500}
                            height={300}
                            className="w-full h-48 object-cover rounded-xl mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                            Arts & Culture
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Music, drama, and cultural programs encourage self-expression and
                            creativity.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
                        <Image
                            src="/GOODBADBOY.jpg"
                            alt="Clubs"
                            width={500}
                            height={300}
                            className="w-full h-48 object-cover rounded-xl mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                            Clubs & Activities
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Debate, science club, and excursions let students explore new
                            passions and skills.
                        </p>
                    </div>
                </div>

                {/* Enhanced Student Stories */}
                <div className="mb-20">
                    <h3 className="text-3xl font-bold text-gray-800 text-center mb-4">
                        Student Success Stories
                    </h3>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Real experiences from our students who have grown, learned, and thrived at Adebisi Model Schools
                    </p>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        loop={true}
                        slidesPerView={1}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        speed={5000}
                        breakpoints={{
                            640: { slidesPerView: 1, spaceBetween: 20 },
                            1024: { slidesPerView: 2, spaceBetween: 30 },
                        }}
                        className="pb-8"
                    >
                        <SwiperSlide>
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                                <div className="flex items-center mb-6">
                                    <Image
                                        src="/GOODBADBOY.jpg"
                                        alt="Chidera's photo"
                                        width={64}
                                        height={64}
                                        className="w-16 h-16 object-cover rounded-full mr-4 ring-4 ring-blue-100"
                                    />
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-800">Owoeye Sekinah</h4>
                                        <p className="text-blue-600 font-medium">SSS 3 • Debate Team Captain</p>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="text-yellow-400 text-2xl">★★★★★</span>
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    &quot;When I first joined the debate team, I was terrified of speaking in public.
                                    Now I&apos;m the team captain and we just won the state championship! The teachers
                                    here don&apos;t just teach you facts—they help you discover who you really are.&quot;
                                </p>
                                <div className="bg-blue-50 p-3 rounded-lg">
                                    <p className="text-sm text-blue-700 font-medium">
                                        🏆 Achievement: State Debate Champion 2024
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                                <div className="flex items-center mb-6">
                                    <Image
                                        src="/GOODBADBOY.jpg"
                                        alt="Amaka's photo"
                                        width={64}
                                        height={64}
                                        className="w-16 h-16 object-cover rounded-full mr-4 ring-4 ring-green-100"
                                    />
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-800">Olawale Aminah</h4>
                                        <p className="text-green-600 font-medium">JSS 2 • Cultural Ambassador</p>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="text-yellow-400 text-2xl">★★★★★</span>
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    &quot;The cultural diversity here is amazing! I&apos;ve learned traditional dances from
                                    different Nigerian cultures and even taught my classmates about my Igbo heritage.
                                    Our annual Cultural Day is the highlight of my year—it makes me so proud to be Nigerian.&quot;
                                </p>
                                <div className="bg-green-50 p-3 rounded-lg">
                                    <p className="text-sm text-green-700 font-medium">
                                        🎭 Leadership: Cultural Ambassador & Traditional Dance Leader
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                                <div className="flex items-center mb-6">
                                    <Image
                                        src="/GOODBADBOY.jpg"
                                        alt="Bola's photo"
                                        width={64}
                                        height={64}
                                        className="w-16 h-16 object-cover rounded-full mr-4 ring-4 ring-purple-100"
                                    />
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-800">Robiu Ridwan</h4>
                                        <p className="text-purple-600 font-medium">SSS 3 • Future Engineer</p>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="text-yellow-400 text-2xl">★★★★★</span>
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    &quot;The science lab here is like a second home to me! Our robotics project won
                                    the regional competition, and now I&apos;m building a water purification system for
                                    my final year project. I definitely want to study engineering at university.&quot;
                                </p>
                                <div className="bg-purple-50 p-3 rounded-lg">
                                    <p className="text-sm text-purple-700 font-medium">
                                        🔬 Achievement: Regional Robotics Competition Winner
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                                <div className="flex items-center mb-6">
                                    <Image
                                        src="/GOODBADBOY.jpg"
                                        alt="David's photo"
                                        width={64}
                                        height={64}
                                        className="w-16 h-16 object-cover rounded-full mr-4 ring-4 ring-red-100"
                                    />
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-800">Gabriel Sunday</h4>
                                        <p className="text-red-600 font-medium">SSS 2 • Football Team Captain</p>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="text-yellow-400 text-2xl">★★★★★</span>
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    &ldquo;Football taught me discipline, but being team captain taught me leadership.
                                    When we lost the semi-finals last year, Coach helped us see it as a learning
                                    opportunity. This year, we&apos;re stronger and more united than ever&ldquo;
                                </p>
                                <div className="bg-red-50 p-3 rounded-lg">
                                    <p className="text-sm text-red-700 font-medium">
                                        ⚽ Leadership: Football Team Captain & Sports Prefect
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* Enhanced Call To Action */}
                {/* <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center text-white">
                    <h3 className="text-2xl font-bold mb-4">Ready to Start Your Own Success Story?</h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        Join a community where every student is encouraged to discover their passions,
                        develop their talents, and build lasting friendships.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/admissions"
                            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Start Your Application
                        </a>
                        <a
                            href="/campus-tour"
                            className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
                        >
                            Book a Campus Tour
                        </a>
                    </div>
                </div> */}

            </div>
        </section>
    );
}
