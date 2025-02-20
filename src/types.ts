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