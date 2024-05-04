import { useEffect, useRef } from "react";

const useThrottle = (func, delay) => {
    const throttlingRef = useRef(false);
    const timerRef = useRef(null);

    useEffect(() => {
        return () => {
            // Clear timeout before leaving the component
            clearTimeout(timerRef.current);
        };
    }, []);

    return (...args) => {
        if (!throttlingRef.current) {
            const context = this;

            // Call function with all function's own context(this)
            func.apply(context, ...args);

            throttlingRef.current = true;

            timerRef.current = setTimeout(() => {
                throttlingRef.current = false;
                clearTimeout(timerRef.current);
            }, delay);
        }
    };
};

export default useThrottle;
