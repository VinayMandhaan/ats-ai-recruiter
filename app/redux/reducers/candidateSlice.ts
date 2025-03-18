import { createSlice } from "@reduxjs/toolkit";


type CandidateState = {
    candidateSummary: String;
};

const initialState = {
    candidateSummary: "",
} as CandidateState;

export const candidateSlice = createSlice({
    name: "candidate",
    initialState,
    reducers: {
        setCandidateSummary(state, action) {
            state.candidateSummary = action.payload
        },
        reset: () => initialState,

    },
});

export const {
    setCandidateSummary,
    reset,
} = candidateSlice.actions;
export default candidateSlice.reducer;
