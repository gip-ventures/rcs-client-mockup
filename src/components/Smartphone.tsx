import React from 'react';
import { Battery, Signal, Wifi } from 'lucide-react';
import { SmartphoneProps } from '../types';

const Smartphone: React.FC<SmartphoneProps> = ({
    children,
    time = "12:33" // Default time if not provided
}) => {
    return (
        <div className="relative w-72 h-144 bg-white rounded-3xl shadow-xl overflow-hidden border-8 border-gray-700">
            {/* Dynamic Island Notch */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-7 bg-gray-700 rounded-full flex items-center justify-center">
                <div className="absolute right-2 w-2 h-2 rounded-full bg-gray-800" />
            </div>

            {/* Status Bar */}
            <div className="relative pt-3 px-6 flex justify-between items-center text-xs">
                <span className="text-black font-medium">{time}</span>
                <div className="flex items-center gap-1">
                    <Signal size={16} />
                    <Wifi size={16} />
                    <Battery size={16} />
                </div>
            </div>

            {/* Content Area */}
            <div className="p-4 mt-4">
                {children}
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full" />
        </div>
    );
};

export default Smartphone;