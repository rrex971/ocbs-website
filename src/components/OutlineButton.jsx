import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const OutlineButton = (props) => {
    const navigate = useNavigate();
    return(
    <div className="flex justify-center items-center">
        <button className='rounded-full bg-transparent border-4 border-carnation-pink-300 hover:bg-carnation-pink-200 text-logan-800 font-body font-extrabold text-xl mt-4 px-12 py-4 transition-colors duration-300' onClick={() => {
            try {
                props.onClick().then(() => {});
            } catch (error) {}
            navigate(props.path);
          }}>{props.message}</button> 

    </div>
        
    );
};

export default OutlineButton;