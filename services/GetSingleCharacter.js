
export const GetSingleCharacter = async ({ id }) => {
    if (id) {
        const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const response = await data.json()
        return response;
    }
}

export const getEpisodeInfo = async (locations) => {
    const listLocaions = await locations.map((location) => {
        return fetch(location)
    })
    return await Promise.all(listLocaions).then(responses => Promise.all(responses.map(response => response.json())))

}