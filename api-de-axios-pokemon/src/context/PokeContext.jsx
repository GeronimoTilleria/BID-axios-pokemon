import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from 'axios'

export const PokeContext = createContext();



export const PokeProvider = ({ children }) => {

    const [array, setArray] = useState({
        data: [],
        show: false
    });

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(response => setArray({
                ...array,
                data: response.data.results
            }));
    }, []);

    return (
        <PokeContext.Provider value={{
            array,
            setArray
        }}>
            {children}
        </PokeContext.Provider>
    );
}