import isEmpty from "./isEmpty";

export default function filterJobs(jobs, filters) {
    return jobs.filter((item) => {
        // Check if all filter conditions are met
        return filters.every((currFilter) => {
            const { key, value } = currFilter;

            // Do not calculate anything if value is empty
            if (isEmpty(value)) return true;

            // Apply each filter condition

            // Case for location and role
            if (Array.isArray(value)) return value.includes(item[key]);

            // Case for company name
            if (typeof value === "string") return item[key].includes(value);

            // Case for experience
            if (key === "exp") return value >= item["minExp"];

            // Case for min salary
            if (key === "minJdSalary") return value <= item[key];
        });
    });
}
