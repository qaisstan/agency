"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do your monthly retainer plans work?",
      answer:
        "Our retainer plans are designed for long-term success. Start with a 14-day trial to experience our expertise firsthand. Both plans include dedicated support, regular optimizations, and transparent reporting. You can upgrade, downgrade, or cancel at any time with 30 days' notice.",
    },
    {
      question: "Do you offer trials for standalone services?",
      answer:
        "While our standalone services don't include trials due to their project-based nature, we offer a free consultation to discuss your needs and provide a detailed scope of work. Our 14-day trial is exclusively available for monthly retainer plans to demonstrate our ongoing value.",
    },
    {
      question: "What makes your agency different?",
      answer:
        "We focus exclusively on Shopify stores and take a data-driven approach to growth. Unlike other agencies, we don't just build – we optimize, test, and iterate based on real user behavior and analytics. Our proven track record shows an average 40% increase in conversion rates for our retainer clients.",
    },
    {
      question: "How quickly can I expect results?",
      answer:
        "While every store is unique, our retainer clients typically see initial improvements within the first month. Significant results often emerge within 2-3 months as we implement and optimize our strategies. We provide detailed monthly reports to track progress and ROI.",
    },
    {
      question: "What happens after I sign up?",
      answer:
        "You'll immediately receive access to our client portal and schedule an onboarding call. We'll conduct a thorough store audit, set up tracking, and create a 90-day optimization roadmap. Our team then begins implementing improvements based on data-driven priorities.",
    },
    {
      question: "What if I need help outside of business hours?",
      answer:
        "Growth Accelerator clients receive priority support with extended hours. For urgent issues, we maintain an emergency contact system. All clients have access to our support portal for non-urgent requests and documentation.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-neutral-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-400">
            Get answers to common questions about our services and process
          </p>
        </div>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-neutral-800/50 rounded-xl overflow-hidden border border-neutral-700/50"
            >
              <button
                className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg text-white">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 transform transition-transform text-neutral-400 ${
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
                className={`px-6 transition-all duration-200 ease-in-out ${
                  openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                } overflow-hidden`}
              >
                <p className="text-neutral-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div id="still-have-questions" className="text-center bg-blue-600 rounded-2xl p-8 mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-blue-100 mb-8">
            Book a free consultation call or send us an email. We're here to
            help you make the right decision for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors"
            >
              Book a Free Call
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="mailto:hello@youragency.com"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors"
            >
              Email Us
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
