import React from 'react';
import { ArrowRight, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { id: 1, icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { id: 2, icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { id: 3, icon: <span className="font-bold text-sm">Be</span>, href: "#", label: "Behance" },
    { id: 4, icon: <div className="w-4 h-4 bg-white rounded-full" />, href: "#", label: "Dribbble" },
    { id: 5, icon: <span className="font-bold text-sm">C</span>, href: "#", label: "Custom" }
  ];

  return (
    <footer className="relative bg-black text-white flex flex-col justify-between pt-16 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* 📸 Background image at bottom - taller & more visible */}
      <div
        className="absolute bottom-0 left-0 w-full h-72 sm:h-96 bg-cover bg-bottom bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/bgImage.jpg')" // Replace with your actual path
        }}
      />

      {/* 🌒 Lighter overlay for better image visibility */}
      <div className="absolute bottom-0 left-0 w-full h-72 sm:h-96 bg-black/30 z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-between min-h-[80vh]">
        
        {/* Main CTA */}
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight mb-8 max-w-6xl">
            Need more clarity?
            <br />
            Get in touch!
          </h1>
          
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full flex items-center space-x-2 transition-colors duration-300 text-lg">
            <span>Book a demo</span>
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-gray-400 text-sm">© 2024 All Rights Reserved</div>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 bg-gray-800/80 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
