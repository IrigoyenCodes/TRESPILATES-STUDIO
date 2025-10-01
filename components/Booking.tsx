import React from 'react';

const Booking: React.FC = () => {
  return (
    <section className="py-20 bg-brand-blue text-brand-cream border-t-2 border-brand-cream/10">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-4xl font-serif mb-6">¿Lista para comenzar?</h3>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Tu primera clase es el primer paso hacia una nueva conexión con tu cuerpo. Reserva tu espacio hoy mismo.
        </p>
        <button className="bg-brand-cream hover:bg-opacity-90 text-brand-blue font-bold py-4 px-10 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 text-lg">
          Ver Horarios y Reservar
        </button>
      </div>
    </section>
  );
};

export default Booking;