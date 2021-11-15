import React from "react";
import { EstiloNoticia, TemaN } from "./Style";
import { useTheme } from "../../context/Theme";
import { NoticiasR, NoticiasL, Tema } from "./Components";
import { H1Style } from "../../components/Components";

export default function Noticias(){

    const { themePage } = useTheme();

    return(
        <EstiloNoticia theme={themePage} > 
            <H1Style> Noticias </H1Style>
            <div className="noticias">
                <div className="left">
                    <NoticiasL 
                        imgL="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8739d07baed7d77d/5ed9b1c197379739c07664d9/Arcane_Announcement_Banner.jpg"
                        nomeL="Nome"
                        statusL="Lançamento"
                        dataL="06/11/2021"
                        resumoL="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at gravida ipsum, quis tristique libero. Aenean lobortis nisi consequat, luctus dolor non, sodales erat. Aenean congue turpis sed neque malesuada laoreet. Sed consequat nibh a aliquet faucibus. "
                    /> 
                    <NoticiasL 
                        imgL="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8739d07baed7d77d/5ed9b1c197379739c07664d9/Arcane_Announcement_Banner.jpg"
                        nomeL="Nome"
                        statusL="Lançamento"
                        dataL="06/11/2021"
                        resumoL="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at gravida ipsum, quis tristique libero. Aenean lobortis nisi consequat, luctus dolor non, sodales erat. Aenean congue turpis sed neque malesuada laoreet. Sed consequat nibh a aliquet faucibus. "
                    />
                </div>
               <div className="right">
                    <NoticiasR 
                        imgR="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8739d07baed7d77d/5ed9b1c197379739c07664d9/Arcane_Announcement_Banner.jpg"
                        statusR="Lançamento"
                        nomeR="Arcane" 
                    />
                    <NoticiasR 
                        imgR="https://static2.srcdn.com/wordpress/wp-content/uploads/2021/11/Netflix-One-piece-live-action-cast-compared-to-the-anime.jpg"
                        statusR="Lançamento"
                        nomeR="Arcane" 
                    />
                    <NoticiasR 
                        imgR="https://viciados.net/wp-content/uploads/2020/09/Crunchyroll_Xbox_Game_Pass-fafa.jpg"
                        statusR="Lançamento"
                        nomeR="Arcane" 
                    />
               </div>
               <Tema 
                    titulo="Em alta"/>
            </div>
            <div className="linha"></div>
            <div className="topicos">
                <Tema 
                    titulo="Anime"/>
                <div className="topicosL">
                   
                    <NoticiasR 
                        imgR="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8739d07baed7d77d/5ed9b1c197379739c07664d9/Arcane_Announcement_Banner.jpg"
                        statusR="Lançamento"
                        nomeR="Arcane" 
                    />
                    <NoticiasR 
                        imgR="https://static2.srcdn.com/wordpress/wp-content/uploads/2021/11/Netflix-One-piece-live-action-cast-compared-to-the-anime.jpg"
                        statusR="Lançamento"
                        nomeR="Arcane" 
                    />
                    <NoticiasR 
                        imgR="https://viciados.net/wp-content/uploads/2020/09/Crunchyroll_Xbox_Game_Pass-fafa.jpg"
                        statusR="Lançamento"
                        nomeR="Arcane" 
                    />
                    <NoticiasR 
                        imgR="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8739d07baed7d77d/5ed9b1c197379739c07664d9/Arcane_Announcement_Banner.jpg"
                        statusR="Lançamento"
                        nomeR="Arcane" 
                    />
                    <NoticiasR 
                        imgR="https://static2.srcdn.com/wordpress/wp-content/uploads/2021/11/Netflix-One-piece-live-action-cast-compared-to-the-anime.jpg"
                        statusR="Lançamento"
                        nomeR="Arcane" 
                    />
                   
                </div>
                <Tema 
                    titulo="Mangás"/>
                <div className="topicosR">
                    <NoticiasR 
                        imgR="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8739d07baed7d77d/5ed9b1c197379739c07664d9/Arcane_Announcement_Banner.jpg"
                        statusR="Lançamento"
                        nomeR="Arcane" 
                    />
                    <NoticiasR 
                        imgR="https://static2.srcdn.com/wordpress/wp-content/uploads/2021/11/Netflix-One-piece-live-action-cast-compared-to-the-anime.jpg"
                        statusR="Lançamento"
                        nomeR="Arcane" 
                    />
                    <NoticiasR 
                        imgR="https://viciados.net/wp-content/uploads/2020/09/Crunchyroll_Xbox_Game_Pass-fafa.jpg"
                        statusR="Lançamento"
                        nomeR="Arcane" 
                    />
                    <NoticiasR 
                        imgR="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8739d07baed7d77d/5ed9b1c197379739c07664d9/Arcane_Announcement_Banner.jpg"
                        statusR="Lançamento"
                        nomeR="Arcane" 
                    />
                    <NoticiasR 
                        imgR="https://static2.srcdn.com/wordpress/wp-content/uploads/2021/11/Netflix-One-piece-live-action-cast-compared-to-the-anime.jpg"
                        statusR="Lançamento"
                        nomeR="Arcane" 
                    />
                    
                </div>
            </div>
        </EstiloNoticia>
    );

};