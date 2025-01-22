import { google } from "googleapis";

export async function POST(req) {
  try {
    const { summary, description, startTime, endTime, attendeeEmail } =
      await req.json();

    const auth = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_CREDENTIALS_PATH, // Path to your service account JSON file
      scopes: ["https://www.googleapis.com/auth/calendar.events"],
    });

    const calendar = google.calendar({ version: "v3", auth });

    const event = {
      summary,
      description,
      start: { dateTime: startTime, timeZone: "UTC" },
      end: { dateTime: endTime, timeZone: "UTC" },
      attendees: [{ email: attendeeEmail }],
      conferenceData: {
        createRequest: {
          requestId: `meeting-${Date.now()}`,
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
    };

    const response = await calendar.events.insert({
      calendarId: process.env.CALENDAR_ID, // Your calendar ID
      conferenceDataVersion: 1,
      resource: event,
    });

    return NextResponse.json({
      success: true,
      meetLink: response.data.hangoutLink,
      eventId: response.data.id,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
