import { React, useState, useEffect } from "react";
import LoadingScreen from "../screens/LoadingScreen";
import transition from '../transition';
import Player from '../components/Player';


const Players = () => {
    const [registrations, setRegistrations] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchRegistrations = async () => {
        const response = await fetch(`https://ocbs.rrex.cc/api/registrations`, {
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
                setRegistrations(data);
            }
            setLoading(false);
        }
        
      
    fetchRegistrations(); 
    }, []);

    if(loading){
        return <LoadingScreen />;
    }
    return (
        <div className='bg-register-bg bg-left-top bg-cover md:h-screen'>
            <div className="flex justify-center items-center pt-24 space-x-8 font-head text-4xl text-logan-700">
                Registered Players
            </div>
            <div className='flex flex-wrap max-w-1/2 justify-center items-center content-center align-center space-x-4 my-4'>        
              {registrations.map((registration) => (
                <Player key={registration.userId} id={registration.userId} username={registration.username} avatarUrl={registration.avatarUrl} rank={registration.rank} discord={registration.discordUsername} />
              ))}
            </div>
        </div>
    );
};

export default transition(Players); 
