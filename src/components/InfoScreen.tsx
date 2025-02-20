import React from 'react';
import { ChevronLeft, Phone } from 'lucide-react';
import { InfoScreenProps } from '../types';

const sizeClasses = {
  sm: {
    header: {
      padding: 'px-1 py-1.5',
      iconSize: 'w-4 h-4',
      fontSize: 'text-sm'
    },
    logo: {
      size: 'w-12 h-12',
      bottom: '-22px'
    },
    content: {
      titlePadding: 'px-4 pt-8 pb-3',
      titleSize: 'text-sm',
      descSize: 'text-xs',
      buttonPadding: 'px-4 py-1.5',
      buttonIconSize: 'w-4 h-4',
      contentPadding: 'px-3 py-1.5',
      tabPadding: 'py-2',
      iconSize: 'w-4 h-4'
    }
  },
  md: {
    header: {
      padding: 'px-1 py-2',
      iconSize: 'w-5 h-5',
      fontSize: 'text-base'
    },
    logo: {
      size: 'w-16 h-16',
      bottom: '-28px'
    },
    content: {
      titlePadding: 'px-6 pt-12 pb-4',
      titleSize: 'text-base',
      descSize: 'text-sm',
      buttonPadding: 'px-6 py-2',
      buttonIconSize: 'w-5 h-5',
      contentPadding: 'px-4 py-2',
      tabPadding: 'py-3',
      iconSize: 'w-5 h-5'
    }
  },
  lg: {
    header: {
      padding: 'px-2 py-3',
      iconSize: 'w-6 h-6',
      fontSize: 'text-lg'
    },
    logo: {
      size: 'w-20 h-20',
      bottom: '-36px'
    },
    content: {
      titlePadding: 'px-8 pt-16 pb-6',
      titleSize: 'text-lg',
      descSize: 'text-base',
      buttonPadding: 'px-8 py-3',
      buttonIconSize: 'w-6 h-6',
      contentPadding: 'px-6 py-3',
      tabPadding: 'py-4',
      iconSize: 'w-6 h-6'
    }
  }
};

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
  size = 'md'
}) => {
  const classes = sizeClasses[size];

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className={`flex items-center ${classes.header.padding}`}>
        <button
          onClick={onBackClick}
          className="p-1 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft className={`${classes.header.iconSize} text-gray-600`} />
        </button>
        <span className={`ml-4 ${classes.header.fontSize} text-gray-700`}>Info & options</span>
      </div>

      {/* Hero Cover with Overlapping Logo */}
      <div className="relative">
        <div className={`w-full aspect-[1440/448] bg-gray-100 overflow-hidden`}>
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

        <div 
          className="absolute left-1/2 transform -translate-x-1/2" 
          style={{ bottom: classes.logo.bottom }}
        >
          <div className={`${classes.logo.size} rounded-full bg-white border-2 border-white shadow-lg flex items-center justify-center overflow-hidden`}>
            <img
              src={logoImage}
              alt="Logo"
              width={1440}
              height={448}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Title and Description */}
      <div className={`flex flex-col items-center ${classes.content.titlePadding}`}>
        <span className={`${classes.content.titleSize} text-gray-800`}>{title}</span>
        <span className={`${classes.content.descSize} text-gray-500`}>{description}</span>
      </div>

      {/* Call Button */}
      <div className={`flex justify-center ${classes.content.buttonPadding}`}>
        <button className="flex items-center justify-center w-full py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
          <Phone className={`${classes.content.buttonIconSize} mr-2`} />
          <span>{callButtonLabel}</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mt-2">
        <button
          onClick={() => onTabChange?.('info')}
          className={`flex-1 ${classes.content.tabPadding} ${classes.content.descSize} font-medium ${
            activeTab === 'info'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600'
          }`}
        >
          Info
        </button>
        <button
          onClick={() => onTabChange?.('options')}
          className={`flex-1 ${classes.content.tabPadding} ${classes.content.descSize} font-medium ${
            activeTab === 'options'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600'
          }`}
        >
          Options
        </button>
      </div>

      {/* Content */}
      <div className={`flex-1 ${classes.content.contentPadding}`}>
        {activeTab === 'info' ? (
          <div className="flex items-center py-2 border-b border-gray-200 w-full">
            <Phone className={`${classes.content.iconSize} text-gray-600 mr-3`} />
            <div className="flex flex-col">
              <span className={`${classes.content.descSize} text-gray-900`}>{phoneNumber}</span>
              <span className={`text-xs text-gray-500`}>{phoneLabel}</span>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="py-2 border-b border-gray-200 w-full">
              <span className={`${classes.content.descSize} text-gray-900`}>Notifications</span>
            </div>
            <div className="pb-2 border-b border-gray-200 w-full">
              <span className={`${classes.content.descSize} text-gray-900`}>App settings</span>
              <div className="text-xs text-gray-500 uppercase mt-1">Business</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoScreen;