import React from 'react';
import { H1Style } from '../../../Components';
 import { ContainerSobre } from './StylePag';

export default function Sobre() {
    return (
        <ContainerSobre>
            <H1Style> Informações Sobre o Site</H1Style>
            <div className="container">
                <div className="left">
                    <h1>SOBRE</h1>
                    <p>
                        O site PanimeE foi desenvolvido com o objetivo de fornecer conteúdo sobre 
                        animes, mangás e algumas noticias sobre esse universo maravilhoso e rico de
                        histórias.
                        Tendo o tema claro e escuro para agradar todos os gostos, tela de login para
                        o usuário poder ter acesso a todas as funcionalidades do site, tela de cadastro,
                        uma tela de home para que o usuário passa navegar por onde quiser e fazer pesquisas
                        sobre seu anime ou mangá favorito.
                        Tendo também imagens que facilitam muito a identificação do que se estar procurando
                        e uma tela com apenas noticias de atualizações de episódios de animes e capítulos de 
                        mangá inéditos.
                    </p>
                </div>
                <div className="right">
                    <h1>HISTÓRIA</h1>
                    <p>
                        Criado com a finalidade de ser avaliado no projeto START, o site PanimeE
                        foi construído a partir de uma pesquisa feita com pessoas que consomem
                        esse conteúdo, perguntando o que faltava em outros sites de animes e mangá.
                        Com essa informação em mãos, a equipe criou layout e funcionalidades de acordo
                        com essa pesquisa e com os conhecimentos adquirido ao longo de todo o curso.
                        Juntando o gosto dos usuários ao gosto dos desenvolvedores, o site foi sendo 
                        construído com as tecnologias aprendidas durante o START junto com o conhecimento
                        da equipe para que o site ficasse com uma aparência única e que agradasse o máximo
                        de pessoas possível.
                    </p>
                </div>
            </div>
            <div className="bot">
                <h5> Para mais informações sobre os desenvolvedores </h5>
            </div>
        </ContainerSobre>
    );
}