import React from 'react';
import Image from 'next/image';

const LogoCarousel = () => {
  return (
    <div className="w-full bg-black py-16 overflow-hidden">
      <div className="text-center mb-12">
        <h3 className="text-gray-400 text-lg font-light">As seen and loved on:</h3>
      </div>

      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />

        {/* Reduced-width carousel */}
        <div className="w-[600px] sm:w-[700px] md:w-[800px] lg:w-[900px] mx-auto flex animate-scroll items-center">
          <div className="flex-shrink-0">
            <Image 
              src="/social.svg" 
              alt="Social Logo" 
              width={120} 
              height={64} 
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="flex-shrink-0 ml-16">
            <Image 
              src="/logos.png" 
              alt="Design Platform Logos" 
              width={240} 
              height={64} 
              className="h-16 w-auto object-contain"
            />
          </div>
          <div className="flex-shrink-0 ml-16">
            <Image 
              src="/logos.png" 
              alt="Design Platform Logos Duplicate" 
              width={240} 
              height={64} 
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoCarousel;
