import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    ::-webkit-scrollbar {
        background-color: ${({ theme }) => theme.COLORS.BEIGE};
        width: 1rem;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.BLACK};
        width: 0.5rem;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth !important;
    }

    body, input, textarea {
        background-color: ${({ theme }) => theme.COLORS.BEIGE};
        color: ${({ theme }) => theme.COLORS.BLACK};
        font-family: 'Work Sans', sans-serif;
        font-size: 1.6rem;
    }

    input, textarea {
        font-weight: 300;
    }
`