import React from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import VideoShowcase from '../components/VideoShowcase/VideoShowcase';
import ClientSlider from '../components/ClientSlider/ClientSlider';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <VideoShowcase />
      <ClientSlider />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}