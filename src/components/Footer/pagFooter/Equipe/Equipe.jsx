import React from 'react';
import EquipeDados from './DadosProps';
import { H1Style } from '../../../Components';

// imagens
import Camila from './img/camila.png';
import Italo from './img/italo.jpg';
import Kitana from './img/kitana.png';
import Matheus from './img/mateus.png';


export default function Equipe(){
    
    return (
        <div className="containerDados">
            <H1Style> Equipe 4 </H1Style>
            <div className="informacoes">
                <EquipeDados 
                    foto={Camila}
                    nome="Camila"
                    sobrenome="Silva" 
                    cidade="Recife" estado="PE" 
                    sobre="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est nulla, facilisis at odio in, vulputate varius sem. Cras fermentum in turpis vel efficitur. Pellentesque non venenatis magna. Morbi in tincidunt lectus. Curabitur non lorem mauris. Cras nec mi pulvinar, ultrices ligula ut, fermentum ex. Nullam dolor nulla, pellentesque ut nisl eu, pharetra dictum neque. Quisque feugiat pharetra mauris, id vestibulum nulla maximus vel."
                    linkCV="https://camilams27.github.io/ProjetoCurriculo/"
                />
                <EquipeDados 
                    foto={Italo}
                    nome="Italo"
                    sobrenome="Amor" 
                    cidade="Recife" estado="PE" 
                    sobre="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est nulla, facilisis at odio in, vulputate varius sem. Cras fermentum in turpis vel efficitur. Pellentesque non venenatis magna. Morbi in tincidunt lectus. Curabitur non lorem mauris. Cras nec mi pulvinar, ultrices ligula ut, fermentum ex. Nullam dolor nulla, pellentesque ut nisl eu, pharetra dictum neque. Quisque feugiat pharetra mauris, id vestibulum nulla maximus vel."
                    linkCV="http://www.google.com"
                />
                <EquipeDados 
                    foto={Kitana}
                    nome="Kitana"
                    sobrenome="Thayza" 
                    cidade="Recife" estado="PE" 
                    sobre="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est nulla, facilisis at odio in, vulputate varius sem. Cras fermentum in turpis vel efficitur. Pellentesque non venenatis magna. Morbi in tincidunt lectus. Curabitur non lorem mauris. Cras nec mi pulvinar, ultrices ligula ut, fermentum ex. Nullam dolor nulla, pellentesque ut nisl eu, pharetra dictum neque. Quisque feugiat pharetra mauris, id vestibulum nulla maximus vel."
                    linkCV="http://www.google.com"
                />
                <EquipeDados 
                    foto={Matheus}
                    nome="Deslumbrante"
                    sobrenome="Matheus" 
                    cidade="Recife" estado="PE" 
                    sobre="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est nulla, facilisis at odio in, vulputate varius sem. Cras fermentum in turpis vel efficitur. Pellentesque non venenatis magna. Morbi in tincidunt lectus. Curabitur non lorem mauris. Cras nec mi pulvinar, ultrices ligula ut, fermentum ex. Nullam dolor nulla, pellentesque ut nisl eu, pharetra dictum neque. Quisque feugiat pharetra mauris, id vestibulum nulla maximus vel."
                    linkCV="https://mateushenriquedasilva.github.io/projeto-curriculo/"
                />
            </div>
        </div>
    );
}

