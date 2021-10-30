import React from "react";
import { Link } from "react-router-dom";
import { Header, ButtonPopUp } from "./Style";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import Logo from '../../assets/logo.svg';
import User from '../../assets/user.svg';
import Theme from '../../assets/theme.svg';


export default function Nav() {
    return <Header>
        <div className="container">
            <Link to="/"><img src={Logo} alt="" /></Link>   
            <ul className="container_nav">
                <li><Link className="link" to="/" >Home</Link></li>
                <li><Link className="link" to="/anime" >Anime</Link></li>
                <li><Link className="link" to="/manga">Mangá</Link></li>
                <li><Link className="link" to="/noticias">Noticias</Link></li>
            </ul>
        </div>
        <div  className="container icons">
            <ul className="container_nav ">

                    {['bottom'].map((placement) => (
                    <OverlayTrigger
                        trigger="click"
                        key={placement}
                        placement={placement}
                        overlay={
                            <Popover id={`popover-positioned-${placement}`}>
                            <Popover.Header as="h3">{`Usuário`}</Popover.Header>
                            <Popover.Body className="d-flex flex-column pop_up">
                                <ButtonPopUp>Login</ButtonPopUp>
                            </Popover.Body>
                            </Popover>
                    }
                    >
                    <li><img src={User} alt="user" /></li>

                    </OverlayTrigger>
                ))}

                <li><img src={Theme} alt="icon theme" /></li>
            </ul>
        </div>
    </Header>

};
