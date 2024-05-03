import { useState, useEffect } from "react";

const useFetch = (url, method = "GET", body = {}, headers = new Headers()) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        const requestOptions = {
            method,
            headers,
            body: JSON.stringify(body),
        };

        try {
            const response = await fetch(url, requestOptions);
            if (!response.ok) {
                throw new Error("Error fetching data");
            }
            const jsonData = await response.json();
            setData(jsonData);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url, method, body, headers]);

    return { data, loading, error };
};

export default useFetch;
