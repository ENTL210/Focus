import React from "react";
import { styled } from "styled-components";


function Timer() {
    const Wrapper = styled.div`
    position: relative;
    min-width: 50%;
    min-height: 50%;
    background: #213555;
    margin: 10px;
    border-radius: 50%;
    `
    
    const TimerUI = styled.svg`
    `

    const  TimerMain = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    `

    const Time = styled.h2`
    font-family: "Lalezar";
    font-size: clamp(0.625rem, 8vw, 6.25rem);
    font-weight: 800;
    color: #F5EFE7;
    `

    const circumference = 2 * 45 * Math.PI
    const remaining = (45 * circumference) / 100


    return (
        <Wrapper>
            <TimerUI
                viewBox="0 0 100 100"
            >
                <circle
                    className="base-timer-circle"
                    cx={50}
                    cy={50}
                    r={45}
                    stroke="gray"
                    strokeWidth={"2px"}
                    fill="none"
                />

                <circle
                    className="base-timer-circle-remaining"
                    cx={50}
                    cy={50}
                    r={45}
                    stroke="#D8C4B6"
                    strokeWidth={"2px"}
                    fill="none"
                    transform={`rotate(-90 ${50} ${50})`}
                    strokeDasharray={"283 283"}
                    strokeLinecap="round"
                    style={{ transition: "all 1s" }}

                />
            </TimerUI>
            <TimerMain>
                <Time>25:00</Time>
            </TimerMain>
        </Wrapper>
    )
}

export default Timer;