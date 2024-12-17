import React from "react";
import RegisterButton from "../components/RegisterButton";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('api_id');
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        localStorage.removeItem('avatar');
        navigate('/');
        window.location.reload();
    };
    return (
        <div className="register-info bg-register-bg bg-left-top bg-cover md:h-screen">
            <div className="flex justify-center items-center py-10 space-x-8 font-head text-4xl text-logan-700">
                Confirm your details
            </div>
            <div className="flex justify-center items-center space-x-2 md:space-x-4 m-20">
                <img src={localStorage.getItem('avatar')} className="rounded-full" alt="User Avatar" width={100} />
                <div className="flex-col font-body text-logan-700 text-2xl">
                    <div className="flex items-center">
                        <p className="font-bold">Username</p>
                        <p className="font-bold ml-6 font-head text-logan-800">{localStorage.getItem('username')}</p>
                    </div>
                    <div className="flex items-center">
                        <p className="font-bold">ID</p>
                        <p className="font-bold ml-6 font-head text-logan-800">{localStorage.getItem('userId')}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center space-x-10 font-body font-bold text-2xl">
                <label htmlFor="phone-number" className="text-logan-700">Phone Number (+91)</label>
                <input 
                    type="tel" 
                    id="phone-number" 
                    name="phone-number" 
                    placeholder="Enter your phone number" 
                    className="rounded-full font-head px-8 py-2 bg-logan-600 border-none focus:bg-logan-700 placeholder:font-body placeholder:italic placeholder-logan-400 text-banana-mania-100 transition-colors duration-300"
                />
            </div>
            <div className="flex justify-center content-center py-10 space-x-10 font-body font-semibold text-xl text-logan-600">
                Not your account? <a href="#" onClick={handleLogout} className="text-logan-800 hover:text-logan-500 ml-4 transition-colors duration-300">Log out.</a>
            </div>
            <RegisterButton />


        </div>
)};


export default Register;