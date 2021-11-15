import React,{ createContext, useState } from 'react';

export const FormsContext = createContext({});

export const FormsProvider = ({children}) =>{
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setSenha] = useState("");
    const [data, setData] = useState("");

    return(
        <FormsContext.Provider value={{
            nome, setNome,
            email, setEmail,
            data, setData,
            pass, setSenha
        }}> {children} </FormsContext.Provider>
    )
}



