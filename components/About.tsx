import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-brand-blue border-t-2 border-brand-cream/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-4xl font-serif text-brand-cream mb-6">Bienvenida a TRES</h3>
            <p className="mb-4 leading-relaxed">
              En TRES PILATES STUDIO, creemos que el movimiento es medicina. Nuestro enfoque se centra en la conexión mente-cuerpo, utilizando los principios del Pilates para construir fuerza, flexibilidad y conciencia corporal.
            </p>
            <p className="leading-relaxed">
              Nuestro espacio está diseñado para ser un santuario de calma y concentración, donde cada persona, sin importar su nivel, puede explorar su potencial y encontrar equilibrio. Únete a nuestra comunidad y comienza tu viaje hacia una versión más fuerte y consciente de ti misma.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img src="https://picsum.photos/seed/studio/600/700" alt="Interior of the Pilates studio" className="rounded-xl shadow-lg w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;