const URL = 'https://rickandmortyapi.com/api/character';

export async function fetchPersonajes() {
  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error('Error al obtener los personajes');
  }

  const data = await response.json();
  return data.results;
}