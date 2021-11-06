import react, { createContext, useState } from 'react'

export const InputContext = createContext({});



export const InputProvider = (props) => {
    const [showInput, setShowInput] = useState(false);
    const [search, setSearch] = useState("")



return (
<InputContext.Provider value={{ showInput, setShowInput, search, setSearch }}>
    {props.children}
</InputContext.Provider>
);

};

