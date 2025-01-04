import { React, useState } from "react";
import PoolMap from "./PoolMap";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

const PoolCategory = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="flex-col justify-center items-center mt-2 py-2 w-4/5 mx-auto">
                <div className={`flex flex-col sm:flex-row justify-between items-center ${props.bgcolor} rounded-xl font-body text-2xl sm:text-3xl font-extrabold text-white-50 px-4 py-2 w-full`}>
                    <div>{props.text}</div>
                    <button
                        className={`relative ${props.bgcolor} rounded-full p-2 sm:p-3`} 
                        onClick={() => setOpen(!open)}
                    >
                        <FaChevronDown 
                            className={`${open ? "rotate-180" : ""} transition-transform duration-300`} 
                            size={20} 
                        />
                    </button>
                </div>

                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mapsContainer px-1 2xl:px-6 w-full"
                >
                    {props.mappools.map((map) => (
                        <PoolMap key={map.id} data={map} pick={props.pick} />
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default PoolCategory;

