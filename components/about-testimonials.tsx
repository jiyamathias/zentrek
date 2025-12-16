"use client";

import Image from "next/image";

export default function AboutTestimonials() {
  return (
    <section className="relative w-full bg-gray-100 md:mt-20 pt-10 pb-20">
      <div className="mx-auto max-w-5xl px-6 text-center">

        {/* Section Label */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-500">
          Promotion
        </p>

        {/* Heading */}
        <h2 className="mb-16 text-4xl font-bold leading-tight text-[#1E2A5A]">
          See What Our Clients Say <br />
          About Us
        </h2>

        {/* Testimonial Card */}
        <div className="relative mx-auto max-w-xl rounded-2xl bg-white px-10 py-12 shadow-lg">

          {/* Quote icon */}
          <span className="absolute left-8 top-8 text-6xl font-serif text-gray-200">
            “
          </span>

          {/* Avatar */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2">
            <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-md">
              <Image
                src="/images/Ellipse 624 (2).png" // replace with client image
                alt="Client"
                // width={100}
                // height={100}
                fill
              />
            </div>
          </div>

          {/* Content */}
          <p className="mt-8 text-sm leading-relaxed text-gray-600">
            The tours in this website are great. I had been really enjoy
            with my family. The team is very professional and taking
            care of the customers. Will surely recommend to my friend
            to join this company!
          </p>

          <p className="mt-6 text-sm font-semibold text-gray-800">
            Christine Beckham
            <span className="block text-xs font-normal text-gray-400">
              Designer
            </span>
          </p>
        </div>
      </div>

      {/* Decorative elements (optional images) */}
      <Decorations />
    </section>
  );
}

/* ---------------------------------- */
/* Decorative floating images */
/* ---------------------------------- */

function Decorations() {
  return (
    <>
      {/* Top-left shell */}
      <div className="absolute left-[20%] -top-28 hidden md:block">
        <Image src="/images/Travel_Concepts_2 1.png" alt="" width={200} height={200} />
      </div>

      {/* Top-right polaroids */}
      <div className="absolute right-16 -top-10 hidden md:block">
        <Image src="/images/image 919.png" alt="" width={120} height={120} />
      </div>

      {/* Bottom-left travel items */}
      <div className="absolute bottom-0 left-0 hidden md:block">
        <Image src="/images/Travel_Concepts_2 1.png" alt="" width={200} height={200} />
      </div>
    </>
  );
}
