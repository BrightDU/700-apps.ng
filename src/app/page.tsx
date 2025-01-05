import { About } from "@/components/landing-page/About";
import { Customers } from "@/components/landing-page/Customers";
import { Footer } from "@/components/landing-page/Footer";
import { Gallery } from "@/components/landing-page/Gallery";
import { Hero } from "@/components/landing-page/Hero";
import { Impact } from "@/components/landing-page/Impact";
import { Navbar } from "@/components/landing-page/Navbar"
import { OurProjects } from "@/components/landing-page/OurProjects";
import { Services } from "@/components/landing-page/Services";
import { Testimonial } from "@/components/landing-page/Testimonial";
import { WhyChooseUs } from "@/components/landing-page/WhyChooseUs";

export default function Home() {
  return (
    <div className="bg-[#F4F4F4]">
      <Navbar />
      <main className="container mx-auto inter">
        <Hero />
        <div className="h-[300px] flex mt-[152px] items-center justify-center bg-[url('/assets/medium-shot.svg')] bg-cover">
        <p className="text-white text-5xl font-medium inter">IT solutions for <span className="font-bold">Ambitious Brands</span></p>
        </div>
        <About />
        <Services />
        <WhyChooseUs />
        <OurProjects />
        <Testimonial />
        <Impact />
        <Gallery />
        <Customers />
      </main>
        <Footer />
    </div>
  );
}
