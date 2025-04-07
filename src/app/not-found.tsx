import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center py-16">
      <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8">
        The page you are looking for does not exist.
      </p>
      <Link 
        href="/" 
        className="px-4 py-2 bg-primary text-white rounded shadow hover:bg-blue-700 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 
          transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}