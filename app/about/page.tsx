import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import AboutHero from "@/components/about_hero"
import PromotionSection from "@/components/promotion"
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
