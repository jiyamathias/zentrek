"use client"

const DestinationsCarousel = () => {
  return (
    <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Keep things flexible</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Customize your travel experience with our flexible tour options
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="relative rounded-3xl overflow-hidden h-96 shadow-lg hover:shadow-2xl transition-all">
                <img
                  src={`/scenic-destination-.jpg?height=400&width=350&query=scenic destination ${item}`}
                  alt={`Destination ${item}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-bold text-foreground mt-4">Exotic Paradise {item}</h3>
              <p className="text-sm text-muted-foreground mt-2">Experience the beauty of nature</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DestinationsCarousel
