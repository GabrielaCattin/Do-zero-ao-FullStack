import React from "react";
import styled from 'styled-components';
import { About, Description, Image } from "../styles";

const ServicesSection = () => {
    return (
        <Services>
            <Image>
                <img src="https://kbase.com.br/novo/wp-content/uploads/2019/06/linguagem-JavaScript.jpg" alt="Logo JS" />
            </Image>

            <ServiceDescription>
                <h2>Things I do</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            Icone
                            <h3>Portfolio</h3>
                        </div>
                        <p>Check my work on my portfolio</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            Icone
                            <h3>Cursos</h3>
                        </div>
                        <p>Check my work on my portfolio</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            Icone
                            <h3>Hobbies</h3>
                        </div>
                        <p>Check my work on my portfolio</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            Icone
                            <h3>Github</h3>
                        </div>
                        <p>Check my work on my portfolio</p>
                    </Card>
                </Cards>
            </ServiceDescription>
        </Services>
    )
};

const Services = styled(About) `
    h2{
        padding-top: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const ServiceDescription = styled(Description) `
    flex: 2.5;
`;

const Cards = styled.div `
    background: black;
    display: flex;
    flex-wrap: wrap;
    padding: 4rem;
`;
const Card = styled.div `
    background: black;
    padding: 0.5rem;
    flex-basis: 15rem;
    .icon{
        display: flex;
        align-items: center;
    }
    h3{
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
    }
`;
export default ServicesSection;