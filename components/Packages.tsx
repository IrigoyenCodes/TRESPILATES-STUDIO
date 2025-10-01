import React from 'react';

const packagesData = [
  {
    name: 'Clase Suelta',
    price: '$25',
    features: ['Acceso a 1 clase grupal', 'Ideal para probar', 'Válido por 1 mes'],
    cta: 'Comprar',
    popular: false,
  },
  {
    name: 'Paquete Mensual',
    price: '$150',
    features: ['8 clases grupales al mes', 'Acceso a Mat y Reformer', 'Seguimiento personalizado'],
    cta: 'Elegir Plan',
    popular: true,
  },
  {
    name: 'Paquete Trimestral',
    price: '$400',
    features: ['Clases ilimitadas', '1 clase privada al mes', 'Descuento del 10% en talleres'],
    cta: 'Elegir Plan',
    popular: false,
  },
];

const Packages: React.FC = () => {
  return (
    <section className="py-20 bg-brand-blue border-t-2 border-brand-cream/10">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-4xl font-serif text-brand-cream mb-12">Paquetes y Precios</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packagesData.map((pkg, index) => (
            <div key={index} className={`border rounded-xl p-8 flex flex-col ${pkg.popular ? 'border-brand-cream bg-brand-cream text-brand-blue' : 'border-brand-cream/30 bg-brand-blue'}`}>
              {pkg.popular && <span className="bg-brand-blue text-brand-cream text-xs font-bold px-3 py-1 rounded-full self-center mb-4">MÁS POPULAR</span>}
              <h4 className={`text-2xl font-serif mb-4 ${pkg.popular ? 'text-brand-blue' : 'text-brand-cream'}`}>{pkg.name}</h4>
              <p className={`text-5xl font-bold font-serif mb-6 ${pkg.popular ? 'text-brand-blue' : 'text-brand-cream'}`}>{pkg.price}</p>
              <ul className="space-y-3 text-left mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className={`w-5 h-5 mr-2 flex-shrink-0 ${pkg.popular ? 'text-brand-blue' : 'text-brand-cream'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-full font-bold transition-colors duration-300 ${pkg.popular ? 'bg-brand-blue text-brand-cream hover:bg-opacity-80' : 'bg-brand-cream text-brand-blue hover:bg-opacity-90'}`}>
                {pkg.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;