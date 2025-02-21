import React from 'react';
import RichCard from './RichCard';
import { Layouts, MediaPositions, RichCardCarouselProps } from '../../types';

/**
 * RichCardCarousel component to display multiple RichCards in a horizontal layout.
 * 
 * @component
 * @param {RichCardCarouselProps} props - The props for the component.
 * @param {Array} props.cards - Array of RichCardProps to display in the carousel.
 * @param {'small' | 'medium'} [props.width='medium'] - Width option for cards: 'small' (120 DP) or 'medium' (232 DP).
 * @returns {JSX.Element | null} The rendered RichCardCarousel component or null if no cards are provided.
 */
const RichCardCarousel: React.FC<RichCardCarouselProps> = ({
    cards = [],
    width = 'medium'
}) => {
    // Return null if no cards provided
    if (!cards.length) {
        return null;
    }

    // Width classes based on the width prop
    const widthClass = width === 'small' ? 'w-32' : 'w-60'; // 120dp ~ 32rem, 232dp ~ 60rem

    return (
        <div className="overflow-hidden">
            <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`flex-shrink-0 ${widthClass} snap-start`}
                    >
                        <RichCard
                            {...card}
                            layout={Layouts.Vertical}
                            mediaPosition={MediaPositions.Top}
                        />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default RichCardCarousel;