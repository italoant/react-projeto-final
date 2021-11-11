import react, { createContext, useState } from 'react'

export const RedirectContext = createContext({});

export const RedirectProvider = (props) => {


    const [redirecinadoAnime, setRedirecionadoAnime] = useState(() => {
        if(localStorage.getItem('animeLink')){
            return localStorage.getItem('animeLink')
        }else{
            return "/login"
        }
    });
    const [redirecinadoManga, setRedirecionadoManga] = useState(() => {
        if(localStorage.getItem('mangaLink')){
            return localStorage.getItem('mangaLink')
        }else{
            return "/login"
        }
    });
    const [ redirecinadoNoticias, setRedirecionadoNoticias ] = useState(() => {
        if(localStorage.getItem('notLink')){
            return localStorage.getItem('notLink')
        }else{
            return "/login"
        }
    });


    

return (
<RedirectContext.Provider value={{ redirecinadoAnime, setRedirecionadoAnime, redirecinadoManga, setRedirecionadoManga,  redirecinadoNoticias, setRedirecionadoNoticias  }}>
    {props.children}
</RedirectContext.Provider>
);

};