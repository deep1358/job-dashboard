import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import useInfiniteScroll from "../Utils/hooks/useInfiniteScroll";
import useThrottle from "../Utils/hooks/useThrottle";
import JobsDashboard from "./Components/JobsDashboard";
import { JOB_BODY, JOB_HEADERS, JOB_URL } from "../Utils/constants";
import { setError, setFilters, setJobs, toggleLoading } from "../store/jobs";
import ErrorBoundary from "./Components/ErrorBoundary";
import Filters from "./Components/Filters";
import convertFiltersForJobs from "../Utils/helper/convertFiltersForJobs";

function App() {
    const dispatch = useDispatch();

    const { totalJobs, filters } = useSelector((state) => state.jobs);

    const fetchJobs = async () => {
        // Loading start
        dispatch(toggleLoading(true));

        const requestOptions = {
            method: "POST",
            headers: JOB_HEADERS,
            body: JSON.stringify({
                ...JOB_BODY,
                offSet: totalJobs?.length ?? 0,
            }),
        };
        try {
            const response = await fetch(JOB_URL, requestOptions);
            if (!response.ok) {
                dispatch(setError("Error fetching data"));
            }
            const data = await response.json();

            // Apend jobs in the case of scrolling
            const jobs = [...totalJobs, ...(data?.jdList ?? [])];

            const filtersForJobs = convertFiltersForJobs(filters);

            // Filter everytime when fetching more jobs
            dispatch(setJobs({ jobs, filters: filtersForJobs }));

            // Prepare data for the filters
            const jobRole = [...new Set(jobs.map((job) => job.jobRole))];

            const location = [...new Set(jobs.map((job) => job.location))];

            let exp = [...new Set(jobs.map((job) => job.minExp))];
            // Pushing 0 to reset the experience
            if (!exp.includes(0)) exp.push(0);
            exp.sort((a, b) => {
                if (a < b) return -1;
                if (a > b) return 1;
                return 0;
            });
            exp = exp.filter((exp) => exp !== null);

            let minJdSalary = [...new Set(jobs.map((job) => job.minJdSalary))];
            // Pushing 0 to reset the minJdSalary
            if (!minJdSalary.includes(0)) minJdSalary.push(0);
            minJdSalary.sort((a, b) => {
                if (a < b) return -1;
                if (a > b) return 1;
                return 0;
            });
            minJdSalary = minJdSalary.filter((exp) => exp !== null);

            // Add filter data
            dispatch(setFilters({ jobRole, location, exp, minJdSalary }));
        } catch (error) {
            // setError
            dispatch(setError(error));
        } finally {
            // Loading stop
            dispatch(toggleLoading(false));
        }
    };

    const throttledFetchJobs = useThrottle(() => {
        fetchJobs();
    }, 500);

    useInfiniteScroll(throttledFetchJobs);

    useEffect(() => {
        fetchJobs();
    }, []);

    return (
        <ErrorBoundary>
            <Filters />
            <JobsDashboard />
        </ErrorBoundary>
    );
}

export default App;
