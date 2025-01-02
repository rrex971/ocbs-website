import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="lg:transform translate-y-48">
          <nav className="bg-logan-500 bg-cover mt-12 md:mt-64 p-6 md:p-16 rounded-b-xl">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <div className="text-banana-mania-100 text-sm md:text-2xl font-body mb-4 md:mb-0">
                <span className="font-head block">
                  osu!Chennai Beachside Showdown
                </span>
                <span>
                  website made with ♥ by{" "}
                  <a href="https://github.com/rrex971" className="underline">
                    rrex
                  </a>
                </span>
              </div>
              <ul className="flex justify-center md:justify-end md:space-x-8 space-x-4 font-head text-logan-800">
                <li>
                  <NavLink
                    to="https://discord.gg/VPDy35PaPN"
                    className="socialicon opacity-50 hover:opacity-100 transition-opacity duration-300"
                  >
                    <img
                      src="discord.svg"
                      alt="Discord"
                      className="w-6 h-6 md:w-12 md:h-12"
                    />
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
    </div>
  );
};

export default Footer;
