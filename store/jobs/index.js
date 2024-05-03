import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { reducers } from "./reducers";

const slice = createSlice({
    name: "jobs",
    initialState,
    reducers,
});

export default slice.reducer;

export const { setJobs, setJobsCount, toggleLoading, setError } = slice.actions;
