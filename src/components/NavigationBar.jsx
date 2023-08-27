import React from "react";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { modeSwitch } from "../features/timerSlice";

function NavigationBar() {

    const Wrapper = styled.div`
    overflow: hidden;
    width: 60vw;
    height: 5.65vh;
    max-width: 600px;
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
    font-family: "Lalezar";
    font-size: clamp(0.625rem, 0.625rem + 1vw, 2rem);
    font-weight: 800;
    background: #213555;
    color: #D8C4B6;
    `

    const dispatch = useDispatch()

    const currentTab = useSelector((state) => {
        return state.timer.tab
    })

    console.log(currentTab)
    
    

    return (
        <Wrapper>
            <Tab
                initial={{
                    background: currentTab === "pomodoro" ? "#3B5C8F" : "#213555",
                }}
                whileHover={{
                    background: "#3B5C8F",
                }}
                onClick={() => {
                    if (currentTab !== "pomodoro") {
                        dispatch(modeSwitch({
                            tab: "pomodoro",
                            duration: 25 * 60 * 1000
                        }))
                    }
                }}
                transition={{
                    type: "spring",
                    duration: 0.5
                }}
            >
                pomodoro
            </Tab>

            <Tab
                initial={{
                    background: currentTab === "short break" ? "#3B5C8F" : "#213555",
                }}
                whileHover={{
                    background: "#3B5C8F",
                }}
                onClick={() => {
                    if (currentTab !== "short break") {
                        dispatch(modeSwitch({
                            tab: "short break",
                            duration: 5 * 60 * 1000
                        }))
                    }
                }}
            >
                short Break
            </Tab>

            <Tab
                initial={{
                    background: currentTab === "long break" ? "#3B5C8F" : "#213555",
                }}
                whileHover={{
                    background: "#3B5C8F",
                }}
                onClick={() => {
                    if (currentTab !== "long break") {
                        dispatch(modeSwitch({
                            tab: "long break",
                            duration: 15 * 60 * 1000
                        }))
                    }
                }}
            >
                long Break
            </Tab>
        </Wrapper>
    )


}

export default NavigationBar;