export const reducers = {
    setJobs: (state, action) => {
        state.totalJobs = action.payload;
        state.hasMoreJobs =
            action?.payload?.length + 10 <= state.totalJobsCount;
    },
    setJobsCount: (state, action) => {
        state.totalJobsCount = action.payload;
    },
    toggleLoading: (state, action) => {
        state.loading = action.payload;
    },
    setError: (state, action) => {
        state.error = action.payload;
    },
};
