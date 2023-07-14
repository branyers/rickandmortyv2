export const GetSingleLocation = async ({ id }) => {
    if (id) {
        const data = await fetch(`https://rickandmortyapi.com/api/location/${id}`)
        const response = await data.json()
        return response;
    }
}

export const ResidentInfoLocation = async (residentInfo) => {
    const data = await fetch(residentInfo)
    const response = await data.json()
    return response;
}

export const getLocations = async (location) =>{
    const data = await fetch(location)
    const response = await data.json()
    return response;
}


export const getResident = async (resident) => {
    const listResident = await resident.map((residents) => {
        return fetch(residents)
    })
    return await Promise.all(listResident).then(responses => Promise.all(responses.map(response => response.json())))

}