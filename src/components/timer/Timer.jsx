import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { timerStart, timerCancel, timerPause, timerResume, timerTick } from "../../features/timerSlice";
import TimerBtn from "./TimerBtn";

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

    const TimerControllerWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
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

    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()

    const [remainingCircumference, setRemainingCircumference] = useState(2 * 45 * Math.PI)
    const circumference = 2 * 45 * Math.PI

    function getTime(time) {
        setMinutes(~~((time / 60000) % 60))
        setSeconds(~~((time / 1000) % 60))
    }

    useEffect(() => {
        if (timer.timerState === "start") {
            getTime(timer.duration)
            setRemainingCircumference((timer.remaining / timer.duration) * circumference)
        } else if (timer.timerState === "running") {
            const interval = setInterval(() => {
                dispatch(timerTick())
                getTime(timer.remaining)
                setRemainingCircumference((timer.remaining / timer.duration) * circumference)
            }, 1000)

            return () => clearInterval(interval)
        }
    }, [timer.remaining])

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
                <TimerControllerWrapper>
                    {timer.timerState === "start" &&
                        <TimerBtn body={"Start"} onClicked={() => {
                            dispatch(timerStart())
                        }} />
                    }
                    {timer.timerState === "running" &&
                        <React.Fragment>
                            <TimerBtn body={"Cancel"} onClicked={() => {
                                dispatch(timerCancel())
                            }} />
                            <TimerBtn body={"Pause"} onClicked={() => {
                                dispatch(timerPause())
                            }} />
                        </React.Fragment>
                    }
                    {timer.timerState === "pause" &&
                        <React.Fragment>
                            <TimerBtn body={"Cancel"} onClicked={() => {
                                dispatch(timerCancel())
                            }} />
                            <TimerBtn body={"Resume"} onClicked={() => {
                                dispatch(timerResume())
                            }} />
                        </React.Fragment>
                    }
                </TimerControllerWrapper>
            </TimerMain>
        </Wrapper>
    )
}

export default Timer;