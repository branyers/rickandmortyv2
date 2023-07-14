import { useState, useEffect } from "react";
import { GetSingleEpisode, getResident } from "../../services/getSingleEpisode";

export const useEpisodeCharacter = (id) => {
    const [episode, setEpisode] = useState()
    const [episodeResident, setEpidoseResident] = useState()
    
    useEffect(() => {
        GetSingleEpisode({ id: id }).then(response => setEpisode(response))
    }, [])

    useEffect(() => {
        if (!episode) return
        getResident(episode.characters).then(response => setEpidoseResident(response))
    }, [episode])

    return {episode, episodeResident}
}