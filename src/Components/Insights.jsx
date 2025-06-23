import React from 'react';

const Insights = () => {
  const faqs = [
    "Is it really unlimited?",
    "Why wouldn't I just hire a freelancer?",
    "Why wouldn't I just hire a full-time designer?",
    "Can I pause, renew or cancel at any time?",
    "Are there any contracts?",
    "How do we communicate?",
    "What if I only have one design task?",
    "What is an active task?",
    "Who are the designers?",
    "How many designs can be done in a single month?",
    "Are there any refunds if I don't like the designs?"
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-20">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-10 md:mb-14 lg:mb-16">
        {/* Insights Badge */}
        <div className="mb-4 sm:mb-6 md:mb-7 lg:mb-8">
          <span className="inline-block px-5 py-2 sm:px-6 sm:py-2.5 md:px-7 md:py-3 lg:px-8 lg:py-3 bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 text-xs sm:text-sm md:text-base lg:text-base font-medium rounded-full">
            Insights
          </span>
        </div>

        {/* Main Heading */}
        <p className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl font-thin leading-tight max-w-4xl mx-auto">
          Frequently asked
          <br />
          questions
        </p>
      </div>

      {/* FAQ Container */}
      <div className="max-w-5xl mx-auto w-full">
        <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-4">
          {faqs.map((question, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-lg sm:rounded-xl border border-gray-900"
            >
              <div className="w-full text-left px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6 lg:px-6 lg:py-6 flex justify-between items-center">
                <span className="text-sm sm:text-base md:text-base lg:text-lg text-gray-200 font-normal pr-4">
                  {question}
                </span>
                <span className="text-gray-400 text-2xl sm:text-2xl md:text-xl lg:text-2xl font-light flex-shrink-0">
                  +
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insights;
