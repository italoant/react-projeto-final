import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function Anime(){

    const [search, setSearch] = useState([])
    const [list, setList] = useState([])
     
    useEffect(() => {
        api.get(`https://kitsu.io/api/edge/anime?filter[text]=${search}`).then(data => {
          setList(data.data.data.slice(0, 5));
        }).catch((erro) => {
          console.log("erro")
        });
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    
    return(
        <div>
        </div>
    );

};