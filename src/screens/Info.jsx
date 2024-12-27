import React from 'react';
import transition from '../transition';

const Info = () => {
  return (
    <div className='bg-logan-500 bg-info-bg bg-cover min-h-screen'>
      <div className="aboutcontainer mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
        {/* Text Section */}
        <div className='abouttext flex flex-col text-center lg:text-left'>
          <div className='aboutheader font-head pt-12 pb-5'>
            <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-logan-600'>About </span>
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-logan-400">our</span>
            <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-logan-400 block'>Tournament</span>
          </div>
          <div className='font-body font-medium text-logan-800 text-xs sm:text-sm md:text-base text-left leading-loose max-w-full md:max-w-2xl pr-0 lg:pr-10'>
            osu!Chennai Beachside Showdown is an osu! LAN tournament hosted in the Battle Royale format. It is also India's first official osu! LAN tournament, hosted in the coastal city of Chennai, Tamil Nadu.
            This tournament, once a pipe dream for many Indian players, is finally coming to fruition with the first iteration being held on January 5th, 2025.
            The osu!Chennai community is one of the more active group of osu! players in the country. According to osu!world (2024) we have around 30+ active players in the state of Tamil Nadu. We are a close knit community, and have also frequently organised meetups since 2022.
            We wish all participants the very best, and hope to have a great time together!
          </div>
        </div>

        {/* Image Section */}
        <div className='imagecontainer'>
          <img
            src='infoimage.png'
            alt='Placeholder Images'
            className='w-full sm:w-3/4 md:w-2/3 lg:w-auto'
          />
        </div>
      </div>
    </div>
  );
};

export default transition(Info);
