import { ModalNotices } from "../../components/Components";
import { EstiloNR, EstiloNL, TemaN, EstiloT } from './Style';

export const NoticiasR = (props) => {
    return(
    <EstiloNR className="right" imgR={props.imgR}>
        <div className="noticiaRight">
            <h6> {props.statusR} </h6>
            <p> {props.nomeR} </p>
            <div className="botaoInfo"> 
                <ModalNotices
                        nomeBotao={props.nomeBotao}
                        img={props.img}
                        nome={props.nome}
                        data={props.data}
                        fonte={props.fonte}
                        resumo={props.resumo}
                        trailer={props.trailer}
                        botaoPop={props.botaoPop}
                    />
            </div>
        </div>
    </EstiloNR>
    )
}

export const NoticiasL = (props) => {
    return(
    <EstiloNL className="left">
        <div className="noticiaLeft">
            <img className="imgL" src={props.imgL} />
            <div className="texto">
                <div className="noticia">
                    <div className="tema">
                        <h4>{props.nomeL} <span> {props.dataL} </span> </h4> 
                    </div>
                    <h6> {props.statusL} </h6>
                 
                        <p className="resumo"> {props.resumoL}  </p>
                    
                </div>
            </div>
        </div>
    </EstiloNL>
    )
}

export const Tema = (props) =>{
    return (
        <TemaN>
            <h3> {props.titulo} </h3>
            <div className="linhaT"></div>
        </TemaN>
    )
}

export const Topicos = (props) =>{
    return (
        <EstiloT>
            <img src={props.imgT} />
            <div className="informacao">
                <h5 className="areaT">{props.areaT}</h5>
                <h3 className="tituloT"> {props.tituloT} </h3>
                <span className="dataT"> {props.dataT}      <ModalNotices 
                    nomeBotao="ver"
                    color="red" 
                    
                    />
                    
                </span>
            </div>
        </EstiloT>
    );

}
