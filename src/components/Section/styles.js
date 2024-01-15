import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    padding: 2rem 10rem;
    width: 100%;

    > h2 {
        font-size: 2.6rem;
        font-weight: 500;
        text-align: center;

        mark {
            background-color: ${({ theme }) => theme.COLORS.ORANGE};
            display: inline-block; 
            height: 2rem;
            line-height: 0;
            padding: 0 1rem 1.5rem 0;
        }
    }

    > p {
        padding-top: 1rem;
        font-weight: 500;
        text-align: center;
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
    top: -12rem;
    white-space: nowrap;
    width: 1px;
`