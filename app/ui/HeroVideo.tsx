import React from 'react';

const HeroVideo = () => {
  return (
    <div className="relative w-full h-screen minus-header bg-black"> 
      <video 
        className="w-full h-full"
        src="/videoplayback.mp4" 
        autoPlay
        loop
        muted
        playsInline
      />
      <div className='bg-black bg-opacity-30 h-full w-full absolute top-0'></div>
    </div>
  );
};

export default HeroVideo;