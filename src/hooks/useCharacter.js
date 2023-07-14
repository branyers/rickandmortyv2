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
        // searching => lo que el usuario esta escribiendo actualmente
        // previousSearch.current guarda una referencia de lo ultimo que se escribio
        // Esto se hace para que una busqueda no consulte al servicio dos veces
        // Ej: Si ya se busco el character Rick, y Rick se encuentra en previousSearch.current
        // Lo que hace es que no ejecute el fetch y devuelve la anterior respuesta
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






