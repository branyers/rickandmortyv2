export const GetSingleEpisode = async ({ id }) => {
    if (id) {
        const data = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
        const response = await data.json()
        return response;
    }
}

export const getResident = async (resident) => {
    const listResident = await resident.map((residents) => {
        return fetch(residents)
    })
    return await Promise.all(listResident).then(responses => Promise.all(responses.map(response => response.json())))

}