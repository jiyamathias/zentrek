"use client";
import React from "react";
import Image from "next/image";

const TourBookingSection: React.FC = () => {
  return (
    <section className="w-full bg-white flex justify-center py-24 px-4">
      {/* Outer container */}
      <div className="max-w-7xl w-full bg-white shadow-xl rounded-2xl p-8 relative">

        {/* GRID CONTENT */}
        <div className="grid md:grid-cols-3 gap-16 items-stretch">
          {/* LEFT */}
          <div className="md:col-span-2 flex flex-col">
            <h2 className="text-3xl font-bold mb-6 text-[#1D2434]">Tour Plan</h2>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
              Discover Where Travelers Are Heading Right Now. From Hidden Gems To Viral Hotspots...
            </p>

            {/* MAP */}
            <div className="w-full grow rounded-xl overflow-hidden border border-gray-300 min-h-[480px]">
              <Image
                src="/images/google_map.png"
                alt="Tour Map"
                width={1000}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-gray-600 mt-4">
              Day-By-Day itinerary, included meals, entrance fees & 24/7 support.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-[#F2F2F2] rounded-xl shadow-lg p-10 flex flex-col justify-between min-h-[480px]">
            <div>
              <h3 className="text-3xl font-bold text-center mb-4 text-[#1D2434]">Book This Tour</h3>
              <p className="text-sm text-gray-600 text-center mb-8 px-4 leading-relaxed">
                Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt?
              </p>

              <form className="flex flex-col gap-3">
                <div className="inputWrap"><input type="text" placeholder="Name" className="inputField" /></div>
                <div className="inputWrap"><input type="email" placeholder="Email" className="inputField" /></div>
                <div className="inputWrap"><input type="email" placeholder="Confirm Email" className="inputField" /></div>
                <div className="inputWrap"><input type="tel" placeholder="Phone" className="inputField" /></div>
                <div className="inputWrap"><input type="text" placeholder="dd-mm-yy" className="inputField" /></div>
                <div className="inputWrap"><input type="number" placeholder="Number of ticket" className="inputField" /></div>
                <div className="inputWrap h-[110px] items-start">
                  <textarea placeholder="Message" className="inputField resize-none h-full" />
                </div>
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

        {/* === DECORATIVE IMAGES INSIDE FOLLOWING THE FLOW === */}

        {/* First row – luggage on RIGHT */}
        <div className="flex justify-end w-full mt-10">
          <Image
            src="/images/273 1.png"
            alt="Travel luggage"
            width={340}
            height={340}
            className="object-contain"
          />
        </div>

        {/* Second row – flower on LEFT */}
        <div className="flex justify-start w-full -mt-6">
          <Image
            src="/images/image 921.png"
            alt="Decorative leaf"
            width={220}
            height={220}
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default TourBookingSection;
