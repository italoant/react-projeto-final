import React from "react";
import { useTheme } from "../../context/Theme";
import { Style } from './Style';

import NoticeLeft from "./componentsNoticies/NoticeLeft/NoticeLeft";
import NoticesRight from "./componentsNoticies/NoticesRight/NoticesRight";
import Topics from "./componentsNoticies/Topics/Topics";

export default function Noticias(){

    const { themePage } = useTheme();

    return(
        <Style theme={themePage}>
            <h1> NOTICIAS </h1>
            <div className="container">
                <div className="left">
                    <NoticeLeft
                        imgLeft="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8739d07baed7d77d/5ed9b1c197379739c07664d9/Arcane_Announcement_Banner.jpg"
                        nome="Arcane"
                        data="25/09/2021"
                        status="Lançamento" 
                        resumo="Arcane, série da Netflix baseada em League of Legends (LOL), teve sua primeira parte lançada no dia 6 de novembro, algumas horas após a grande final do Mundial de LOL (Worlds) 2021 que foi disputada em Reykjavík, Islândia. Junto ao anúncio também foi divulgado o primeiro trailer da série, cuja primeira parte terá foco no começo da vida das irmãs Vi e Jinx. A produção será dividida em três Atos com três episódios cada. O segundo Ato será lançado no dia 13 de novembro e o terceiro (e último), no dia 20 do mesmo mês."
                    />

                    <NoticeLeft
                        imgLeft="https://animenew.com.br/wp-content/webp-express/webp-images/uploads/2021/11/Yomi-no-Tsugai-manga-da-autora-de-Fullmetal-ganha-data-de-estreia-730x395.jpg.webp"
                        nome="Yomi no Tsugai"
                        data="12/11/2021"
                        status="Estreia" 
                        resumo="O novo mangá Yomi no Tsugai de Hiromu Arakawa teve sua data de estreia revelada. De acordo com informações, a obra chega dia 10 de dezembro na revista Shounen Gangan da Square Enix. Por fim Hiromu teve sua maior obra, o mangá Fullmetal Alchemist, lançado em 2001 e 2010, pela Shonen Gangan, com 27 volumes. A JBC publica o quadrinho por aqui."
                    />
                </div>
                <div className="right">
                    <h2 className="emAlta"> Em alta</h2>
                    <NoticesRight 
                        imgRight="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8739d07baed7d77d/5ed9b1c197379739c07664d9/Arcane_Announcement_Banner.jpg"
                        
                        /* modal */
                        img="https://occ-0-1850-3852.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWoqAjK5iNayrutm-kkebhkiNK73Oy1SAvAPY7CqKdChXRQ2tz_W0Mxa9Tguybj4XgU3DIuyc4jMPN8THo5sy3G7p5k7.jpg?r=f3a"
                        nome="Arcane"
                        resumo="Arcane, série da Netflix baseada em League of Legends (LOL), terá sua primeira parte lançada no dia 6 de novembro, algumas horas após a grande final do Mundial de LOL (Worlds) 2021 que será disputado em Reykjavík, Islândia. Junto ao anúncio também foi divulgado o primeiro trailer da série, cuja primeira parte terá foco no começo da vida das irmãs Vi e Jinx.
                        A produção será dividida em três Atos com três episódios cada. O segundo Ato será lançado no dia 13 de novembro e o terceiro (e último), no dia 20 do mesmo mês.
                        Segundo o cocriador de Arcane, Alex Yee, a série fala sobre dualidade e mostra como os personagens se veem divididos entre dois lados de uma cidade com oportunidades e valores opostos, mas, ao mesmo tempo, complementares. 'Você pode ser o herói na sua própria história e o vilão na de outra pessoa', destaca.
                        A série vai ser ambientada nas cidades irmãs de Plitover e Zaun. Enquanto a primeira se caracteriza pela riqueza e a segunda por ser a periferia sombria, a região em si é conhecida como “Cidade Progresso”. A trama envolve a criação da tecnologia hextec, uma forma de dar a qualquer pessoa o controle sobre energia mágica, o que está ameaçando o equilíbrio harmônico entre as duas cidades.
                        Ao longo dos episódios os espectadores vão conhecer os eventos que tornaram os Campeões aquilo que conhecemos hoje. Mas, apesar de Arcane mostrar o passado de vários personagens, a série foi feita para ser independente e compreendida como um mundo complexo repleto de decisões morais, sequências de animação de tirar o fôlego e uma história cheia de suspense.
                        Entre as vozes que farão parte da versão em português, destaque para Tatiane Keplmair como Vi, Fernanda Bullara como Jinx, Fernanda Mendonça como Jayce, Carina Eiras como Caitlyn e André Rinaldi como Viktor. Já a versão em inglês contará com vozes de Hailee Steinfeld (Vi), Ella Purnell (Jinx), Kevin Alejandro (Jayce), Katie Leung (Caitlyn) e Harry Lloyd (Viktor).
                        Veja o trailer de Arcane abaixo:"
                        fonte="TechTudo"
                        data="25/09/2021"
                        video="https://www.youtube.com/embed/3MB3OK3Xnvs"
                    />
                    <NoticesRight 
                        imgRight="https://static2.srcdn.com/wordpress/wp-content/uploads/2021/11/Netflix-One-piece-live-action-cast-compared-to-the-anime.jpg"
                        
                        /* modal */
                        img="https://static2.srcdn.com/wordpress/wp-content/uploads/2021/11/Netflix-One-piece-live-action-cast-compared-to-the-anime.jpg"
                        nome="One Piece – Revelado o elenco principal do live-action"
                        resumo="A Netflix revelou finalmente o elenco que vai trazer o anime de sucesso One Piece para o mundo real. De acordo com informações, os atores Iñaki Godoy, Mackenyu, Emily Rudd, Jacob Romero Gibson e Taz Skylar são os escalados para o projeto."
                        fonte="Anime New"
                        data="09/11/2021"
                    />
                    
                    <NoticesRight 
                        imgRight="https://viciados.net/wp-content/uploads/2020/09/Crunchyroll_Xbox_Game_Pass-fafa.jpg"
                        
                        /* modal */
                        img="https://viciados.net/wp-content/uploads/2020/09/Crunchyroll_Xbox_Game_Pass-fafa.jpg"
                        nome="Crunchyroll Premium chega às vantagens do Xbox Game Pass Ultimate"
                        resumo="A Crunchyroll fechou uma parceria com o Xbox e trará três meses de Xbox Game Pass para PC. De acordo com informações, os assinantes Premium da Crunchyroll e novos usuários terão novo serviço de graça.
                        Confira as vantagens de ser assinante Premium da Crunchyroll:
                        Mais de 100 jogos de PC single player e multiplayer para jogar;
                        Acesso ao EA Play, conferindo acesso ao catálogo da Electronic Arts para PC, além de recompensas adicionais e conteúdos exclusivos
                        Acesso a jogos do Xbox Game Studios no dia do lançamento
                        Descontos de assinantes e muito mais
                        Sendo assim a Crunchyroll oferece aos fãs diversas maneiras diferentes de assistir a seus animes favoritos. Com o Crunchyroll Premium, fãs podem escolher entre três planos que oferecem acesso a títulos de simulcast no mesmo dia da exibição do Japão, além de vários outros benefícios adicionais. Entretanto, o acesso ao Xbox Game Pass para PC será concedido a todos os assinantes Premium da Crunchyroll, novos ou existentes, além de qualquer usuário que se inscrever a um teste gratuito do Crunchyroll Premium. Usuários interessados na oferta podem assinar o Crunchyroll Premium clicando no link aqui.             
                        Além disso, a parceria abre as festividades da Virtual Crunchyroll Expo, que reúne a comunidade global de anime para celebrar o que há de maior e melhor na animação japonesa. O evento será realizado gratuitamente via ‘streaming’, nos dias 5 a 7 de agosto.    
                        Por fim a Crunchyroll conecta mais de 5 milhões de assinantes e mais de 125 milhões de usuários."
                        fonte="Anime New"
                        data="05/08/2021"
                    />
                </div>
            </div>
            <div className="topics">
                   <div className="topicsAnime">
                    <h2> Anime </h2>
                        <Topics
                            imgTopic="https://animenew.com.br/wp-content/webp-express/webp-images/uploads/2021/11/Attack-on-Titan-Final-Season-Parte-2-ganha-imagem-promocional-730x395.jpg.webp"
                            area="Noticia"
                            titulo="Attack on Titan Final Season – Parte 2 ganha imagem promocional"
                            dataTopic="
                            15/11/2021"

                            /*Modal*/
                            img="https://images3.alphacoders.com/653/thumb-1920-653529.jpg"
                            nome="Attack on Titan Final Season – Parte 2 ganha imagem promocional"
                            resumo="Para a aquecer a estreia da parte 2 do anime Attack on Titan (Shingeki no Kyojin), o estúdio revelou uma nova imagem promocional. De acordo com o site oficial, a série estreia dia 9 de janeiro.Sendo assim, a direção é de Yuichiro Hayashi no estúdio MAPPA (Jujutsu Kaisen) e designer de personagens por Tomohiro Kishi.
                            Os dubladores que fizeram parte da primeira parte da temporada retornarão para a segunda parte. O episódio 75 terminou em março com o anúncio de que o episódio 76 iria estrear no próximo inverno no Japão.
                            Attack on Titan: The Final Season estreou portanto no canal NHK no dia 7 de dezembro de 2020."
                            fonte="Anime New"
                            data="15/11/2021"
                        />
                        <Topics
                            imgTopic="https://animenew.com.br/wp-content/webp-express/webp-images/uploads/2021/11/Sword-Art-Online-Progressive-Newtype-730x395.jpg.webp"
                            area="Noticia"
                            titulo="Sword Art Online: Progressive ganha novo filme para 2022"
                            dataTopic="
                            01/11/2021"

                            /*Modal*/
                            img="https://animenew.com.br/wp-content/webp-express/webp-images/uploads/2021/11/Sword-Art-Online-Progressive-Newtype-730x395.jpg.webp"
                            nome="Sword Art Online"
                            resumo="Com a confirmação oficial do novo filme de Sword Art Online: Progressive Scherzo of Deep Night. De acordo com o twitter oficial, adaptação chega em 2022 e gira em torno do 5.º piso de Aincrad na história original.O atual filme Sword Art Online: Progressive – Hoshi Naki Yoru no Aria é dirigido por Ayako Kawano no estúdio A-1 Pictures. Kento Toya (Sword Art Online: Alicization – War of Underworld, The Seven Deadly Sins: Revival of The Commandments) faz o ‘design’ dos personagens.
                            O filme tem base na light novel Progressive do autor Reki Kawahara. A novel lançou em 2012 como uma versão revisada recontando eventos que aconteceram em Sword Art Online.
                            Por fim a história descreve a jornada de Kirito pelo castelo flutuante de Aincrad desde o início, andar por andar."
                            fonte="Anime New"
                            data="01/11/2021"
                        />
                        <Topics
                            imgTopic="https://www.intoxianime.com/wp-content/uploads/2020/08/0-Gnr6hrBQg4OA0IN-.jpeg"
                            area="Noticia"
                            titulo="The Promised Neverland – Personagem Isabella receberá um capítulo dedicado no mangá"
                            dataTopic="
                            06/12/2020"

                            /*Modal*/
                            img="https://www.intoxianime.com/wp-content/uploads/2020/08/0-Gnr6hrBQg4OA0IN-.jpeg"
                            nome="The Promised Neverland"
                            resumo="The Promised Neverland receberá um novo capitulo extra no mangá, que será então focado na personagem Isabella, onde poderemos ver mais sobre a trajetória da personagem, ou, como foi anunciado, a “verdade” sobre ela.
                            A obra já recebeu um capítulo extra com um total de 36 páginas focado na Personagem Krone.
                            O mangá de The Promissed Neverland foi publicado pela editora Shueisha na revista Weekly Shonen Jump desde 2016, até ser concluído neste ano no dia 15 de Junho."
                            fonte="Anime New"
                            data="06/12/2020"
                        />
                   </div>
                   <div className="topicsManga">
                        <h2> Mangá </h2>
                        <Topics
                            imgTopic="https://animenew.com.br/wp-content/uploads/2021/11/chibon-kaburi.webp"
                            area="Noticia"
                            titulo="Tomo Kitaoka lançará um novo mangá em dezembro"
                            dataTopic="
                            03/11/2021"

                            /*Modal*/
                            img="https://animenew.com.br/wp-content/uploads/2021/11/chibon-kaburi.webp"
                            nome="Tomo Kitaoka"
                            resumo="A 22ª edição deste ano da revista Manga Action, da editora Futabasha revelou que Tomo Kitaoka lançará um novo mangá intitulado Chibon Kaburi, o mangá lançará na próxima edição da revista no dia 7 de dezembro.Chibon Kaburi se passará em uma cidade rural e é centrado em um lamentável caso de assassinato.
                            Kitaoka lançou o mangá The Walking Cat na revista Manga Action em junho de 2018, e o encerrou em fevereiro de 2020. A editora Futabasha publicou o terceiro e último volume do mesmo em março de 2020."
                            fonte="Anime New"
                            data="03/11/2021"
                        />
                        <Topics
                            imgTopic="https://animenew.com.br/wp-content/webp-express/webp-images/uploads/2021/10/Sousou-no-Frieren-manga-tem-4.5-milhoes-de-copias-730x395.jpg.webp"
                            area="Noticia"
                            titulo="Sousou no Frieren – Mangá tem 4.5 milhões de cópias"
                            dataTopic="
                            15/11/2021"

                            /*Modal*/
                            img="https://animenew.com.br/wp-content/webp-express/webp-images/uploads/2021/10/Sousou-no-Frieren-manga-tem-4.5-milhoes-de-copias-730x395.jpg.webp"
                            nome="Sousou no Frieren"
                            resumo="O mangá Sousou no Frieren (Frieren: Beyond Journey’s End) tem 4.5 milhões de cópias em circulação. De acordo com informações, a obra chegou em abril de 2020 e o seu 6.º volume será lançado dia 18 de novembro deste ano.Por fim o mangá é publicado pela Weekly Shonen Sunday com história de Kanehito Yamada e Tsukasa Abe."
                            fonte="Anime New"
                            data="29/10/2021"
                        />
                        <Topics
                            imgTopic="https://animenew.com.br/wp-content/webp-express/webp-images/uploads/2021/09/Jujutsu-Kaisen-Vendas-do-manga-saltam-em-650-730x395.jpg.webp"
                            area="Noticia"
                            titulo="Jujutsu Kaisen – Vendas do mangá já saltam em 650%"
                            dataTopic="
                            27/09/2021"

                            /*Modal*/
                            img="https://animenew.com.br/wp-content/webp-express/webp-images/uploads/2021/09/Jujutsu-Kaisen-Vendas-do-manga-saltam-em-650.jpg.webp"
                            nome="Attack on Titan Final Season – Parte 2 ganha imagem promocional"
                            resumo="A editora Shueisha informou hoje que com a tiragem inicial de 2,15 milhões de cópias do 17º volume do mangá Jujutsu Kaisen, o mesmo terá 55 milhões de cópias em circulação (incluindo cópias impressas e digitais, bem como cópias ainda não vendidas).
                            As vendas do mangá cresceram cerca de 650% desde a estreia de sua adaptação em anime, que foi exibida em outubro do ano passado. O 15º volume da obra teve 1,5 milhão de cópias em sua tiragem inicial, e esta foi a primeira vez que qualquer um dos volumes do mangá teve mais de 1 milhão de cópias em sua tiragem inicial.
                            O 16º volume de Jujutsu Kaisen teve 2 milhões de cópias em sua tiragem inicial, colocando o mangá em 50 milhões de cópias quando foi lançado no dia 4 de junho.O autor Gege Akutami lançou o mangá de Jujutsu Kaisen na revista Weekly Shonen Jump da editora Shueisha em março de 2018.
                            Aqui no Brasil, o mangá de Jujutsu Kaisen é publicado pela editora Panini."
                            fonte="Anime New"
                            data="27/09/2021"
                        />
                   </div>
                </div>
        </Style>
    );

};