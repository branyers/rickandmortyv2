import { useFilters } from "../hooks/useFilter";

export const Filters = () => {
    const { species,categoryFilterId,setFilters} = useFilters()


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