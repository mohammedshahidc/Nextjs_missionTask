'use client';
import React from 'react';
import Image from 'next/image';

// Static array of benefit items
const benefitItems = [
  {
    id: 1,
    title: "Fast turnaround",
    description: "Receive high-quality deliverables in 48 hours from brief to final design.",
    image: "/benefitsimage1.png",
  },
  {
    id: 2,
    title: "Unlimited requests",
    description: "Enjoy unlimited requests with unlimited design revisions. No hidden fees or surprises.",
    image: "/benefitsimage2.png",
  },
  {
    id: 3,
    title: "Always in sync",
    description: "Stay in sync with your creative updates and get real-time progress on all designs.",
    image: "/benefitsimage3.png",
  },
  {
    id: 4,
    title: "Pause or cancel anytime",
    description: "Flexibility in your fingertips. Pause or cancel your subscription at any time.",
    image: "/benefitsimage4.png",
  },
  {
    id: 5,
    title: "Trello task management",
    description: "Organize and track requests with our streamlined Trello-based workflow.",
    image: "/benefitsimage5.png",
  },
  {
    id: 6,
    title: "Worry-free pricing",
    description: "One simple transparent price for top-tier design work. No contracts or surprises.",
    image: "/benefitsimage6.png",
    price: "$1,899",
  },
];

const Benefits = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-6 lg:px-16" id='benefits'>
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium border border-yellow-400/30">
              Portfolio
            </span>
          </div>
          <p className="text-5xl lg:text-5xl font-thin leading-tight">
            Unlock a world of design<br />
            potential with us
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitItems.map((item) => (
            <div
              key={item.id}
              className=" rounded-2xl p-6 backdrop-blur-sm"
            >
              {/* Responsive full-width image */}
              <div className="relative w-full h-48 mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-xl"
                  sizes="100vw"
                />
              </div>

              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>

              {item.price && (
                <div className="mt-4">
                  <span className="text-yellow-400 text-2xl font-bold">{item.price}</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;
