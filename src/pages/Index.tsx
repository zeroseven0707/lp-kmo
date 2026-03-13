import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import EcosystemSection from "@/components/EcosystemSection";
import DownloadSection from "@/components/DownloadSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <EcosystemSection />
      <DownloadSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
