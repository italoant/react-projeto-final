import react, { createContext, useState } from 'react'

export const RedirectContext = createContext({});

export const RedirectProvider = (props) => {


    const [redirecinadoAnime, setRedirecionadoAnime] = useState(() => localStorage.getItem('animeLink')      
    ); //validação do link redirect
    const [redirecinadoManga, setRedirecionadoManga] = useState(() => localStorage.getItem('mangaLink'));   //validação do link redirect
    const [ redirecinadoNoticias, setRedirecionadoNoticias ] = useState(() => localStorage.getItem('notLink')     
    );//validação do link redirect


    

return (
<RedirectContext.Provider value={{ redirecinadoAnime, setRedirecionadoAnime, redirecinadoManga, setRedirecionadoManga,  redirecinadoNoticias, setRedirecionadoNoticias  }}>
    {props.children}
</RedirectContext.Provider>
);

};