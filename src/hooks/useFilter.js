import { getAllSpecies } from "../../services/getAllSpecies"
import { useState, useEffect } from "react"

export const useFilters = () => {
    const [species, setSpecies] = useState()

    useEffect(() => {
        getAllSpecies().then(response => {setSpecies(response)})
    }, [])

    return { species }
}