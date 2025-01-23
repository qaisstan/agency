"use client";

import React, { useEffect } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Navigation from "./Navigation";

export default function Hero() {
  useEffect(() => {
    // Dynamically load Google Calendar's CSS and JS
    const loadGoogleCalendarButton = () => {
      // Load the stylesheet
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://calendar.google.com/calendar/scheduling-button-script.css";
      document.head.appendChild(link);

      // Load the script
      const script = document.createElement("script");
      script.src =
        "https://calendar.google.com/calendar/scheduling-button-script.js";
      script.async = true;
      script.onload = () => {
        // Initialize the button once script is loaded
        const target = document.querySelector(".google-calendar-button");
        if (window.calendar?.schedulingButton && target) {
          window.calendar.schedulingButton.load({
            url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Muso18VEkX645EAFnrNGKPxzS_vFv0Awrd8MpJ6faiphWvytTEtHmLrTnH5np40VZ8cxZTgvS?gv=true",
            color: "#F6BF26", // Customize button color
            label: "Book a call", // Customize button label
            target,
          });
        }
      };
      document.body.appendChild(script);
    };

    loadGoogleCalendarButton();
  }, []);

  return (
    <section className="relative">
      {/* Combined Hero and Nav Container */}
      <div className="h-screen w-full relative flex flex-col bg-neutral-950 antialiased">
        {/* Navigation */}
        <Navigation />

        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-7xl mx-auto p-4 text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600 mb-6">
              More Sales, Less Stress.
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-400 mb-8 max-w-3xl mx-auto">
              Focus on your business while we take care of growing your Shopify
              store with design, development, and CRO you can count on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Your 14-Day Free Trial
              </button>
              {/* Google Appointment Button */}
              <div className="google-calendar-button"></div>
            </div>
          </div>
        </div>

        {/* Background Effect */}
        <BackgroundBeams />
      </div>
    </section>
  );
}
