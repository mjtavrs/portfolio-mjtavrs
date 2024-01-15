import { Container } from "./styles";

export function CardWrapper({ id, children }) {
    return (
        <Container id={id}>
            {children}
        </Container>
    )
}