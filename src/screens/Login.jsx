import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import *  as osu from "osu-api-v2-js";
import { NinetyRingWithBg } from "react-svg-spinners";

const Login = () => {
    const location = useLocation(); 
    const navigate = useNavigate();
    useEffect(() =>{
        const fetchCode = async () => {
            const params = new URLSearchParams(location.search);
            const code = params.get('code');
            if (code) {
                if (localStorage.getItem('api_id') === null) {
                    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    let result = '';
                    for (let i = 0; i < 32; i++) {
                        result += characters.charAt(Math.floor(Math.random() * characters.length));
                    }
                    const base64String = btoa(result);
                    console.log('Generated base64String:', base64String);

                    try {
                        const response = await fetch(`http://localhost:6969/loginFlow?apiId=${base64String}&code=${code}`, {
                            method: 'GET',
                            headers: {
                                'Access-Control-Allow-Origin':'*',
                            },
                        });
                        const data = await response.json();
                        console.log('Response from server:', data);

                        if (data.error) {
                            console.log('Error:', data.error);
                        } else {
                            localStorage.setItem('api_id', base64String);
                            localStorage.setItem('username', data.username);
                            localStorage.setItem('userId', data.userId);
                            localStorage.setItem('avatar', data.avatar);
                            navigate('/');
                            window.location.reload();
                        }
                    } catch (error) {
                        console.error('Error during fetch:', error);
                    }
                } else {
                    navigate('/');
                }
            } else {
                navigate('/');
            }
        }
        fetchCode();
    }, [location, navigate])
    return(
        <div className="flex justify-center items-center space-x-10 h-screen font-head text-4xl text-logan-600">
            <NinetyRingWithBg color="#857cab" width="100px" height="100px" className="block"/>
            <span className="block">Logging you in...</span>
        </div>
)};

export default Login;