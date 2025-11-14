"use client"

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/mountain-hiking-trail.png')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-900/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in-up">
          <div className="inline-block text-secondary text-sm font-semibold mb-4">EXPLORE THE WORLD</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance leading-tight">
            No matter where you&apos;re going, we&apos;ll take you there
          </h1>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-2xl mx-auto mb-8 border border-white/20">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              <input
                type="text"
                placeholder="Depart"
                className="bg-white/20 text-white placeholder-white/50 rounded px-3 py-2 text-sm"
              />
              <select className="bg-white/20 text-white rounded px-3 py-2 text-sm">
                <option className="text-foreground">Travel Type</option>
              </select>
              <input
                type="text"
                placeholder="Duration"
                className="bg-white/20 text-white placeholder-white/50 rounded px-3 py-2 text-sm"
              />
              <button className="bg-secondary hover:bg-orange-600 text-white rounded px-4 py-2 font-semibold text-sm transition">
                Add
              </button>
            </div>
          </div>

          {/* Partner logos */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-white/70 text-xs">
            <span>PARTNERS</span>
            <span>Emirates</span>
            <span>Trivago</span>
            <span>Airbnb</span>
            <span>Turkish</span>
            <span>Swiss</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
