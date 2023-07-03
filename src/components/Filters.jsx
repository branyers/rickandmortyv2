import { useId, useEffect, useState, useContext } from "react"
import { useFilters } from "../hooks/useFilter";
import { FiltersContext } from "../Context/FilterContext";

export const Filters = () => {

    const categoryFilterId = useId()
    const { species } = useFilters()

    const { filters, setFilters } = useContext(FiltersContext)


    useEffect(() => {
        const selectElement = document.getElementById(categoryFilterId);
        selectElement.value = filters;
    }, [categoryFilterId, filters]);

    const handleChanges = (event) => {
        setFilters(event.target.value)
    }

    return (
        <div>
            <label htmlFor={categoryFilterId}>Categoría</label>
            <select id={categoryFilterId} onChange={handleChanges}>
                <option value='all'>Todas</option>
                {species && species.map((element) => (
                    <option key={element} value={element}>
                        {element}
                    </option>

                ))}
            </select>
        </div>
    );
}