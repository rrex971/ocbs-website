import React from 'react';

const Home = () => {
  return(
    <div className='bg-logan-500 bg-home-bg-sm bg-right-top md:bg-left-top md:bg-home-bg bg-no-repeat md:bg-cover md:h-screen '>
      <div className="titlecontainer mx-auto my-auto pt-8 md:pt-24 px-12 md:px-48 flex flex-col lg:flex-row justify-between items-center ">
        <div className='titletext'>
          <div className='titlecontent font-head pt-20 pb-5'>
              <span className='text-4xl font-body font-thin italic md:text-6xl text-white-50'>osu!Chennai</span>
              <span className='text-4xl md:text-8xl text-banana-mania-100 block'>Beachside<br></br>Showdown</span>
          </div>

        </div>
        <div className='contentcontainer pt-8 lg:pt-0'>
          <div className='font-body font-bold text-white-50 text-3xl pt-4 md:pt-24 md:text-5xl md:max-w-md pr-10 block'>
            India's <span className='text-banana-mania-100 italic'>first</span><br></br>osu! <span className='text-banana-mania-100'>LAN event</span>.
          </div>
          <br></br>
          <div className='font-body font-medium text-white-50 text-lg md:text-2xl md:max-w-md pr-10 block'>
            osu!Chennai Beachside Showdown is a <span className='text-banana-mania-100 font-extrabold'>one-day, Battle Royale LAN</span> in the heart of <span className='text-banana-mania-100 font-bold italic'>Chennai</span>, hosted by <span className='text-banana-mania-100 font-bold italic'>Raybean</span> and <span className='text-banana-mania-100 font-bold italic'>rrex</span>.
            The event will be a part of the largest osu! meetup in the city.
          </div> 
        </div>
      </div>
      <div className='gallerycontainer mx-auto my-auto mt-16 lg:mt-64 mb-48 px-12 md:px-48 min-h-128 justify-between items-center'>
        <div className="galleryText font-head">
          <span className='text-4xl md:text-6xl text-banana-mania-100'>Gallery</span>
        </div>
      <div className='galleryImages mt-16 flex flex-col justify-between items-center block'>
        <img src={"checklater.svg"} alt='The event has not yet concluded. Check back later.'></img>
      </div>
    </div>
  </div>
  );    
};

export default Home;
