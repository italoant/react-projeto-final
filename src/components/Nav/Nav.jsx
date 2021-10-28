import React from "react";
import { Link } from "react-router-dom";
import { Header } from "./Style";



export default function Nav() {
    return <Header>
        <div className="left">
            <ul className="ulLeft">
                <li><img src="" alt="" /></li>
                <li><Link className="link" to="/" >Home</Link></li>
                <li><Link className="link" to="/anime" >Anime</Link></li>
                <li><Link className="link" to="/manga">Mangá</Link></li>
                <li><Link className="link" to="/noticias">Noticias</Link></li>
            </ul>
        </div>
        <div  className="right">
            <ul className="ulRight">
                <li><img src="" alt="" /></li>
                <li><Link className="link" to="/login">Login</Link></li>
                <li><Link className="link" to="/cadastro">Cadastre-se</Link></li>
            </ul>
        </div>
    </Header>

};
