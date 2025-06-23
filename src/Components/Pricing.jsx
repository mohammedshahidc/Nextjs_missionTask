import React from 'react';

const Pricing = () => {
    return (
        <div className="min-h-screen bg-black text-white px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-20" id='pricing'>
            <div className="text-center mb-16">
                <div className="mb-6">
                    <span className="inline-block px-6 py-2.5 bg-gradient-to-r bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 text-sm font-medium rounded-full">
                        Pricing
                    </span>
                </div>
                <p className="text-5xl font-thin leading-tight max-w-4xl mx-auto">
                    Choose the relevant plan to build,
                    <br />
                    grow and fasten your team
                </p>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Standard Plan */}
                    <div className="bg-[#141414] border border-[#2a2a2a] rounded-2xl p-8 flex flex-col justify-between min-h-[580px]">
                        <div>
                            <h3 className="text-gray-400 text-base font-medium mb-4">STANDARD</h3>
                            <div className="flex items-baseline mb-2">
                                <span className="text-4xl font-light">$2,150</span>
                                <span className="text-gray-400 text-sm ml-1">/month</span>
                            </div>
                            <p className="text-gray-400 text-sm underline mb-6">One request at a time</p>
                            <h4 className="text-gray-300 text-sm mb-4">What's included:</h4>
                            <ul className="space-y-3 text-base text-gray-300">
                                <li className="flex items-start"><span className="text-yellow-400 mr-3">✓</span>~48 hour delivery</li>
                                <li className="flex items-start"><span className="text-yellow-400 mr-3">✓</span>Unlimited requests</li>
                                <li className="flex items-start"><span className="text-yellow-400 mr-3">✓</span>Unlimited brands</li>
                                <li className="flex items-start"><span className="text-yellow-400 mr-3">✓</span>Weekly meetings</li>
                                <li className="flex items-start"><span className="text-yellow-400 mr-3">✓</span>Pause or cancel anytime</li>
                                <li className="flex items-start"><span className="text-yellow-400 mr-3">✓</span>Managed via Slack and Trello</li>
                                <li className="flex items-start"><span className="text-yellow-400 mr-3">✓</span>All services except Webflow</li>
                            </ul>
                        </div>
                        <div className="mt-8 space-y-3">
                            <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium py-4 rounded-lg hover:from-yellow-400 hover:to-yellow-300 transition-all">
                                Subscribe →
                            </button>
                            <button className="w-full border border-gray-600 text-gray-300 font-medium py-4 rounded-lg hover:bg-gray-800 transition-all">
                                Book a demo
                            </button>
                        </div>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-[#141414] border border-[#2a2a2a] rounded-2xl p-8 pt-6 flex flex-col justify-between min-h-[580px] relative">
                        <div className="absolute top-4 right-4">
                            <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black text-xs font-medium px-3 py-1 rounded-full">
                                Faster ⚡
                            </span>
                        </div>
                        <div>
                            <h3 className="text-gray-400 text-base font-medium mb-4">PRO</h3>
                            <div className="flex items-baseline mb-2">
                                <span className="text-4xl font-light">$3,150</span>
                                <span className="text-gray-400 text-sm ml-1">/month</span>
                            </div>
                            <p className="text-gray-400 text-sm underline mb-6">Double the requests</p>
                            <h4 className="text-gray-300 text-sm mb-4">What's included:</h4>
                            <ul className="space-y-3 text-base text-gray-300">
                                <li className="flex items-start"><span className="text-yellow-400 mr-3">✓</span>Unlimited requests</li>
                                <li className="flex items-start"><span className="text-yellow-400 mr-3">✓</span>~48 hour delivery</li>
                                <li className="flex items-start"><span className="text-yellow-400 mr-3">✓</span>Unlimited brands</li>
                                <li className="flex items-start"><span className="text-yellow-400 mr-3">✓</span>Weekly meetings</li>
                                <li className="flex items-start"><span className="text-yellow-400 mr-3">✓</span>Pause or cancel anytime</li>
                                <li className="flex items-start"><span className="text-yellow-400 mr-3">✓</span>Managed via Slack and Trello</li>
                                <li className="flex items-start"><span className="text-yellow-400 mr-3">✓</span>All services and Webflow</li>
                            </ul>
                        </div>
                        <div className="mt-8 space-y-3">
                            <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-black font-medium py-4 rounded-lg hover:from-yellow-400 hover:to-yellow-300 transition-all">
                                Subscribe →
                            </button>
                            <button className="w-full border border-gray-600 text-gray-300 font-medium py-4 rounded-lg hover:bg-gray-800 transition-all">
                                Book a demo
                            </button>
                        </div>
                    </div>

                    {/* Project-Based Plan */}
                    <div className="flex flex-col justify-between min-h-[580px]">
                        <div className="bg-[#141414] border border-[#2a2a2a] rounded-2xl p-8 mb-6 flex flex-col h-full justify-between">
                            <div>
                                <h3 className="text-gray-400 text-base font-medium mb-4">PROJECT-BASED</h3>
                                <p className="text-gray-300 text-base mb-6">For a custom fee delivered in milestones. Ideal for specific goals.</p>
                                <h4 className="text-gray-300 text-sm mb-4">What's included:</h4>
                                <ul className="space-y-3 text-base text-gray-300">
                                    <li className="flex items-start"><span className="text-yellow-400 mr-3">✓</span>Fixed scope of work</li>
                                    <li className="flex items-start"><span className="text-yellow-400 mr-3">✓</span>Delivered in milestones</li>
                                </ul>
                            </div>
                            <button className="w-full border border-gray-600 text-gray-300 font-medium py-4 rounded-lg hover:bg-gray-800 transition-all mt-8">
                                Send email
                            </button>
                        </div>

                        <div className="bg-[#141414] border border-[#2a2a2a] p-6 rounded-2xl pt-6">
                            <p className="text-white text-4xl font-light mb-2">Refer & earn</p>
                            <p className="text-gray-400 text-xl mb-4">Receive $150 for each referral!</p>
                            <button className="w-full border border-[#2a2a2a] text-gray-300 font-medium py-4 rounded-lg hover:bg-gray-800 transition-all">
                                Join now
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Pricing;
