import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


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
        <div className="relative z-20 inline-block">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleClick}
                    className="rounded-full font-body font-bold text-xl text-logan-700 bg-banana-mania-100 hover:bg-banana-mania-50 transition-colors duration-300 ease-in-out p-2 m-2"
                >
                        <div className='flex justify-between items-center space-x-2'>
                                <img src={api_id!=null ? localStorage.getItem('avatar') : 'osulogo.svg'} alt="osu logo" width={35} className='inline rounded-full'></img>
                                <span className='hidden md:inline pr-2 relative -top-0.25'>{api_id ? localStorage.getItem('username') : 'Login'}</span>
                        </div>
                </motion.button>
                <AnimatePresence>
                    {showDropdown && (
                        <motion.button
                            key="logout"
                            initial={{ opacity: 0, y: -6, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -6, scale: 0.97 }}
                            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                            onClick={handleLogout}
                            className="absolute w-full mt-2 left-0 bg-banana-mania-100 p-3 rounded-2xl hover:bg-banana-mania-50 font-body font-bold text-logan-700"
                        >
                            Logout
                        </motion.button>
                    )}
                </AnimatePresence>
        </div>
        
        );
};

export default LoginButton;