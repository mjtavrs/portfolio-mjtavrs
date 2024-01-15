import styled from "styled-components";

export const Card = styled.div`
    border: 2px solid ${({ theme }) => theme.COLORS.BLACK};
    border-radius: 1.5rem;
    overflow: hidden;
    max-width: 30rem;

    > img {
        border-bottom: 2px solid ${({ theme }) => theme.COLORS.BLACK};
        width: 100%;
    }

    > div {
        padding: 0 2rem 2rem;

        h3 {
            font-size: 2.4rem;
            font-weight: 500;
            padding: 2rem 0;
            text-align: center;
        }

        p {
            font-size: 1.6rem;
        }

        div {
            display: flex;
            justify-content: space-between;
            padding: 2rem 0 1rem;

            a:first-of-type {
                background-color: ${({ theme }) => theme.COLORS.BLACK};
            }

            > a {
                align-items: center;
                background-color: ${({ theme }) => theme.COLORS.LIGHT_GREY};
                border: none;
                border-radius: 1rem;
                color: ${({ theme }) => theme.COLORS.BEIGE};
                display: flex;
                font-size: 1.4rem;
                font-weight: 500;
                gap: 1rem;
                padding: 1rem;
                text-decoration: none;

                svg {
                    color: ${({ theme }) => theme.COLORS.BEIGE};
                    font-size: 1.8rem;
                }
            }

            .isPrivate {
                cursor: default;
                filter: opacity(0.5);
            }
        }
    }
`