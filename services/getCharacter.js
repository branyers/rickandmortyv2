export const getCharacter = async ({ search }) =>{
    if (search === '') return

    const data = await fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
    const response = await data.json()
    const {results} = response
    return results.slice(0,6)
}
