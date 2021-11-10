import react, { createContext, useEffect, useState } from 'react'

export const InputContext = createContext({});



export const InputProvider = (props) => {
    const [showInput, setShowInput] = useState();
    const [search, setSearch] = useState("");


    const [showUser, setShowUser] = useState("");

    const [redirecinadoAnime, setRedirecionadoAnime] = useState("/login");
    const [redirecinadoManga, setRedirecionadoManga] = useState("/login");
    

return (
<InputContext.Provider value={{ showInput, setShowInput, search, setSearch, showUser, setShowUser, redirecinadoAnime, setRedirecionadoAnime, redirecinadoManga, setRedirecionadoManga}}>
    {props.children}
</InputContext.Provider>
);

};

