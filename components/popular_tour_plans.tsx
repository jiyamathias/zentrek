"use client";

import Image from "next/image";

function ProgressRing({
    percentage,
    label,
    color,
}: {
    percentage: number;
    label: string;
    color: string;
}) {
    const radius = 42;
    const stroke = 8;
    const normalizedRadius = radius - stroke * 0.5;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset =
        circumference - (percentage / 100) * circumference;

    return (
        <div className="flex flex-col items-center">
        <svg height={radius * 2} width={radius * 2}>
            <circle
            stroke="#E5E7EB"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            />
            <circle
            stroke={color}
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${circumference} ${circumference}`}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            />
            <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="fill-gray-700 text-sm font-semibold"
            >
            {percentage}%
            </text>
        </svg>

        <p className="mt-3 text-xs font-semibold tracking-wide text-gray-700">
            {label}
        </p>
        </div>
    );
}

export default function PopularTourPlans() {
    return (
        <section className="w-full bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 md:grid-cols-2">

            {/* LEFT – SINGLE IMAGE */}
            <div className="relative flex justify-center">
            {/* Stamp */}
            {/* <div className="absolute -top-10 left-20 z-0 opacity-30">
                <span className="select-none text-7xl font-serif tracking-widest text-gray-400">
                PARIS
                </span>
            </div> */}

            {/* Main Image */}
            <div className="">
                <Image
                src="/images/about-us-img-2 1.png" // replace with your single image
                alt="Popular tour"
                width={300}
                height={500}
                className=" object-cover"
                priority
                />
            </div>

            {/* Signature */}
            {/* <div className="absolute -bottom-10 left-16 z-20 rotate-[-6deg] text-4xl font-[cursive] text-black/70">
                J
            </div> */}
            </div>

            {/* RIGHT – CONTENT */}
            <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                Trend
            </p>

            <h2 className="mb-4 text-4xl font-bold text-[#1E2A5A]">
                Our Popular Tour Plans
            </h2>

            <p className="mb-10 max-w-md text-sm leading-relaxed text-gray-500">
                Trusted by 10,000+ couples. Rated 5/5. Enjoy handpicked adults-only
                resorts, seamless planning, and dedicated romance concierge service.
            </p>

            {/* PROGRESS STATS */}
            <div className="flex flex-wrap gap-10">
                <ProgressRing
                percentage={78}
                label="VACATIONS"
                color="#3B82F6"
                />
                <ProgressRing
                percentage={55}
                label="HONEYMOON"
                color="#FB7185"
                />
                <ProgressRing
                percentage={30}
                label="MUSICAL EVENTS"
                color="#8B5CF6"
                />
            </div>
            </div>

        </div>
        </section>
    );
}
