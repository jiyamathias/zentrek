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
import GalleryHero from "@/components/gallery_hero"
import TourBookingSection from "@/components/tour_booking"
import ExploreSection from "@/components/explore_section"
import ExploreHero from "@/components/explore_hero"

export default function Home() {
    return (
        <main className="w-full">
        <Navigation />
        <ExploreHero />
        <ExploreSection />
        <Footer />
        </main>
    )
}
