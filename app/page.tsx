import About from "@/my_components/aboutUs/About";
import BeforeAfter from "@/my_components/beforeAfter/BeforeAfter";
import Faq from "@/my_components/faq/Faq";
import Hero from "@/my_components/hero/Hero";
import Map from "@/my_components/map/Map";
import Navbar from "@/my_components/navbar/Navbar";
import Gallery from "@/my_components/portfolio/Gallery";
import Pricing from "@/my_components/pricing/Pricing";
import Surfaces from "@/my_components/surfaces/Surfaces";
import WhereUV from "@/my_components/whereUv/WhereUV";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mt-20 lg:space-y-16">
        <Hero />
        <BeforeAfter />
        <About />
        <Surfaces />
        <WhereUV />
        {/* <Gallery /> */}
        <Map />
        <Pricing />
        <Faq />
      </main>
    </>
  );
}
