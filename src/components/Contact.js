"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Scheduling meeting..." });

    try {
      const startTime = new Date(
        `${formData.preferredDate}T${formData.preferredTime}`
      );
      const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);

      const response = await fetch("/api/calendar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          summary: `Consultation with ${formData.name}`,
          description: formData.message,
          startTime: startTime.toISOString(),
          endTime: endTime.toISOString(),
          attendeeEmail: formData.email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: `Meeting scheduled! Google Meet link: 
          ${data.meetLink}`,
        });
        setFormData({
          name: "",
          email: "",
          message: "",
          preferredDate: "",
          preferredTime: "",
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "There was an error scheduling the meeting. Please try again.",
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-12 px-6 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          Schedule a Meeting
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Fill in your details to book a consultation. You’ll receive a Google
          Meet link after booking.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="md:flex md:space-x-6">
            <div className="flex-1">
              <label
                htmlFor="preferredDate"
                className="block text-sm font-medium text-gray-700"
              >
                Preferred Date
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="preferredTime"
                className="block text-sm font-medium text-gray-700"
              >
                Preferred Time
              </label>
              <input
                type="time"
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          {status.message && (
            <p
              className={`p-4 rounded-md text-sm ${
                status.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {status.message}
            </p>
          )}
          <button
            type="submit"
            disabled={status.type === "loading"}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all disabled:opacity-50"
          >
            {status.type === "loading" ? "Scheduling..." : "Schedule Meeting"}
          </button>
        </form>
      </div>
    </section>
  );
}
