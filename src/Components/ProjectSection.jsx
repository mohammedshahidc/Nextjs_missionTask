'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import Image from 'next/image';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const ProjectSection = () => {
    return (
        <div className="w-full bg-black text-white px-8 sm:px-12 md:px-20 lg:px-32 py-16">
            <div className="max-w-screen-xl mx-auto space-y-12">

                {/* TOP GRID: Video + Testimonial */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 min-h-[280px]">
                    {/* Video Box */}
                    <div className="lg:col-span-2 bg-[#1a1a1a] rounded-2xl p-2 sm:p-3 shadow-lg flex items-center justify-center">
                        <ReactPlayer
                            url="https://www.youtube.com/shorts/jiqBt7HcLFo?feature=share"
                            width="100%"
                            height="100%"
                            controls
                            className="rounded-lg overflow-hidden"
                        />
                    </div>

                    {/* Testimonial Box */}
                    <div className="lg:col-span-3 bg-[#1a1a1a] rounded-2xl p-8 flex flex-col justify-center shadow-lg text-center relative overflow-hidden">
                        <div className="flex items-center justify-center px-12 relative">
                            <Image
                                src="/quote(1).png"
                                alt="quote left"
                                width={40}
                                height={96}
                                className="w-10 h-24 mr-6 opacity-50 absolute left-0 top-1/2 -translate-y-1/2"
                            />
                            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mx-auto px-6">
                                An absolute professional who consistently delivers exceptional work,
                                even under the most demanding deadlines. I appreciated the insightful
                                feedback and innovative ideas introduced throughout the design process,
                                which greatly enhanced the final product.
                            </p>
                            <Image
                                src="/quote(2).png"
                                alt="quote right"
                                width={40}
                                height={96}
                                className="w-10 h-24 ml-6 opacity-50 absolute right-0 top-1/2 -translate-y-1/2"
                            />
                        </div>
                        <p className="text-sm text-gray-400 mt-6">
                            <strong>Murshid Pulkkada</strong> — Founder @Progbiz
                        </p>
                    </div>
                </div>

                {/* BOTTOM GRID: Title + Description */}
                <div className="grid grid-cols-1 lg:grid-cols-5 bg-[#1a1a1a] rounded-2xl min-h-[240px] shadow-lg overflow-hidden">
                    {/* Left Title */}
                    <div className="lg:col-span-2 p-4 flex items-center">
                        <p className="text-sm sm:text-base md:text-5xl font-thin text-white leading-snug">
                            Your dedicated <br /> in-house design <br /> team
                        </p>
                    </div>

                    {/* Right Description */}
                    <div className="h-full lg:col-span-3 relative p-10 flex flex-col justify-between">
                        <Image
                            src="/quote(2).png"
                            alt="quote"
                            width={40}
                            height={96}
                            className="w-10 h-24 opacity-50 absolute right-5 bottom-0 -translate-y-1/2"
                        />
                        <p className="text-sm sm:text-base md:text-base text-gray-300 leading-relaxed mb-4">
                            We are a global collective of diverse designers and developers,
                            partnering with brands of all scales. What distinguishes us is our
                            dedication to crafting memorable, user-friendly, and captivating
                            experiences — it's what we excel at. The projects we deliver combine
                            creative vision with practical execution, resulting in solutions that
                            are both distinctive and impactful.
                        </p>
                        <div>
                            <p className="text-sm font-medium text-white">Murshid</p>
                            <p className="text-sm text-gray-400">Founder and CEO</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectSection;
