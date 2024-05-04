/* eslint-disable react/prop-types */
import { memo, useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
    Avatar,
    Box,
    Button,
    Link,
    Paper,
    Tooltip,
    capitalize,
} from "@mui/material";
import Grid from "@mui/material/Grid";

import JobModal from "./Modal";

import randomDays from "../../../../Utils/helper/randomDays";
import {
    JobApplyButton,
    JobBox,
    JobBtnContainer,
    JobCompany,
    JobCompanyName,
    JobDetailsBox,
    JobExpContainer,
    JobExpLabel,
    JobExpValue,
    JobHeadBox,
    JobHeadPostedDate,
    JobLocation,
    JobMainCard,
    JobPaper,
    JobReferralButton,
    JobReferralButtonBox,
    JobReferralButtonLabel,
    JobRole,
    JobSalary,
    JobViewLink,
} from "./styles.js";

const JobCard = ({ job }) => {
    // Set MinSalary to 0 if null
    const salaryRange =
        Object.keys(job).length > 0
            ? `₹${job.minJdSalary ?? 0} - ${job.maxJdSalary} LPA`
            : "";

    // Capitalize all loaction and set remote to India remote
    const jobLocation =
        job?.location === "remote"
            ? "India (remote)"
            : capitalize(job.location);

    const [open, setOpen] = useState(false);

    // Modal close
    const handleClose = () => {
        setOpen(false);
    };

    // Modal open
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <JobModal open={open} handleClose={handleClose} job={job} />
            <Grid item>
                <Paper sx={JobPaper}>
                    {/* Posted date */}
                    <Box sx={JobBox}>
                        <Box sx={JobHeadBox}>
                            <Typography sx={JobHeadPostedDate} variant="body1">
                                ⏳ Posted {randomDays()} days ago
                            </Typography>
                        </Box>
                    </Box>

                    {/* Main content */}
                    <CardContent sx={JobMainCard}>
                        {/* Company details */}
                        <Box sx={JobCompany}>
                            {/* Company logo */}
                            <img width="50" alt="logo" src="/weekday.jpg" />
                            <div>
                                <div>
                                    {/* Company name */}
                                    <h3 style={JobCompanyName}>Weekday</h3>
                                    {/* Job role */}
                                    <h2 style={JobRole}>{job.jobRole}</h2>
                                </div>
                                {/* Job location */}
                                <p style={JobLocation}>{jobLocation}</p>
                            </div>
                        </Box>
                        {/* Job Salary */}
                        <Typography sx={JobSalary} variant="body2">
                            Estimated Salary: {salaryRange}{" "}
                            <Tooltip
                                placement="top"
                                title="Offered salary range"
                            >
                                {" "}
                                ✅
                            </Tooltip>
                        </Typography>
                        {/* Company details */}
                        <Box sx={JobDetailsBox}>
                            <Box>
                                <Typography variant="body1">
                                    About Company:
                                </Typography>
                                <strong>About us</strong>
                                <Box>{job.jobDetailsFromCompany}</Box>
                            </Box>
                        </Box>
                        {/* View job details link */}
                        <Box sx={JobViewLink}>
                            <Link
                                href="#"
                                onClick={handleOpen}
                                underline="none"
                            >
                                View job
                            </Link>
                        </Box>
                        {/* Experience */}
                        <div style={JobExpContainer}>
                            <h3 style={JobExpLabel}>Minimum Experience</h3>
                            <h2 style={JobExpValue}>
                                {job?.minExp ?? 0} years
                            </h2>
                        </div>
                    </CardContent>

                    {/* Job button container */}
                    <Box sx={JobBtnContainer}>
                        {/* Apply button */}
                        <Button sx={JobApplyButton}>⚡ Easy Apply</Button>
                        {/* Referral button */}
                        <Button sx={JobReferralButton}>
                            <Box sx={JobReferralButtonBox}>
                                <Avatar sx={{ width: 24, height: 24 }}>
                                    H
                                </Avatar>{" "}
                                <Typography
                                    sx={JobReferralButtonLabel}
                                    variant="body1"
                                >
                                    Unlock referral asks
                                </Typography>
                            </Box>
                        </Button>
                    </Box>
                </Paper>
            </Grid>
        </>
    );
};

// Memoizing jobcard, so that it won't rerender unnecessarily
export default memo(JobCard);
