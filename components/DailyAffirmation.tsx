import React, { useState, useEffect, useCallback } from 'react';
import { fetchAffirmation } from '../services/geminiService';

const DailyAffirmation: React.FC = () => {
  const [affirmation, setAffirmation] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getAffirmation = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const newAffirmation = await fetchAffirmation();
      setAffirmation(newAffirmation);
    } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError('An unknown error occurred.');
        }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getAffirmation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-20 bg-brand-blue border-t-2 border-brand-cream/10">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h3 className="text-3xl font-serif text-brand-cream mb-4">Tu Afirmación del Día</h3>
        <div className="bg-brand-blue border border-brand-cream/20 p-8 rounded-xl shadow-md min-h-[120px] flex items-center justify-center">
          {isLoading ? (
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-cream"></div>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <p className="text-2xl font-serif italic text-brand-cream">"{affirmation}"</p>
          )}
        </div>
        <button 
          onClick={getAffirmation}
          disabled={isLoading}
          className="mt-6 bg-brand-cream hover:bg-opacity-90 text-brand-blue font-bold py-2 px-6 rounded-full transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Generando...' : 'Nueva Afirmación'}
        </button>
      </div>
    </section>
  );
};

export default DailyAffirmation;