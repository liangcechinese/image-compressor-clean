# Image Compressor

A modern web application for compressing and optimizing images while maintaining quality. Perfect for websites, social media, and email attachments.

## Features

- Easy drag-and-drop interface for uploading images
- Advanced compression algorithm that preserves image quality
- Adjustable compression settings (quality, max size, dimensions)
- Side-by-side comparison of original and compressed images
- Download compressed images with a single click
- Supports JPG, PNG, GIF, and WebP formats
- Fully responsive design that works on mobile and desktop

## Tech Stack

- Next.js 14 - React framework for building the UI
- TypeScript - For type safety and better development experience
- Tailwind CSS - For styling the components
- browser-image-compression - Core library for image compression
- React-Dropzone - For drag and drop file uploads
- Sharp - For server-side image processing
- File-Saver - For handling file downloads

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/image-compressor.git
cd image-compressor
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Deployment

The application can be deployed to any hosting platform that supports Next.js applications, such as Vercel, Netlify, or AWS.

### Build for production

```bash
npm run build
# or
yarn build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [browser-image-compression](https://github.com/Donaldcwl/browser-image-compression) for the core compression functionality
- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for the styling system