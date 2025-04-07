export default function Loading() {
  return (
    <div className="container flex flex-col items-center justify-center py-16">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      <p className="mt-4 text-lg text-gray-600">Loading...</p>
    </div>
  );
}