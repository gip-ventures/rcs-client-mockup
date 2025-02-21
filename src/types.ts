export enum Sizes {
    Small = 'sm',
    Medium = 'md',
    Large = 'lg',
}

export interface SmartphoneProps {
    children: React.ReactNode;
    time?: string;
    size?: Sizes;
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

export enum Tabs {
    Info = 'info',
    Options = 'options',
}

export interface InfoScreenProps {
    heroImage: string;
    logoImage: string;
    title: string;
    description: string;
    phoneNumber: string;
    phoneLabel: string;
    callButtonLabel?: string;
    activeTab?: Tabs;
    onBackClick?: () => void;
    onTabChange?: (tab: Tabs) => void;
    size?: Sizes;
}

export interface iMessageScreenProps {
    children: React.ReactNode;
    logoImage: string;
    title: string;
    onBackClick?: () => void;
    size?: Sizes;
}

export enum Statuses {
    Sent = 'sent',
    Delivered = 'delivered',
    Read = 'read',
}

export interface MessageBubbleProps {
    children: React.ReactNode;
    timestamp?: string;
    status?: Statuses;
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

export enum Layouts {
    Vertical = 'vertical',
    Horizontal = 'horizontal',
}

export enum MediaPositions {
    Left = 'left',
    Right = 'right',
    Top = 'top',
}

export interface RichCardProps {
    title?: string;
    description?: string;
    media?: RichCardMedia;
    layout?: Layouts;
    mediaPosition?: MediaPositions;
    suggestions?: RichCardSuggestions[];
}

export enum Widths {
    Small = 'small',
    Medium = 'medium',
}

export interface RichCardCarouselProps {
    cards: RichCardProps[];
    width?: Widths;
}