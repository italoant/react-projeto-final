import React, { useEffect, useState } from "react";
import api from '../../services/api';
import { Container } from "./Style"

import Carrossel from "./Carrousel";


export default function Home() {

    const [response, setResponse] = useState([]);

    useEffect(() => {
        api.get(`/anime`)
        .then((response) => {setResponse(response.data.data)})
        .catch((error) => {console.log(error)})
    },[])

    return (
        <Container>
            <div id="carrossel">
                <Carrossel />
            </div>
        </Container>
    );
};