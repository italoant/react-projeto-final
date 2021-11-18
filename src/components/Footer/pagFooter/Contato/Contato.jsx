import React, { useState, useEffect } from 'react';
import { H1Style, Modal } from '../../../Components';
import { Container, Form, Button } from './StylePag';
import { useTheme } from "../../../../context/Theme";



export default function Contato() {

    useEffect(() => {
        window.document.title = "PanimeE - Contato"
    })

    const { themePage } = useTheme();

    const [ nome, setNome ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ comentario, setComentario ] = useState("");
    const [ tema, setTema ] = useState("");
    const [ mensagem, setMenssagem ] = useState("");

    const [enviar, setEnviar] = useState("");

    function validacao(e){
        if(validateNome(nome) && validateEmail(email) && comentario.length >= 1 && tema !== ""){ 
            setInterval(() => {window.location.reload(true)}, 3000)
            setMenssagem('')
            setEnviar("Sua mensagem foi enviada com sucesso!")
            e.preventDefault()
        }else{
            setMenssagem('Preencha todos os campos abaixo corretamente.')
            e.preventDefault()
        }
    }

    function validateEmail(email){
        var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        if (reg.test(email)){
            return true; }
        else{
            return false;
        }
    } 

    function validateNome(nome){
        var reg = /[A-Z][a-z].* [A-Z][a-z].*/
        if (reg.test(nome)){
            return true; }
        else{
            return false;
        }
    }

    return (
        <Container theme={themePage}>
            <H1Style> Entre em contato </H1Style>
                    <Form>
                        <h4> Preencha os campos deste formulário para entrar em contato com nossa equipe de desenvolvimento Front-End do site PanimeE. </h4>
                        <p>{mensagem === "" ? (<p className="mensagem_ok">{enviar}</p>) : (<p className="mensagem">{mensagem}</p>)}</p>
                            <div className="campos-form">
                                <input type="text" id="nome" placeholder="Ex.: Naruto Uzumaki" onChange={(e) => setNome(e.target.value)} />
                            </div> 
                            <div className="campos-form">
                                <input type="email" placeholder="Email@email.com" id="email" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="campos-form">
                                <label htmlFor="opcao">Selecione um tema:</label>
                                    <select onClick={(e) => setTema(e.target.value)} className="opcoes" name="opcao" id="opcao">
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
                                <textarea onChange={(e) => setComentario(e.target.value)}  name="comentario" id="comentario" className="coments" placeholder="Nos informe o motivo do contato..." cols="30" rows="5" className="comentario">    
                                </textarea>
                            </div>
                            <Button color="#FE6688" type="button"> Cancelar </Button>
                            <Button color="#F16EA5" onClick={validacao}> Enviar</Button>
                    </Form>
        </Container>
    );
}
