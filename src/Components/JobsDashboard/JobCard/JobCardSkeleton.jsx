import { Grid, Skeleton } from "@mui/material";

const JobCardSkeleton = () => {
    return (
        <Grid
            justifyContent="center"
            alignItems="center"
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
                marginTop: "40px",
            }}
        >
            {new Array(12).fill("").map((_, index) => (
                <Grid item key={index}>
                    <Skeleton variant="rounded" width={280} height={350} />
                </Grid>
            ))}
        </Grid>
    );
};

export default JobCardSkeleton;
