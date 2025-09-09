import About from "@/my_components/aboutUs/About";
import BeforeAfter from "@/my_components/beforeAfter/BeforeAfter";
import Hero from "@/my_components/hero/Hero";
import Navbar from "@/my_components/navbar/Navbar";
import Surfaces from "@/my_components/surfaces/Surfaces";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mt-20 lg:space-y-16">
        <Hero />
        <BeforeAfter />
        <About />
        <Surfaces />
      </main>
    </>
  );
}
