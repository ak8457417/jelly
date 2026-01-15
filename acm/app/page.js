import Image from "next/image";
import HeroSection from "@/pages/HeroSection";
import AboutVIT from "@/pages/AboutVIT";
import AboutACM from "@/pages/AboutACM";
import Domains from "@/pages/Domains";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={'w-full overflow-x-hidden'}>

      <HeroSection />
        <AboutVIT />
        <AboutACM />
      <Domains />
        <Footer />
    </div>
  );
}
