import { Container, ScrollHelper } from "./styles";

export function Section({ id, title, description, children }) {
    return (
        <>
            <Container>
                <ScrollHelper id={id}></ScrollHelper>
                <h2><mark>{title}</mark></h2>
                <p>{description}</p>
                {children}
            </Container>
        </>
    )
}