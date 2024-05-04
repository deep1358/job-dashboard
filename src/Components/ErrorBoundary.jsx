/* eslint-disable react/prop-types */
import React from "react";

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Something went wrong!!</h1>
                    <div>
                        {this.state.error && (
                            <p>{this.state.error.toString()}</p>
                        )}
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
