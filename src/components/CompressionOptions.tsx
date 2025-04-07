'use client';

import React from 'react';
import { CompressionOptions } from '@/utils/imageCompression';

interface CompressionOptionsProps {
  options: CompressionOptions;
  setOptions: React.Dispatch<React.SetStateAction<CompressionOptions>>;
  isProcessing: boolean;
}

const CompressionOptions: React.FC<CompressionOptionsProps> = ({ 
  options, 
  setOptions,
  isProcessing 
}) => {
  const handleQualityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quality = parseFloat(e.target.value);
    setOptions(prev => ({ ...prev, quality: quality / 100 }));
  };

  const handleMaxSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const maxSizeMB = parseFloat(e.target.value);
    setOptions(prev => ({ ...prev, maxSizeMB }));
  };

  const handleMaxDimensionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const maxWidthOrHeight = parseInt(e.target.value);
    setOptions(prev => ({ ...prev, maxWidthOrHeight }));
  };

  // Convert quality from 0-1 to 0-100 for the slider
  const qualityPercent = Math.round((options.quality || 0.8) * 100);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Compression Options</h3>
      
      <div className="space-y-5">
        <div>
          <label htmlFor="quality" className="block text-sm font-medium text-gray-700 mb-1">
            Quality: {qualityPercent}%
          </label>
          <input
            id="quality"
            type="range"
            min="10"
            max="100"
            value={qualityPercent}
            onChange={handleQualityChange}
            disabled={isProcessing}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Low</span>
            <span>Medium</span>
            <span>High</span>
          </div>
        </div>

        <div>
          <label htmlFor="maxSize" className="block text-sm font-medium text-gray-700 mb-1">
            Maximum Size
          </label>
          <select
            id="maxSize"
            value={options.maxSizeMB}
            onChange={handleMaxSizeChange}
            disabled={isProcessing}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
          >
            <option value="0.1">100 KB</option>
            <option value="0.25">250 KB</option>
            <option value="0.5">500 KB</option>
            <option value="1">1 MB</option>
            <option value="2">2 MB</option>
            <option value="5">5 MB</option>
            <option value="10">10 MB</option>
          </select>
        </div>

        <div>
          <label htmlFor="maxDimension" className="block text-sm font-medium text-gray-700 mb-1">
            Maximum Dimension
          </label>
          <select
            id="maxDimension"
            value={options.maxWidthOrHeight}
            onChange={handleMaxDimensionChange}
            disabled={isProcessing}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
          >
            <option value="800">800px</option>
            <option value="1280">1280px</option>
            <option value="1920">1920px</option>
            <option value="2560">2560px</option>
            <option value="3840">3840px (4K)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CompressionOptions;