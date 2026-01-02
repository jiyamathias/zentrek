"use client";
import React from "react";
import Image from "next/image";

const ExploreSection: React.FC = () => {
  return (
    <section className="w-full bg-white flex justify-center py-16 md:py-24 px-4">
      {/* Outer container */}
      <div className="max-w-6xl w-full bg-white shadow-xl rounded-2xl p-5 md:p-8 relative">

        {/* GRID CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

          {/* LEFT = IMAGE GRID */}
          <div className="md:col-span-2 flex flex-col">

            {/* TOP IMAGE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

              {/* Left stacked images */}
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 md:grid-rows-3 md:h-[520px]">
                <Image
                  src="/images/Rectangle 19321 (3).png"
                  alt=""
                  width={400}
                  height={300}
                  className="rounded-xl object-cover w-full h-[160px] md:h-full"
                />
                <Image
                  src="/images/Rectangle 19321 (4).png"
                  alt=""
                  width={400}
                  height={300}
                  className="rounded-xl object-cover w-full h-[160px] md:h-full"
                />
                <Image
                  src="/images/Rectangle 19321 (6).png"
                  alt=""
                  width={400}
                  height={300}
                  className="rounded-xl object-cover w-full h-[160px] md:h-full sm:col-span-2 md:col-span-1"
                />
              </div>

              {/* Center dominant image */}
              <div className="sm:col-span-2 md:col-span-2 h-[260px] sm:h-[360px] md:h-[520px]">
                <Image
                  src="/images/Rectangle 19321.png"
                  alt=""
                  width={800}
                  height={800}
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Bottom wide images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              <Image
                src="/images/Rectangle 19321 (7).png"
                alt=""
                width={600}
                height={400}
                className="md:col-span-2 rounded-xl object-cover w-full h-[200px]"
              />

              <Image
                src="/images/Rectangle 19321 (8).png"
                alt=""
                width={600}
                height={400}
                className="rounded-xl object-cover w-full h-[200px]"
              />
            </div>

            {/* Final stretched image */}
            <div className="mt-4">
              <Image
                src="/images/Rectangle 19321 (9).png"
                alt=""
                width={1200}
                height={500}
                className="rounded-xl object-cover w-full h-[220px] md:h-[260px]"
              />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-[#F2F2F2] rounded-xl shadow-lg p-6 md:p-10 flex flex-col justify-between min-h-[480px]">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-4 text-[#1D2434]">
                Book This Tour
              </h3>

              <p className="text-sm text-gray-600 text-center mb-6 px-2 md:px-4 leading-relaxed">
                Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt?
              </p>

              <form className="flex flex-col gap-3">
                <input type="text" placeholder="Name" className="inputField" />
                <input type="email" placeholder="Email" className="inputField" />
                <input type="email" placeholder="Confirm Email" className="inputField" />
                <input type="tel" placeholder="Phone" className="inputField" />
                <input type="text" placeholder="dd-mm-yy" className="inputField" />
                <input type="number" placeholder="Number of ticket" className="inputField" />
                <textarea
                  placeholder="Message"
                  className="inputField resize-none h-[110px]"
                />
              </form>
            </div>

            <div className="flex flex-col gap-3 pt-6">
              <button className="w-full rounded-full py-3 text-white font-semibold bg-[#FD6A02] hover:opacity-90 transition">
                Check Availability
              </button>
              <button className="w-full rounded-full py-3 text-white font-semibold bg-[#0046BB] hover:opacity-90 transition">
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* DECORATIVE IMAGES (desktop only) */}
        <div className="hidden md:flex justify-end w-full mt-10">
          <Image src="/images/273 1.png" alt="Travel luggage" width={450} height={450} />
        </div>

        <div className="hidden md:flex justify-start w-full -mt-6">
          <Image src="/images/image 921.png" alt="Decorative leaf" width={220} height={220} />
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
