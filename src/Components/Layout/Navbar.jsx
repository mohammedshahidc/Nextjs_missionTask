import React from 'react';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <nav className="w-full bg-transparent relative z-50">
      {/* Container with responsive padding */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-22">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider">
              LOGO
            </h1>
          </div>

          {/* Desktop Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm lg:text-base font-medium relative group"
              >
                {link.name}
                {/* Active indicator dot for Services */}
                {link.name === 'Services' && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full"></span>
                )}
                {/* Hover underline effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Book a Demo Button - Desktop */}
          <div className="hidden md:flex">
            <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 px-4 lg:px-6 py-2 lg:py-3 rounded-full text-sm lg:text-base font-medium">
              Book a demo →
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Always visible */}
        <div className="md:hidden px-2 pt-2 pb-6 space-y-2 bg-black/20 backdrop-blur-sm rounded-lg mt-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-3 text-white hover:text-yellow-400 hover:bg-white/10 transition-all duration-300 rounded-lg text-base font-medium relative"
            >
              {link.name}
              {/* Active indicator for Services in mobile */}
              {link.name === 'Services' && (
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </a>
          ))}
          
          {/* Mobile Book a Demo Button */}
          <div className="px-4 pt-4">
            <button 
              className="w-full bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 px-4 py-3 rounded-full text-base font-medium"
            >
              Book a demo →
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
