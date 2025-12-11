import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import { FaTwitch, FaExternalLinkAlt } from 'react-icons/fa';
import LoadingScreen from './LoadingScreen';
import transition from '../transition';
import Lightbox from 'yet-another-react-lightbox';
import Video from "yet-another-react-lightbox/plugins/video";
import 'yet-another-react-lightbox/styles.css';
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { NinetyRingWithBg } from "react-svg-spinners";
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();
  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(-1);
  const [photos, setPhotos] = useState([]);

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
  }, []);

  useEffect(() => {
    const loadImages = async () => {
      const modules = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,webp,mp4,webm}', { eager: true });

      const loadedPhotos = await Promise.all(
        Object.values(modules).map(async (module) => {
          const src = module.default;
          const isVideo = src.endsWith('.mp4') || src.endsWith('.webm');

          return new Promise((resolve) => {
            if (isVideo) {
              const video = document.createElement('video');
              video.preload = 'metadata';
              video.onloadedmetadata = () => {
                resolve({
                  src,
                  width: video.videoWidth,
                  height: video.videoHeight,
                  type: 'video',
                  sources: [{
                    src,
                    type: src.endsWith('.webm') ? 'video/webm' : 'video/mp4'
                  }]
                });
              };
              video.onerror = () => {
                console.error(`Failed to load video: ${src}`);
                resolve(null);
              };
              video.src = src;
            } else {
              const img = new Image();
              img.onload = () => {
                resolve({
                  src,
                  width: img.width,
                  height: img.height,
                });
              };
              img.onerror = () => {
                console.error(`Failed to load image: ${src}`);
                resolve(null);
              };
              img.src = src;
            }
          });
        })
      );
      setPhotos(loadedPhotos.filter(p => p !== null && p.width > 0 && p.height > 0));
    };
    loadImages();
  }, []);

  const slides = useMemo(() => photos.map((p) => {
    if (p.type === 'video') {
      return {
        type: 'video',
        width: p.width,
        height: p.height,
        sources: p.sources,
      };
    }
    return p;
  }), [photos]);

  const heroVariants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 140, damping: 18, staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 160, damping: 20 } },
  };

  const galleryItemVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { type: 'spring', stiffness: 150, damping: 18 },
    },
  };

  const GalleryMedia = ({ photo, imageProps }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const { style, alt, onClick, ...restProps } = imageProps;

    return (
      <motion.div
        style={{ ...style, position: 'relative' }}
        className="group overflow-hidden rounded-2xl transform-gpu"
        onClick={onClick}
        variants={galleryItemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ scale: 1.04, rotate: -0.6 }}
        transition={{ type: 'spring', stiffness: 200, damping: 26, mass: 0.95 }}
      >
        {!isLoaded && (
          <div className="absolute inset-0 bg-logan-400 animate-pulse pointer-events-none" />
        )}
        {photo.type === 'video' ? (
          <>
            <video
              {...restProps}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', opacity: isLoaded ? 1 : 0.1, transition: 'opacity 200ms ease-out' }}
              className="transition-transform duration-250 ease-out will-change-transform transform-gpu"
              muted
              playsInline
              preload="auto"
              onLoadedData={(e) => {
                e.target.currentTime = 0;
                setIsLoaded(true);
              }}
              onLoadedMetadata={() => setIsLoaded(true)}
              onCanPlay={() => setIsLoaded(true)}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-black bg-opacity-50 rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-banana-mania-100" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </>
        ) : (
          <img
            {...restProps}
            alt={alt || 'Gallery image'}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: isLoaded ? 1 : 0.1, transition: 'opacity 200ms ease-out' }}
            className="transition-transform duration-250 ease-out will-change-transform transform-gpu"
            onLoad={() => setIsLoaded(true)}
          />
        )}
      </motion.div>
    );
  };

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <div className="flex flex-col bg-logan-500 min-h-lvh overflow-hidden">
      <div className="relative w-full bg-home-bg bg-right-top bg-no-repeat md:bg-left-top md:bg-cover pb-32 md:pb-96">
        <motion.div
          className="titlecontainer pt-8 md:pt-24 px-12 md:px-48 flex flex-col lg:flex-row justify-between items-center relative z-10"
          variants={heroVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div className="titletext" variants={itemVariants}>
            <div className="titlecontent font-head pt-20 pb-5">
              <span className="text-5xl font-body font-thin italic md:text-6xl text-white-50 block">
                osu!Chennai
              </span>
              <span className="text-6xl md:text-8xl text-banana-mania-100 block">
                Beachside
                <br />
                Showdown
              </span>
            </div>
          </motion.div>
          <motion.div className="contentcontainer pt-8 lg:pt-0 flex flex-col items-center lg:items-start text-center lg:text-left" variants={itemVariants}>
            <div className="font-body font-bold  text-white-50 text-3xl pt-4 md:pt-36 md:text-5xl md:max-w-md pr-10 block">
              India's <span className="text-banana-mania-100 italic">first</span>
              <br />
              osu! <span className="text-banana-mania-100">LAN event</span>.
            </div>
            <br className='my-4 md:my-0'/>
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
            <motion.button
              className="disabled cursor-not-allowed rounded-full bg-white-300 text-white-500 font-body font-medium text-xl mt-4 px-12 py-4 self-center lg:self-start"
              onClick={() => {
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
              }}
            >
              Event concluded. Registrations closed.
            </motion.button>
              <a
                href="https://www.twitch.tv/collections/xW6M0YIhGhglSw"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#997dd4] text-[#e1d9f2] font-body font-medium text-xl mt-4 px-12 py-4 transition duration-150 ease-out transform hover:scale-105 hover:-rotate-1 w-fit self-center lg:self-start"
              >
                <FaTwitch className="text-xl text-[#e1d9f2]" />
                <span className="text-[#e1d9f2]">Watch Twitch VODs</span>
                <FaExternalLinkAlt className="text-sm opacity-90 text-[#e1d9f2]" />
              </a>
          </motion.div>
        </motion.div>
        <div className="absolute inset-x-0 bottom-6 md:bottom-24 flex flex-col items-center gap-1.5 px-4 text-center">
          <span className="font-body text-[11px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.22em] uppercase text-banana-mania-100 drop-shadow-sm">
            Scroll to view gallery
          </span>
          <a href="#gallery" className="group relative flex flex-col items-center" aria-label="Scroll to gallery">
            <motion.div
              className="text-banana-mania-100/60"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 scale-75">
                <path fill="currentColor" d="M12 16.5a1 1 0 0 1-.7-.29l-6-6a1 1 0 1 1 1.4-1.42L12 14.1l5.3-5.31a1 1 0 0 1 1.4 1.42l-6 6a1 1 0 0 1-.7.29z" />
              </svg>
            </motion.div>
            <motion.div
              className="text-banana-mania-100"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8">
                <path fill="currentColor" d="M12 16.5a1 1 0 0 1-.7-.29l-6-6a1 1 0 1 1 1.4-1.42L12 14.1l5.3-5.31a1 1 0 0 1 1.4 1.42l-6 6a1 1 0 0 1-.7.29z" />
              </svg>
            </motion.div>
          </a>
        </div>
      </div>
      <div id="gallery" className="gallerycontainer w-full mx-auto mt-12 mb-6 lg:mt-48 px-6 sm:px-12 md:px-48 min-h-96">
        <motion.div
          className="galleryText font-head text-left lg:text-left mb-12 flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 140, damping: 16 }}
        >
          <span className="text-3xl sm:text-4xl md:text-6xl text-banana-mania-100">Gallery</span>
        </motion.div>
        <div className="galleryImages w-full block">
          {photos.length > 0 ? (
            <>
              <RowsPhotoAlbum
                photos={photos}
                targetRowHeight={400}
                spacing={32}
                onClick={({ index }) => setIndex(index)}
                defaultContainerWidth={1200}
                render={{
                  image: (props, { photo }) => <GalleryMedia photo={photo} imageProps={props} />
                }}
              />
              <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={slides}
                plugins={[Video]}
              />
            </>
          ) : (
            <div className="flex justify-center items-center py-16">
              <NinetyRingWithBg color="#f8e5b0" width="80px" height="80px" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default transition(Home);

