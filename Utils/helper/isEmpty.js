export default function isEmpty(value) {
    if (value === null || value === undefined) {
        return true;
    }
    if (typeof value === "string" && value.trim() === "") {
        return true;
    }
    if (typeof value === "number" && value === 0) {
        return true;
    }
    if (typeof value === "object") {
        if (Array.isArray(value) && value.length === 0) {
            return true;
        }
        if (Object.keys(value).length === 0) {
            return true;
        }
    }
    return false;
}
