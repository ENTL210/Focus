import React, {useState} from "react";
import { styled } from "styled-components";
import GlobalFonts from './fonts/fonts';
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import Timer from "./components/Timer"
import TodoList from "./components/TodoList";

const Container = styled.div`
min-width: 100vw;
min-height: 100vh;
background: #4F709C;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`


function App() {
    return (
        <Container>
            <GlobalFonts />
            <Header/>
            <NavigationBar/>
            <Timer/>
            <TodoList/>
        </Container>
    )
}

export default App;