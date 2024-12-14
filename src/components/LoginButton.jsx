import React, { useState } from "react";
import { generateAuthorizationURL } from "osu-api-v2-js";

const LoginButton = () => {
    const api_id = localStorage.getItem('api_id');
    const [showDropdown, setShowDropdown] = useState(false);
    const handleLogin = async () => {
        const clientId = import.meta.env.VITE_CLIENT_ID;
        const redirectUri = import.meta.env.VITE_REDIRECT_URI;
        const url = generateAuthorizationURL(clientId, redirectUri, ["public", "identify"])
        window.location.href = url;
    };
    const handleLogout = () => {
        localStorage.removeItem('api_id');
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        localStorage.removeItem('avatar');
        window.location.reload();
    };
    const handleClick = () => {
        if (api_id) {
          setShowDropdown(!showDropdown);
        } else {
          handleLogin();
        }
    };
    
    return(
    <div>
        <button onClick={handleClick} className="relative z-20 rounded-full font-body font-bold text-xl text-logan-700 bg-banana-mania-100 hover:bg-banana-mania-50 transition-colors duration-300 ease-in-out p-2">
            <div className='flex justify-between items-center space-x-2'>
                <img src={api_id!=null ? localStorage.getItem('avatar') : 'osulogo.svg'} alt="osu logo" width={35} className='inline rounded-full'></img>
                <span className='hidden md:inline pr-2 relative -top-0.25'>{api_id ? localStorage.getItem('username') : 'Login'}</span>
            </div>
            <div className={`absolute w-full mt-4 -left-0 bg-banana-mania-100 p-3 rounded-2xl transition-all duration-300 ease-in-out ${showDropdown ? '' : 'hidden'}`}>
                <button onClick={handleLogout} className="text-logan-700 hover:text-logan-500 transition-colors duration-300 ease-in-out">Logout</button>
            </div>
        </button>

    </div>
        
    );
};

export default LoginButton;