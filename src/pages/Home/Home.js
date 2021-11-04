import React from "react";
import { Container } from "./Style"

import Carrossel from "./Carrousel";


export default function Home() {
    return (
        <Container>
            <div id="carrossel">
                <Carrossel />
            </div>
        </Container>
    );
};