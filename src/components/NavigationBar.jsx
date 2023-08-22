import React from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";

function NavigationBar({ currentTab, setCurrentTab }) {
    const Wrapper = styled.div`
    width: 60vw;
    height: 5.65vh;
    background: #213555;
    border-radius: 100px;
    display: flex;
    flex-direction: row;
    gap: 0;
    `

    const Tab = styled(motion.button)`
	border: none;
	padding: 0;
	cursor: pointer;
	outline: inherit;
    width: calc(100% / 3);
    height: 100%;
    border-radius: 100px;
    font-family: "Lalezar";
    font-size: clamp(0.625rem, 0.625rem + 1vw, 2rem);
    font-weight: 800;
    background: #213555;
    color: #D8C4B6;
    `

    return (
        <Wrapper>
            <Tab
                initial={{
                    background: "#213555",
                }}
                whileHover={{
                    background: "#3B5C8F",
                }}
            >
                pomodoro
            </Tab>

            <Tab
                initial={{
                    background: "#213555",
                }}
                whileHover={{
                    background: "#3B5C8F",
                }}
            >
                short Break
            </Tab>

            <Tab
                initial={{
                    background: "#213555",
                }}
                whileHover={{
                    background: "#3B5C8F",
                }}
            >
                long Break
            </Tab>
        </Wrapper>
    )


}

export default NavigationBar;