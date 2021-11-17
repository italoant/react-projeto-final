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
                    nome="Bala"
                    sobrenome="Cami" 
                    cidade="Recife" estado="PE" 
                    sobre="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est nulla, facilisis at odio in, vulputate varius sem. Cras fermentum in turpis vel efficitur. Pellentesque non venenatis magna. Morbi in tincidunt lectus. Curabitur non lorem mauris. Cras nec mi pulvinar, ultrices ligula ut, fermentum ex. Nullam dolor nulla, pellentesque ut nisl eu, pharetra dictum neque. Quisque feugiat pharetra mauris, id vestibulum nulla maximus vel."
                    linkCV="https://camilams27.github.io/ProjetoCurriculo/"
                />
                <EquipeDados 
                    foto={Italo}
                    nome="Numeros"
                    sobrenome="Italo" 
                    cidade="Recife" estado="PE" 
                    sobre="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est nulla, facilisis at odio in, vulputate varius sem. Cras fermentum in turpis vel efficitur. Pellentesque non venenatis magna. Morbi in tincidunt lectus. Curabitur non lorem mauris. Cras nec mi pulvinar, ultrices ligula ut, fermentum ex. Nullam dolor nulla, pellentesque ut nisl eu, pharetra dictum neque. Quisque feugiat pharetra mauris, id vestibulum nulla maximus vel."
                    linkCV="https://italoant.github.io/Atividade-de-avalia-o-HTML-e-CSS/"
                />
                <EquipeDados 
                    foto={Thayza}
                    nome="Kythanna"
                    sobrenome="Thayza" 
                    cidade="Recife" estado="PE" 
                    sobre="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est nulla, facilisis at odio in, vulputate varius sem. Cras fermentum in turpis vel efficitur. Pellentesque non venenatis magna. Morbi in tincidunt lectus. Curabitur non lorem mauris. Cras nec mi pulvinar, ultrices ligula ut, fermentum ex. Nullam dolor nulla, pellentesque ut nisl eu, pharetra dictum neque. Quisque feugiat pharetra mauris, id vestibulum nulla maximus vel."
                    linkCV="https://thayzasantana.github.io/avaliacao-html-css/"
                />
                <EquipeDados 
                    foto={Matheus}
                    nome="Deslumbrante"
                    sobrenome="Matheus" 
                    cidade="Recife" estado="PE" 
                    sobre="Tenho 19 anos, nasci em Recife - Pernambuco. Tive meu primeiro contato com programação os 15 anos, quando comecei a estudar Python. Me apaixonei no mesmo momento! Atualmente, estudo Desenvolvente Web e pretendo me especializar em Front-end. Gosto de assistir, ouvir música, jogar um Lolzinho e sair com os meus amigos. Esse sou eu, Matheus Henrique."
                    linkCV="https://mateushenriquedasilva.github.io/projeto-curriculo/"
                />
            </div>
        </EstiloEquipe>
    );
}

