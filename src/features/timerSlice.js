import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tab: "pomodoro",
    duration: 25 * 60 * 1000,
    timerState: "start",
    remaining: 25 * 60 * 1000
}

const timerSlice = createSlice({
    name: "timer",
    initialState: initialState,
    reducers: {
        modeSwitch: (state, action) => {
            const {tab, duration} = action.payload
            state.tab = tab
            state.duration = duration
            state.remaining = duration
            state.timerState = "start"
        },
        timerStart: (state, action) => {
            state.timerState = "running"
            state.remaining -= 1000
        },
        timerTick: (state, action) => {
            state.remaining -= 1000
        },
        timerCancel: (state, action) => {
            if (state.tab === "pomodoro") {
                state.duration = 25 * 60000
                state.remaining = 25 * 60000
            } else if (state.tab === "short break") {
                state.duration = 5 * 60000
                state.remaining = 5 * 60000
            } else {
                state.duration = 15 * 60000
                state.remaining = 15 * 60000
            }
            state.timerState = "start"
        },
        timerPause: (state, action) => {
            state.timerState = "pause"
        },
        timerResume: (state, action) => {
            state.timerState = "running"
            state.remaining += 1000
        },
    }
})

export const {modeSwitch, timerStart, timerCancel, timerPause, timerResume, timerTick} = timerSlice.actions
export default timerSlice.reducer