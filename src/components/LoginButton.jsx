import React from "react";

const LoginButton = () => {
    const handleLogin = async () => {
        const clientId = process.env.get('CLIENT_ID');
        const clientSecret = process.env.get('CLIENT_SECRET');
        const redirectUri = process.env.get('REDIRECT_URI');
    };
    return(
    <button className="rounded-full font-body font-bold text-xl text-logan-700 bg-banana-mania-100 opacity-75 hover:bg-banana-mania-50 transition-colors duration-300 ease-in-out px-2 py-2">
        <div className='flex justify-between items-center space-x-2'>
          <img src='osulogo.svg' alt="osu logo" width={35} className='inline'></img>
          <span className='hidden md:inline pr-2 relative -top-0.25'>Login</span>
        </div>
    </button>
        
    );
};

export default LoginButton;