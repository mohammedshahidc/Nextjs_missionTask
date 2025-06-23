'use client'
import React ,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Howitworks = () => {
    useEffect(() => {
        AOS.init({
          duration: 800, 
          once: false     
        });
      }, []);
    
  const steps = [
    {
      number: "1",
      title: "Subscribe to a plan",
      description: "Select a plan that fits your needs and jump on a onboarding call."
    },
    {
      number: "2",
      title: "Add a task",
      description: "List your first task on our shared Trello board by specifying the requirements."
    },
    {
      number: "3",
      title: "Enjoy results",
      description: "Receive your completed tasks in 2-4 business days."
    }
  ];

  return (
    <div className="w-full bg-black text-white py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-[#141414] text-[#FFBE0D] px-5 py-4 border-2 rounded-full border-[#3e351e] text-sm font-medium">
              How it works?
            </span>
          </div>

          <p className="text-4xl sm:text-5xl lg:text-6xl font-thin  leading-tight mb-4">
            Pay and get started
            <br />
            <span className="block">the same day</span>
          </p>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            No unnecessary bureaucracy. We focus on getting your ideas and problems solved.
          </p>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-[#141414] border border-[#2a2a2a] rounded-3xl p-8 hover:bg-[#1c1c1c] transition duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#141414] text-[#FFBE0D] border-2 rounded-full border-[#3e351e] flex items-center justify-center text-lg font-semibold">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3">{step.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
