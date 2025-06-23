'use client';
import React from 'react';

const Services = () => {
  const services = [
    'UX design',
    'Graphic design',
    'Logo design',
    'Branding',
    'Animation',
    'UI/UX design',
    'Graphic design',
    'Logo design',
    'Branding',
  ];

  // Duplicate services to simulate infinite scroll
  const loopedServices = [...services, ...services];

  return (
    <div className="bg-black text-white px-4 py-16 overflow-hidden" id='services'>
      {/* Badge */}
      <div className="text-center mb-10">
        <span className="inline-block px-4 py-2 bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 text-sm font-medium rounded-full">
          Services
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-center mb-12">
        All you want,<br />delivered on time
      </h2>

      {/* Marquee Animation */}
      <div className="marquee">
        <div className="marquee-content">
          {loopedServices.map((service, index) => (
            <span
              key={index}
              className="px-6 py-3 mx-2 whitespace-nowrap bg-[#141414] border-1 rounded-2xl border-gray-500 hover:bg-gray-700 transition-all duration-200"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
