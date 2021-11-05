import React, { createContext } from "react";

export const Context = createContext();

export default function cProvider({ children }) {
    return (
        <Context.Provider>
            {children}
        </Context.Provider>
    )
}