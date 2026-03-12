import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProgressiveLensesSection from "@/components/ProgressiveLensesSection";
import BookingSection from "@/components/BookingSection";
import VisualTestSection from "@/components/VisualTestSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProgressiveLensesSection />
      <BookingSection />
      <VisualTestSection />
      <BlogSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
