import { useContext } from "react"
import { FiltersContext } from "../Context/FilterContext"

export const TestComponent = () => {
    const { filters } = useContext(FiltersContext)
    return (
        <>
        </>
    )

}