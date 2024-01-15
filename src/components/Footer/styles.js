import styled from "styled-components";

export const BackToTopLink = styled.a`
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};
    display: flex;
    font-weight: 300;
    position: absolute;
    right: 3rem;
    text-decoration: none;

    svg {
        font-size: 3rem;
    }
`

export const Container = styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 2rem 35rem 6rem;
    width: 100%;

    > img {
        color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};
        width: 23rem;
    }

    > div {
        display: flex;
        gap: 3rem;
        margin-top: -7rem;

        svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};
            font-size: 4rem;
            transition: 600ms color;

            &:hover {
                color: ${({ theme }) => theme.COLORS.LIGHTER_GREY};
            }
        }

    }

    p {
        color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};
        font-size: 1.4rem;
        font-weight: 100;
    }
`