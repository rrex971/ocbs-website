import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const OutlineButton = (props) => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-center items-center">
            <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97, y: 0 }}
                className='border-2 border-carnation-pink-300 text-carnation-pink-300 hover:text-white-50 hover:bg-carnation-pink-300 font-body font-extrabold text-xl mt-4 px-12 py-4 transition-colors duration-300 shadow-sm'
                onClick={() => {
                    try {
                        props.onClick().then(() => {});
                    } catch (error) {}
                    navigate(props.path);
                }}
            >
                {props.message}
            </motion.button>
        </div>
    );
};

export default OutlineButton;