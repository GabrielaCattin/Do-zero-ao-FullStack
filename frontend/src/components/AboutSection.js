import React from "react";
import AboutUs from "../pages/AboutUs";
import {About, Description, Image} from '../styles'


const AboutSection = () => {
    return(
        <About>
            <Description>
                <h2>Gabriela Cattin</h2>
                <h2>Desenvolvedora Jr</h2>

                <p>
                    Aluna de ADS na FATEC Ipiranga, estagiária em desenvolvimento na empresa TOTVS,
                        apesar do pouco tempo desenvolvendo, já estou dando grandes passos, cada dia mais segura,
                            dedicada e amando cada vez mais a área de Desenvolvimento
                </p>

                
            <button>Contact me</button>

            </Description>

            <Image>
                <img src="http://pm1.narvii.com/6320/28a43c257046a28c70656bae5ec1c54bea9c8c55_00.jpg" alt="Nico Robin"></img>
            </Image>
        </About>
    )
}


export default AboutSection;