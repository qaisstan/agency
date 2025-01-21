export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:pt-32 sm:pb-24">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Empowering Shopify Stores to Achieve Their Full Potential
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Expert Shopify Development, Marketing Analytics, and CRO Services
          Tailored to Your Growth
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Start Your 14-Day Free Trial
          </button>
          <button className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors">
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
