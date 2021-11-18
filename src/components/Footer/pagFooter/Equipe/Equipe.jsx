import React, { useEffect } from 'react';
import { useTheme } from '../../../../context/Theme';
import EquipeDados from './DadosProps';
import { H1Style } from '../../../Components';

// imagens
import Camila from './img/camil.png';
import Italo from './img/italo.jpg';
import Thayza from './img/kythanna.jfif';
import Matheus from './img/matheus.png';
import { EstiloEquipe } from './Style';


export default function Equipe(){

    const { themePage } = useTheme();

    useEffect(() => {
        window.document.title = "PanimeE - Equipe"
    })

    return (
        <EstiloEquipe theme={themePage}>
            <H1Style> As Panteras Cor de Rosa </H1Style>
            <div className="informacoes">
                <EquipeDados 
                    foto={Camila}
                    nome="Camila"
                    sobrenome="“Bala” Silva" 
                    cidade="Recife" estado="PE" 
                    sobre="Me chamo camila, mas pode me chamar de cami. Faço parte da equipe de desenvolvimento
                    da aplicação PanimeE, sou apaixonada pelo universo que trazemos aqui, assim também 
                    como o mundo da tecnologia. Sou aluna START recife e aqui trago alguns dos meus
                    aprendizados. Minha meta é conhecer de perto esses universos e expandir cada vez mais
                    meus conhecimentos."
                    linkGithub="https://github.com/camilams27"
                    linkLinkedin="https://www.linkedin.com/in/camila-camasi/"
                    linkInsta="https://www.instagram.com/camii.las/"
                    linkCV="https://camilams27.github.io/ProjetoCurriculo/"
                />
                <EquipeDados 
                    foto={Italo}
                    nome="Italo"
                    sobrenome="“Numeros” Antonio" 
                    cidade="Recife" estado="PE" 
                    sobre="Olá, me chamo Italo tenho 24 anos mas sou conhecido como numer0s, faço parte da equipe As panteras cor de rosa, nas horas vagas costumo assistir animes e conversar com meus amigos, então pra mim realizar esse projeto foi muito confortavel, tanto pelo tema como me relacionar com meus companheiros. Faço parte do Start Recife 2021 e neste projeto espelho todo meu aprendizado as vocês, no Start descobri o meu amor por tecnologia e tenho planos de proximo ano iniciar ADS para aprimorar minhas habilidades."
                    linkGithub="https://github.com/italoant"
                    linkLinkedin="https://www.linkedin.com/in/italo-antonio/"
                    linkInsta="https://www.instagram.com/italoant/"
                    linkCV="https://italoant.github.io/Atividade-de-avalia-o-HTML-e-CSS/"
                />
                <EquipeDados 
                    foto={Thayza}
                    nome="Thayza"
                    sobrenome="“Kythanna” Santana" 
                    cidade="Recife" estado="PE" 
                    sobre="Me chamo Thayza Santana e sou conhecida pelos meus amigos por “Kythanna” Tenho 22 anos e no momento sou estudante de Desenvolvimento Front-end pelo Start Recife. No meu tempo livre eu gosto de ler livros e mangás, escrever e publicar algumas histórias de minha autoria, ouvir música, assistir animes e filmes, jogar e sair com meus amigos. Para me conhecer mais um pouco, é só acessar as minhas Redes Sociais."
                    linkGithub="https://github.com/thayzasantana"
                    linkLinkedin="https://www.linkedin.com/in/thayza-santana/"
                    linkInsta="https://www.instagram.com/thayzasantana_/"
                    linkCV="https://thayzasantana.github.io/avaliacao-html-css/"
                />
                <EquipeDados 
                    foto={Matheus}
                    nome="Matheus"
                    sobrenome="“Deslumbrante” Silva" 
                    cidade="Recife" estado="PE" 
                    sobre="Tenho 19 anos, nasci em Recife - Pernambuco. Tive meu primeiro contato com programação os 15 anos, quando comecei a estudar Python. Me apaixonei no mesmo momento! Atualmente, estudo Desenvolvento Web e pretendo me especializar em Front-end. Gosto de assistir, ouvir música, jogar um Lolzinho e sair com os meus amigos. Esse sou eu, Matheus Henrique."
                    linkGithub="https://github.com/mateushenriquedasilva"
                    linkLinkedin="https://www.linkedin.com/in/matheus-henrique-54a673197/"
                    linkInsta="https://www.instagram.com/themateusreal/"
                    linkCV="https://mateushenriquedasilva.github.io/projeto-curriculo/"
                />
            </div>
        </EstiloEquipe>
    );
}

