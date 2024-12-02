import React from "react";
import { generateAuthorizationURL } from "osu-api-v2-js";

const LoginButton = () => {
    const handleLogin = async () => {
        const clientId = import.meta.env.VITE_CLIENT_ID;
        const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
        const redirectUri = import.meta.env.VITE_REDIRECT_URI;
        const url = generateAuthorizationURL(clientId, redirectUri, ["public", "identify"])
        window.location.href = url;
    };
    return(
    <button onClick={handleLogin} className="rounded-full font-body font-bold text-xl text-logan-700 bg-banana-mania-100 opacity-75 hover:bg-banana-mania-50 transition-colors duration-300 ease-in-out px-2 py-2">
        <div className='flex justify-between items-center space-x-2'>
          <img src='osulogo.svg' alt="osu logo" width={35} className='inline'></img>
          <span className='hidden md:inline pr-2 relative -top-0.25'>Login</span>
        </div>
    </button>
        
    );
};

export default LoginButton;