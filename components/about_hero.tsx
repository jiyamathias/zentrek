"use client"

const AboutHero = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
            backgroundImage: `url('/images/Rectangle 19292.png')`,
            }}
        >
            <div className="absolute inset-0 bg-linear-to-b from-slate-900/40 to-slate-900/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-fade-in-up">
                <div className="inline-block text-white text-xl mb-1 font-bold">Read</div>
                <h1 className="text-4xl md:text-7xl font-serif italic  font-bold text-white text-balance leading-tight">
                    About
                </h1>
            </div>
        </div>
        </section>
    )
}

export default AboutHero
