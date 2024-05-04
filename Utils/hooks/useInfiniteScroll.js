import { useEffect } from "react";

const useInfiniteScroll = (func) => {
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            // Clear all event listeners
            window.removeEventListener("scroll", handleScroll);
        };
    });

    const handleScroll = () => {
        /**
         * window.innerHeight => Height of the current window.
         * document.documentElement.scrollTop => How much scrolling is done from the top.
         * document.documentElement.offsetHeight => Entire document's height.
         */
        if (
            window.innerHeight + document.documentElement.scrollTop <=
            document.documentElement.offsetHeight - 100
        ) {
            return;
        }
        func();
    };
};

export default useInfiniteScroll;
