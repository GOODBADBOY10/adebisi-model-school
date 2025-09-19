import { FaCalendarAlt, 
    FaTheaterMasks, FaRunning, FaUsers, FaPalette, FaGraduationCap, FaClock, FaMapMarkerAlt, FaTrophy, FaSeedling, FaBell, FaCalendarPlus 
} from "react-icons/fa";

export default function EventsPage() {
    return (
        <main className="pt-24">
            {/* Page Header */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">School Events</h1>
                    <p className="text-xl text-blue-100">
                        Stay updated with all our exciting school events and activities
                    </p>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Upcoming Events
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Don&apos;t miss out on these exciting upcoming events at Pinnacle
                            Academy
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Event 1 */}
                        <EventCard
                            date="25"
                            month="March 2025"
                            title="Annual Science Fair"
                            description="Students showcase their innovative science projects and experiments in this exciting annual competition."
                            time="9:00 AM - 4:00 PM"
                            location="Main Auditorium"
                            icon={<FaCalendarAlt className="text-3xl opacity-80" />}
                            gradient="from-blue-500 to-blue-600"
                        />

                        {/* Event 2 */}
                        <EventCard
                            date="02"
                            month="April 2025"
                            title="Spring Drama Performance"
                            description="Our talented drama club presents their spring production featuring classic and contemporary pieces."
                            time="7:00 PM - 9:30 PM"
                            location="School Theater"
                            icon={<FaTheaterMasks className="text-3xl opacity-80" />}
                            gradient="from-green-500 to-green-600"
                        />

                        {/* Event 3 */}
                        <EventCard
                            date="15"
                            month="April 2025"
                            title="Inter-House Sports Day"
                            description="Annual sports competition between school houses featuring athletics, team sports, and fun activities."
                            time="8:00 AM - 5:00 PM"
                            location="Sports Complex"
                            icon={<FaRunning className="text-3xl opacity-80" />}
                            gradient="from-purple-500 to-purple-600"
                        />

                        {/* Event 4 */}
                        <EventCard
                            date="22"
                            month="April 2025"
                            title="Parent-Teacher Conference"
                            description="Individual meetings between parents and teachers to discuss student progress and development."
                            time="2:00 PM - 6:00 PM"
                            location="Individual Classrooms"
                            icon={<FaUsers className="text-3xl opacity-80" />}
                            gradient="from-orange-500 to-orange-600"
                        />

                        {/* Event 5 */}
                        <EventCard
                            date="05"
                            month="May 2025"
                            title="Art Exhibition Opening"
                            description="Showcase of student artwork from all grade levels in our annual art exhibition and competition."
                            time="6:00 PM - 8:00 PM"
                            location="Art Gallery"
                            icon={<FaPalette className="text-3xl opacity-80" />}
                            gradient="from-pink-500 to-pink-600"
                        />

                        {/* Event 6 */}
                        <EventCard
                            date="20"
                            month="May 2025"
                            title="Graduation Ceremony"
                            description="Celebrating the achievements of our graduating class with a formal ceremony and reception."
                            time="10:00 AM - 12:00 PM"
                            location="Main Auditorium"
                            icon={<FaGraduationCap className="text-3xl opacity-80" />}
                            gradient="from-teal-500 to-teal-600"
                        />
                    </div>
                </div>
            </section>

            {/* Recent Events */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Recent Events
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Take a look at our recent successful events and celebrations
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Past Event 1 */}
                        <PastEventCard
                            date="February 28, 2025"
                            title="Academic Excellence Awards"
                            description="We celebrated outstanding academic achievements with our annual Academic Excellence Awards ceremony, recognizing top performers across all grade levels."
                            gradient="from-blue-100 to-blue-200"
                            icon={<FaTrophy className="text-6xl text-blue-600" />}
                            btnColor="text-blue-600 hover:text-blue-800"
                        />

                        {/* Past Event 2 */}
                        <PastEventCard
                            date="February 15, 2025"
                            title="Environmental Awareness Week"
                            description="Students participated in various eco-friendly activities including tree planting, recycling drives, and environmental workshops throughout the week."
                            gradient="from-green-100 to-green-200"
                            icon={<FaSeedling className="text-6xl text-green-600" />}
                            btnColor="text-green-600 hover:text-green-800"
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-blue-600 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-4">Don&apos;t Miss Out!</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Stay connected with all our events and activities. Register for
                        event notifications to never miss an important school event.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                            <FaBell className="mr-2" /> Subscribe to Notifications
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
                            <FaCalendarPlus className="mr-2" /> Add to Calendar
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}

type EventCardProps = {
    date: string;
    month: string;
    title: string;
    description: string;
    time: string;
    location: string;
    icon: React.ReactNode;
    gradient: string;
};

function EventCard({
    date,
    month,
    title,
    description,
    time,
    location,
    icon,
    gradient,
}: EventCardProps) {
    return (
        <div className="bg-white border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div
                className={`bg-gradient-to-r ${gradient} p-6 text-white flex items-center justify-between`}
            >
                <div>
                    <div className="text-3xl font-bold">{date}</div>
                    <div className="text-sm opacity-90">{month}</div>
                </div>
                {icon}
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex items-center text-sm text-gray-500">
                    <FaClock className="mr-2" />
                    <span>{time}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{location}</span>
                </div>
            </div>
        </div>
    );
}

type PastEventCardProps = {
    date: string;
    title: string;
    description: string;
    gradient: string;
    icon: React.ReactNode;
    btnColor: string;
};

function PastEventCard({
    date,
    title,
    description,
    gradient,
    icon,
    btnColor,
}: PastEventCardProps) {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div
                className={`bg-gradient-to-r ${gradient} h-48 flex items-center justify-center`}
            >
                {icon}
            </div>
            <div className="p-6">
                <div className="text-sm mb-2">{date}</div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <button className={`${btnColor} font-medium`}>View Gallery →</button>
            </div>
        </div>
    );
}
