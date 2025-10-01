
import React from 'react';

const testimonialsData = [
  {
    quote: "TRES Studio ha cambiado mi relación con el ejercicio. Las clases son desafiantes y relajantes al mismo tiempo. ¡Lo amo!",
    author: "Ana G.",
    image: "https://picsum.photos/seed/person1/100/100"
  },
  {
    quote: "La atención al detalle y la profesionalidad de los instructores es inigualable. He visto una mejora increíble en mi postura y fuerza.",
    author: "Carla M.",
    image: "https://picsum.photos/seed/person2/100/100"
  },
  {
    quote: "El ambiente es tan acogedor y hermoso. Es mi momento favorito de la semana para desconectar y cuidarme.",
    author: "Sofia L.",
    image: "https://picsum.photos/seed/person3/100/100"
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-brand-blue border-t-2 border-brand-cream/10">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-serif text-brand-cream text-center mb-12">Lo que dicen nuestras clientas</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-brand-blue border border-brand-cream/20 p-8 rounded-xl text-center flex flex-col items-center">
              <img src={testimonial.image} alt={testimonial.author} className="w-20 h-20 rounded-full mb-4 object-cover" />
              <p className="italic text-brand-cream mb-4 flex-grow">"{testimonial.quote}"</p>
              <p className="font-bold font-serif text-brand-cream">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;