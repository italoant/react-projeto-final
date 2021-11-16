import React from "react";
import { EstiloNoticia, TemaN } from "./Style";
import { useTheme } from "../../context/Theme";
import { NoticiasR, NoticiasL, Tema, Topicos, Responsive} from "./Components";
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
                    <Tema 
                        titulo="Em alta"/>
                    <div className="conteudoRight">
                        <NoticiasR 
                            imgR="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8739d07baed7d77d/5ed9b1c197379739c07664d9/Arcane_Announcement_Banner.jpg"
                            statusR="Lançamento"
                            
                            /* modal */
                            nomeBotao="ver mais"
                            img="https://cdn.falauniversidades.com.br/wp-content/uploads/2021/11/12131749/Arcane-1024x683.png"
                            nome="Arcane"
                            data="25/09/2021"
                            fonte="Marciel Agostini, para o TechTudo"
                            resumo="Arcane, série da Netflix baseada em League of Legends (LOL), terá sua primeira parte lançada no dia 6 de novembro, algumas horas após a grande final do Mundial de LOL (Worlds) 2021 que será disputado em Reykjavík, Islândia. Junto ao anúncio também foi divulgado o primeiro trailer da série, cuja primeira parte terá foco no começo da vida das irmãs Vi e Jinx.
                            A produção será dividida em três Atos com três episódios cada. O segundo Ato será lançado no dia 13 de novembro e o terceiro (e último), no dia 20 do mesmo mês."
                            trailer="https://www.youtube.com/embed/RAKWlGS-0UY"
                            botaoPop="voltar"
                        />
                        <NoticiasR 
                            imgR="https://static2.srcdn.com/wordpress/wp-content/uploads/2021/11/Netflix-One-piece-live-action-cast-compared-to-the-anime.jpg"
                            statusR="Lançamento" 

                             /* modal */
                             nomeBotao="ver mais"
                             img=""
                             nome=""
                             data=""
                             fonte=""
                             resumo=""
                             trailer=""
                             botaoPop="voltar"
                        />
                        <NoticiasR 
                            imgR="https://viciados.net/wp-content/uploads/2020/09/Crunchyroll_Xbox_Game_Pass-fafa.jpg"
                            statusR="Lançamento" 

                             /* modal */
                             nomeR="XBOX GAME PASS" 
                             nomeBotao="ver mais"
                             img="https://viciados.net/wp-content/uploads/2020/09/Crunchyroll_Xbox_Game_Pass-fafa.jpg"
                             nome="XBOX GAME PASS num sei oq crunchyroll"
                             data="data"
                             fonte="Fonte"
                             resumo="RESUMO"
                             trailer=""
                             botaoPop="voltar"
                        />
                    </div>
               </div>
               
            </div>
            <div className="linha"></div>
            <div className="topicos">
                <div className="anime">
                    <Tema 
                        titulo="Anime"/>
                    <Topicos 
                        imgT="https://animenew.com.br/wp-content/webp-express/webp-images/uploads/2021/11/Attack-on-Titan-Final-Season-Parte-2-ganha-imagem-promocional-600x398.jpg.webp"
                        areaT="Noticias"
                        tituloT="Attack on Titan Final Season – Parte 2 ganha imagem promocional"
                        dataT="15/11/2021" 
                    />
                    <Topicos 
                        imgT="https://animenew.com.br/wp-content/webp-express/webp-images/uploads/2021/11/Attack-on-Titan-Final-Season-Parte-2-ganha-imagem-promocional-600x398.jpg.webp"
                        areaT="Noticias"
                        tituloT="Attack on Titan Final Season – Parte 2 ganha imagem promocional"
                        dataT="15/11/2021" 
                    />
                </div>
                <div className="manga">
                    <Tema 
                        titulo="Mangá"/>
                    <Topicos 
                        imgT="https://animenew.com.br/wp-content/webp-express/webp-images/uploads/2021/11/Attack-on-Titan-Final-Season-Parte-2-ganha-imagem-promocional-600x398.jpg.webp"
                        areaT="Noticias"
                        tituloT="Attack on Titan Final Season – Parte 2 ganha imagem promocional"
                        dataT="15/11/2021" 
                    />
                    <Topicos 
                        imgT="https://animenew.com.br/wp-content/webp-express/webp-images/uploads/2021/11/Attack-on-Titan-Final-Season-Parte-2-ganha-imagem-promocional-600x398.jpg.webp"
                        areaT="Noticias"
                        tituloT="Attack on Titan Final Season – Parte 2 ganha imagem promocional"
                        dataT="15/11/2021" 
                    />
                </div>
             
            </div>
        </EstiloNoticia>
    );

};