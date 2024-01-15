import { Container, BackToTopLink } from "./styles";

import logo from "../../assets/images/logos/logo_white.svg";

import { FaMedium, FaGithub, FaLinkedin } from "react-icons/fa6";
import { PiGitlabLogoLight } from "react-icons/pi";
import { MdKeyboardArrowUp } from "react-icons/md";

export function Footer() {
    return (
        <Container>
            <BackToTopLink href="#top">Voltar ao topo<MdKeyboardArrowUp /></BackToTopLink>
            <img src={logo} />
            <div>
                <a href="https://www.linkedin.com/in/devmarcostavaress/" title="Visite meu perfil no Linkedin" target="_blank"><FaLinkedin /></a>
                <a href="https://github.com/mjtavrs" title="Visite meu repositório no Github" target="_blank"><FaGithub /></a>
                <a href="#" title="Visite meu repositório no Gitlab" target="_blank"><PiGitlabLogoLight /></a>
                <a href="https://medium.com/@dev.marcostavares" title="Visite meu perfil no Medium" target="_blank"><FaMedium /></a>
            </div>
            <p>Todos os direitos reservados a Marcos Tavares &#169; 2024</p>
        </Container>
    )
}