import React from 'react';
import { PreviewWrapperProps } from '../../types';

const PreviewWrapper: React.FC<PreviewWrapperProps> = ({
  children,
  title = 'Preview of your agent',
  actions,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg border border-gray-200 p-6 w-96">
        <div className="text-center text-lg font-medium mb-2">{title}</div>

        {/* Actions section */}
        {actions}

        {/* Smartphone Preview */}
        <div className="flex justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PreviewWrapper;