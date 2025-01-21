"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes your agency different from others?",
      answer:
        "We stand out through our data-driven approach, specialized Shopify expertise, and proven track record of results. Our team combines technical excellence with marketing expertise to deliver comprehensive solutions that drive real business growth.",
    },
    {
      question: "How does the 14-day free trial work?",
      answer:
        "During your trial period, you'll get full access to our services with no commitment required. We'll work with you to implement initial optimizations and demonstrate the value we can bring to your business. If you're not satisfied, you can cancel anytime during the trial period.",
    },
    {
      question: "What platforms and tools do you use?",
      answer:
        "We primarily work with Shopify and its ecosystem. Our tech stack includes Shopify Plus, Google Analytics 4, Google Tag Manager, and various CRO tools. We also integrate with Stripe for secure payment processing and use Google Workspace for professional communication.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We process all payments securely through Stripe, accepting all major credit cards (Visa, Mastercard, American Express) and digital payment methods. For retainer services, we offer both monthly and annual billing options.",
    },
    {
      question: "Do you offer custom development services?",
      answer:
        "Yes, we provide custom Shopify development services tailored to your specific needs. This includes theme customization, app development, and integration with third-party services. All custom work is thoroughly tested and optimized for performance.",
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Find answers to common questions about our services and process
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${
                  openIndex === index ? "max-h-96 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
