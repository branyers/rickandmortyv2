import { useContext } from "react";
import { SearchContext } from "../Context/SearchContext";



export const useSearch = () => {
    const context = useContext(SearchContext)
    if (!context){
        throw Error("The Provider must be whithin main component")
    }
    return context

}