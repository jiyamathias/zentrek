import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Services from "@/components/services"
import TrendingDestinations from "@/components/trending-destinations"
import HoneymoonSection from "@/components/horney-moon"
import LondonStatusImage from "@/components/london-image"
import ResortBookingSection from "@/components/resort-booking"
import ExploreNaturePromo from "@/components/explore-nature"
import TravelPackages from "@/components/travel-package"
import WhyChooseZentrek from "@/components/why-choose"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <Services />
      <HoneymoonSection />
      <LondonStatusImage />
      {/* <RomanticDestinations /> */}
      <ResortBookingSection />
      <TrendingDestinations />
      {/* <WorldTravelEasy /> */}
      <ExploreNaturePromo />
      <TravelPackages />
      <WhyChooseZentrek />
      <Footer />
    </main>
  )
}
