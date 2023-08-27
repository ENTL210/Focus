import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tab: "pomodoro",
    duration: 25 * 60 * 1000,
    timerState: "start",
}

const timerSlice = createSlice({
    name: "timer",
    initialState: initialState,
    reducers: {
        modeSwitch: (state, action) => {
            const {tab, duration} = action.payload
            state.tab = tab
            state.duration = duration
            state.timerState = "start"
        },
        timerStart: (state, action) => {
            state.timerState = "running"
            state.duration -= 1000
        },
        timerCancel: (state, action) => {
            if (state.tab === "pomodoro") {
                state.duration = 25 * 60 * 1000
            } else if (state.tab === "short break") {
                state.duration = 5 * 60 * 1000
            } else {
                state.duration = 15 * 60 * 1000
            }
            state.timerState = "start"
        }
    }
})

export const {modeSwitch, timerStart, timerCancel} = timerSlice.actions
export default timerSlice.reducer