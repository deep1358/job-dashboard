export default function convertFiltersForJobs(filters) {
    return Object.keys(filters).map((filterKey) => ({
        key: filterKey,
        value: filters[filterKey]["value"],
    }));
}
