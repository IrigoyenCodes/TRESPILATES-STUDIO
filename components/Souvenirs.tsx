import React from 'react';

const souvenirsData = [
  {
    name: 'Tote Bag de Tela',
    price: '$35',
    image: 'https://picsum.photos/seed/totebag/500/350',
  },
  {
    name: 'Botella de Agua',
    price: '$25',
    image: 'https://picsum.photos/seed/bottle/500/350',
  },
  {
    name: 'Mat de Pilates',
    price: '$80',
    image: 'https://picsum.photos/seed/pilatesmat/500/350',
  },
];

const Souvenirs: React.FC = () => {
  return (
    <section className="py-20 bg-brand-blue border-t-2 border-brand-cream/10">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-4xl font-serif text-brand-cream mb-4">Souvenirs</h3>
        <p className="max-w-2xl mx-auto mb-12 text-brand-cream/80">
          Estos artículos son de exhibición en nuestro mostrador. La compra se realiza directamente en el estudio.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {souvenirsData.map((item, index) => (
            <div key={index} className="bg-brand-blue border border-brand-cream/20 rounded-xl shadow-lg overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h4 className="text-2xl font-serif text-brand-cream mb-2">{item.name}</h4>
                <p className="text-xl font-sans text-brand-cream">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Souvenirs;