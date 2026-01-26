import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { HeroSection } from "@/components/marketing/hero-section";
import { CategorySection } from "@/components/marketing/category-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategorySection />
      </main>
      <Footer />
    </div>
  );
}
