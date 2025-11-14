import Image from "next/image";

export default function ExploreNaturePromo() {
  return (
    <section className="w-full py-12">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* LEFT PROMO */}
        <div className="relative h-80 overflow-hidden">
          <Image
            src="/tropical-beach-paradise.png"
            alt="Nature"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          {/* CENTERED CONTENT */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-10">
            <p className="text-sm font-semibold tracking-wider uppercase">
              Promotion
            </p>
            <h2 className="text-3xl font-bold mt-2">Explore Nature</h2>

            <button className="mt-5 border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-black transition">
              View Packages
            </button>
          </div>
        </div>

        {/* RIGHT PROMO */}
        <div className="relative h-80 overflow-hidden">
          <Image
            src="/scenic-destination-.jpg"
            alt="Nature"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          {/* CENTERED CONTENT */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-10">
            <p className="text-sm font-semibold tracking-wider uppercase">
              Promotion
            </p>
            <h2 className="text-3xl font-bold mt-2">Explore Nature</h2>

            <button className="mt-5 border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-black transition">
              View Packages
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
