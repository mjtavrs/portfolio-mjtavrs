import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.LIGHT_GREY};
    display: flex;
    gap: 5rem;
    padding: 5rem 35rem;
    position: relative;
    width: 100%;

    span {
        font-weight: 500;
    }

    div {
        display: flex;
        flex-direction: column;
        padding: 5rem 0;

        h2 {
            color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};
            font-size: 8rem;
            font-weight: 700;
            line-height: 7rem;
        }
    
        p {
            color: ${({ theme }) => theme.COLORS.LIGHT_WHITE};
            font-size: 2rem;
            font-weight: 300;
            padding-top: 2rem;
        }
    }

    form {
        padding: 5rem 0;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;

        div {
            padding: 0;
            margin: 0;

            label {
                color: ${({ theme }) => theme.COLORS.BEIGE};
                font-size: 1.4rem;
                font-weight: 500;
                padding-bottom: 1rem;
                text-transform: uppercase;
            }

            input, textarea {
                border: none;
                border-radius: 0.5rem;
                padding: 1rem;
                resize: none;

                &::placeholder {
                    font-size: 1.4rem;
                    text-transform: lowercase;
                }
            }
        }

        button {
            align-self: flex-end;
            background-color: ${({ theme }) => theme.COLORS.ORANGE};
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            font-family: 'Work Sans', sans-serif;
            font-size: 1.6rem;
            font-weight: 700;
            padding: 1rem 2rem;
            transition: 500ms filter;
        }

        button:hover {
            filter: brightness(0.9);
        }
    }
`

export const ScrollHelper = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BEIGE};
    border-width: 0;
    clip: rect(0,0,0,0);
    height: 1px;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    top: -10rem;
    white-space: nowrap;
    width: 1px;
`