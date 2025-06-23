'use client';
import React from 'react';

const portfolioItems = [
  {
    id: 1,
    title: "Slipery moneys - e-commerce platform for high risk industries",
    image: "/image1.jpg",
    year: "2023",
    category: "E-commerce",
    description: "A high-risk e-commerce platform for digital goods and services."
  },
  {
    id: 2,
    title: "Hybrid capital - digital currency",
    image: "/image2.jpg",
    year: "2022",
    category: "Fintech",
    description: "Digital assets ecosystem with strong compliance and usability."
  },
  {
    id: 3,
    title: "Betero - sports betting platform",
    image: "/image3.jpg",
    year: "2023",
    category: "Sports",
    description: "Web3-powered betting experience across sports and leagues."
  },
  {
    id: 4,
    title: "Exec - employees financial wellness saas",
    image: "/image4.jpg",
    year: "2023",
    category: "SaaS",
    description: "Helps employees manage money through employer-provided tools."
  },
  {
    id: 5,
    title: "Voltoge - accessible clean energy startup",
    image: "/image5.jpg",
    year: "2022",
    category: "Energy",
    description: "Green energy tech for underserved communities."
  },
  {
    id: 6,
    title: "Hyperbolic - a decentralized data transmission startup",
    image: "/image6.jpg",
    year: "2024",
    category: "Infrastructure",
    description: "P2P high-speed encrypted data sharing platform."
  }
];

const Portfolio = () => {
  return (
    <section className="w-full bg-black text-white min-h-screen py-20 px-6 lg:px-16" id='portfolio'>
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20">
          <div className="flex-1">
            <div className="inline-block mb-8">
              <span className="bg-[#141414] text-[#FFBE0D] backdrop-blur-sm px-8 py-4 rounded-full text-sm font-medium border border-[#372f1c]">
                Portfolio
              </span>
            </div>
            <p className="text-5xl lg:text-6xl xl:text-7xl font-thin leading-[1.1] tracking-tight">
              Exceptional work<br />
              <span className="text-white">you deserve</span>
            </p>
          </div>
          <div className="flex-1 lg:max-w-md lg:ml-16 mt-8 lg:mt-16">
            <p className="text-gray-400 text-lg leading-relaxed">
              From tech startups to healthcare giants, e-commerce pioneers to edtech, we've left our mark on diverse domains.
            </p>
          </div>
        </div>

        {/* Three Column Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <div key={item.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative h-[450px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800  mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${item.image}')`
                  }}
                ></div>

                {/* Title Overlay */}
                <div className="absolute bottom-20 left-6 right-6 z-20">
                  <p className="text-xl font-thin leading-tight">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See All Works Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 group text-lg">
            See all works
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
