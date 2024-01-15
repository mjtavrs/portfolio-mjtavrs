import styled from "styled-components";

export const BackToTop = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BEIGE};
    border-width: 0;
    clip: rect(0,0,0,0);
    height: 1px;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    top: 0rem;
    white-space: nowrap;
    width: 1px;
    z-index: 2;
`

export const Container = styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    display: flex;
    justify-content: space-between;
    padding: 2rem 5rem;
    position: fixed;
    width: 100%;
    z-index: 1;

    img {
        width: 15rem;
    }

    ul {
        display: flex;
        gap: 10rem;
        list-style: none;

        a {
            color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};
            font-size: 1.8rem;
            font-weight: 500;
            text-decoration: none;
        }
    }
`

export const Introduction = styled.div`
    display: flex;
    justify-content: center;
    padding: 20rem 30rem 10rem;
    width: 100%;

    h1 {
        font-size: 7rem;
        font-weight: 300;

        span {
            font-weight: 100;
            font-style: italic;
        }
    }
`