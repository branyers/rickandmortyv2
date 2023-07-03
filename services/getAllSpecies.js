export async function getAllSpecies() {
    let allSpecies = [];
    let page = 1;
    let totalPages = 1;


  
    while (page <= totalPages) {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
  
      allSpecies = allSpecies.concat(data.results.map((character) => character.species));
  
      page++;
      totalPages = data.info.pages;
    }
  
    const uniqueSpecies = [...new Set(allSpecies)];
    return uniqueSpecies;
  }