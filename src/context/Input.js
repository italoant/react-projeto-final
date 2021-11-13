import react, { createContext, useState } from 'react'

export const InputContext = createContext({});



export const InputProvider = (props) => {
    const [ showInputAnime, setShowInputAnime ] = useState();
    const [ showInputManga, setShowInputManga ] = useState();
    const [ searchAnime, setSearchAnime ] = useState("");
    const [ searchManga, setSearchManga ] = useState("");


    const [showUser, setShowUser] = useState(() => {
        if(localStorage.getItem('user')){
            return localStorage.getItem('user')
        }else{
            return ""
        }
    });



    

return (
<InputContext.Provider value={{ showInputAnime, setShowInputAnime, showInputManga, setShowInputManga, searchAnime, setSearchAnime, searchManga, setSearchManga, showUser, setShowUser }}>
    {props.children}
</InputContext.Provider>
);

};


