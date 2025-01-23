"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-6 md:py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Schedule a Meeting</h2>

        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Muso18VEkX645EAFnrNGKPxzS_vFv0Awrd8MpJ6faiphWvytTEtHmLrTnH5np40VZ8cxZTgvS?gv=true"
          style={{ border: "0" }}
          width="100%"
          height="600"
          frameBorder="0"
        ></iframe>
      </div>
    </section>
  );
}
