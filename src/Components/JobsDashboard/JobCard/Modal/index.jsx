/* eslint-disable react/prop-types */
import { Box, Modal, Typography } from "@mui/material";
import { ModalBox, ModalTitle } from "./styles";

const JobModal = ({ open, handleClose, job }) => {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box style={ModalBox}>
                <Typography variant="h6" component="h2" sx={ModalTitle}>
                    Job Description
                </Typography>
                <Typography variant="body">About Company: </Typography>
                <Typography sx={{ marginTop: "10px" }}>
                    {job.jobDetailsFromCompany}
                </Typography>
            </Box>
        </Modal>
    );
};

export default JobModal;
