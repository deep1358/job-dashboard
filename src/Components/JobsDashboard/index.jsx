import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import JobCard from "./JobCard";
import { JobDashboardContainer } from "./styles.js";

const JobsDashboard = () => {
    const [jobs, setJobs] = useState([]);

    const { totalJobs } = useSelector((state) => state.jobs);

    // Fetch jobs initially
    useEffect(() => {
        setJobs(totalJobs);
    }, [totalJobs]);

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
                {jobs?.map((job) => (
                    <JobCard key={job.jdUid} job={job} />
                ))}
            </Grid>
        </Box>
    );
};

export default JobsDashboard;
