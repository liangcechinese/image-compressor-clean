'use client';

import React from 'react';
import { CompressionResult } from '@/utils/imageCompression';

interface ComparisonViewProps {
  result: CompressionResult | null;
}

const ComparisonView: React.FC<ComparisonViewProps> = ({ result }) => {
  if (!result) return null;

  const formatFileSize = (sizeInMB: number) => {
    if (sizeInMB < 0.1) {
      return `${Math.round(sizeInMB * 1024)} KB`;
    }
    return `${sizeInMB.toFixed(2)} MB`;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">Image Comparison</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-4 p-4">
        <div className="space-y-2">
          <h4 className="font-medium text-center">Original</h4>
          <div className="relative aspect-video bg-gray-100 rounded overflow-hidden">
            <img 
              src={result.originalUrl} 
              alt="Original" 
              className="object-contain w-full h-full"
            />
          </div>
          <div className="text-sm text-center text-gray-600">
            Size: {formatFileSize(result.originalSize)}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium text-center">Compressed</h4>
          <div className="relative aspect-video bg-gray-100 rounded overflow-hidden">
            <img 
              src={result.compressedUrl} 
              alt="Compressed" 
              className="object-contain w-full h-full"
            />
          </div>
          <div className="text-sm text-center text-gray-600">
            Size: {formatFileSize(result.compressedSize)}
          </div>
        </div>
      </div>

      <div className="p-4 bg-gray-50 border-t">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Compression Ratio</span>
          <span className="text-sm font-bold text-green-600">
            {result.compressionRatio.toFixed(2)}% reduction
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div 
            className="bg-green-600 h-2.5 rounded-full" 
            style={{ width: `${Math.min(100, result.compressionRatio)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonView;