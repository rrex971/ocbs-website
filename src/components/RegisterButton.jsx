import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";


const RegisterButton = () => {
    return(
    <div className="flex justify-center items-center">
        <button className='rounded-full bg-carnation-pink-300 hover:bg-carnation-pink-400 text-logan-800 hover:text-white-50 font-body font-extrabold text-xl mt-4 px-12 py-4 transition-colors duration-300' onClick={() => {
            if (localStorage.getItem('api_id')) {
              navigate('/register');
            } else {
              alert('Please log in first');
            }
          }}>Proceed to register and pay ₹500.00<FaArrowRight className='inline relative -top-0.5' /></button> 

    </div>
        
    );
};

export default RegisterButton;