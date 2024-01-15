import { BackToTop, Container, Introduction } from "./styles";

import { Button } from "../Button";

import logo from "../../assets/images/logos/smallerLogo_white.svg";

export function Header() {
    return (
        <>
            <BackToTop id="top" />
            <Container>
                <img src={logo} />
                <nav>
                    <ul>
                        <li><a href="#skills">Habilidades</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
                <Button
                    title={"Vamos conversar?"}
                    link={"#contact"}
                />
            </Container>
            <Introduction>
                <h1>Olá, <br />meu nome é <span>Marcos Tavares</span>,<br />e eu sou <span>desenvolvedor web full stack</span>.</h1>
            </Introduction>
        </>
    )
}