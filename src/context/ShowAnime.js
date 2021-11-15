import React, { createContext, useState, useContext  } from 'react';
export const AnimeShowContext = createContext();

export default function AnimeShowProvider({ children }) {

    const [ animeProvider, setAnimeProvider ] = useState();

    return(
        <AnimeShowContext.Provider 
            value={{
                animeProvider,
                setAnimeProvider
            }}
            >
            {children}
        </AnimeShowContext.Provider>
    );
}


export function useAnimeShow() {
    const context = useContext(AnimeShowContext);
    const { animeProvider, setAnimeProvider } = context;
    return { animeProvider, setAnimeProvider }
}