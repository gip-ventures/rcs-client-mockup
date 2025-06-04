import { ChevronLeft } from 'lucide-react';
import { iMessageScreenProps, Sizes } from '../../types';

const sizeClasses = {
    sm: {
        header: {
            padding: 'p-1.5',
            avatar: 'w-7 h-7',
            title: 'text-[10px]',
            chevron: 'w-6 h-6',
        },
        content: {
            padding: 'px-2 py-1',
        },
        input: {
            padding: 'p-1.5',
            height: 'h-8',
        }
    },
    md: {
        header: {
            padding: 'p-2',
            avatar: 'w-6 h-6',
            title: 'text-[11px]',
            chevron: 'w-4 h-4',
        },
        content: {
            padding: 'px-3 py-2',
        },
        input: {
            padding: 'p-2',
            height: 'h-10',
        }
    },
    lg: {
        header: {
            padding: 'p-3',
            avatar: 'w-8 h-8',
            title: 'text-xs',
            chevron: 'w-5 h-5',
        },
        content: {
            padding: 'px-4 py-3',
        },
        input: {
            padding: 'p-3',
            height: 'h-12',
        }
    }
};

/**
 * iMessageScreen component renders a messaging screen with a header, content area, and input area.
 *
 * @component
 * @param {iMessageScreenProps} props - The props object.
 * @param {React.ReactNode} props.children - The content to be displayed in the message screen.
 * @param {string} props.logoImage - The URL of the logo image to be displayed in the header.
 * @param {string} props.title - The title to be displayed in the header.
 * @param {function} props.onBackClick - The function to be called when the back button is clicked.
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - The size of the message screen, which determines the padding and dimensions of various elements.
 * @returns {JSX.Element} The rendered iMessageScreen component.
 */
const iMessageScreen: React.FC<iMessageScreenProps> = ({
    children,
    logoImage,
    title,
    onBackClick,
    size = Sizes.Medium
}) => {
    const classes = sizeClasses[size];

    return (
        <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className={`flex items-start border-b border-gray-200 ${classes.header.padding}`}>
                <button
                    onClick={onBackClick}
                    className="hover:bg-gray-100 rounded-full mt-0.5"
                >
                    <ChevronLeft className={`${classes.header.chevron} text-blue-500`} />
                </button>

                <div className="flex-1 flex flex-col items-center">
                    <div className={`${classes.header.avatar} rounded-full overflow-hidden`}>
                        <img
                            src={logoImage}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="mt-1">
                        <div className={`${classes.header.title}`}>{title}</div>
                    </div>
                </div>
                {/* Empty div to balance the layout */}
                <div className={`${classes.header.chevron} invisible`}>
                    <ChevronLeft />
                </div>
            </div>

            {/* Messages Content */}
            <div className={`flex-1 overflow-y-auto bg-gray-100 ${classes.content.padding}`}>
                <div className="text-center mb-4">
                    <div className="text-[8px] h-3 text-gray-500">Text Message • RCS</div>
                    <div className="text-[8px] h-3 text-gray-500">Today 9:38 AM</div>
                </div>
                <div className="w-full ">
                    {children}
                </div>
            </div>

            {/* Input Area */}
            <div className={`border-t border-gray-200 ${classes.input.padding}`}>
                <div className="flex items-center">
                    <button className="p-1 rounded-full hover:bg-gray-200">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                    <div className="flex-1 mx-2">
                        <div className="bg-white border border-gray-300 rounded-full px-3 py-1 text-[11px] text-gray-400">
                            Text Message
                        </div>
                    </div>
                    <button className="p-1">
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default iMessageScreen;