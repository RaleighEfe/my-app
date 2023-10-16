import HeroSection from "@/components/organism/HeroSection";
import NavBar from "@/components/molecules/NavBar";
import About from "@/components/organism/About";
import Portfolio from "@/components/organism/portfolio";
import Footer from "@/components/molecules/Footer";
import Contact from "@/components/organism/Contact";


export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
