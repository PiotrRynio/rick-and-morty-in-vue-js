import axios from 'axios';

export const RickAndMortyApi = () => {
  const baseUrl = 'https://rickandmortyapi.com/api';

  return {
    async getCharacter(characterId) {
      return await axios
        .get(baseUrl + '/character/' + characterId)
        .then((response) => response.data)
        .catch((error) => console.log(error));
    },
    async getCharacters() {
      return await axios
        .get(baseUrl + '/character')
        .then((response) => response.data)
        .then((data) => data.results)
        .catch((error) => console.log(error));
    },
  };
};
