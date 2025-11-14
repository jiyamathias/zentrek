import Image from "next/image";

export default function ResortBookingSection() {
  return (
    <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-20 md:px-20">
      
      {/* LEFT SIDE TEXT */}
      <div className="w-full md:w-1/2 z-10">
        <p className="text-sm text-blue-600 font-semibold tracking-wider">
          Fast & Easy
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mt-3">
          Get Your Favourite <br /> Resort Bookings
        </h2>

        <div className="mt-10 space-y-8">

          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <Image
              src="/icons/square-icon.png"
              width={40}
              height={40}
              alt="icon"
            />
            <div>
              <h4 className="font-semibold text-gray-800">Choose Destination</h4>
              <p className="text-gray-600 text-sm mt-1 max-w-sm">
                Top picks selling out for 2025. Save up to 25% when you book your destination today
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4">
            <Image
              src="/icons/swim-icon.png"
              width={40}
              height={40}
              alt="icon"
            />
            <div>
              <h4 className="font-semibold text-gray-800">Check Availability</h4>
              <p className="text-gray-600 text-sm mt-1 max-w-sm">
                See real-time availability, pricing, and instant confirmation options—no commitment required
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4">
            <Image
              src="/icons/car-icon.png"
              width={40}
              height={40}
              alt="icon"
            />
            <div>
              <h4 className="font-semibold text-gray-800">Let’s Go</h4>
              <p className="text-gray-600 text-sm mt-1 max-w-sm">
                Your adventure is confirmed. Get ready for unforgettable experiences, seamless logistics, and memories that last a lifetime
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE: Single Image + Blue Glow */}
      <div className="w-full md:w-1/2 h-[650px] flex justify-center md:justify-end mt-16 md:mt-0">
          <Image
            src="/images/flight-destination.png"
            width={500}
            height={500}
            //  width={420}
            // height={800}
            alt="Resort Showcase"
            className="object-cover w-full h-full"
          />
      </div>

    </section>
  );
}
