import { Star } from "lucide-react"

const WorldTravelEasy = () => {
  const tours = [
    {
      name: "Switzerland",
      region: "Europe",
      duration: "5 Days",
      people: "210 People Going",
      price: "620 $",
      originalPrice: "1,200 $",
      rating: 5,
      description:
        "From scenic glacier Express rides to private Matterhorn hikes and luxury leisuite retreats, discover Switzerland's finest experiences curated by local experts",
      image: "/switzerland-alps-mountains.jpg",
    },
    {
      name: "Brazil",
      region: "South America",
      duration: "5 Days",
      people: "35 People Going",
      price: "1,640 $",
      originalPrice: "2,500 $",
      rating: 5,
      description:
        "From private Amazon river cruises to Rio's Carnival front-seats and kisteen beach paradises, experience Brazil's vibrant culture and nature with local insiders",
      image: "/brazil-rio-carnival-beach.jpg",
    },
    {
      name: "Giza",
      region: "Africa",
      duration: "5 Days",
      people: "35 People Going",
      price: "2,000 $",
      originalPrice: "4,200 $",
      rating: 5,
      description:
        "From private sunrise tours of the Great Pyramid to exclusive Scarab temple access and camel head paths with expert Egyptologists, experience Giza's ancient wonders without the crowds",
      image: "/giza-pyramids-egypt-ancient.jpg",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-secondary text-sm font-semibold mb-2">TARGET</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">We Make World Travel Easy</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour, idx) => (
            <div
              key={idx}
              className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${tour.image}')` }} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">{tour.name}</h3>
                  <div className="flex gap-1">
                    {[...Array(tour.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{tour.region}</p>
                <div className="flex gap-4 text-xs text-muted-foreground mb-3">
                  <span>{tour.duration}</span>
                  <span>{tour.people}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{tour.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-foreground">{tour.price}</span>
                  <span className="text-sm line-through text-muted-foreground">{tour.originalPrice}</span>
                </div>
                <button className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg font-semibold transition">
                  View Packages
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorldTravelEasy
