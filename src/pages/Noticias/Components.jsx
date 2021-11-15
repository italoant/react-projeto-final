import { ModalNotices } from "../../components/Components";
import { EstiloNR, EstiloNL, TemaN } from './Style';


export const NoticiasR = (props) => {
    return(
    <EstiloNR className="right" imgR={props.imgR}>
        <div className="noticiaRight">
            <h6> {props.statusR} </h6>
            <p> {props.nomeR} </p>
            <div className="botaoInfo">
                <ModalNotices
                    nomeBotao="ver mais"
                    img="https://cdn.falauniversidades.com.br/wp-content/uploads/2021/11/12131749/Arcane-1024x683.png"
                    nome="Arcane"
                    data=""
                    fonte=""
                    resumo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut tempus enim. Nulla facilisi. Phasellus gravida nulla mauris, vel porttitor dui tincidunt ut. Fusce nec turpis dui. Curabitur neque ex, placerat pharetra urna eget, commodo scelerisque turpis. Duis vel convallis odio. Ut non justo quis urna congue pharetra. Morbi facilisis odio purus, a lacinia ipsum congue et. Aliquam feugiat leo ut urna dignissim, nec convallis quam feugiat. Maecenas felis nisl, laoreet quis aliquam in, pellentesque nec sem."
                    trailer="https://www.youtube.com/embed/RAKWlGS-0UY"
                    botaoPop="voltar"
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
            <img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8739d07baed7d77d/5ed9b1c197379739c07664d9/Arcane_Announcement_Banner.jpg" />
            <div className="texto">
                <div className="noticia">
                    <div className="tema">
                        <h4>{props.nomeL} <span> {props.dataL} </span> </h4> 
                    </div>
                    <h6> {props.statusL} </h6>
                    <div className="resumo">
                        <p> {props.resumoL}  </p>
                    </div>
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