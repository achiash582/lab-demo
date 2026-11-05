import { useState } from 'react';
import { usePersonajes } from './hooks/usePersonajes';
import PersonajeList from './components/PersonajeList';
import FavoritesPanel from './components/FavoritesPanel';

function MultiversoApp() {
  const { personajes, loading, error } = usePersonajes();
  const [favoritos, setFavoritos] = useState([]);

  const toggleFavorito = (personaje) => {
    const yaEsFavorito = favoritos.some((fav) => fav.id === personaje.id);

    if (yaEsFavorito) {
      setFavoritos(favoritos.filter((fav) => fav.id !== personaje.id));
    } else {
      setFavoritos([...favoritos, personaje]);
    }
  };

  const quitarFavorito = (id) => {
    setFavoritos(favoritos.filter((fav) => fav.id !== id));
  };

  return (
    <>
      <h1>Rick and Morty Universo</h1>

      <div className="layout">
        {loading && <p className="mensaje">Cargando...</p>}

        {error && <p className="mensaje error">{error}</p>}

        {!loading && !error && (
          <PersonajeList
            personajes={personajes}
            favoritos={favoritos}
            onToggleFavorito={toggleFavorito}
          />
        )}

        <FavoritesPanel favoritos={favoritos} onQuitar={quitarFavorito} />
      </div>
    </>
  );
}

export default MultiversoApp;