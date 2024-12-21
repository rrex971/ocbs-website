import React from 'react';
import transition from '../transition';

const Info = () => {
  return (
  <div className='bg-logan-500 bg-info-bg bg-cover md:h-screen'>
    <div className="aboutcontainer mx-auto my-auto px-12 md:px-48 flex flex-col lg:flex-row justify-between items-center ">
      <div className='abouttext'>
        <div className='aboutheader font-head pt-20 pb-5'>
            <span className='text-4xl md:text-6xl text-logan-600'>About </span><span className="text-2xl md:text-4xl text-logan-400">our</span>
            <span className='text-4xl md:text-6xl text-logan-400 block'>Tournament</span>
        </div>
        <div className='font-body font-medium text-logan-800 text-sm leading-loose md:text-lg md:max-w-2xl pr-10 block'>
        osu!Chennai Beachside Showdown is an osu! LAN tournament hosted in the Battle Royale format. It is also India's first official osu! LAN tournament, hosted in the coastal city of Chennai, Tamil Nadu.
        This tournament, once a pipe dream for many Indian players, is finally coming to fruition with the first iteration being held on January 5th, 2025. 
        The osu!Chennai community is one of the more active group of osu! players in the country. According to osu!world (2024) we have around 30+ active players in the state of Tamil Nadu. We are a close knit community, and have also frequently organised meetups since 2022.
        We wish all participants the very best, and hope to have a great time together!
        </div>
      </div>
      <div className='imagecontainer pt-8 lg:pt-0'>
          <img src='placeholder.png' alt='Placeholder Images' width='500'></img>
        </div>
    </div>
  </div>
)};

export default transition(Info); 
