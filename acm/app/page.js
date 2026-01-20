import Image from "next/image";
import HeroSection from "@/pages/HeroSection";
import AboutVIT from "@/pages/AboutVIT";
import AboutACM from "@/pages/AboutACM";
import Domains from "@/pages/Domains";
import Footer from "@/components/Footer";
import OurEvents from "@/pages/OurEvents";
import Gallery from "@/pages/Gallery";

export default function Home() {
  return (
    <div className={'w-full overflow-x-hidden'}>

      <HeroSection />
        <AboutVIT />
        <AboutACM />
      <Domains />
      <OurEvents />
      <Gallery/>
        <Footer />
    </div>
  );
}
