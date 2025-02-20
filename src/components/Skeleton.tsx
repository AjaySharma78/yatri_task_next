import React from 'react';

export const Skeleton: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md flex flex-col w-full animate-pulse">
      <div className="w-full h-52 bg-gray-700 rounded-md"></div>
      <div className="flex justify-between items-center p-2 h-20">
        <div className="flex flex-col items-start w-4/5 h-full px-2">
          <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-700 rounded w-full mb-1"></div>
          <div className="h-3 bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
};