export const reducers = {
    setJobs: (state, action) => {
        state.totalJobs = action.payload;
    },
    toggleLoading: (state, action) => {
        state.loading = action.payload;
    },
    setError: (state, action) => {
        state.error = action.payload;
    },
};
