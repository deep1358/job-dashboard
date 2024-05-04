export const JobPaper = {
    height: "100% !important",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.87)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    overflow: "hidden",
    maxWidth: "360px",
    padding: "10px 5px",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 4px 0px !important",
    "&:hover": {
        transition: "all .2s ease-in-out",
        transform: "scale(1.01)",
    },
};

export const JobBox = {
    display: "flex",
    alignItems: "flex-start",
    padding: "5px 10px",
    flexWrap: "wrap",
    gap: "5px",
    width: "100%",
    flex: "1 1 0%",
};

export const JobHeadBox = {
    padding: "4px 6px",
    boxShadow: "rgba(6, 6, 6, 0.05) 0px 2px 6px 0px",
    borderRadius: "10px",
    border: "1px solid rgb(230, 230, 230)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

export const JobHeadPostedDate = {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: "9px",
};

export const JobMainCard = {
    width: "100%",
    flex: "1 1 0%",
    padding: "8px 16px",
};

export const JobCompany = { display: "flex", gap: ".5rem" };

export const JobCompanyName = {
    fontSize: "13px",
    fontWeight: 600,
    letterSpacing: "1px",
    marginBottom: "3px",
    color: "#8b8b8b",
};

export const JobRole = {
    fontSize: "14px",
    lineHeight: 1.5,
};

export const JobLocation = {
    fontSize: "11px",
    fontWeight: 500,
    marginTop: "5px",
};

export const JobSalary = {
    fontSize: "14px",
    margin: "8px 0",
    color: "rgb(77, 89, 106)",
    lineHeight: "1.43",
};

export const JobDetailsBox = {
    height: "250px",
    overflow: "hidden",
    maskImage:
        "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))",
};

export const JobViewLink = {
    textAlign: "center",
    marginBottom: "0.5rem",
    position: "relative",
    top: "-20px",
};

export const JobExpContainer = { marginTop: "10px" };

export const JobExpLabel = {
    fontSize: "13px",
    fontWeight: 600,
    letterSpacing: "1px",
    marginBottom: "3px",
    color: "#8b8b8b",
};

export const JobExpValue = {
    fontSize: "14px",
    lineHeight: 1.5,
};

export const JobBtnContainer = {
    flexGrow: 1,
    width: "100%",
    padding: "0 15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
};

export const JobButton = {
    width: "100%",
    color: "rgb(0, 0, 0)",
    fontWeight: 500,
    padding: "8px 18px",
    borderRadius: "8px",
    margin: "5px 0",
    textTransform: "none",
};

export const JobApplyButton = {
    ...JobButton,
    backgroundColor: "rgb(85, 239, 196)",
    "&: hover": {
        backgroundColor: "rgb(85, 239, 196, 1.1)",
    },
};

export const JobReferralButton = {
    ...JobButton,
    backgroundColor: "rgb(73, 67, 218)",
    "&: hover": {
        backgroundColor: "rgb(73, 67, 218, 1.1)",
    },
};

export const JobReferralButtonBox = {
    display: "flex",
    gap: "8px",
    alignItems: "center",
};

export const JobReferralButtonLabel = {
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: 1.5,
    color: "rgb(255, 255, 255)",
};
