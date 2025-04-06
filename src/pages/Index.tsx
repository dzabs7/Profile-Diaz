
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Certificate';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <div className="gradient-circle w-[400px] h-[400px] top-[20%] right-[10%]"></div>
      <div className="gradient-circle w-[300px] h-[300px] top-[50%] left-[5%]"></div>
      <div className="gradient-circle w-[350px] h-[350px] bottom-[10%] right-[15%]"></div>
      
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
