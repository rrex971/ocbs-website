import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <nav className="bg-logan-500 bg-cover mt-48 p-16 rounded-b-xl">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-banana-mania-100 text-2xl font-body">
                <span className='font-head text-2xl block'>osu!Chennai Beachside Showdown</span>
                website made with ♥ by rrex
            </div>
            <ul className="flex md:space-x-8 space-x-3 font-head text-logan-800">
            <li>
                <NavLink to="https://discord.gg/VPDy35PaPN" className="socialicon opacity-50 hover:opacity-100 transition-opacity duration-300">
                    <svg width="48" height="48" class='fill-logan-800'>       
                        <image href="discord.svg" src="xd.png" width="48" height="48"/>    
                    </svg>
                </NavLink>
            </li>
            </ul>

        </div>

    </nav>
  );
};

export default Footer;
