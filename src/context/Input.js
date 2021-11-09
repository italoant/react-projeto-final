import react, { createContext, useEffect, useState } from 'react'

export const InputContext = createContext({});



export const InputProvider = (props) => {
    const [showInput, setShowInput] = useState();
    const [search, setSearch] = useState("");
    

  
   


return (
<InputContext.Provider value={{ showInput, setShowInput, search, setSearch, }}>
    {props.children}
</InputContext.Provider>
);

};

