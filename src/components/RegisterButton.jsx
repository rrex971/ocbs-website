import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const RegisterButton = (props) => {
    const navigate = useNavigate();
        return(
        <div className="flex justify-center items-center">
                <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97, y: 0 }}
                    className='rounded-full bg-carnation-pink-300 hover:bg-carnation-pink-400 text-logan-800 hover:text-white-50 font-body font-extrabold text-xl mt-4 px-12 py-4 transition-colors duration-300 shadow-md'
                    onClick={() => {
                        try {
                                props.onClick().then(() => {});
                        } catch (error) {}
                        navigate(props.path);
                    }}
                >
                    {props.message}<FaArrowRight className='inline relative -top-0.5 ml-2' />
                </motion.button> 

        </div>
        
        );
};

export default RegisterButton;