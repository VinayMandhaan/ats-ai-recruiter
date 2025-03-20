import { createSlice } from "@reduxjs/toolkit";


type CandidateState = {
    candidateSummary: String;
    jobTitle: String;
    jobExperience: String;
    jobDescription: any;
};

const initialState = {
    candidateSummary: "",
    jobTitle: "",
    jobExperience: "",
    jobDescription: "",
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
        setJobExperience(state, action) {
            state.jobExperience = action.payload
        },
        setJobDescription(state, action) {
            state.jobDescription = action.payload
        },
        reset: () => initialState,

    },
});

export const {
    setCandidateSummary,
    setJobTitle,
    setJobExperience,
    setJobDescription,
    reset,
} = candidateSlice.actions;
export default candidateSlice.reducer;
