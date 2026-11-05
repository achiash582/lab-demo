import { useState, useEffect } from 'react';
import { fetchPersonajes } from '../services/fetchPersonajes';

export function usePersonajes() {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function cargar() {
      try {
        const data = await fetchPersonajes();
        setPersonajes(data);
      } catch {
        setError('No se pudieron cargar los personajes');
      } finally {
        setLoading(false);
      }
    }

    cargar();
  }, []);

  return { personajes, loading, error };
}