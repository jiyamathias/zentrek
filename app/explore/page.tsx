import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import GalleryHero from "@/components/gallery_hero"
import TourBookingSection from "@/components/tour_booking"

export default function Home() {
    return (
        <main className="w-full">
        <Navigation />
        <GalleryHero />
        <TourBookingSection />
        <Footer />
        </main>
    )
}
