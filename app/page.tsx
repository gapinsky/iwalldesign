import About from "@/my_components/aboutUs/About";
import BeforeAfter from "@/my_components/beforeAfter/BeforeAfter";
import Contact from "@/my_components/contact/ContactForm";
import Faq from "@/my_components/faq/Faq";
import Footer from "@/my_components/footer/Footer";
import Hero from "@/my_components/hero/Hero";
import Map from "@/my_components/map/Map";
import Navbar from "@/my_components/navbar/Navbar";
import Gallery from "@/my_components/portfolio/Gallery";
import Pricing from "@/my_components/pricing/Pricing";
import Surfaces from "@/my_components/surfaces/Surfaces";
import { VisualizerSection } from "@/my_components/vizualizationSection/VizualizationSection";
import WhereUV from "@/my_components/whereUv/WhereUV";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mt-20 space-y-12 lg:space-y-24">
        <Hero />
        <BeforeAfter />
        <WhereUV />
        <Surfaces />
        <VisualizerSection />
        <Gallery />
        <About />
        <Pricing />
        <Map />
        <Faq />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
