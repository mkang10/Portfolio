import React from 'react';
import Navbar from './Layouts/Navbar';
import Hero from '@/src/components/Hero';
import Skills from '@/src/components/Skills';
import Services from '@/src/components/Services';
import Projects from '@/src/components/Projects';
import Testimonials from '@/src/components/Testimonials';
import Hireme from '@/src/components/Hireme';
import Contact from '@/src/components/Contact';


const HomePage: React.FC = () => {
  return (
    <div className="">
      <Navbar/>
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Nguyen Manh Cuong / Kang</h6>
        <p>© All CopyRights Reserved 2025</p>
      </footer>
    </div>
  );
};

export default HomePage;
