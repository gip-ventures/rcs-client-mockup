import React from 'react';
import { MessageBubbleProps } from '../types';

const MessageBubble: React.FC<MessageBubbleProps> = ({
    children,
    timestamp,
    status = 'read'
}) => {
    return (
        <div className="flex flex-col items-end">
            <div className="max-w-[70%] bg-green-500 rounded-2xl rounded-tr-sm px-3 py-1.5">
                <div className="text-xs text-white">{children}</div>
            </div>
            <div className="flex items-center mt-0.5 space-x-1">
                {status === 'read' && (
                    <div className="text-[10px] text-gray-500">Read</div>
                )}
                {timestamp && (
                    <div className="text-[10px] text-gray-500">{timestamp}</div>
                )}
            </div>
        </div>
    );
};

export default MessageBubble;