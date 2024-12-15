import React, { useState } from "react";


const LoginButton = () => {
    const api_id = localStorage.getItem('api_id');
    const [showDropdown, setShowDropdown] = useState(false);
    const handleLogin = async () => {
        // for dev purposes
        // const url = 'https://osu.ppy.sh/oauth/authorize/?client_id=36453&redirect_uri=http://localhost:5173/login&response_type=code&scope=public%20identify';
        const url = 'https://osu.ppy.sh/oauth/authorize/?client_id=36453&redirect_uri=https://ocbs.rrex.cc/login&response_type=code&scope=public%20identify';
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