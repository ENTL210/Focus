import React from "react";
import GlobalFonts from '../fonts/fonts';
import { styled } from "styled-components";

function Header() {
    const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    text-align: center;
    `

    const Title = styled.h1`
    width: 100%;
    font-family: "Lalezar";
    font-size: clamp(1rem, 1rem + 8vw, 5rem);
    color: #D8C4B6;
    line-height: 0px;
    `

    const Line = styled.hr`
    min-width: 40vw;
    border-top: 1px solid #F5EFE7;
    `


    return (
        <Wrapper>
            <Title>Focus</Title>
            <Line/>
        </Wrapper>
    )
}

export default Header;