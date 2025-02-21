export interface SmartphoneProps {
    children: React.ReactNode;
    time?: string;
    size?: 'sm' | 'md' | 'lg';
}

export interface PreviewWrapperProps {
    children: React.ReactNode;
    title?: string;
    actions: React.ReactNode;
}

export interface ToggleOption {
    value: string;
    label: string;
}

export interface PreviewToggleProps {
    options: ToggleOption[];
    value: string;
    onChange: (value: string) => void;
}

export interface InfoScreenProps {
    heroImage: string;
    logoImage: string;
    title: string;
    description: string;
    phoneNumber: string;
    phoneLabel: string;
    callButtonLabel?: string;
    activeTab?: 'info' | 'options';
    onBackClick?: () => void;
    onTabChange?: (tab: 'info' | 'options') => void;
    size?: 'sm' | 'md' | 'lg';
}

export interface iMessageScreenProps {
    children: React.ReactNode;
    logoImage: string;
    title: string;
    onBackClick?: () => void;
    size?: 'sm' | 'md' | 'lg';
}

export interface MessageBubbleProps {
    children: React.ReactNode;
    timestamp?: string;
    status?: 'sent' | 'delivered' | 'read';
}

export interface RichCardMedia {
    url: string;
    type: 'image' | 'video' | 'gif';
    height: 'short' | 'medium' | 'tall';
    aspectRatio?: '2:1' | '16:9' | '7:3';
}

export interface RichCardSuggestions {
    type: 'reply' | 'action';
    text: string;
    actionType?: 'dial' | 'viewLocation' | 'shareLocation' | 'openUrl' | 'createCalendar' | 'composeMessage';
    data?: string;
    icon?: React.ReactNode;
}

export interface RichCardProps {
    title?: string;
    description?: string;
    media?: RichCardMedia;
    layout: 'vertical' | 'horizontal';
    mediaPosition?: 'left' | 'right' | 'top';
    suggestions?: RichCardSuggestions[];
}

export interface RichCardCarouselProps {
    children: React.ReactNode;
    width?: 'small' | 'medium';
    chipSuggestions?: Array<{
        type: 'reply' | 'action';
        text: string;
        actionType?: 'dial' | 'viewLocation' | 'shareLocation' | 'openUrl' | 'createCalendar' | 'composeMessage';
        data?: string;
        icon?: React.ReactNode;
    }>;
}