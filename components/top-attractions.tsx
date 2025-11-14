"use client"

const TopAttractions = () => {
  const attractions = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Attraction ${i + 1}`,
    image: `/placeholder.svg?height=250&width=250&query=tourist attraction ${i + 1}`,
  }))

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Top attractions</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((attraction) => (
            <div
              key={attraction.id}
              className="group relative rounded-2xl overflow-hidden h-64 shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              <img
                src={attraction.image || "/placeholder.svg"}
                alt={attraction.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-6 group-hover:translate-y-0 transition-transform">
                <p className="text-white font-semibold text-sm">{attraction.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TopAttractions
