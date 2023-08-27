import React, {useState} from "react";
import { styled } from "styled-components";
import GlobalFonts from './fonts/fonts';
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import Timer from "./components/timer/Timer";
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
    const [tab, setTab] = useState("pomodoro")

    const [duration, setDuration] = useState(25)
    

    return (
        <Container>
            <GlobalFonts />
            <Header/>
            <NavigationBar currentTab={tab} setCurrentTab={setTab}/>
            <Timer 
                currentTab={tab}
            />
            <TodoList/>
        </Container>
    )
}

export default App;