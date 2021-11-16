import React,{ createContext, useState } from 'react';

export const FormsContext = createContext({});

export const FormsProvider = ({children}) =>{
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setSenha] = useState("");
    const [data, setData] = useState("");
    const [user, setUser] = useState("");

    const dataHoje = new Date(data);
    const dataFormatada = dataHoje.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

    return(
        <FormsContext.Provider value={{
            nome, setNome,
            user, setUser,
            email, setEmail,
            data, setData,
            pass, setSenha,
            dataFormatada
        }}> {children} </FormsContext.Provider>
    )
}



