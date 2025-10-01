
import React from 'react';

const SocialIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <a href="#" className="text-brand-cream hover:opacity-80 transition-opacity duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue border-t-2 border-brand-cream/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-xl font-serif font-bold text-brand-cream mb-4">TRES PILATES</h4>
            <p>Fortalece tu cuerpo, calma tu mente.</p>
          </div>
          <div>
            <h4 className="text-xl font-serif font-bold text-brand-cream mb-4">Contacto</h4>
            <p>hello@trespilates.com</p>
            <p>+1 (234) 567-890</p>
          </div>
          <div>
            <h4 className="text-xl font-serif font-bold text-brand-cream mb-4">Síguenos</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <SocialIcon>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </SocialIcon>
              <SocialIcon>
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" /></svg>
              </SocialIcon>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-brand-cream/10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TRES PILATES STUDIO. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;