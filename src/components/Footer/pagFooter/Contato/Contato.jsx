import React from 'react';
import { H1Style, Modal } from '../../../Components';
import { ContainerForm, Formulario, Botao } from '../../../../pages/Login/Style';

export default function Contato() {


    return (
        <ContainerForm>
            <H1Style> Entre em contato </H1Style>
                    <Formulario>
                        <div className="containerForm">
                            <h4> Por meio desse formulário preencha os campos para entrar em contato com nossa equipe de desenvolvimento Front-End do site NOME. </h4>
                            <form className="formulario">
                                <div className="campos-form">
                                    <input type="text" id="nome" placeholder="Nome" />
                                </div>
                                
                                <div className="campos-form">
                                    <input type="email" placeholder="Email@email.com" id="email" />
                                </div>
                                <div className="campos-form">
                                    <label htmlFor="opcao">Selecione um tema:</label>
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
                                </div>
                                <div className="campos-form">
                                    <label htmlFor="comentario">Comentário: </label>
                                    <textarea name="comentario" id="comentario" className="coments" placeholder="Nos informe o motivo do contato..." cols="30" rows="5" className="comentario">    
                                    </textarea>
                                </div>
                                <Botao color="#FE6688" type="button"> Cancelar </Botao>
                                <Botao color="#F16EA5"> Enviar</Botao>
                            </form>
                        </div>
                    </Formulario>
                    <Modal color="#FE6688" 
                        nomeBotao="teste" 
                        img="https://pa1.narvii.com/6595/33963d95eb637c3e8cbed27e7a204ae821723c2c_hq.gif" 
                        botaoPop="testePOP"
                        mensagem="Agradecemos!"
                        mensagem2="ありがとう"
                    /> 
        </ContainerForm>
    );
}
