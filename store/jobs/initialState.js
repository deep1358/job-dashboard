export const initialState = {
    totalJobs: [],
    filteredJobs: [],
    filters: {
        jobRole: {
            type: "multiSelect",
            label: "Role",
            data: [],
            value: [],
        },
        exp: {
            type: "select",
            label: "Experience",
            data: [],
            value: 0,
        },
        location: {
            type: "multiSelect",
            label: "Location",
            data: [],
            value: [],
        },
        minJdSalary: {
            type: "select",
            label: "Minimum Base Pay Salary",
            data: [],
            value: 0,
        },
        companyName: {
            type: "search",
            label: "Search Company Name",
            data: [],
            value: "",
        },
    },
    loading: false,
    error: null,
};
