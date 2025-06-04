import { MessageBubbleProps } from '../../types';

/**
 * MessageBubble component displays a message bubble with a timestamp and status.
 *
 * @component
 * @param {MessageBubbleProps} props - The props for the component.
 * @param {React.ReactNode} props.children - The content of the message bubble.
 * @param {string} [props.timestamp] - The timestamp of the message.
 * @param {string} [props.status] - The status of the message, can ber "read", "delivered", "sent".
 * @returns {JSX.Element} The rendered message bubble component.
 */
const MessageBubble: React.FC<MessageBubbleProps> = ({
    children,
    timestamp,
    status
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