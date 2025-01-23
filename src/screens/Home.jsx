import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { Slide, toast } from 'react-toastify';
import LoadingScreen from './LoadingScreen';
import transition from '../transition';

const Home = () => {
  const navigate = useNavigate();
  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserExists = async () => {
      const userId = localStorage.getItem('userId');
      if (userId) {
        try {
          const response = await fetch(`https://ocbs.rrex.cc/api/userExists?userId=${userId}`);
          const result = await response.json();
          if (response.ok) {
            setRegistered(result);
          } else {
            console.error('Failed to fetch user exists:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching user exists:', error);
        }
      }
      setLoading(false);
    };
    fetchUserExists();
  });
  if(loading){
    return <LoadingScreen />;
  }
  return (
  <div className="flex-col bg-logan-500 bg-home-bg bg-right-top bg-no-repeat md:bg-left-top md:bg-cover md:min-h-lvh">
      <div className="titlecontainer pt-8 md:pt-24 px-12 md:px-48 flex flex-col lg:flex-row justify-between items-center">
        <div className="titletext">
          <div className="titlecontent font-head pt-20 pb-5">
            <span className="text-4xl font-body font-thin italic md:text-6xl text-white-50">
              osu!Chennai
            </span>
            <span className="text-4xl md:text-8xl text-banana-mania-100 block">
              Beachside
              <br />
              Showdown
            </span>
          </div>
        </div>
        <div className="contentcontainer pt-8 lg:pt-0">
          <div className="font-body font-bold text-white-50 text-3xl pt-4 md:pt-36 md:text-5xl md:max-w-md pr-10 block">
            India's <span className="text-banana-mania-100 italic">first</span>
            <br />
            osu! <span className="text-banana-mania-100">LAN event</span>.
          </div>
          <br />
          <div className="font-body font-medium text-white-50 text-lg md:text-2xl md:max-w-md pr-10 block">
            osu!Chennai Beachside Showdown is a&nbsp;
            <span className="text-banana-mania-100 font-extrabold">
              one-day, Battle Royale LAN&nbsp;
            </span>
            tournament in the heart of
            <span className="text-banana-mania-100 font-bold italic">
              Chennai
            </span>
            , hosted by <span className="text-banana-mania-100 font-bold italic">Raybean&nbsp;</span>
            and <span className="text-banana-mania-100 font-bold italic">rrex</span>.
            The event will be a part of the largest osu! meetup in the city.
            <br />
            <br />
            <span className="font-regular italic text-sm md:text-lg text-banana-mania-100">
              <span className='font-bold text-white-50 not-italic'>Venue:</span> LXG Nungambakkam, 1st Floor, Fortuna Towers, No. 1, 1, Kodambakkam High Rd, Tirumurthy Nagar, Nungamakkam, Chennai, Tamil Nadu 600034
            </span>
          </div>
          <button className="disabled cursor-not-allowed rounded-full bg-white-300 text-white-500 font-body font-medium text-xl mt-4 px-12 py-4 transition-colors duration-300 ease-in-out" onClick={() => {
            /*if (registered) {
          navigate('/register/payment/confirmation');
        } else if (localStorage.getItem('api_id')) {
          navigate('/register');
        } else {
          toast(
            <div className="font-body font-medium text-lg text-logan-700 bg-banana-mania-100 rounded-full p-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>Please login first to register</span>
            </div>,
            {
              position: "top-right",
              closeButton: false,
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              className: "p-0 rounded-full bg-banana-mania-100",
              transition: Slide,
            }
          );
        }*/
          }}>
          Event concluded. Registrations closed.
        </button>
      </div>
    </div><div className="gallerycontainer flex-col mx-auto mt-12 lg:mt-48 px-6 sm:px-12 md:px-48 h-full justify-between items-center min-h-96">
        <div className="galleryText font-head text-left lg:text-left">
          <span className="text-3xl sm:text-4xl md:text-6xl text-banana-mania-100">Gallery</span>
        </div>
        <div className="galleryImages mt-36 sm:mt-16 mb-96 flex flex-col justify-center items-center">
          <div className="image-wrapper flex-col justify-center h-full">
          <a href="https://www.reddit.com/r/osugame/comments/1hvp49j/osuchennai_beachside_showdown_lan_tournament/" target="_blank">
            <img
              src={"image.png"}
              alt="The event has not yet concluded. Check back later."
              className="max-w-full h-full rounded-3xl" />
            </a>
            <div className='flex justify-center font-head text-3xl mt-10'>
              more pictures to come soon!!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default transition(Home);

