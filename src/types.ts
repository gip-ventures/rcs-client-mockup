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

export enum MediaTypes {
    Image = 'image',
    Video = 'video',
    Gif = 'gif',
}

export enum CardTypes {
    Short = "short",
    Medium = "medium",
    Tall = "tall",
}

export enum AspectRatios {
    Wide = "16:9",
    Panoramic = "2:1",
    Long = "7:3",
}

export interface RichCardMedia {
    url: string;
    type: MediaTypes;
    height: CardTypes;
    aspectRatio?: AspectRatios;
}

export interface RichCardSuggestions {
    text: string;
    icon?: React.ReactNode;
}

export interface RichCardProps {
    title?: string;
    description?: string;
    media?: RichCardMedia;
    layout?: 'vertical' | 'horizontal';
    mediaPosition?: 'left' | 'right' | 'top';
    suggestions?: RichCardSuggestions[];
}

export interface RichCardCarouselProps {
    cards: RichCardProps[];
    width?: 'small' | 'medium';
}