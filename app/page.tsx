"use client";
import HeaderSection from "@component/components/HeaderSection";
import Hero from "@component/components/Hero";
import Footer from "@component/components/Layout/Footer/Footer";
import Navigation from "@component/components/Layout/Navigation/Navigation";
import Newsletter from "@component/components/Newsletter";

export default function Page() {
  return (
    <>
      <Navigation />
      <Hero />
      <HeaderSection />
      <Newsletter />
      <Footer />
    </>
  );
}
