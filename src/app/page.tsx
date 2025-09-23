"use client";

import MissionVision from "@/components/MissionVision";
import { useEffect, useState } from "react";
import Image from "next/image";
import WelcomeSection from "@/components/WelcomeSection";
import Facilities from "@/components/Facilities";
import StudentLifeSection from "@/components/StudentLifeSection";

const slides = [
  {
    id: 1,
    title: "Excellence in Education",
    desc: "Nurturing minds, building futures, and inspiring greatness in every student",
    button: "Learn More",
    image: "/adebisi1.jpg",
  },
  {
    id: 2,
    title: "Innovation & Growth",
    desc: "Preparing students for tomorrow's challenges with today's best practices",
    button: "Discover More",
    image: "/adebisi2.jpg",
  },
  {
    id: 3,
    title: "Community & Values",
    desc: "Building character, fostering community, creating lifelong learners",
    button: "Join Us",
    image: "/adebisi3.jpg",
  },
  {
    id: 4,
    title: "Excellence in Education",
    desc: "Nurturing minds, building futures, and inspiring greatness in every student",
    button: "Learn More",
    image: "/adebisi4.jpg",
  },
  {
    id: 5,
    title: "Innovation & Growth",
    desc: "Preparing students for tomorrow's challenges with today's best practices",
    button: "Discover More",
    image: "/adebisi17.jpg",
  },
  {
    id: 6,
    title: "Community & Values",
    desc: "Building character, fostering community, creating lifelong learners",
    button: "Join Us",
    image: "/adebisi42.jpg",
  },
];

export default function HomePage() {
  const [active, setActive] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % slides.length;
        // console.log("Slide index:", next);
        return next;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);


  return (
    <main className="pt-20">
      {/* ================= HERO SLIDER ================= */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="slider-container h-full relative">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slider-image absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === active ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="hero-overlay absolute inset-0 bg-black/40"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-5xl md:text-7xl font-bold mb-6">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                    {slide.desc}
                  </p>
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                    {slide.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`slider-dot w-3 h-3 rounded-full transition-all ${index === active
                ? "bg-white"
                : "bg-white/50 hover:bg-white/80"
                }`}
            ></button>
          ))}
        </div>
      </section>

      {/* ================= CONTENT SECTIONS ================= */}
      <div className="bg-white">

        {/* Section 1: Welcome */}
        <WelcomeSection />

        {/* Section 2: Mission */}
        <MissionVision />

        {/* Section 3: Academic Programs */}
        <section className="py-16 bg-blue-50 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Academic Programs
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Placeholder description for academic programs.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Early Years</h3>
                <p className="text-gray-600">Placeholder text.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Primary</h3>
                <p className="text-gray-600">Placeholder text.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Middle School</h3>
                <p className="text-gray-600">Placeholder text.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Senior School</h3>
                <p className="text-gray-600">Placeholder text.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Facilities */}
        <Facilities />

        {/* Section 5: Student Life */}
        <StudentLifeSection />

      </div>
    </main>
  );
}
