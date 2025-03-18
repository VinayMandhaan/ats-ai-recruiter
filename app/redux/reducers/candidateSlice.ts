import { createSlice } from "@reduxjs/toolkit";


type CandidateState = {
    candidateSummary: String;
    jobTitle: String;
};

const initialState = {
    candidateSummary: "",
    jobTitle: "",
} as CandidateState;

export const candidateSlice = createSlice({
    name: "candidate",
    initialState,
    reducers: {
        setCandidateSummary(state, action) {
            state.candidateSummary = action.payload
        },
        setJobTitle(state, action) {
            state.jobTitle = action.payload
        },
        reset: () => initialState,

    },
});

export const {
    setCandidateSummary,
    setJobTitle,
    reset,
} = candidateSlice.actions;
export default candidateSlice.reducer;
