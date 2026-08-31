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
    bookingUrl: "#",
  },
  {
    name: "Kailer Laino",
    role: "TECHNICAL CO-LEAD",
    photoUrl: "/organizers/kailer-laino.jpg",
    bookingUrl: "#",
  },
];

export const slackInviteUrl = "https://join.slack.com/t/austinaialignment/shared_invite/zt-48uudtl0g-xg8AEDJi5I0jAHU~WcOniw";
