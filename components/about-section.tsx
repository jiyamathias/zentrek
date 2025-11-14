"use client"

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-slide-in-left">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96">
              <img
                src="/tropical-beach-paradise.png"
                alt="Beautiful tropical destination"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Journeys</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6" />
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              We Provide the Best Managed Sightseeing Tours, crafted with expertise and passion for travel.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over a decade of experience, we&apos;ve created thousands of unforgettable memories for travelers
              worldwide. Our team of dedicated professionals ensures every detail of your journey is perfect.
            </p>
            <div className="flex gap-8">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
                <p className="text-sm text-muted-foreground">Destinations Worldwide</p>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-secondary mb-2">10k+</h3>
                <p className="text-sm text-muted-foreground">Happy Travelers</p>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-primary mb-2">100%</h3>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
