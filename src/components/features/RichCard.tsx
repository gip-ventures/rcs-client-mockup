import { RichCardProps, RichCardSuggestions } from '../../types';

// Maps for size classes based on media height
const mediaHeightClasses = {
    short: 'h-16', // 112 DP
    medium: 'h-28', // 168 DP
    tall: 'h-36' // 264 DP
};

const mediaVerticalHeightClasses = {
    short: 'h-24', // 112 DP
    medium: 'h-38', // 168 DP
    tall: 'h-48' // 264 DP
};

/**
 * RichCard component to display a card with media, title, description, and suggestions.
 * 
 * @param {RichCardProps} props - The properties for the RichCard component.
 * @param {string} props.title - The title of the card.
 * @param {string} props.description - The description of the card.
 * @param {RichCardMedia} props.media - The media object containing url and type.
 * @param {string} props.media.url - The URL of the media.
 * @param {string} props.media.type - The type of the media (e.g., 'image', 'video').
 * @param {string} [props.layout='vertical'] - The layout of the card ('vertical' or 'horizontal').
 * @param {string} [props.mediaPosition='top'] - The position of the media ('top', 'left', 'right').
 * @param {RichCardSuggestions[]} [props.suggestions=[]] - The list of suggestions to display.
 * @returns {JSX.Element|null} The rendered RichCard component or null if no content is provided.
 */
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
    const mediaHeightClass =
        media
            ? layout === "vertical"
                ? mediaHeightClasses[media.height || 'medium']
                : mediaVerticalHeightClasses[media.height || "medium"]
            : '';

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
            <div className={`flex rounded-lg overflow-hidden bg-white shadow-sm border border-gray-200 max-w-sm`}>
                {/* Media on the left */}
                {hasMedia && mediaPosition === 'left' && (
                    <div className={`w-22 flex-shrink-0 bg-gray-100 overflow-hidden ${mediaHeightClass}`}>
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
                <div className="flex-1 p-2 flex flex-col">
                    {title && <div className="font-medium text-gray-900 mb-1 text-[10px] leading-3">{title}</div>}
                    {description && <div className="text-gray-600 text-[9px] leading-3">{description}</div>}

                    {/* Suggestions */}
                    {suggestions.length > 0 && (
                        <div className="mt-2">
                            {suggestions.slice(0, 4).map((suggestion: RichCardSuggestions, index: number) => (
                                <button
                                    key={index}
                                    className="w-full px-3 border-b last:border-b-0 border-gray-100 pt-1 text-blue-600 hover:bg-blue-50 text-[0.65rem]"
                                >
                                    {suggestion.icon && <div className="mr-2">{suggestion.icon}</div>}
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
        <div className="rounded-lg overflow-hidden bg-white shadow-sm border border-gray-200 max-w-sm">
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