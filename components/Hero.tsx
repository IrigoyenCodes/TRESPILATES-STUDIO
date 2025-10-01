import React from 'react';

interface HeroProps {
  scrollToRef: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToRef }) => {
  return (
    <section className="relative h-screen bg-cover bg-center flex items-center justify-center text-center" style={{ backgroundImage: "url('https://picsum.photos/seed/pilates/1920/1080')" }}>
      <div className="absolute inset-0 bg-brand-blue/60"></div>
      <div className="relative z-10 p-6 text-white max-w-2xl">
        <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-4">Encuentra tu centro, fortalece tu cuerpo.</h2>
        <p className="text-lg md:text-xl font-sans mb-8">
          Descubre el poder transformador del Pilates en nuestro estudio, un espacio dedicado a tu bienestar y equilibrio.
        </p>
        <button 
          onClick={scrollToRef}
          className="bg-brand-cream hover:bg-opacity-90 text-brand-blue font-bold py-3 px-8 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          Reserva tu clase
        </button>
      </div>
    </section>
  );
};

export default Hero;