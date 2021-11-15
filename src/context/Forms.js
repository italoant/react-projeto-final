import React,{ createContext, useState } from 'react';

export const FormsContext = createContext({});

export const FormsProvider = ({children}) =>{
    const [nome, setNome] = useState(localStorage.getItem('usuario'));
    const [email, setEmail] = useState(localStorage.getItem('email'));
    const [pass, setSenha] = useState(localStorage.getItem('pass')
    );
    const [data, setData] = useState(localStorage.getItem('data'));

    return(
        <FormsContext.Provider value={{
            nome, setNome,
            email, setEmail,
            data, setData,
            pass, setSenha
        }}> {children} </FormsContext.Provider>
    )
}



