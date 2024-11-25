import React from 'react';

const Info = () => {
  return (
  <div className='bg-logan-500 bg-info-bg bg-cover md:h-screen'>
    <div className="aboutcontainer mx-auto my-auto px-12 md:px-48 flex flex-col lg:flex-row justify-between items-center ">
      <div className='abouttext'>
        <div className='aboutheader font-head pt-20 pb-5'>
            <span className='text-4xl md:text-6xl text-logan-600'>About </span><span className="text-2xl md:text-4xl text-logan-400">our</span>
            <span className='text-4xl md:text-6xl text-logan-400 block'>Tournament</span>
        </div>
        <div className='font-body text-logan-800 text-sm md:text-lg md:max-w-md pr-10 block'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis turpis pulvinar, scelerisque ipsum blandit, posuere odio. Phasellus elementum dictum aliquet. Nam aliquam convallis ultricies. Nam auctor consequat finibus. Nulla odio orci, hendrerit nec magna ornare, laoreet molestie nisl. Fusce dignissim sed lorem eget bibendum. Praesent orci massa, convallis cursus hendrerit eget, molestie non risus. Suspendisse ac lectus eu sem cursus finibus.
        </div>
      </div>
      <div className='imagecontainer pt-8 lg:pt-0'>
          <img src='placeholder.png' alt='Placeholder Images' width='500'></img>
        </div>
    </div>
    <div className='gallerycontainer mx-auto my-auto mt-16 lg:mt-48 mb-48 px-12 md:px-48 min-h-128 justify-between items-center'>
      <div className="galleryText font-head">
        <span className='text-4xl md:text-6xl text-banana-mania-100'>Gallery</span>
      </div>
      <div className='galleryImages mt-16 flex flex-col justify-between items-center block'>
        <img src={"checklater.svg"} alt='The event has not yet concluded. Check back later.'></img>
      </div>
    </div>
  </div>
)};

export default Info;
