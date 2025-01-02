import { React, useState, useEffect } from "react";
import LoadingScreen from "../screens/LoadingScreen";
import transition from "../transition";
import Player from "../components/Player";

const Players = () => {
  const [registrations, setRegistrations] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegistrations = async () => {
      const response = await fetch(`https://ocbs.rrex.cc/api/registrations`, {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const data = await response.json();
      console.log("Response from server:", data);

      if (data.error) {
        console.log("Error:", data.error);
      } else {
        setRegistrations(data);
      }
      setLoading(false);
    };

    fetchRegistrations();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-logan-500 bg-register-bg bg-left-top bg-no-repeat bg-contain min-h-lvh px-4 sm:px-6 lg:px-12">
      <div className="flex justify-center items-center pt-12 sm:pt-16 font-head text-2xl sm:text-3xl lg:text-4xl text-logan-700">
        Registered Players
      </div>

      <div className="mt-8 overflow-y-visible h-fit flex flex-wrap justify-center items-center gap-0 2xl:gap-4">
        {registrations.map((registration) => (
          <Player
            key={registration.userId}
            id={registration.userId}
            username={registration.username}
            avatarUrl={registration.avatarUrl}
            rank={registration.rank}
            discord={registration.discordUsername}
          />
        ))}
      </div>
    </div>
  );
};

export default transition(Players);
