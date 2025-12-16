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
import AboutHero from "@/components/about_hero"
import PromotionSection from "@/components/promotion"
import TourPlansBanner from "@/components/about_banner"
import AboutBanner from "@/components/about_banner"
import PopularTourPlans from "@/components/popular_tour_plans"
import AboutTopAttractions from "@/components/about-top-attractions"
import AboutTestimonials from "@/components/about-testimonials"

export default function Home() {
    return (
        <main className="w-full">
        <Navigation />
        <AboutHero />
        <PromotionSection />
        <AboutBanner />
        <PopularTourPlans />
        <AboutTopAttractions />
        <AboutTestimonials />
        <Footer />
        </main>
    )
}
