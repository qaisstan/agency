"use client";
import { useState } from "react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("retainer");

  const retainerPlans = [
    {
      name: "Basic Growth Plan",
      price: "$997",
      features: [
        "Shopify Store Maintenance",
        "Basic Analytics Setup",
        "Minor Optimizations",
        "Monthly Performance Report",
        "Email Support",
      ],
      trial: true,
    },
    {
      name: "Advanced Optimization Plan",
      price: "$2,497",
      features: [
        "Comprehensive CRO",
        "Advanced Analytics",
        "A/B Testing",
        "Custom Shopify Development",
        "Weekly Strategy Calls",
        "Priority Support",
      ],
      trial: true,
    },
  ];

  const standaloneServices = [
    {
      name: "Shopify Store Setup",
      price: "$4,997",
      description:
        "Complete store setup including theme customization, product upload, and payment integration",
      deliverables: [
        "Custom Theme Setup",
        "Product Configuration",
        "Payment Gateway Integration",
        "Basic SEO Setup",
      ],
    },
    {
      name: "CRO Audit",
      price: "$1,997",
      description:
        "Comprehensive analysis of your store's conversion funnel with actionable recommendations",
      deliverables: [
        "Heatmap Analysis",
        "User Journey Mapping",
        "Conversion Funnel Analysis",
        "Detailed Recommendations",
      ],
    },
    {
      name: "Marketing Analytics Setup",
      price: "$1,497",
      description:
        "Professional setup of your analytics stack for data-driven decisions",
      deliverables: [
        "GA4 Configuration",
        "Google Tag Manager Setup",
        "Custom Event Tracking",
        "Dashboard Creation",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Services Tailored to Your Growth
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 p-1">
            <button
              onClick={() => setActiveTab("retainer")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === "retainer"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Retainer Plans
            </button>
            <button
              onClick={() => setActiveTab("standalone")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                activeTab === "standalone"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Standalone Services
            </button>
          </div>
        </div>

        {/* Retainer Plans */}
        <div className={activeTab === "retainer" ? "block" : "hidden"}>
          <div className="grid md:grid-cols-2 gap-8">
            {retainerPlans.map((plan) => (
              <div
                key={plan.name}
                className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-6">
                  {plan.price}
                  <span className="text-base font-normal text-gray-600">
                    /month
                  </span>
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
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
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start 14-Day Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Standalone Services */}
        <div className={activeTab === "standalone" ? "block" : "hidden"}>
          <div className="grid md:grid-cols-3 gap-8">
            {standaloneServices.map((service) => (
              <div
                key={service.name}
                className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-3xl font-bold mb-4">{service.price}</p>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-blue-500 mr-2"
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
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
