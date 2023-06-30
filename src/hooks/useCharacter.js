import { useState, useEffect } from "react";
import { getCharacter } from "../../services/getCharacter";
  

export const useCharacter = ({search}) =>{
    const [character, setCharacter] = useState("")
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!search) return;
        getCharacter(search).then(response => { 
                setCharacter(response)
                setLoading(false)
        })
    }, [search])

    return {character, loading}
}