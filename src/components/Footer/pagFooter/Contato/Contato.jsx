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
                                <input type="email" placeholder="Claudiany@gmail.com" id="email" />
                                <label htmlFor="">Selecione um tema:</label>
                                    <select className="opcoes" name="opcao" id="opcao">
                                        <option value="" selected  className="opcao">-</option>
                                        <optgroup label="Senha:" className="opcao">
                                            <option value="esqueceuSenha" className="opcao">Esqueceu a senha</option>
                                        </optgroup>
                                        <optgroup label="Gerenciamento de conta:" className="opcao">
                                            <option value="gerenciamento" className="opcao">Solicitação de dados, recuperar conta e exclusão de conta</option>
                                        </optgroup>
                                        <optgroup label="Problemas técnicos:" className="opcao">
                                            <option value="problemasTecnicos" className="opcao">Lag, fechamento</option>
                                        </optgroup>
                                        <optgroup label="Outros:" className="opcao">
                                            <option value="outros" className="opcao">Outros temas</option>
                                        </optgroup>
                                    </select>
                                    
                                <label htmlFor="comentario">Comentário: </label>
                                <textarea name="comentario" id="comentario" placeholder="Nos informe o motivo do contato..." cols="30" rows="5" className="comentario">
                                </textarea>
                                <div className="botoes">
                                    <button className="btnCancelar">
                                        Cancelar
                                    </button>
                                    <button className="btnEnviar">
                                        Enviar
                                    </button>
                                </div>
                                {/* <div className="gif">
                                    <img src="https://i.pinimg.com/originals/1f/a8/d9/1fa8d907a5cc6e1fa22f431929ebc12a.gif" alt="" />
                                </div>
                                <div className="agradecimento">
                                    <h5>
                                        Até mais!
                                            <span className="colocar um popup legal agradecendo e vice versa"> ありがとう </span>
                                    </h5>
                                </div> */}
                            </form>
                        </div>
                    </BackgroundForm>
        </EstiloContato>
    );
}
