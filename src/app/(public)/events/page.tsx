"use client";

import { motion } from "framer-motion";
import {
    FaCalendarAlt,
    FaTheaterMasks,
    FaRunning,
    FaUsers,
    FaPalette,
    FaGraduationCap,
    FaClock,
    FaMapMarkerAlt,
    FaBell,
    FaCalendarPlus
} from "react-icons/fa";
import { FaBookOpen, FaFlag } from "react-icons/fa6";

export default function EventsPage() {
    const cardMotion = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const }
        })
    };

    return (
        <main className="pt-10">

            {/* Page Header */}
            <section className="bg-blue-50 py-16">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-5xl font-bold mb-4 text-blue-800"
                    >
                        School Events
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="text-xl text-blue-600"
                    >
                        Stay updated with all our exciting school events and activities
                    </motion.p>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        className="text-center mb-12"
                    >
                        <motion.h2
                            variants={cardMotion}
                            custom={0}
                            className="text-4xl font-bold text-gray-800 mb-4"
                        >
                            Upcoming Events
                        </motion.h2>
                        <motion.p
                            variants={cardMotion}
                            custom={1}
                            className="text-lg text-gray-600 max-w-3xl mx-auto"
                        >
                            Don&apos;t miss out on these exciting upcoming events at ADEBISI MODEL SCHOOLS
                        </motion.p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
                        <EventCard
                            date="23"
                            month="October 2025"
                            title="Parent-Teacher Conference"
                            description="General meeting between school management, parents and teachers to discuss student progress and development of school."
                            time="2:30 PM - 4:30 PM"
                            location="SCHOOL HALL"
                            icon={<FaCalendarAlt className="text-3xl text-blue-600" />}
                            color="blue"
                        />

                        <EventCard
                            date="04"
                            month="November 2025"
                            title="OPEN DAY: PRIMARY SCHOOL"
                            description="A special event where parents and guardians visit our primary section to view class displays, interact with teachers, and gain insights into pupils' learning experiences."
                            time="9:00 AM - 2:00 PM"
                            location="Adebisi Model Nursery & Primary School"
                            icon={<FaTheaterMasks className="text-3xl text-green-600" />}
                            color="green"
                        />

                        <EventCard
                            date="05"
                            month="November 2025"
                            title="OPEN DAY: SECONDARY SCHOOL"
                            description="An open opportunity for parents to tour our college environment, review students’ academic works, and engage with subject teachers about individual progress and improvement."
                            time="9:00 AM - 2:00 PM"
                            location="Al-Firdaus Model College"
                            icon={<FaTheaterMasks className="text-3xl text-purple-600" />}
                            color="purple"
                        />

                        <EventCard
                            date="03-05"
                            month="November 2025"
                            title="MID-TERM TEST"
                            description="Scheduled mid-term examinations across all classes designed to evaluate students’ comprehension and mastery of subjects taught during the term."
                            time="9:00 AM - 3:00 PM"
                            location="Adebisi Model Schools"
                            icon={<FaBookOpen className="text-3xl text-orange-600" />}
                            color="orange"
                        />

                        <EventCard
                            date="01"
                            month="October 2025"
                            title="Independence Day Celebration"
                            description="A national holiday commemorating Nigeria's independence. Join us as we celebrate with cultural displays, performances, and patriotic activities promoting unity and pride among students."
                            time="9:00 AM - 12:00 PM"
                            location="School Field"
                            icon={<FaFlag className="text-3xl text-green-600" />}
                            color="green"
                        />

                        {/* <EventCard
                            date="20"
                            month="May 2025"
                            title="Graduation Ceremony"
                            description="Celebrating the achievements of our graduating class with a formal ceremony and reception."
                            time="10:00 AM - 12:00 PM"
                            location="Main Auditorium"
                            icon={<FaGraduationCap className="text-3xl text-teal-600" />}
                            color="teal"
                        /> */}
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-blue-600 text-white text-center">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl font-bold mb-4"
                    >
                        Don&apos;t Miss Out!
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
                    >
                        Stay connected with all our events and activities. Register for event notifications to never miss an important school event.
                    </motion.p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center justify-center"
                        >
                            <FaBell className="mr-2" /> Subscribe to Notifications
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-white hover:text-blue-600 transition-colors"
                        >
                            <FaCalendarPlus className="mr-2" /> Add to Calendar
                        </motion.button>
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
    color: string;
};

function EventCard({
    date,
    month,
    title,
    description,
    time,
    location,
    icon,
    color
}: EventCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`bg-white border-l-4 border-${color}-500 rounded-lg shadow-lg hover:shadow-2xl transition-shadow overflow-hidden`}
        >
            <div className={`p-6 flex items-center justify-between bg-${color}-50`}>
                <div>
                    <div className="text-3xl font-bold">{date}</div>
                    <div className="text-sm opacity-80">{month}</div>
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
        </motion.div>
    );
}

// "use client";

// import { motion } from "framer-motion";
// import {
//   FaCalendarAlt,
//   FaTheaterMasks,
//   FaRunning,
//   FaUsers,
//   FaPalette,
//   FaGraduationCap,
//   FaMapMarkerAlt
// } from "react-icons/fa";

// const events = [
//   {
//     date: "25",
//     month: "March 2025",
//     title: "Annual Science Fair",
//     description:
//       "Students showcase their innovative science projects and experiments in this exciting annual competition.",
//     time: "9:00 AM - 4:00 PM",
//     location: "Main Auditorium",
//     icon: <FaCalendarAlt className="text-3xl text-blue-600" />,
//     color: "blue"
//   },
//   {
//     date: "02",
//     month: "April 2025",
//     title: "Spring Drama Performance",
//     description:
//       "Our talented drama club presents their spring production featuring classic and contemporary pieces.",
//     time: "7:00 PM - 9:30 PM",
//     location: "School Theater",
//     icon: <FaTheaterMasks className="text-3xl text-green-600" />,
//     color: "green"
//   },
//   {
//     date: "15",
//     month: "April 2025",
//     title: "Inter-House Sports Day",
//     description:
//       "Annual sports competition between school houses featuring athletics, team sports, and fun activities.",
//     time: "8:00 AM - 5:00 PM",
//     location: "Sports Complex",
//     icon: <FaRunning className="text-3xl text-purple-600" />,
//     color: "purple"
//   },
//   {
//     date: "22",
//     month: "April 2025",
//     title: "Parent-Teacher Conference",
//     description:
//       "Individual meetings between parents and teachers to discuss student progress and development.",
//     time: "2:00 PM - 6:00 PM",
//     location: "Individual Classrooms",
//     icon: <FaUsers className="text-3xl text-orange-600" />,
//     color: "orange"
//   },
//   {
//     date: "05",
//     month: "May 2025",
//     title: "Art Exhibition Opening",
//     description:
//       "Showcase of student artwork from all grade levels in our annual art exhibition and competition.",
//     time: "6:00 PM - 8:00 PM",
//     location: "Art Gallery",
//     icon: <FaPalette className="text-3xl text-pink-600" />,
//     color: "pink"
//   },
//   {
//     date: "20",
//     month: "May 2025",
//     title: "Graduation Ceremony",
//     description:
//       "Celebrating the achievements of our graduating class with a formal ceremony and reception.",
//     time: "10:00 AM - 12:00 PM",
//     location: "Main Auditorium",
//     icon: <FaGraduationCap className="text-3xl text-teal-600" />,
//     color: "teal"
//   }
// ];

// export default function UpcomingEventsCarousel() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
//           Upcoming Events
//         </h2>

//         {/* Horizontal scrolling carousel */}
//         <div className="overflow-hidden relative">
//           <motion.div
//             className="flex gap-6"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{
//               x: { repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" }
//             }}
//           >
//             {[...events, ...events].map((event, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className={`min-w-[300px] bg-white border-l-4 border-${event.color}-500 rounded-lg shadow-lg overflow-hidden cursor-pointer`}
//               >
//                 <div className={`p-6 flex items-center justify-between bg-${event.color}-50`}>
//                   <div>
//                     <div className="text-3xl font-bold">{event.date}</div>
//                     <div className="text-sm opacity-90">{event.month}</div>
//                   </div>
//                   {event.icon}
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2 text-gray-800">{event.title}</h3>
//                   <p className="text-gray-600 text-sm">{event.description}</p>
//                   <div className="flex items-center text-gray-500 text-sm mt-3">
//                     <FaCalendarAlt className="mr-2" />
//                     <span>{event.time}</span>
//                   </div>
//                   <div className="flex items-center text-gray-500 text-sm mt-1">
//                     <FaMapMarkerAlt className="mr-2" />
//                     <span>{event.location}</span>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
