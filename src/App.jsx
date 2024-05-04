import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import useInfiniteScroll from "../Utils/hooks/useInfiniteScroll";
import useThrottle from "../Utils/hooks/useThrottle";
import JobsDashboard from "./Components/JobsDashboard";
import { JOB_BODY, JOB_HEADERS, JOB_URL } from "../Utils/constants";
import { setError, setJobs, toggleLoading } from "../store/jobs";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
    const dispatch = useDispatch();

    const { totalJobs } = useSelector((state) => state.jobs);

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
            dispatch(setJobs([...totalJobs, ...(data?.jdList ?? [])]));
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
            <JobsDashboard />
        </ErrorBoundary>
    );
}

export default App;
