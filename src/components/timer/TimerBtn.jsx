import React from "react";
import { styled } from "styled-components";
import { useSelector, useDispatch } from "react-redux";


export default function TimerBtn({body, onClicked}) {
    const TimerBtn = styled.button`
    background: inherit;
    border: none;
	cursor: pointer;
	outline: inherit;
    width: 30%;
    height: 100%;
    font-family: "Lalezar";
    font-size: clamp(0.625rem, 0.625rem + 1vw, 2rem);
    font-weight: 800;
    color: #D8C4B6;
    `

    return (
        <TimerBtn
            onClick={onClicked}
        >
            {body}
        </TimerBtn>
    )
}