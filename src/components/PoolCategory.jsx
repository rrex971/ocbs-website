import { React, useState } from "react";
import PoolMap from "./PoolMap";
import { FaChevronDown } from "react-icons/fa";

const PoolCategory = (props) => {
    const [open, setOpen] = useState(false);
    return(
        <>
            <div className={`flex-col justify-center rounded-xl mt-2 py-2 items-center`}>
            <div className={`flex justify-between items-center ${props.bgcolor} rounded-xl font-body text-2xl font-extrabold text-white-50 px-4 py-2 `}>
                <div>{props.text}</div>
                <button className={`relative max-w-2 max-h-2 ${props.bgcolor} rounded-full`} onClick={() => setOpen(!open)}>
                    <FaChevronDown className={`${open ? "rotate-180" : ""} -top-2 right-2 absolute transition-transform duration-300`} size={20} />
                </button>
                
            </div>
            {open ? <div className="mapsContainer">
                {props.mappools.map((map) => (
                    <PoolMap key={map.id} data={map} pick={props.pick} />
                ))}
            </div> : ""}
            </div>
        </>
    )
}

export default PoolCategory;
