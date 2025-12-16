import Image from "next/image";

export default function HoneymoonSection() {
  return (
    <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-20 px-6 md:px-20 gap-10">
      {/* Left Side Image with BG */}
      <div className="w-full md:w-3/5 flex justify-center items-center">
        <div className="h-[420px] md:h-[620px]">
          <Image
            width={420}
            height={800}
            src="/honey-moon.png"
            alt="Main couple"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Right Side Text */}
      <div className="w-full md:w-1/2 md:pl-10">
        <p className="text-sm tracking-wider text-blue-600 font-semibold">HONEYMOON SPECIALS</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Our Romantic Tropical <br /> Destinations
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed text-sm md:text-base max-w-md">
          Find the perfect romantic setting without the endless searching. We
          offer exclusive access to the most sought-after tropical destinations
          and resorts, all packaged for an unforgettable experience for two.
          Your dream romantic getaway is simpler to book than you think.
        </p>

        <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all">
          Explore Tour
        </button>
      </div>
    </section>
  );
}
