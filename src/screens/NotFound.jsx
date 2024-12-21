import React from "react";
import transition from "../transition";

const NotFound = () => {
    return (
        <div className='h-screen text-4xl'>
            <div className="flex flex-col justify-center font-head items-center h-1/2 pt-24 space-y-10">
                <h1 className="text-8xl text-logan-800">404</h1>
                <h2 className="text-4xl text-logan-600">Page Not Found</h2>
                <h6 className="text-2xl font-body font-extrabold text-logan-700">Maybe you got lost? Click <a href="/" className="text-carnation-pink-300 hover:text-carnation-pink-50 underline transition-colors duration-300">here</a> to go back to the homepage.</h6>
            </div>
        </div>
    );
};

export default transition(NotFound);