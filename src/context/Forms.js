import React,{ createContext, useState } from 'react';

export const FormsContext = createContext({});

export const FormsProvider = ({children}) =>{
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState([]);

    return(
        <FormsContext.Provider value={{
            nome, setNome,
            email, setEmail,
            data, setData
        }}> {children} </FormsContext.Provider>
    )
}



