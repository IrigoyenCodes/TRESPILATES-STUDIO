import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Classes from './components/Classes';
import Packages from './components/Packages';
import Booking from './components/Booking';
import Souvenirs from './components/Souvenirs';
import Testimonials from './components/Testimonials';
import DailyAffirmation from './components/DailyAffirmation';
import Footer from './components/Footer';

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const classesRef = useRef<HTMLDivElement>(null);
  const packagesRef = useRef<HTMLDivElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);
  const souvenirsRef = useRef<HTMLDivElement>(null);

  const sections = {
    home: homeRef,
    about: aboutRef,
    classes: classesRef,
    packages: packagesRef,
    booking: bookingRef,
    souvenirs: souvenirsRef,
  };

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-brand-blue font-sans text-brand-cream">
      <Header sections={sections} scrollToRef={scrollToRef} />
      <main>
        <div ref={homeRef}><Hero scrollToRef={() => scrollToRef(bookingRef)} /></div>
        <div ref={aboutRef}><About /></div>
        <div ref={classesRef}><Classes /></div>
        <div ref={packagesRef}><Packages /></div>
        <div ref={bookingRef}><Booking /></div>
        <div ref={souvenirsRef}><Souvenirs /></div>
        <Testimonials />
        <DailyAffirmation />
      </main>
      <Footer />
    </div>
  );
};

export default App;