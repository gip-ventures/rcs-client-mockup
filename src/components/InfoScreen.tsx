import React from 'react';
import { ChevronLeft, Phone } from 'lucide-react';
import { InfoScreenProps } from '../types';

const InfoScreen: React.FC<InfoScreenProps> = ({
  heroImage,
  logoImage,
  title,
  description,
  phoneNumber,
  phoneLabel,
  callButtonLabel = 'Call',
  activeTab = 'info',
  onBackClick,
  onTabChange,
}) => {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center px-1 py-2">
        <button
          onClick={onBackClick}
          className="p-1 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <span className="ml-4 text-base text-gray-700">Info & options</span>
      </div>

      {/* Hero Cover with Overlapping Logo */}
      <div className="relative">
        {/* Hero Image Container */}
        <div className="w-full aspect-[1440/448] bg-gray-100 overflow-hidden">
          {heroImage && (
            <img
              src={heroImage}
              alt="Cover"
              width={1440}
              height={448}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Logo Section - Overlapping */}
        <div className="absolute left-1/2 transform -translate-x-1/2" style={{ bottom: '-28px' }}>
          {/* Circle container for logo with white border */}
          <div className="w-16 h-16 rounded-full bg-white border-2 border-white shadow-lg flex items-center justify-center overflow-hidden">
            <img
              src={logoImage}
              alt="Logo"
              width={224}
              height={224}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Title and Description */}
      <div className="flex flex-col items-center px-6 pt-12 pb-4">
        <span className="text-base text-gray-800">{title}</span>
        <span className="text-sm text-gray-500">{description}</span>
      </div>

      {/* Call Button */}
      <div className="flex justify-center px-6 py-2">
        <button className="flex items-center justify-center w-full py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
          <Phone className="w-5 h-5 mr-2" />
          <span>{callButtonLabel}</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mt-2">
        <button
          onClick={() => onTabChange?.('info')}
          className={`flex-1 py-3 text-sm font-medium ${activeTab === 'info'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600'
            }`}
        >
          Info
        </button>
        <button
          onClick={() => onTabChange?.('options')}
          className={`flex-1 py-3 text-sm font-medium ${activeTab === 'options'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600'
            }`}
        >
          Options
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-2">
        {activeTab === 'info' ? (
          <div className="flex items-center py-2 border-b border-gray-200 w-full">
            <Phone className="w-5 h-5 text-gray-600 mr-3" />
            <div className="flex flex-col">
              <span className="text-sm text-gray-900">{phoneNumber}</span>
              <span className="text-xs text-gray-500">{phoneLabel}</span>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="py-2 border-b border-gray-200 w-full">
              <span className="text-sm text-gray-900">Notifications</span>
            </div>
            <div className="py-2 border-b border-gray-200 w-full">
              <span className="text-sm text-gray-900">App settings</span>
              <div className="text-xs text-gray-500 uppercase mt-1">Business</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoScreen;