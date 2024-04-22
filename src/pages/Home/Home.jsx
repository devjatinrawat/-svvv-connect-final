import React, { useState } from "react";
import {
  HeroSection,
  Navbar,
  Companies,
  Courses,
  Achievement,
  Categories,
  FeedBack,
  CTA,
  Footer,
} from "../../components";
import Background from "../../components/BackgroundLightPurple";
import AboutUs from "../../components/AboutUs";
import Features from "../../components/Features";
import FaqSection from "../../components/FaqSection";


function Home() {

  return (
    <div>
      <Background />
      <Navbar />
      <HeroSection />
      <AboutUs/>
      <Features/>
      <Companies />
      <Courses />
      <Achievement />
      <Categories />
      <FeedBack />
      <CTA />
      <FaqSection/>
      <Footer />
    </div>
  );
}

export default Home;


