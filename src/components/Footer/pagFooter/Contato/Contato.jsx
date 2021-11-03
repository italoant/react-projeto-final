import React from 'react';
import { EstiloContato } from '../Contato/StylePag';
import { H1Style } from '../Equipe/Style';

// import { Container } from './styles';

export default function Contato() {
    return (
        <div>
            <H1Style> Contato </H1Style>
            <EstiloContato>
                <div className="containerForm">
                    <form className="formulario">
                        <label htmlFor="nome">Nome </label>
                        <input type="text" id="nome" />
                        <label htmlFor="email">Email </label>
                        <input type="email" />
                        <label htmlFor="comentario">Comentario </label>
                        <textarea name="comentario" id="comentario" cols="30" rows="10">
                        </textarea>
                    </form>
                </div>
            </EstiloContato>
        </div>
    );
}