import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="w-full max-w-7xl mx-auto py-20 px-6 md:px-20 bg-white text-center">
      {/* CATEGORY TAG */}
      <p className="text-sm font-semibold text-blue-600 tracking-wider">
        CATEGORY
      </p>

      {/* MAIN TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-12">
        We Offer Best Services
      </h2>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">

        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 mb-4">
            <Image
              src="/images/service1.png"
              width={80}
              height={80}
              alt="service icon"
              className="object-contain w-full h-full"
            />
          </div>
          <h3 className="font-semibold text-gray-800 text-lg">Guided Tours</h3>
          <p className="text-gray-500 text-sm mt-2 max-w-[180px]">
            sunt qui repellat saepe quo velit aperiam id aliquam placeat.
          </p>
        </div>

        {/* Card 2 — Highlighted */}
        <div className="relative flex flex-col items-center">
          {/* Blue Accent Shape */}
          <div className="absolute left-[-20px] bottom-[-20px] w-14 h-14 bg-blue-600 rounded-xl z-0"></div>

          <div className="relative z-10 p-8 bg-white rounded-2xl shadow-xl flex flex-col items-center w-full">
            <div className="w-20 h-20 mb-4">
              <Image
                src="/images/service2.png"
                width={80}
                height={80}
                alt="service icon"
                className="object-contain w-full h-full"
              />
            </div>
            <h3 className="font-semibold text-gray-800 text-lg">
              Best Flights Options
            </h3>
            <p className="text-gray-500 text-sm mt-2 max-w-[180px] text-center">
              sunt qui repellat saepe quo velit aperiam id aliquam placeat.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 mb-4">
            <Image
              src="/images/service3.png"
              width={80}
              height={80}
              alt="service icon"
              className="object-contain w-full h-full"
            />
          </div>
          <h3 className="font-semibold text-gray-800 text-lg">Religious Tours</h3>
          <p className="text-gray-500 text-sm mt-2 max-w-[180px]">
            sunt qui repellat saepe quo velit aperiam id aliquam placeat.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 mb-4">
            <Image
              src="/images/service4.png"
              width={80}
              height={80}
              alt="service icon"
              className="object-contain w-full h-full"
            />
          </div>
          <h3 className="font-semibold text-gray-800 text-lg">Medical Insurance</h3>
          <p className="text-gray-500 text-sm mt-2 max-w-[180px]">
            sunt qui repellat saepe quo velit aperiam id aliquam placeat.
          </p>
        </div>

      </div>
    </section>
  );
}
