import Navbar from "./Layout/Navbar";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full overflow-hidden" id="home">
      {/* TOP: Navbar + Background Image Section */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/bgImage.jpg')" }}
      >
        <Navbar />

        {/* Rating Badge */}
        <div className="flex flex-col items-center justify-center pt-6 sm:pt-10 md:pt-10 lg:pt-8 px-4">
          <div className="bg-black/30 backdrop-blur-sm border border-gray-700 rounded-full px-4 sm:px-6 py-2 sm:py-3 flex items-center space-x-2 sm:space-x-3 mb-4">
            <span className="text-white text-sm sm:text-base font-medium">5.0</span>
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-300 text-sm sm:text-base">11 reviews</span>
          </div>
        </div>
      </div>

      {/* BELOW: Main Heading + Subtitle + CTA */}
      <div className="w-full text-center px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-20 bg-black">
        {/* Main Heading */}
        <div className="max-w-6xl mx-auto mb-2 sm:mb-3">
          <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.2]">
            Partner with a Full-Service
            <span className="block mt-1">Design Team for All Your</span>
            <span className="block mt-1">Creative Needs</span>
          </p>
        </div>

        {/* Subtitle */}
        <div className="max-w-3xl mx-auto mb-4 sm:mb-5">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed px-4">
            Skip the hassle of finding the perfect full-time designer or studio
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Connect us →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
