import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import Features from "@/components/landing/Features";
import DashboardPreview from "@/components/landing/DashboardPreview";
import Timeline from "@/components/landing/TimeLine";
import Footer from "@/components/layout/Footer";
import CTA from "@/components/landing/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
     <Hero />
     <TrustedBy />
     <Features /> 
     <DashboardPreview /> 
     <Timeline />
     <CTA />
      <Footer /> 
     
    </>
  );
}