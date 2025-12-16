"use client";

import Image from "next/image";

const attractions = [
    { title: "Barcelona", image: "/images/destination3.png", price: "$840" },
    { title: "Switzerland", image: "/images/destination3.png", price: "$840" },
    { title: "Rio de Janeiro", image: "/images/Rectangle 19357.png", price: "$840", featured: true },
    { title: "Barcelona", image: "/images/destination3.png", price: "$840" },
    { title: "Tomorrow Land", image: "/images/destination3.png", price: "$840" },
    { title: "Los Angeles", image: "/images/destination3.png", price: "$840" },
    { title: "India", image: "/images/destination3.png", price: "$840" },
    { title: "Barcelona", image: "/images/destination3.png", price: "$840" },
    { title: "Maldives", image: "/images/destination3.png", price: "$840" },
    { title: "Barcelona", image: "/images/destination3.png", price: "$840" },
    { title: "Pakistan", image: "/images/destination3.png", price: "$840" },
];

export default function AboutTopAttractions() {
    return (
        <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">

            {/* HEADER */}
            <div className="mb-14 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600">
                Explore More
            </p>
            <h2 className="text-4xl font-bold text-[#1E2A5A]">
                Our Top Attractions
            </h2>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {attractions.map((item, index) => {
                if (item.featured) {
                return (
                    <div
                    key={index}
                    className="relative row-span-2 overflow-hidden rounded-xl md:row-span-2"
                    >
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                    />
                    <Overlay title={item.title} price={item.price} />
                    </div>
                );
                }

                return (
                <div
                    key={index}
                    className="relative aspect-square overflow-hidden rounded-xl"
                >
                    <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    />
                    <Overlay title={item.title} price={item.price} />
                </div>
                );
            })}
            </div>
        </div>
        </section>
    );
}

function Overlay({ title, price }: { title: string; price: string }) {
    return (
        <div className="absolute inset-0 flex flex-col justify-end bg-black/10 p-4 transition hover:bg-black/30">
        <div className="flex items-center justify-between text-sm font-medium text-white">
            <span>{title}</span>
            <span>{price}</span>
        </div>
        </div>
    );
}
