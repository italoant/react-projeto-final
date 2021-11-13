import React from "react";
import { EstiloNoticia } from "./Style";
import { useTheme } from "../../context/Theme";

import { NoticiasR, NoticiasL } from "./Components";

export default function Noticias(){

    const { themePage } = useTheme();

    return(
        <EstiloNoticia theme={themePage} > 

            <NoticiasL 
                imgL="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8739d07baed7d77d/5ed9b1c197379739c07664d9/Arcane_Announcement_Banner.jpg"
                nomeL="Nome"
                statusL="Lançamento"
                dataL="06/11/2021"
                resumoL="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at gravida ipsum, quis tristique libero. Aenean lobortis nisi consequat, luctus dolor non, sodales erat. Aenean congue turpis sed neque malesuada laoreet. Sed consequat nibh a aliquet faucibus. "
            />
            <NoticiasR 
                imgR="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8739d07baed7d77d/5ed9b1c197379739c07664d9/Arcane_Announcement_Banner.jpg"
                statusR="Lançamento"
                dataR="06/11/2021"
                nomeR="Arcane" 
            />
            
        </EstiloNoticia>
    );

};