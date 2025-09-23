"use client";

import React, { useState } from "react";

type Gallery = {
    id: number;
    title: string;
    date: string;
    images: string[];
};

export default function PhotoGallery() {
    // Sample gallery data
    const galleries: Gallery[] = [
        {
            id: 1,
            title: "ADEBISI MODEL SCHOOL OPENING",
            date: "2018",
            images: [
                "/GOODBADBOY.jpg",
                "/GOODBADBOY1.jpg",
                "/GOODBADBOY2.jpg",
                "/GOODBADBOY2.jpg",
                "/GOODBADBOY1.jpg",
                "/GOODBADBOY1.jpg",
                "/GOODBADBOY2.jpg",
                "/GOODBADBOY1.jpg",
                "/GOODBADBOY2.jpg",
                "/GOODBADBOY1.jpg",
            ],
        },
        {
            id: 2,
            title: "ADEBISI MODEL SCHOOL EXCURSION",
            date: "2019",
            images: [
                "/adebisi17.jpg",
                "/adebisi18.jpg",
                "/adebisi19.jpg",
                "/adebisi20.jpg",
                "/adebisi21.jpg",
                "/adebisi22.jpg",
                "/adebisi23.jpg",
                "/adebisi24.jpg",
                "/adebisi25.jpg",
                "/adebisi26.jpg",
                "/adebisi27.jpg",
            ],
        },
        {
            id: 3,
            title: "ADEBISI MODEL SCHOOL ILEYA FESTIVAL",
            date: "2020",
            images: [
                "/GOODBADBOY.jpg",
                "/GOODBADBOY1.jpg",
                "/GOODBADBOY2.jpg",
                "/GOODBADBOY2.jpg",
                "/GOODBADBOY1.jpg",
                "/GOODBADBOY1.jpg",
                "/GOODBADBOY2.jpg",
                "/GOODBADBOY1.jpg",
                "/GOODBADBOY2.jpg",
                "/GOODBADBOY1.jpg",
            ],
        },
        {
            id: 4,
            title: "EARLY YEARS FACILITIES AT ADEBISI MODEL SCHOOL",
            date: "2021",
            images: [
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
            ],
        },
        {
            id: 5,
            title: "ADEBISI MODEL SCHOOL CHILDREN'S DAY CONCERT",
            date: "2022",
            images: [
                "/GOODBADBOY.jpg",
                "/GOODBADBOY1.jpg",
                "/GOODBADBOY2.jpg",
                "/GOODBADBOY2.jpg",
                "/GOODBADBOY1.jpg",
                "/GOODBADBOY1.jpg",
                "/GOODBADBOY2.jpg",
                "/GOODBADBOY1.jpg",
                "/GOODBADBOY2.jpg",
                "/GOODBADBOY1.jpg",
            ],
        },
        {
            id: 6,
            title: "EARLY YEARS FACILITIES AT ADEBISI MODEL SCHOOL",
            date: "2023",
            images: [
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
            ],
        },
        {
            id: 7,
            title: "END OF THE YEAR ACTIVITIES",
            date: "2024",
            images: [
                "/adebisi7.jpg",
                "/adebisi8.jpg",
                "/adebisi9.jpg",
                "/adebisi10.jpg",
                "/adebisi11.jpg",
                "/adebisi12.jpg",
                "/adebisi13.jpg",
                "/adebisi14.jpg",
                "/adebisi15.jpg",
                "/adebisi16.jpg",
                "/adebisi28.jpg",
                "/adebisi29.jpg",
                "/adebisi30.jpg",
                "/adebisi31.jpg",
                "/adebisi32.jpg",
                "/adebisi33.jpg",
                "/adebisi34.jpg",
                "/adebisi35.jpg",
                "/adebisi36.jpg",
                "/adebisi37.jpg",
                "/adebisi38.jpg",
                "/adebisi39.jpg",
                "/adebisi40.jpg",
                "/adebisi41.jpg",
                "/adebisi42.jpg",
                "/adebisi43.jpg",
                "/adebisi44.jpg",
                "/adebisi45.jpg",
                "/adebisi46.jpg",
                "/adebisi47.jpg",
            ],
        },
        {
            id: 8,
            title: "END OF THE YEAR ACTIVITIES",
            date: "2025",
            images: [
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
                "/GOODBADBOY.jpg",
            ],
        },
    ];

    const [selectedGallery, setSelectedGallery] = useState<Gallery | null>(null);

    const openGalleryPage = (gallery: Gallery) => {
        setSelectedGallery(gallery);
    };

    const backToGalleries = () => {
        setSelectedGallery(null);
    };

    // Individual gallery view
    if (selectedGallery) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="bg-white pt-24 pb-8">
                    <div className="max-w-6xl mx-auto px-4">
                        <button
                            onClick={backToGalleries}
                            className="mb-4 text-slate-600 cursor-pointer hover:text-slate-800 flex items-center gap-2 transition-colors"
                        >
                            ← Back to All Galleries
                        </button>
                        <h1 className="text-3xl font-bold text-slate-800 mb-2">
                            {selectedGallery.title}
                        </h1>
                        <p className="text-orange-500 text-lg font-medium">{selectedGallery.date}</p>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {selectedGallery.images.map((image, index) => (
                            <div
                                key={index}
                                className="bg-white p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 rounded-lg"
                            >
                                <img
                                    src={image}
                                    alt={`${selectedGallery.title} - Photo ${index + 1}`}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Main galleries overview
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white pt-24 pb-3">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-slate-800 uppercase tracking-widest text-3xl font-medium mb-4">
                        SOME MOMENTS - ADEBISI MODEL SCHOOL, OSUN
                    </p>
                    <h1 className="text-5xl md:text-6xl font-serif text-slate-800 mb-2 tracking-widest">ALL IMAGE</h1>
                    <h1 className="text-5xl md:text-6xl font-serif text-slate-800 tracking-widest">GALLERIES</h1>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {galleries.map((gallery) => (
                        <div
                            key={gallery.id}
                            className="cursor-pointer transform hover:scale-105 transition-all duration-300"
                            onClick={() => openGalleryPage(gallery)}
                        >
                            <div className="relative w-48 h-48 mx-auto mb-6">
                                <div className="absolute inset-0 bg-white rounded-full shadow-2xl"></div>
                                <div className="absolute inset-4 rounded-full overflow-hidden">
                                    {gallery.images.slice(0, 4).map((image, index) => (
                                        <div
                                            key={index}
                                            className="absolute bg-white p-1 shadow-md rounded-md"
                                            style={{
                                                width: 60,
                                                height: 50,
                                                top: 20 + index * 8,
                                                left: 25 + index * 12,
                                                transform: `rotate(${-15 + index * 10}deg)`,
                                                zIndex: index + 1,
                                            }}
                                        >
                                            <img src={image} alt={`Preview ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                                        </div>
                                    ))}
                                </div>
                                <div className="absolute inset-0 bg-slate-800 bg-opacity-0 hover:bg-opacity-10 rounded-full transition-all duration-300 flex items-center justify-center">
                                    <span className="text-white opacity-0 hover:opacity-100 font-semibold">View Gallery</span>
                                </div>
                            </div>

                            <div className="text-center">
                                <h3 className="text-slate-800 font-bold text-sm mb-2 leading-tight uppercase tracking-wide">
                                    {gallery.title}
                                </h3>
                                <p className="text-orange-500 text-sm font-medium">{gallery.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}