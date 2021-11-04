import React from 'react';
import { EstiloContato } from '../Contato/StylePag';
import { H1Style } from '../../../Components';
import { BackgroundForm } from '../../../Components';

export default function Contato() {
    return (
        <EstiloContato>
            <H1Style> Entre em contato </H1Style>
                    <BackgroundForm>
                        <div className="containerForm">
                            <h4> Por meio desse formulário preencha os campos para entrar em contato com nossa equipe de desenvolvimento Front-End do site NOME. </h4>
                            <form className="formulario">
                                <label htmlFor="nome">Nome: </label>
                                <input type="text" id="nome" placeholder="Claudiany Martins" />
                                <label htmlFor="email">Email: </label>
                                <input type="email" placeholder="Claudiany@gmail.com" />
                                <label htmlFor="comentario">Comentário: </label>
                                <textarea name="comentario" id="comentario" placeholder="Nos informe o motivo do contato..." cols="30" rows="10" className="comentario">
                                </textarea>
                                <div className="botoes">
                                    <button className="btnCancelar">
                                        Cancelar
                                    </button>
                                    <button className="btnEnviar">
                                        Enviar
                                    </button>
                                </div>
                                <div className="gif">
                                    <img src="https://i.pinimg.com/originals/1f/a8/d9/1fa8d907a5cc6e1fa22f431929ebc12a.gif" alt="" />
                                </div>
                                <div className="agradecimento">
                                    <h5>
                                        Até mais!
                                            <span className="colocar um popup legal agradecendo e vice versa"> ありがとう </span>
                                    </h5>
                                </div>
                            </form>
                        </div>
                    </BackgroundForm>
        </EstiloContato>
    );
}
