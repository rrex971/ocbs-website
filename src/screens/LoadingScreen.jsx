import React from "react";
import { NinetyRingWithBg } from "react-svg-spinners";
import transition from "../transition";

const LoadingScreen = () => {
    return (
            <div className="flex justify-center items-center space-x-10 h-screen font-head text-4xl text-logan-600">
                <NinetyRingWithBg color="#857cab" width="100px" height="100px" className="block"/>
            </div>
    )
}

export default transition(LoadingScreen);