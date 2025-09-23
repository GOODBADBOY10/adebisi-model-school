export default function HeroSlider({ active, setActive }: { active: number, setActive: (index: number) => void }) {

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
            title: "Faith & Community",
            desc: "Guided by Islamic values, fostering unity, compassion, and spiritual growth",
            button: "Join Us",
            image: "/adebisi3.jpg",
        },
        {
            id: 4,
            title: "Passion for Sports",
            desc: "Building strength, teamwork, and discipline through the spirit of sports",
            button: "Explore More",
            image: "/adebisi4.jpg",
        },
        {
            id: 5,
            title: "Excursions & Discovery",
            desc: "Taking learning beyond the classroom through exciting trips, exploration, and real-world experiences",
            button: "Explore With Us",
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

    return (
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
    )
}