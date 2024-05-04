import filterJobs from "../../Utils/helper/filterJobs";

export const reducers = {
    setJobs: (state, action) => {
        const { jobs, filters } = action.payload;
        state.totalJobs = jobs;
        state.filteredJobs = filterJobs(jobs, filters);
    },
    toggleLoading: (state, action) => {
        state.loading = action.payload;
    },
    setError: (state, action) => {
        state.error = action.payload;
    },
    setFilters: (state, action) => {
        const {
            jobRole = [],
            location = [],
            exp = [],
            minJdSalary = [],
        } = action.payload;

        state.filters = {
            ...state.filters,
            jobRole: {
                ...state.filters.jobRole,
                data: jobRole,
            },
            location: {
                ...state.filters.location,
                data: location,
            },
            exp: {
                ...state.filters.exp,
                data: exp,
            },
            minJdSalary: {
                ...state.filters.minJdSalary,
                data: minJdSalary,
            },
        };
    },
    updateFiltersValues: (state, action) => {
        state.filters = action.payload;
    },

    changeFilteredJobs: (state, action) => {
        const { jobs, filters } = action.payload;

        const newFilteredJobs = filterJobs(jobs, filters);
        state.filteredJobs = newFilteredJobs;
    },
};
