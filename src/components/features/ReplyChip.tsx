import React from 'react';
import { RepliesChipProps } from '../../types';

/**
 * ReplyChip component displays a horizontal list of clickable reply options,
 *
 * @component
 * @param {RepliesChipProps} props - Component props
 * @param {ReplyChipProps[]} props.replies - Array of reply options (each text limited to 25 chars)
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element} The rendered SuggestedReplies component
 */
const ReplyChip: React.FC<RepliesChipProps> = ({
    replies,
}) => {
    if (!replies.length) return null;

    return (
        <div className={`flex flex-row space-x-1 pt-3 overflow-x-auto no-scrollbar`}>
            {replies.map((reply, index) => (
                <button
                    key={`${reply.text}-${index}`}
                    onClick={reply.onClick}
                    className="flex items-center px-4 py-2 rounded-full border border-gray-200 
                             bg-white text-gray-700 hover:bg-gray-50 text-xs whitespace-nowrap"
                >
                    {reply.icon && (
                        <span className="mr-2 flex items-center">
                            {reply.icon}
                        </span>
                    )}
                    <span>
                        {reply.text.length > 25 ? reply.text.substring(0, 25) : reply.text}
                    </span>
                </button>
            ))}
        </div>
    );
};

export default ReplyChip;