import { H1Style } from "../../components/Components";
import { EstiloNR, EstiloNL } from './Style';


export const NoticiasR = (props) => {
    return(
    <EstiloNR className="right" imgR={props.imgR}>
        <H1Style> Noticias da semana </H1Style>
        <div className="noticiaRight">
            <span> {props.dataR} </span>
            <h6> {props.statusR} </h6>
            <p> {props.nomeR} </p>
        </div>
    </EstiloNR>
    )
}

export const NoticiasL = (props) => {
    return(
    <EstiloNL className="left">
        <H1Style> Noticias atuais </H1Style>
        <div className="noticiaLeft">
            <img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8739d07baed7d77d/5ed9b1c197379739c07664d9/Arcane_Announcement_Banner.jpg" />
            <div className="texto">
                <div className="noticia">
                    <div className="tema">
                        <h4>{props.nomeL} <span> {props.dataL} </span> </h4> 
                    </div>
                    <h6> {props.statusL} </h6>

                </div>
                <div className="resumo">
                    <p> {props.resumoL}  </p>
                   
                </div>
            </div>
        </div>
    </EstiloNL>
    )
}