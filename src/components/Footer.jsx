import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <nav className="bg-logan-500 bg-cover mt-96 p-8 md:p-16 rounded-b-xl">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-banana-mania-100 text-sm md:text-2xl font-body">
                <span className='font-head block'>osu!Chennai Beachside Showdown</span>
                website made with ♥ by <a href='https://github.com/rrex971'><u>rrex</u></a>
            </div>
            <ul className="flex md:space-x-8 space-x-3 font-head text-logan-800">
            <li>
                <NavLink to="https://discord.gg/VPDy35PaPN" className="socialicon opacity-50 hover:opacity-100 transition-opacity duration-300">
                    <img src='discord.svg' alt='Discord' className='max-w-8 md:max-w-12'></img>
                </NavLink>
            </li>
            </ul>

        </div>

    </nav>
  );
};

export default Footer;
