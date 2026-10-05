import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SelectedProjects from "@/components/SelectedProjects";
import ExperienceServices from "@/components/ExperienceServices";
import EditorialInsights from "@/components/EditorialInsights";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
      <Header />
      <main>
        <Hero />
        <SelectedProjects />
        <ExperienceServices />
        <EditorialInsights />
      </main>
      <Footer />
    </div>
  );
}
