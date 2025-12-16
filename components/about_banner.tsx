"use client";

import Image from "next/image";

export default function AboutBanner() {
    return (
        <section className="relative h-[320px] w-full md:h-[420px]">
        {/* Background Image */}
        <Image
            src="/images/Rectangle 19354.png" // replace with your image path
            alt="Travel flexibility banner"
            fill
            priority
            className="object-fill"
        />

        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Text */}
        <div className="relative z-10 flex h-full items-center justify-center px-6">
            <h2 className="text-center font-yesteryear text-4xl text-white md:text-6xl">
            Keep things flexible
            </h2>
        </div>
        </section>
    );
}
