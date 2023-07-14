import { useState, useEffect } from "react"
import { GetSingleCharacter,getEpisodeInfo } from "../../services/Getsinglecharacter"

export const useLocations = (id) => {
    const [data, setData] = useState()
    const [episodes, setEpisodes] = useState()

    useEffect(() => {
        GetSingleCharacter({ id: id }).then(response => setData(response))
    }, [])

    useEffect(() => {
        if (!data) return
        getEpisodeInfo(data.episode).then(response => {setEpisodes(response)})
    }, [data])

    return {episodes,data}
}