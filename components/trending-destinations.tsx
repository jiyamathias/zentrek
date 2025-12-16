import Image from "next/image";

export default function TrendingDestinations() {
  return (
    <section className="w-full max-w-7xl mx-auto py-5 md:py-20 px-6 md:px-20 relative">

      {/* RIGHT MAIN IMAGE — ABSOLUTE BEHIND EVERYTHING */}
      <div className="hidden md:block md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2 md:pointer-events-none -z-10 pb-5 md:pb-0">
        <div className="w-[340px] md:w-[450px] h-[480px] md:h-[650px]">
          <Image
            src="/images/paris-tower.png"
            alt="Eiffel Tower"
            width={800}
            height={1000}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-20 relative z-20">

        {/* LEFT CONTENT */}
        <div className="w-full">

          <p className="text-sm text-blue-600 tracking-wider font-semibold uppercase">
            Promotion
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Trending Destinations
          </h2>

          <p className="text-gray-600 mt-4 max-w-md leading-relaxed">
            Some places capture the world’s imagination all at once. These are the 
            destinations on everyone’s lips, brimming with energy, new experiences, 
            unforgettable moments, and breathtaking views.
          </p>

          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            View Packages
          </button>

          {/* DESTINATION CARDS — 4 IMAGES TOGETHER */}
          <div className="mt-10 grid grid-cols-2 md:flex gap-2 md:gap-10">

            {[
              { price: "$700", src: "/images/destination1.png", color: "bg-red-500" },
              { price: "$800", src: "/images/destination2.png", color: "bg-orange-500" },
              { price: "$500", src: "/images/destination3.png", color: "bg-rose-500" },
              { price: "$400", src: "/images/destination4.png", color: "bg-red-400" },
            ].map((item, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-lg md:w-[200px] md:h-[200px]"
              >
                <Image
                  src={item.src}
                  alt="Destination"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />

                <div
                  className={`absolute top-2 right-2 ${item.color} text-white text-xs px-2 py-1 rounded-full`}
                >
                  {item.price}
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>

       {/* RIGHT MAIN IMAGE — ABSOLUTE BEHIND EVERYTHING
      <div className="hidden md:block md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2 md:pointer-events-none -z-10 pt-5 md:pb-0">
        <div className="w-[340px] md:w-[450px] h-[480px] md:h-[650px]">
          <Image
            src="/images/paris-tower.png"
            alt="Eiffel Tower"
            width={800}
            height={1000}
            className="object-cover w-full h-full"
          />
        </div>
      </div> */}

    </section>
  );
}
