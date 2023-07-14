import { getAllSpecies } from "../../services/getAllSpecies"
import { useState, useEffect, useId, useContext, useCallback } from "react"
import { FiltersContext } from "../Context/FilterContext"


export const useFilters = () => {
    const [species, setSpecies] = useState()
    const { filters, setFilters } = useContext(FiltersContext)
    const categoryFilterId = useId()

    const fetchData = useCallback(async () => {
        const response = await getAllSpecies();
        setSpecies(response);
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);



    useEffect(() => {
        const selectElement = document.getElementById(categoryFilterId);
        selectElement.value = filters;
    }, [categoryFilterId, filters]);

    return { species, categoryFilterId, setFilters }
}