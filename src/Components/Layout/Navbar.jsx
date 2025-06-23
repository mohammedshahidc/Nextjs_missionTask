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
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-4 md:gap-0">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-white text-xl sm:text-xl font-bold tracking-wider">
              LOGO
            </h1>
          </div>

          {/* Flex navigation - visible in all views */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm sm:text-base font-medium relative group"
              >
                {link.name}
                {/* Dot under 'Services' */}
                {link.name === 'Services' && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full"></span>
                )}
                {/* Underline on hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Book a Demo Button - stays right */}
          <div className="flex-shrink-0">
            <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 px-4 py-2 rounded-full text-sm sm:text-base font-medium">
              Book a demo →
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
