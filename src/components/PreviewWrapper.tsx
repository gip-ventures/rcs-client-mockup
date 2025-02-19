import React, { useState } from 'react';
import { PreviewWrapperProps, SmartphoneProps } from '../types';

const PreviewWrapper: React.FC<PreviewWrapperProps> = ({ children }) => {
    // const [activeTab, setActiveTab] = useState('business');

    const activeTab = 'business';
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white rounded-lg border border-gray-200 p-6 w-96">
          <h2 className="text-center text-lg font-medium mb-4">Preview of your agent</h2>
  
          {/* View Tabs */}
          <div className="flex justify-center border-b border-gray-200 mb-6">
            <button
              onClick={() => console.log('business')}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'business'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Business info
            </button>
            {/* <button
              onClick={() => console.log('conversation')}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === 'conversation'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Conversation
            </button> */}
          </div>
  
          {/* Smartphone Preview */}
          <div className="flex justify-center">
            {/* <Smartphone activeTab={activeTab} /> */}
            {/* {React.cloneElement(children as React.ReactElement<SmartphoneProps>, { activeTab })} */}
            {children}
          </div>
        </div>
      </div>
    );
  };
  
  export default PreviewWrapper;
  
  