export interface SmartphoneProps {
    children: React.ReactNode;
    time?: string;
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