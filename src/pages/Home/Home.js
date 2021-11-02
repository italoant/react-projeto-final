import React, { useEffect, useState } from "react";
import api from "../../services/Api";

export default function Home(){

    const [listAnime, setListAnime] = useState([]);
    const [listManga, setListManga] = useState([]);
    const [listRaking, setListRaking] = useState([]);
    const [listRakingDois, setListRakingDois] = useState([]);



    useEffect(() => {
        api.get(`anime?sort=-popularityRank`)
        .then(data => {
            setListAnime(data.data.data)
        })
        .catch(() => {
            console.log("erro")
        });
    }, [])

    useEffect(() => {
        api.get(`manga?sort=-popularityRank`)
        .then(data => {
            setListManga(data.data.data)
        })
        .catch(() => {
            console.log("erro")
        });
    }, [])

        useEffect(() => {
            setListRakingDois(listManga.map((respListAnime) => {
               
                    return(
                        <img alt="" src={respListAnime.attributes.posterImage.small}/>
                    )
                
                
                
            }).slice(0,5))
        })

        useEffect(() => {
            setListRaking(listAnime.map((respListAnime) => {
               
                    return(
                        <img alt="" src={respListAnime.attributes.posterImage.small}/>
                    )
                
                
                
            }).slice(0,5))
        })




        
        console.log(listAnime)

    return(
        <div>
            <h1>Home</h1>
            <h2>Melhores animes semana</h2>
            <ul>
                {listRaking}
            </ul>
            <h2>Melhores mangás semana</h2>
            <ul>
                {listRakingDois}
            </ul>
            <h2>Noticias</h2>
        </div>
    );
};