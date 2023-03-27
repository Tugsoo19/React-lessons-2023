import { createContext, useEffect, useState } from "react";

const NeighborhoodContext = createContext(null);

const NeighborhoodContextProvider = ({ children }) => {
    const ALL_NEIGHBOR_URL = "http://localhost:8181/neighborhoods/neighborhood/list";

    const [neighborhood, setNeighborhood] = useState([])

    async function fetchNeighborhoods(url) {
        const FETCHED_DATA = await fetch(url)
        const FETCHED_JSON = await FETCHED_DATA.json()
        setNeighborhood(FETCHED_JSON.data)
    }

    useEffect(() => {
        fetchNeighborhoods(ALL_NEIGHBOR_URL)
    }, [])

    return (
        <NeighborhoodContext.Provider value={neighborhood}>
            {children}
        </NeighborhoodContext.Provider>
    )
}


export { NeighborhoodContext, NeighborhoodContextProvider }