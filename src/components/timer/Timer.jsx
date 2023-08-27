import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styled } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { timerStart, timerCancel } from "../../features/timerSlice";

function Timer() {
    const Wrapper = styled.div`
    position: relative;
    width: 60%;
    height: 60%;
    max-width: 500px;
    max-height: 500px;
    background: #213555;
    margin: 10px;
    border-radius: 50%;
    `

    const TimerUI = styled.svg`

    `

    const TimerMain = styled.div`
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

    const TimerControllerWrapper = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
    `

    const TimerBtn = styled(motion.button)`
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

    const Time = styled.h2`
    font-family: "Lalezar";
    font-size: clamp(0.625rem, 8vw, 6.25rem);
    font-weight: 800;
    color: #F5EFE7;
    `

    const dispatch = useDispatch();

    const timer = useSelector((state) => {
        return state.timer
    })

    const [deadline, setDeadline] = useState()
    const [minutes, setMinutes] = useState(~~((timer.duration / 1000 / 60) % 60))
    const [seconds, setSeconds] = useState(~~((timer.duration / 1000) % 60))

    const [remainingCircumference, setRemainingCircumference] = useState(2 * 45 * Math.PI)
    const circumference = 2 * 45 * Math.PI

    function getTime(time) {
        setMinutes(~~((time / 1000 / 60) % 60))
        setSeconds(~~((time / 1000) % 60))
    }

    useEffect(() => {
        setDeadline(timer.duration)
        setRemainingCircumference(circumference)
    }, [timer.duration])

    useEffect(() => {
        if (timer.timerState === "running") {
            const tick = setTimeout(() => {
                setDeadline(time => time - 1000)
                getTime(deadline)
                setRemainingCircumference((deadline / timer.duration) * circumference)
            }, 1000)
            return () => clearInterval(tick)
        } else {
            getTime(deadline)
        }
    }, [deadline])

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
                    strokeDasharray={`${remainingCircumference} ${283}`}
                    strokeLinecap="round"
                    style={{ transition: "all 1s" }}

                />
            </TimerUI>
            <TimerMain>
                <Time>{`${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`}</Time>
                {timer.timerState === "start" &&
                    <TimerControllerWrapper>
                        <TimerBtn
                            onClick={() => {
                                dispatch(timerStart())
                            }}
                        >
                            Start
                        </TimerBtn>
                    </TimerControllerWrapper>
                }
                {timer.timerState === "running" &&
                    <TimerControllerWrapper>
                        <TimerBtn
                        >
                            Pause
                        </TimerBtn>
                        <TimerBtn
                            onClick={() => {
                                dispatch(timerCancel())
                            }}
                        >
                            Cancel
                        </TimerBtn>
                    </TimerControllerWrapper>
                }
            </TimerMain>
        </Wrapper>
    )
}

export default Timer;