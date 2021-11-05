import React from 'react';
import { H1Style } from '../../../Components';
 import { ContainerSobre } from './StylePag';

export default function Sobre() {
    return (
        <ContainerSobre>
            <H1Style> Sobre arq</H1Style>
            <div className="container">
                <div className="left">
                    <h1>SOBRE</h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros massa, malesuada quis tellus nec, ultricies consectetur dui. Duis varius ligula nec nulla ultrices, vitae vestibulum quam porta. Mauris leo quam, accumsan vel lectus ac, tempor euismod felis. Curabitur at sapien quam. Praesent eu porttitor mi, vitae consequat libero. Etiam vestibulum tellus eu pellentesque suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum ipsum eros, sit amet sollicitudin libero placerat nec. Duis bibendum ipsum vel sodales blandit. Sed auctor nunc vel porttitor pretium. Fusce urna enim, sollicitudin et diam sit amet, lobortis consequat purus.
                </div>
                <div className="right">
                    <h1>HISTÓRIA</h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros massa, malesuada quis tellus nec, ultricies consectetur dui. Duis varius ligula nec nulla ultrices, vitae vestibulum quam porta. Mauris leo quam, accumsan vel lectus ac, tempor euismod felis. Curabitur at sapien quam. Praesent eu porttitor mi, vitae consequat libero. Etiam vestibulum tellus eu pellentesque suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum ipsum eros, sit amet sollicitudin libero placerat nec. Duis bibendum ipsum vel sodales blandit. Sed auctor nunc vel porttitor pretium. Fusce urna enim, sollicitudin et diam sit amet, lobortis consequat purus.
                </div>
            </div>
            <div className="bot">
                <h5> Para mais informações sobre os desenvolvedores </h5>
            </div>
        </ContainerSobre>
    );
}