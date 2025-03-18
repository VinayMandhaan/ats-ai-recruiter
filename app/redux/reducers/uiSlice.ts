import { createSlice } from "@reduxjs/toolkit";


type CandidateState = {
    currentStep: Number;
};

const initialState = {
    currentStep: 0,
} as CandidateState;

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setCurrentStep(state, action) {
            state.currentStep = action.payload
        },
        reset: () => initialState,

    },
});

export const {
    setCurrentStep,
    reset,
} = uiSlice.actions;
export default uiSlice.reducer;
