import { getAllSpecies } from "../../services/getAllSpecies"
import { useState, useEffect,useId,useContext } from "react"
import { FiltersContext } from "../Context/FilterContext"


export const useFilters = () => {
    const [species, setSpecies] = useState()
    const { filters, setFilters } = useContext(FiltersContext)
    const categoryFilterId = useId()

    useEffect(() => {
        getAllSpecies().then(response => {setSpecies(response)})
    }, [])


    useEffect(() => {
        const selectElement = document.getElementById(categoryFilterId);
        selectElement.value = filters;
    }, [categoryFilterId, filters]);

    return { species,categoryFilterId,setFilters }
}