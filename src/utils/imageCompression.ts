import imageCompression from 'browser-image-compression';
import { saveAs } from 'file-saver';

export interface CompressionOptions {
  maxSizeMB: number;
  maxWidthOrHeight?: number;
  useWebWorker?: boolean;
  quality?: number;
}

export interface CompressionResult {
  compressedFile: File;
  originalSize: number;
  compressedSize: number;
  compressionRatio: number;
  originalUrl: string;
  compressedUrl: string;
}

export async function compressImage(
  file: File,
  options: CompressionOptions = { maxSizeMB: 1 }
): Promise<CompressionResult> {
  try {
    const originalSize = file.size / 1024 / 1024; // in MB
    
    const defaultOptions: CompressionOptions = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      quality: 0.8,
    };
    
    const mergedOptions = { ...defaultOptions, ...options };
    
    const compressedFile = await imageCompression(file, mergedOptions);
    const compressedSize = compressedFile.size / 1024 / 1024; // in MB
    
    const originalUrl = await imageCompression.getDataUrlFromFile(file);
    const compressedUrl = await imageCompression.getDataUrlFromFile(compressedFile);

    return {
      compressedFile,
      originalSize,
      compressedSize,
      compressionRatio: (1 - compressedSize / originalSize) * 100,
      originalUrl,
      compressedUrl,
    };
  } catch (error) {
    console.error('Error compressing image:', error);
    throw error;
  }
}

export function downloadCompressedImage(compressedFile: File, originalFileName: string): void {
  try {
    // Preserve original file extension
    const extension = originalFileName.split('.').pop() || 'jpg';
    const fileName = originalFileName.replace(
      /\.[^/.]+$/, 
      `-compressed.${extension}`
    );
    
    saveAs(compressedFile, fileName);
  } catch (error) {
    console.error('Error downloading compressed image:', error);
    throw error;
  }
}