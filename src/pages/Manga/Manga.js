import react, { useContext, useEffect, useState } from "react";
import { InputContext } from "../../context/Input";
import api from "../../services/api";

export default function Manga(){

    const { search } = useContext(InputContext);
    const [manga, setManga] = useState([])

    useEffect(() => {
        api.get(`/manga?filter[text]=${search}`)
        .then(data => setManga(data.data.data))
        .catch("Erro.")
    },[search])

    return(
        <div>
            
        </div>
    );

};