"use client";
import { useState } from "react";

export default function Services() {
  const retainerPlans = [
    {
      name: "Growth Essentials Plan",
      price: "$1,500",
      description:
        "Perfect for Shopify stores needing ongoing maintenance and steady improvements.",
      features: [
        "Theme maintenance and minor updates",
        "App installations and integrations",
        "Speed and performance optimization",
        "Monthly store backups and security monitoring",
        "Analytics review (GA4, heatmaps)",
        "Basic A/B testing (up to 2 tests/month)",
        "Monthly performance insights",
      ],
    },
    {
      name: "Growth Accelerator Plan",
      price: "$3,000",
      description:
        "Ideal for scaling Shopify stores focused on aggressive growth and optimization.",
      features: [
        "Custom feature development",
        "Advanced theme updates and customizations",
        "Speed optimization and technical SEO",
        "Full priority support (15 hours/month)",
        "In-depth analytics and journey analysis",
        "A/B testing (up to 5 tests/month)",
        "Comprehensive monthly reports",
      ],
      featured: true,
    },
  ];

  const standaloneServices = [
    {
      name: "Store Maintenance",
      description:
        "Keep your store running smoothly with essential updates and monitoring",
      icon: "🛠️",
    },
    {
      name: "Performance Optimization",
      description: "Boost your store's speed and technical performance",
      icon: "⚡",
    },
    {
      name: "Analytics Setup",
      description:
        "Get clear insights with professional analytics configuration",
      icon: "📊",
    },
    {
      name: "A/B Testing",
      description: "Make data-driven decisions with structured testing",
      icon: "🎯",
    },
  ];

  return (
    <section id="services" className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Monthly Retainer Options
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Choose the plan that best fits your growth goals
          </p>
        </div>

        {/* Retainer Plans */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {retainerPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.featured
                  ? "bg-blue-600 border-blue-500"
                  : "bg-neutral-900 border-neutral-800"
              } border-2`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    Recommended
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-neutral-400 mb-4">{plan.description}</p>
                <div className="text-3xl font-bold text-white mb-1">
                  {plan.price}
                  <span className="text-lg text-neutral-400">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className={`w-5 h-5 ${
                        plan.featured ? "text-blue-300" : "text-blue-500"
                      } mr-3 mt-1`}
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
                    <span className="text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-lg font-semibold transition-colors ${
                  plan.featured
                    ? "bg-white text-blue-600 hover:bg-neutral-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Standalone Services */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Standalone Services
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {standaloneServices.map((service) => (
              <div
                key={service.name}
                className="bg-neutral-900 rounded-xl p-6 hover:bg-neutral-800 transition-colors"
              >
                <span className="text-3xl mb-4 block">{service.icon}</span>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {service.name}
                </h4>
                <p className="text-neutral-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
