export const getCharacter = async (character) =>{
    const data = await fetch(`https://rickandmortyapi.com/api/character/?name=${character}`)
    const response = await data.json()
    const {results} = response
    return results.slice(0,6)
}


