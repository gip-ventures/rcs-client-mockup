import React from 'react';
import { PreviewToggleProps } from '../../types';

const PreviewToggle: React.FC<PreviewToggleProps> = ({
    options,
    value,
    onChange,
}) => {
    return (
        <div className="flex justify-center border-b border-gray-200 mb-6">
            {options.map((option) => (
                <button
                    key={option.value}
                    onClick={() => onChange(option.value)}
                    className={`px-4 py-2 text-sm font-medium ${value === option.value
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-600 hover:text-gray-800'
                        }`}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
};

export default PreviewToggle;