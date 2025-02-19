import React, { useState } from 'react';
import { Battery, Signal, Wifi } from 'lucide-react';
import "../main.css";
// import { SmartphoneProps } from '../types';

const Smartphone: React.FC = () => {
    // const [time] = useState(() => {
    //     const now = new Date();
    //     return now.toLocaleTimeString('en-US', {
    //         hour: '2-digit',
    //         minute: '2-digit',
    //         hour12: true
    //     });
    // });

    return (
        <div className="relative w-72 h-[576px] bg-white rounded-3xl shadow-xl overflow-hidden border-8 border-black">
            {/* Dynamic Island Notch */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-7 bg-black rounded-full flex items-center justify-center">
                <div className="absolute right-2 w-2 h-2 rounded-full bg-gray-800" />
            </div>

            {/* Status Bar */}
            <div className="relative pt-3 px-6 flex justify-between items-center text-xs">
                <span className="text-black font-medium">12:33</span>
                <div className="flex items-center gap-1">
                    <Signal size={16} />
                    <Wifi size={16} />
                    <Battery size={16} />
                </div>
            </div>

            {/* Content Area */}
            <div className="p-4 mt-4">
                {/* Header */}
                <div className="flex items-center mb-6">
                    <button className="text-gray-600 text-sm">← Info & options</button>
                </div>

                {/* Preview Content
                {activeTab === 'business' ? (
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-2xl">G</span>
                        </div>
                        <div className="text-center">
                            <p className="text-gray-600">string</p>
                            <p className="text-gray-600">string</p>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="flex items-start gap-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <span>G</span>
                            </div>
                            <div className="bg-gray-100 rounded-lg p-3">
                                <p className="text-sm text-gray-600">This is where your agent text lives.</p>
                            </div>
                        </div>
                    </div>
                )} */}
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full" />
        </div>
    );
};

export default Smartphone;