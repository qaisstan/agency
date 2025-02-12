"use client";
import { useEffect, useRef } from "react";

export default function CalendarButton() {
  const calendarRef = useRef(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;
    scriptLoaded.current = true;

    const script = document.createElement("script");
    script.src =
      "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;
    script.onload = () => {
      if (window.calendar?.schedulingButton && calendarRef.current) {
        window.calendar.schedulingButton.load({
          url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Muso18VEkX645EAFnrNGKPxzS_vFv0Awrd8MpJ6faiphWvytTEtHmLrTnH5np40VZ8cxZTgvS?gv=true",
          color: "#F6BF26",
          label: "Book a Call",
          target: calendarRef.current
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return <div ref={calendarRef} className="google-calendar-button"></div>;
} 