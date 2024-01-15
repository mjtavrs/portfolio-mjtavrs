import styled from "styled-components";

export const Card = styled.div`
    align-items: center;
    border: 2px solid ${({ theme }) => theme.COLORS.BLACK};
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 15rem;
    padding: 1rem;
    width: 20rem;

    > svg {
        font-size: 4rem;
    }

    h3 {
        font-size: 2rem;
        font-weight: 500;
        padding-top: 1.5rem;
        text-align: center;
    }
`