export const GetSingleLocation = async ({ id }) => {
    if (id) {
        const data = await fetch(`https://rickandmortyapi.com/api/location/${id}`)
        const response = await data.json()
        return response;
    }
}

export const ResidentInfoLocation = async (residentInfo) => {
    const resident = await residentInfo.map((residents) => {
        return fetch(residents)
    })

    return await Promise.all(resident).then(responses => Promise.all(responses.map(response => response.json())))
}