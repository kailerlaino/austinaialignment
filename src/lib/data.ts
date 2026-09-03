export interface Fellowship {
  title: string;
  tag: string;
  description: string;
  note: string;
  meta: string[];
  syllabusUrl: string;
}

export const fellowships: Fellowship[] = [
  {
    title: "Technical AI Safety",
    tag: "INTRO FELLOWSHIP",
    description:
      "Introduces the subfields of technical AI safety: alignment, dangerous-capability evaluations, mechanistic interpretability, and AI control. Weekly meetings, then a capstone project of your choosing.",
    note: "Previous ML experience is appreciated but not required.",
    meta: ["WEEKLY · 1 SEMESTER", "CAPSTONE PROJECT"],
    syllabusUrl: "#",
  },
  {
    title: "AI Governance",
    tag: "INTRO FELLOWSHIP",
    description:
      "Introduces AI Policy & Governance. With topics in compute, evaluation & standards regimes, liability, and international coordination etc. This group will have active discussion-led meetings with a final practical policy deliverable.",
    note: "No previous experience required.",
    meta: ["WEEKLY · 1 SEMESTER", "PRACTICAL POLICY DELIVERABLE"],
    syllabusUrl: "#",
  },
];

export interface Organizer {
  name: string;
  role: string;
  photoUrl: string;
  bookingUrl: string;
}

export const organizers: Organizer[] = [
  {
    name: "Aarushi Lakhi",
    role: "PRESIDENT \nTECHNICAL CO-LEAD",
    photoUrl: "/organizers/aarushi-lakhi.jpg",
    bookingUrl: "https://calendly.com/aarushi-lakhi/30min?back=1",
  },
  {
    name: "Kailer Laino",
    role: "TECHNICAL CO-LEAD",
    photoUrl: "/organizers/kailer-laino.jpg",
    bookingUrl: "https://calendar.app.google/WyLChdhGLtXLFDRy7",
  },
  {
    name: "Tarun Dasari",
    role: "OUTREACH LEAD \nGOVERNANCE CO-LEAD",
    photoUrl: "/organizers/tarun-dasari.jpg",
    bookingUrl: "https://cal.com/tarun-dasari-ur7ibb/15min",
  },
  {
    name: "Feifan Liu",
    role: "GOVERNANCE CO-LEAD",
    photoUrl: "/organizers/feifan-liu.jpg",
    bookingUrl: "https://calendly.com/feifan-liu-utexas/30min",
  },
  {
    name: "John Dunbar",
    role: "TECHNICAL CO-LEAD",
    photoUrl: "/organizers/john-dunbar.jpg",
    bookingUrl: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2cQrNL4xHCtaU0PjJO4wwtlFUEiMEcFz0QAg4-1A3N884Eh6hNiDqv5_bfA9SRZVwj1ezALK5a",
  },
];

export const slackInviteUrl = "https://join.slack.com/t/austinaialignment/shared_invite/zt-48uudtl0g-xg8AEDJi5I0jAHU~WcOniw";
