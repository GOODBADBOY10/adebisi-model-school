"use client";

import { useState } from "react";

export default function FAQ() {
    const faqs = [
        {
            question: "What courses do you offer?",
            answer: "We offer a variety of undergraduate and postgraduate programs.",
        },
        {
            question: "How can I apply?",
            answer: "You can apply online through our admissions portal.",
        },
        {
            question: "Do you provide scholarships?",
            answer: "Yes, we offer merit-based and need-based scholarships.",
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-10">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">FAQs</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b pb-4">
                            <button
                                className="flex justify-between items-center w-full text-left font-medium text-gray-800"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span>{openIndex === index ? "−" : "+"}</span>
                            </button>
                            {openIndex === index && (
                                <p className="mt-2 text-gray-600">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
