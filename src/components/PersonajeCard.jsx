function PersonajeCard({ personaje, esFavorito, onToggleFavorito }) {
  const claseEstado = `estado estado-${personaje.status.toLowerCase()}`;

  return (
    <div className={esFavorito ? 'card fav' : 'card'}>
      <img src={personaje.image} alt={personaje.name} />
      <h4>{personaje.name}</h4>
      <p className={claseEstado}>
        {personaje.status} - {personaje.species}
      </p>
      <button onClick={() => onToggleFavorito(personaje)}>
        {esFavorito ? '★ Quitar de favoritos' : '☆ Agregar a favoritos'}
      </button>
    </div>
  );
}

export default PersonajeCard;