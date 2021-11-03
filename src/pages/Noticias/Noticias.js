import React from "react";
import { EstiloNoticia } from "./Style";
import { H1Style } from "../../components/Footer/pagFooter/Equipe/Style";

export default function Noticias(){
    return(
        <EstiloNoticia>
            <div className="noticias">
                <div className="right">
                    <H1Style> Noticias atuais </H1Style>
                    <div className="noticiaRight">
                        <img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8739d07baed7d77d/5ed9b1c197379739c07664d9/Arcane_Announcement_Banner.jpg" />
                        <div className="texto">
                            <div className="noticiaTema">
                                <h5> tema </h5>
                                <span> data </span>
                            </div>
                            <div>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ex et iaculis tincidunt. Donec auctor condimentum quam ac convallis. Nulla facilisi. Suspendisse ac diam non risus condimentum luctus. Fusce urna lacus, convallis ac efficitur sed, fringilla non ante. Praesent eleifend veentum at turpis vitae pretium.  </p>
                            </div>
                        </div>
                    </div>
                    <div className="noticiaRight">
                        <img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8739d07baed7d77d/5ed9b1c197379739c07664d9/Arcane_Announcement_Banner.jpg" />
                        <div className="texto">
                            <div className="noticiaTema">
                                <h5> tema </h5>
                                <span> data </span>
                            </div>
                            <div>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ex et iaculis tincidunt. Donec auctor condimentum quam ac convallis. Nulla facilisi. Suspendisse ac diam non risus condimentum luctus. Fusce urna lacus, convallis ac efficitur sed, fringilla non ante. Praesent eleifend veentum at turpis vitae pretium.  </p>
                            </div>
                        </div>
                    </div>
                    <div className="noticiaRight">
                        <img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt8739d07baed7d77d/5ed9b1c197379739c07664d9/Arcane_Announcement_Banner.jpg" />
                        <div className="texto">
                            <div className="noticiaTema">
                                <h5> tema </h5>
                                <span> data </span>
                            </div>
                            <div>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia ex et iaculis tincidunt. Donec auctor condimentum quam ac convallis. Nulla facilisi. Suspendisse ac diam non risus condimentum luctus. Fusce urna lacus, convallis ac efficitur sed, fringilla non ante. Praesent eleifend veentum at turpis vitae pretium.  </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="left">
                    <H1Style> Noticias da semana </H1Style>
                    <div className="noticiaLeft">
                        <span> data </span>
                        <h6> tema </h6>
                        <p> resumo </p>
                    </div>
                    <div className="noticiaLeft">
                        <span> data </span>
                        <h6> tema </h6>
                        <p> resumo </p>
                    </div>
                    <div className="noticiaLeft">
                        <span> data </span>
                        <h6> tema </h6>
                        <p> resumo </p>
                    </div>
                    <div className="noticiaLeft">
                        <span> data </span>
                        <h6> tema </h6>
                        <p> resumo </p>
                    </div>
                </div>
            </div>
        </EstiloNoticia>
    );

};