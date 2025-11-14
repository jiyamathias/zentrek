"use client"

import { Check } from "lucide-react"

const TourPackages = () => {
  const packages = [
    {
      name: "Explorer",
      price: "$1,299",
      duration: "5 Days",
      description: "Perfect for the adventurous spirit",
      features: ["Hotel accommodation", "Daily breakfast", "Expert guide", "Activities & tours"],
    },
    {
      name: "Wanderer",
      price: "$2,499",
      duration: "10 Days",
      description: "Deep dive into the destination",
      features: ["Luxury accommodation", "All meals included", "VIP guide", "Premium activities", "Airport transfer"],
      highlighted: true,
    },
    {
      name: "Adventurer",
      price: "$3,999",
      duration: "15 Days",
      description: "The ultimate experience",
      features: [
        "5-star accommodation",
        "All-inclusive meals",
        "Personal concierge",
        "Exclusive experiences",
        "Travel insurance",
      ],
    },
  ]

  return (
    <section
      id="packages"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted to-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Popular Tour Plans</h2>
          <p className="text-lg text-muted-foreground">Choose the perfect plan for your journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-3xl overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                pkg.highlighted
                  ? "bg-gradient-to-br from-primary to-secondary shadow-2xl relative"
                  : "bg-white shadow-lg border border-border"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute top-4 right-4 bg-secondary/30 text-white px-4 py-1 rounded-full text-xs font-semibold">
                  Popular
                </div>
              )}
              <div className={`p-8 ${pkg.highlighted ? "text-white" : ""}`}>
                <h3 className={`text-2xl font-bold mb-2 ${pkg.highlighted ? "text-white" : "text-foreground"}`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm mb-4 ${pkg.highlighted ? "text-white/80" : "text-muted-foreground"}`}>
                  {pkg.duration}
                </p>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${pkg.highlighted ? "text-white" : "text-primary"}`}>
                    {pkg.price}
                  </span>
                  <p className={`text-sm mt-2 ${pkg.highlighted ? "text-white/80" : "text-muted-foreground"}`}>
                    {pkg.description}
                  </p>
                </div>
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check size={18} className={pkg.highlighted ? "text-white" : "text-primary"} />
                      <span className={`text-sm ${pkg.highlighted ? "text-white" : "text-foreground"}`}>{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    pkg.highlighted
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg"
                  }`}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TourPackages
