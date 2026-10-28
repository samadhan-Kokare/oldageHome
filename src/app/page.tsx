import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import About from "@/components/About";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import TrustBand from "@/components/TrustBand";
import Testimonials from "@/components/Testimonials";
import Enquiry from "@/components/Enquiry";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DailyLife from "@/components/DailyLife";
import AdmissionSteps from "@/components/AdmissionSteps";
import Faq from "@/components/Faq";
import { DEMO_MODE, showTestimonials } from "@/data/site";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <FeatureStrip />
        <About />
        <Facilities />
        {DEMO_MODE && <DailyLife />}
        <Gallery />
        <TrustBand />
        {showTestimonials && <Testimonials />}
        {DEMO_MODE && <AdmissionSteps />}
        {DEMO_MODE && <Faq />}
        <Enquiry />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
