import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { RichCardCarouselProps } from '../../types';

const RichCardCarousel: React.FC<RichCardCarouselProps> = ({
  children,
  width = 'medium',
  chipSuggestions = []
}) => {
  // Ref for scrolling
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // No children to display
  if (!React.Children.count(children)) {
    return null;
  }
  
  // Width classes
  const cardWidthClass = width === 'small' ? 'w-30' : 'w-58'; // 120dp or 232dp
  
  // Scroll handlers
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth'
      });
    }
  };
  
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="flex flex-col w-full max-w-full">
      {/* Carousel Container */}
      <div className="relative">
        {/* Left scroll button, only shown when needed */}
        <button 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 rounded-full p-1 shadow-sm"
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          <ChevronLeft size={16} />
        </button>
        
        {/* Scrollable cards container */}
        <div 
          ref={scrollContainerRef}
          className="flex space-x-2 overflow-x-auto no-scrollbar py-2 px-1"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {React.Children.map(children, (child, index) => (
            <div 
              key={index} 
              className={`flex-shrink-0 ${cardWidthClass}`}
              style={{ scrollSnapAlign: 'start' }}
            >
              {child}
            </div>
          ))}
        </div>
        
        {/* Right scroll button, only shown when needed */}
        <button 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 rounded-full p-1 shadow-sm"
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          <ChevronRight size={16} />
        </button>
      </div>
      
      {/* Suggestion Chips */}
      {chipSuggestions.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {chipSuggestions.slice(0, 11).map((suggestion, index) => (
            <button
              key={index}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-xs text-gray-800"
            >
              {suggestion.icon && <div className="mr-2">{suggestion.icon}</div>}
              {suggestion.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default RichCardCarousel;