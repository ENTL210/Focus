import React from "react";
import { styled } from "styled-components";
import {motion} from "framer-motion";

function TodoList() {
    const Wrapper = styled.div`
        width: 60vw;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    `
    const Title = styled.h2`
        font-family: "Lalezar";
        font-size: clamp(1rem, 1rem + 4vw, 2.5rem);
        color: #D8C4B6;
        line-height: 0px;
    `

    const Line = styled.hr`
        width: 100%;
        border-top: 1px solid #F5EFE7;
    `

    const NewTaskBtn = styled(motion.button)`
        width: 60vw;
        border-radius: 10px;
        border: none;
        padding: 0;
        cursor: pointer;
        outline: inherit;
        background: #213555;
        color: #D8C4B6;
        font-family: "Lalezar";
        font-size: clamp(1rem, 1rem + 2vw, 2rem);
        font-weight: 800;
        text-align: center;
        padding: 5px;
        margin: 20px 0px;
    `

    return (
        <Wrapper>
            <Title>To Do List</Title>
            <Line/>
            <NewTaskBtn
                initial={{
                    background: "#213555",
                }}
                whileHover={{
                    background: "#3B5C8F",
                }}
            >
                New Task?
            </NewTaskBtn>
        </Wrapper>
    )
}

export default TodoList