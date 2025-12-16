"use client";

import Image from "next/image";

export default function PromotionSection() {
    return (
        <section className="w-full bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
            
            {/* LEFT CONTENT */}
            <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-500">
                Promotion
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-[#1E2A5A] md:text-5xl">
                We Provide You Best <br />
                Europe Sightseeing Tours
            </h1>

            <p className="mb-8 max-w-md text-sm leading-relaxed text-gray-500">
                From skip-the-line access at the Eiffel Tower to private gondola rides
                in Venice, our expertly curated tours transform typical trips into
                unforgettable European stories.
            </p>

            <button className="rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                Explore Our Tours
            </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center">
            {/* Decorative frame */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[420px] w-[420px] rounded-full border border-blue-200"></div>
            </div>

            {/* Image */}
            <div className="relative z-10 h-[380px] w-[380px] overflow-hidden rounded-full">
                <Image
                src="/images/Group 1000001802.png" // replace with your image path
                alt="Europe sightseeing"
                fill
                className="object-cover"
                priority
                />
            </div>
            </div>

        </div>
        </section>
    );
}
