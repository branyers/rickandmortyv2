let API_ENDPOINT_CHARACTER = ``
export const getCharacter = async ({ search, species }) => {
    if (search === '') return

    if (species) {
        API_ENDPOINT_CHARACTER = `https://rickandmortyapi.com/api/character/?name=${search}&species=${species}`
    } else if (species == 'all' || species == undefined) {
        API_ENDPOINT_CHARACTER = `https://rickandmortyapi.com/api/character/?name=${search}`
    }
    else {
        API_ENDPOINT_CHARACTER = `https://rickandmortyapi.com/api/character/?name=${search}`
    }
    const data = await fetch(API_ENDPOINT_CHARACTER)
    const response = await data.json()
    const { results } = response
    return results.slice(0, 6)
}
