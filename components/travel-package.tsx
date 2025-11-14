import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function TravelPackages() {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-20">

        {/* SECTION HEADER */}
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
            Trendy
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            We Make<br /> World Travel Easy
          </h2>
        </div>

        {/* PACKAGES */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* CARD 1 */}
          <div className="rounded-xl shadow-lg border border-gray-100 overflow-hidden pb-6">
            <div className="relative h-[200px]">
              <Image
                src="/images/rectangle19306.png"
                alt="Switzerland"
                fill
                className="object-cover"
              />

              <div className="absolute bottom-3 left-3">
                <Image
                  src="/city-skyline-night.jpg"
                  alt="Flag"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              </div>
            </div>

            <div className="px-6 mt-5">
              <div className="flex items-center gap-3 text-gray-500 text-sm">
                <span>🗓 5 Days</span>
                <span>👥 135 People Going</span>
                <span className="flex items-center text-yellow-500">
                  <FaStar />
                </span>
              </div>

              <h3 className="text-xl font-semibold mt-3">Switzerland</h3>
              <p className="text-gray-500 text-sm">Europe</p>

              <p className="mt-3 text-blue-600 font-bold text-lg flex items-center gap-2">
                620 $ <span className="line-through text-gray-400 text-sm">1200 $</span>
              </p>

              <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                From scenic Glacier Express rides to private Matterhorn hikes and luxury lakeside
                retreats, discover Switzerland’s finest experiences curated by local experts.
              </p>

              <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                View Packages
              </button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="rounded-xl shadow-lg border border-gray-100 overflow-hidden pb-6">
            <div className="relative h-[200px]">
              <Image
                src="/images/rectangle19307-1.png"
                alt="Brazil"
                fill
                className="object-cover"
              />

              <div className="absolute bottom-3 left-3">
                <Image
                  src="/city-skyline-night.jpg"
                  alt="Flag"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              </div>
            </div>

            <div className="px-6 mt-5">
              <div className="flex items-center gap-3 text-gray-500 text-sm">
                <span>🗓 5 Days</span>
                <span>👥 35 People Going</span>
                <span className="flex items-center text-yellow-500">
                  <FaStar />
                </span>
              </div>

              <h3 className="text-xl font-semibold mt-3">Brazil</h3>
              <p className="text-gray-500 text-sm">South America</p>

              <p className="mt-3 text-blue-600 font-bold text-lg flex items-center gap-2">
                1,640 $ <span className="line-through text-gray-400 text-sm">3200 $</span>
              </p>

              <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                From private Amazon river cruises to Rio’s Carnival front-row seats, experience
                Brazil’s vibrant culture & nature with local insiders.
              </p>

              <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                View Packages
              </button>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="rounded-xl shadow-lg border border-gray-100 overflow-hidden pb-6">
            <div className="relative h-[200px]">
              <Image
                src="/mountain-peak-snow.jpg"
                alt="Giza"
                fill
                className="object-cover"
              />

              <div className="absolute bottom-3 left-3">
                <Image
                  src="/city-skyline-night.jpg"
                  alt="Flag"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              </div>
            </div>

            <div className="px-6 mt-5">
              <div className="flex items-center gap-3 text-gray-500 text-sm">
                <span>🗓 5 Days</span>
                <span>👥 35 People Going</span>
                <span className="flex items-center text-yellow-500">
                  <FaStar />
                </span>
              </div>

              <h3 className="text-xl font-semibold mt-3">Giza</h3>
              <p className="text-gray-500 text-sm">Africa</p>

              <p className="mt-3 text-blue-600 font-bold text-lg flex items-center gap-2">
                2,000 $ <span className="line-through text-gray-400 text-sm">4200 $</span>
              </p>

              <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                From private sunrise tours of the Great Pyramid to desert camel trekking, explore
                Giza’s ancient wonders with expert Egyptologists.
              </p>

              <button className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                View Packages
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
