import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem 0;
    text-align: center;

    > a {
        background-color: ${({ theme }) => theme.COLORS.ORANGE};
        color: ${({ theme }) => theme.COLORS.BLACK};
        border-radius: 1.6rem;
        font-size: 1.6rem;
        font-weight: 700;
        padding: 1rem 2rem;
        text-decoration: none;
    }
`