import React from 'react';
import { Battery, Signal, Wifi } from 'lucide-react';
import { SmartphoneProps } from '../types';

const sizeClasses = {
    sm: {
        container: "w-58 h-116",
        notch: "w-18 h-6",
        camera: "w-1.5 h-1.5",
        statusBar: "pt-3 px-2 text-xs space-x-12",
        icons: "14",
        iconGap: "gap-1.5",
        homeIndicator: "w-24 h-1",
        content: "mt-2"
    },
    md: {
        container: "w-72 h-144",
        notch: "w-24 h-7",
        camera: "w-2 h-2",
        statusBar: "pt-4 px-5 text-xs space-x-20",
        icons: "16",
        iconGap: "gap-1",
        homeIndicator: "w-32 h-1",
        content: "mt-4"
    },
    lg: {
        container: "w-96 h-192",
        notch: "w-32 h-8",
        camera: "w-2.5 h-2.5",
        statusBar: "pt-4 px-4 text-sm space-x-26",
        icons: "18",
        iconGap: "gap-2",
        homeIndicator: "w-40 h-1",
        content: "mt-6"
    }
};

const Smartphone: React.FC<SmartphoneProps> = ({
    children,
    time = "12:33",
    size = "md"
}) => {
    const classes = sizeClasses[size];

    return (
        <div className={`relative ${classes.container} bg-white rounded-3xl shadow-xl overflow-hidden border-8 border-gray-700`}>
            {/* Dynamic Island Notch */}
            <div className={`absolute top-2 left-1/2 transform -translate-x-1/2 ${classes.notch} bg-gray-700 rounded-full flex items-center justify-center`}>
                <div className={`absolute right-2 ${classes.camera} rounded-full bg-gray-800`} />
            </div>

            {/* Status Bar */}
            <div className={`relative ${classes.statusBar} flex justify-between items-center`}>
                <span className="text-black font-medium">{time}</span>
                <div className={`flex items-center ${classes.iconGap}`}>
                    <Signal size={parseInt(classes.icons)} />
                    <Wifi size={parseInt(classes.icons)} />
                    <Battery size={parseInt(classes.icons)} />
                </div>
            </div>

            {/* Content Area */}
            <div className={classes.content}>
                {children}
            </div>

            {/* Home Indicator */}
            <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 ${classes.homeIndicator} bg-gray-700 rounded-full`} />
        </div>
    );
};

export default Smartphone;