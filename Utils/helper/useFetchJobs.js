import { useDispatch } from "react-redux";
import {
    setJobs,
    setJobsCount,
    setError,
    toggleLoading,
} from "../../store/jobs";
import { JOB_BODY, JOB_HEADERS, JOB_URL } from "../constants";
import useFetch from "../hooks/useFetch";

const useFetchJobs = () => {
    const dispatch = useDispatch();

    const { data, error, loading } = useFetch(
        JOB_URL,
        "POST",
        JOB_BODY,
        JOB_HEADERS
    );

    dispatch(setJobs(data?.jdList));
    dispatch(setJobsCount(data?.totalCount));
    dispatch(setError(error));
    dispatch(toggleLoading(loading));

    return { data, loading, error };
};

export default useFetchJobs;
