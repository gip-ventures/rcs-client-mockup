import React from 'react';
import { RichCardProps, RichCardSuggestions } from '../../types';

// Maps for size classes based on media height
const mediaHeightClasses = {
  short: 'h-16', // 112 DP
  medium: 'h-28', // 168 DP
  tall: 'h-36' // 264 DP
};

const RichCard: React.FC<RichCardProps> = ({
  title,
  description,
  media,
  layout = 'vertical',
  mediaPosition = 'top',
  suggestions = []
}) => {
  // Ensure media position is valid for the layout
  if (layout === 'vertical') {
    mediaPosition = 'top';
  }
  
  // Get media height class
  const mediaHeightClass = media ? mediaHeightClasses[media.height || 'medium'] : '';
  
  // Determine if we should render media
  const hasMedia = media && media.url;
  // Check if we have at least one required element (media, title, or description)
  const hasContent = hasMedia || title || description;
  
  if (!hasContent) {
    return null;
  }
  
  // Render horizontal layout
  if (layout === 'horizontal') {
    return (
      <div className="flex rounded-lg overflow-hidden bg-white shadow-sm border border-gray-200 w-4/5">
        {/* Media on the left */}
        {hasMedia && mediaPosition === 'left' && (
          <div className="w-32 flex-shrink-0 bg-gray-100 overflow-hidden">
            {media.type === 'video' ? (
              <video 
                src={media.url} 
                className="w-full h-full object-cover" 
                controls
              />
            ) : (
              <img 
                src={media.url} 
                alt={title || "Rich card media"} 
                className="w-full h-full object-cover"
              />
            )}
          </div>
        )}
        
        {/* Content */}
        <div className="flex-1 p-1 flex flex-col">
          {title && <div className="font-medium text-gray-900 mb-1 text-xs">{title}</div>}
          {description && <div className="text-gray-600 text-[0.7rem] mb-2">{description}</div>}
          
          {/* Suggestions */}
          {suggestions.length > 0 && (
            <div className="mt-auto space-y-2">
              {suggestions.slice(0, 4).map((suggestion, index) => (
                <button
                  key={index}
                  className="w-full text-center px-3 py-1 rounded-full flex items-center text-blue-600 hover:bg-blue-50 text-[0.65rem]"
                >
                  {suggestion.icon && <span className="mr-2">{suggestion.icon}</span>}
                  {suggestion.text}
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Media on the right */}
        {hasMedia && mediaPosition === 'right' && (
          <div className="w-32 flex-shrink-0 bg-gray-100 overflow-hidden">
            {media.type === 'video' ? (
              <video 
                src={media.url} 
                className="w-full h-full object-cover" 
                controls
              />
            ) : (
              <img 
                src={media.url} 
                alt={title || "Rich card media"} 
                className="w-full h-full object-cover"
              />
            )}
          </div>
        )}
      </div>
    );
  }
  
  // Vertical layout
  return (
          <div className="rounded-lg overflow-hidden bg-white shadow-sm border border-gray-200 w-4/5">
      {/* Media at the top for vertical layout */}
      {hasMedia && (
        <div className={`w-full ${mediaHeightClass} bg-gray-100 overflow-hidden`}>
          {media.type === 'video' ? (
            <video 
              src={media.url} 
              className="w-full h-full object-cover" 
              controls
            />
          ) : (
            <img 
              src={media.url} 
              alt={title || "Rich card media"} 
              className="w-full h-full object-cover"
            />
          )}
        </div>
      )}
      
      {/* Content */}
      <div className="p-2">
        {title && <div className="font-medium text-gray-900 mb-1 text-[10px] leading-3">{title}</div>}
        {description && <div className="text-gray-600 text-[9px] leading-3 mb-1">{description}</div>}
        
        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="mt-2">
            {suggestions.slice(0, 4).map((suggestion: RichCardSuggestions, index: number) => (
              <button
                key={index}
                className="w-full px-3 border-b last:border-b-0 border-gray-100 pt-0.5 text-blue-600 hover:bg-blue-50 text-[0.65rem]"
              >
                {suggestion.icon && <div className="mr-2">{suggestion.icon}</div>}
                {suggestion.text}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RichCard;