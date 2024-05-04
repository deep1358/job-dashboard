import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";

import MultipleSelectChip from "../MultiSelectChip";
import { changeFilteredJobs, updateFiltersValues } from "../../../store/jobs";
import convertFiltersForJobs from "../../../Utils/helper/convertFiltersForJobs";
import { FilterContainer, FilterInputsFormControl } from "./styles";

const Filters = () => {
    const { filters, totalJobs } = useSelector((state) => state.jobs);
    const dispatch = useDispatch();

    const [normalFilters, setNormalFilters] = useState({
        minJdSalary: "",
        exp: "",
        companyName: "",
    });

    // Global filter handle change
    const handleChange = (key, value) => {
        // Set the current states
        setNormalFilters({
            ...normalFilters,
            [key]: value,
        });

        // Update the filters
        const updatedFilters = {
            ...filters,
            [key]: {
                ...filters[key],
                value,
            },
        };

        // Massaging data to filter jobs
        const filtersForJobs = convertFiltersForJobs(updatedFilters);

        dispatch(updateFiltersValues(updatedFilters));
        dispatch(
            changeFilteredJobs({ filters: filtersForJobs, jobs: totalJobs })
        );
    };

    return (
        <Box sx={FilterContainer}>
            {/* Rols */}
            <MultipleSelectChip
                label={filters.jobRole.label}
                data={filters.jobRole.data || []}
                filterKey="jobRole"
                handleChangeSelected={handleChange}
            />

            {/* Experience */}
            <FormControl sx={FilterInputsFormControl}>
                <InputLabel>{filters.exp.label}</InputLabel>
                <Select
                    labelId={filters.exp.label}
                    value={normalFilters.exp}
                    label={filters.exp.label}
                    onChange={(e) => handleChange("exp", e.target.value)}
                >
                    {filters.exp.data?.map((value) => (
                        <MenuItem value={value} key={value}>
                            {value}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Location */}
            <MultipleSelectChip
                label={filters.location.label}
                data={filters.location.data || []}
                filterKey="location"
                handleChangeSelected={handleChange}
            />

            {/* Min Salary */}
            <FormControl sx={FilterInputsFormControl}>
                <InputLabel>{filters.minJdSalary.label}</InputLabel>
                <Select
                    labelId={filters.minJdSalary.label}
                    value={normalFilters.minJdSalary}
                    label={filters.minJdSalary.label}
                    onChange={(e) =>
                        handleChange("minJdSalary", e.target.value)
                    }
                >
                    {filters.minJdSalary.data?.map((value) => (
                        <MenuItem value={value} key={value}>
                            $ {value}K
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Company name */}
            <TextField
                sx={FilterInputsFormControl}
                label={filters.companyName.label}
                type="search"
                value={normalFilters.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
            />
        </Box>
    );
};

export default Filters;
