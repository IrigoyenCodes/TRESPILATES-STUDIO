import React from 'react';

const classesData = [
  {
    title: 'Pilates Reformer',
    description: 'Utiliza la cama de reformer para un entrenamiento de cuerpo completo que desafía la fuerza, la flexibilidad y el equilibrio.',
    image: 'https://picsum.photos/seed/reformer/500/350',
  },
  {
    title: 'Pilates Mat',
    description: 'Clases en el suelo que se centran en el control del core y la fluidez del movimiento, utilizando tu propio peso corporal.',
    image: 'https://picsum.photos/seed/mat/500/350',
  },
  {
    title: 'Clases Privadas',
    description: 'Sesiones uno a uno personalizadas para alcanzar tus objetivos específicos, perfectas para principiantes o rehabilitación.',
    image: 'https://picsum.photos/seed/private/500/350',
  },
];

const Classes: React.FC = () => {
  return (
    <section className="py-20 bg-brand-blue border-t-2 border-brand-cream/10">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-4xl font-serif text-brand-cream mb-12">Nuestras Clases</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {classesData.map((cls, index) => (
            <div key={index} className="bg-brand-blue border border-brand-cream/20 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src={cls.image} alt={cls.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h4 className="text-2xl font-serif text-brand-cream mb-2">{cls.title}</h4>
                <p className="leading-relaxed">{cls.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;