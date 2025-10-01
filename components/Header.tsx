import React, { useState } from 'react';

interface HeaderProps {
  sections: {
    [key: string]: React.RefObject<HTMLDivElement>;
  };
  scrollToRef: (ref: React.RefObject<HTMLDivElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ sections, scrollToRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', ref: sections.home },
    { name: 'Nosotros', ref: sections.about },
    { name: 'Clases', ref: sections.classes },
    { name: 'Paquetes', ref: sections.packages },
    { name: 'Souvenirs', ref: sections.souvenirs },
    { name: 'Reserva', ref: sections.booking },
  ];

  const handleLinkClick = (ref: React.RefObject<HTMLDivElement>) => {
    scrollToRef(ref);
    setIsMenuOpen(false);
  };
  
  return (
    <header className="bg-brand-blue/90 backdrop-blur-sm sticky top-0 z-50 w-full shadow-lg shadow-brand-cream/5">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-serif font-bold text-brand-cream cursor-pointer" onClick={() => handleLinkClick(sections.home)}>TRES</h1>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.ref)}
              className="text-brand-cream hover:opacity-80 transition-opacity duration-300 font-medium"
            >
              {link.name}
            </button>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-cream focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-brand-blue">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.ref)}
                className="text-brand-cream hover:opacity-80 transition-opacity duration-300 font-medium text-lg"
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;