"use client";

import MissionVision from "@/components/MissionVision";
import { useEffect, useState } from "react";
import Image from "next/image";
import WelcomeSection from "@/components/WelcomeSection";
import Facilities from "@/components/Facilities";
import StudentLifeSection from "@/components/StudentLifeSection";
import AcademicPrograms from "@/components/AcademicPrograms";
import HeroSlider from "@/components/HeroSlider";

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
      <HeroSlider active={active} setActive={setActive} />

      {/* ================= CONTENT SECTIONS ================= */}
      <div className="bg-white">

        {/* Section 1: Welcome */}
        <WelcomeSection />

        {/* Section 2: Mission */}
        <MissionVision />

        {/* Section 3: Academic Programs */}
        <AcademicPrograms />

        {/* Section 4: Facilities */}
        <Facilities />

        {/* Section 5: Student Life */}
        <StudentLifeSection />

      </div>
    </main>
  );
}
