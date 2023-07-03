import { useState, useCallback, useRef, useEffect } from "react";
import { getCharacter } from "../../services/getCharacter";
import { useMemo } from "react";
import { useContext } from "react";
import { FiltersContext } from "../Context/FilterContext";

export const useCharacter = ({ search, short }) => {
    const [character, setCharacter] = useState("")
    const [loading, setLoading] = useState(true)
    const previousSearch = useRef(search)
    const {filters} = useContext(FiltersContext)
  
    useEffect(() => {
        if (!search) return;
        getCharacter({ search: search, species:filters}).then(response => {
            setCharacter(response)
            setLoading(false)
        })
    }, [filters])

    const getCharact = useCallback(async ({ searching, species }) => {
        if (searching === previousSearch.current) return
        try {

            previousSearch.current = searching
            const characters = await getCharacter({ search: searching, species:species })
            setCharacter(characters)
            setLoading(false)

        } catch (e) {
            throw Error(e.message)
        } finally {
            setLoading(false)
        }
    }, [])


    const shortedCharacter = useMemo(() => {
        return short ?
            [...character].sort((a, b) => a.name.localeCompare(b.name))
            : character
    }, [short, character])


    return { shortedCharacter, loading, getCharact }

}






