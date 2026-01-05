import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
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
