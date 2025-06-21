import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MobileNavbar from '../components/MobileNavbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-white mt-14 md:mt-0">
      <div className="md:hidden"><MobileNavbar /></div>
      <div className="hidden md:block"><Navbar /></div>
      <section id="hero"><Hero /></section>
      <section id="services"><Services /></section>
      <section id="about"><About /></section>
      <section id="features"><Features /></section>
      <section id="pricing"><Pricing /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="contact"><Contact /></section>
      <section id="footer"><Footer /></section>
    </div>
  );
};

export default Index;
