export default function CaseStudies() {
  const cases = [
    {
      title: "35% Conversion Rate Increase",
      client: "Premium Fashion Brand",
      description:
        "Implemented advanced CRO strategies and A/B testing to optimize the checkout process and product pages",
      results: [
        "35% increase in conversion rate",
        "28% reduction in cart abandonment",
        "42% increase in average order value",
      ],
      tags: ["CRO", "A/B Testing", "UX Design"],
    },
    {
      title: "2.5x Revenue Growth",
      client: "Health & Wellness Store",
      description:
        "Comprehensive store optimization including performance improvements and marketing analytics implementation",
      results: [
        "150% increase in monthly revenue",
        "89% improvement in page load speed",
        "3x increase in organic traffic",
      ],
      tags: ["Analytics", "Performance", "SEO"],
    },
  ];

  return (
    <section id="case-studies" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Client Success Stories
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Real results from real clients. See how we've helped Shopify stores
          achieve their growth goals.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((study) => (
            <div
              key={study.title}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-8"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                <p className="text-blue-600 font-medium mb-4">{study.client}</p>
                <p className="text-gray-600 mb-6">{study.description}</p>

                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold mb-3">Key Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result) => (
                      <li key={result} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            View More Case Studies
          </button>
        </div>
      </div>
    </section>
  );
}
