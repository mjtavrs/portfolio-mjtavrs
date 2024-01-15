import { Container } from "./styles";

export function Button({ title, link }) {
    return (
        <Container>
            <a href={link}>{title}</a>
        </Container>
    )
}