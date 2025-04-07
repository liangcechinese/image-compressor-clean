import ImageCompressor from '@/components/ImageCompressor';

export default function Home() {
  return (
    <div className="container">
      <section className="mb-10 text-center">
        <h2 className="text-3xl font-bold mb-3">Compress Your Images</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Reduce file size while maintaining quality. Perfect for websites, social media, and email attachments.
        </p>
      </section>
      
      <ImageCompressor />
      
      <section className="mt-16">
        <h3 className="text-2xl font-bold mb-6 text-center">Why Compress Images?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-2">Faster Website</h4>
            <p className="text-gray-600">
              Smaller image files load quicker, improving your website performance and SEO ranking.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-2">Save Bandwidth</h4>
            <p className="text-gray-600">
              Reduce data usage for you and your visitors with optimized images.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold mb-2">Quality Preserved</h4>
            <p className="text-gray-600">
              Our advanced algorithms minimize quality loss while maximizing compression.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}