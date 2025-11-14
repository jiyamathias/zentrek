"use client"

import { Star } from "lucide-react"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Anderson",
      location: "San Francisco, USA",
      rating: 5,
      text: "An absolutely incredible experience! The guides were knowledgeable and the itinerary was perfect.",
      image: "/thoughtful-artist.png",
    },
    {
      name: "James Thompson",
      location: "London, UK",
      rating: 5,
      text: "Best vacation ever! Every detail was taken care of. Highly recommend Journeys for your next trip.",
      image: "/thoughtful-artist.png",
    },
    {
      name: "Maria Garcia",
      location: "Barcelona, Spain",
      rating: 5,
      text: "Exceptional service and unforgettable memories. The team made everything so seamless and enjoyable.",
      image: "/thoughtful-artist.png",
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">See What Guests Say About Us</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-muted to-background rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">{`"${testimonial.text}"`}</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
