export default function AboutUs() {
  const values = [
    {
      title: "Data-Driven Approach",
      description:
        "Every decision we make is backed by analytics and real user behavior data",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "Customer-Centric",
      description:
        "We focus on delivering value that directly impacts your bottom line",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      title: "Continuous Innovation",
      description:
        "We stay ahead of e-commerce trends to keep your store competitive",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Our Agency
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're a team of Shopify experts passionate about helping e-commerce
            businesses grow through data-driven strategies and innovative
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6">Our Approach</h3>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              We believe in a holistic approach to Shopify development and
              marketing. Our team combines technical expertise with marketing
              knowledge to create solutions that not only look great but also
              convert visitors into customers.
            </p>
            <p className="mb-4">
              Every store is unique, which is why we take the time to understand
              your business, your customers, and your goals before proposing
              solutions. This personalized approach ensures that our strategies
              align perfectly with your vision and objectives.
            </p>
            <p>
              With years of experience in the Shopify ecosystem, we've helped
              numerous stores achieve significant growth through our proven
              methodologies and commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
