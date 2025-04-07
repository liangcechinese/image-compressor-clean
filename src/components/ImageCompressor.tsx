'use client';

import React, { useState } from 'react';
import Dropzone from './Dropzone';
import CompressionOptions from './CompressionOptions';
import ComparisonView from './ComparisonView';
import { compressImage, downloadCompressedImage, CompressionOptions as Options, CompressionResult } from '@/utils/imageCompression';

const ImageCompressor: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [compressionResult, setCompressionResult] = useState<CompressionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [options, setOptions] = useState<Options>({
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
    quality: 0.8,
  });

  const handleFileAccepted = async (acceptedFile: File) => {
    setFile(acceptedFile);
    setError(null);
    
    try {
      setIsProcessing(true);
      const result = await compressImage(acceptedFile, options);
      setCompressionResult(result);
    } catch (err) {
      console.error('Compression error:', err);
      setError('Failed to compress image. Please try again with a different image.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!compressionResult || !file) return;
    
    try {
      downloadCompressedImage(compressionResult.compressedFile, file.name);
    } catch (err) {
      console.error('Download error:', err);
      setError('Failed to download image. Please try again.');
    }
  };

  const handleRecompress = async () => {
    if (!file) return;
    
    try {
      setIsProcessing(true);
      setError(null);
      const result = await compressImage(file, options);
      setCompressionResult(result);
    } catch (err) {
      console.error('Recompression error:', err);
      setError('Failed to recompress image. Please try again with different options.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="grid md:grid-cols-8 gap-6">
      <div className="md:col-span-5 space-y-6">
        {!compressionResult ? (
          <Dropzone onFileAccepted={handleFileAccepted} isProcessing={isProcessing} />
        ) : (
          <ComparisonView result={compressionResult} />
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}

        {compressionResult && (
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleDownload}
              disabled={isProcessing}
              className="px-4 py-2 bg-primary text-white rounded shadow hover:bg-blue-700 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 
                transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Download Compressed Image
            </button>

            <button
              onClick={() => {
                setFile(null);
                setCompressionResult(null);
              }}
              disabled={isProcessing}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded shadow hover:bg-gray-300 
                focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 
                transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Upload New Image
            </button>
          </div>
        )}
      </div>

      <div className="md:col-span-3">
        <CompressionOptions 
          options={options} 
          setOptions={setOptions} 
          isProcessing={isProcessing} 
        />

        {compressionResult && (
          <button
            onClick={handleRecompress}
            disabled={isProcessing}
            className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded shadow 
              hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 
              focus:ring-opacity-50 transition-colors disabled:opacity-50 
              disabled:cursor-not-allowed"
          >
            {isProcessing ? 'Processing...' : 'Apply New Settings'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageCompressor;