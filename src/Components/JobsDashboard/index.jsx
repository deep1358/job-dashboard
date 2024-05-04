import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import JobCard from "./JobCard";
import { JobDashboardContainer, JobFetchLoader } from "./styles.js";
import JobCardSkeleton from "./JobCard/JobCardSkeleton.jsx";
import { CircularProgress, Container } from "@mui/material";

const JobsDashboard = () => {
    const [jobs, setJobs] = useState([]);

    const { filteredJobs, loading } = useSelector((state) => state.jobs);

    // Fetch jobs initially
    useEffect(() => {
        setJobs(filteredJobs);
    }, [filteredJobs]);

    return (
        // Main Job dashboard container
        <Box sx={JobDashboardContainer}>
            {/* Job dashboard grid */}
            <Grid
                container
                rowSpacing={5}
                columnSpacing={{ xs: 2, sm: 2, md: 3 }}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                {jobs?.map((job, index) => (
                    <JobCard key={`${job.jdUid}-${index}`} job={job} />
                ))}
            </Grid>

            {/* Skeleton for initial load only */}
            {loading && jobs.length === 0 && <JobCardSkeleton />}

            {/* Loader for fetching jobs when scrolling */}
            <Container sx={JobFetchLoader}>
                {loading && jobs.length !== 0 && (
                    <CircularProgress disableShrink />
                )}
            </Container>
        </Box>
    );
};

export default JobsDashboard;
