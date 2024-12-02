import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import *  as osu from "osu-api-v2-js";

const Login = () => {
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
    const redirectUri = import.meta.env.VITE_REDIRECT_URI;
    const location = useLocation(); 
    const navigate = useNavigate();
    useEffect(() =>{
        const fetchAccessToken = async () => {
            const params = new URLSearchParams(location.search);
            const code = params.get('code');
            if(code) {
                console.log(code)
                const api = await osu.API.createAsync(clientId, clientSecret, {redirectUri, code});
                const at = (await api).access_token();
                const rt = (await api).refresh_token();
                localStorage.setItem("access_token", at);
                localStorage.setItem("refresh_token", rt);
            }
        }
        fetchAccessToken();
    }, [location, navigate])
    return(
        <div>
            Logging you in...
        </div>
)};

export default Login;