"use client"

import { About } from "@/components/landing-page/About";
import { Customers } from "@/components/landing-page/Customers";
import { Footer } from "@/components/landing-page/Footer";
import { Gallery } from "@/components/landing-page/Gallery";
import { Hero } from "@/components/landing-page/Hero";
import { Impact } from "@/components/landing-page/Impact";
import Sidebar, { Navbar } from "@/components/landing-page/Navbar"
import { OurProjects } from "@/components/landing-page/OurProjects";
import { Services } from "@/components/landing-page/Services";
import { Testimonial } from "@/components/landing-page/Testimonial";
import { WhyChooseUs } from "@/components/landing-page/WhyChooseUs";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="bg-[#F4F4F4]">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className=" mx-auto inter">
        <Hero />
        <div className="h-[300px] flex mt-[152px] items-center justify-center bg-cover md:bg-contain bg-bottom bg-no-repeat px-5 text-center banner">
          <p className="text-white md:text-5xl text-lg font-medium inter">IT solutions for <span className="font-bold">Ambitious Brands</span></p>
        </div>
        <About />
        <Services />
        <WhyChooseUs />
        <OurProjects />
        <Testimonial />
        <Impact />
        <Gallery />
        <Customers />
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      </main>
      <Footer />
    </div>
  );
}
