import { createContext, useState } from "react";

export const SearchContext = createContext()


export const SearchProvider = ({ children }) => {
    const [Searching, setSearching] = useState()

    return (

        <SearchContext.Provider value={{ Searching, setSearching }}>
            {children}
        </SearchContext.Provider>
    )

}