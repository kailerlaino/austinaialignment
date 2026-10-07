export interface GeneralMeeting {
  title: string;
  date: string;
  videoEmbedUrl: string;
  slidesUrl?: string;
}

export const generalMeetings: GeneralMeeting[] = [
  {
    title: "GM 1 — Why AI Safety?",
    date: "September 15, 2026",
    videoEmbedUrl: "https://www.youtube.com/embed/UKlMiBnk7Ug",
    slidesUrl: "/slides/gm1-why-ai-safety.pdf",
  },
  {
    title: "GM 2 — Sampling Safety",
    date: "September 22, 2026",
    videoEmbedUrl: "https://www.youtube.com/embed/xwErQuiwcO0",
    slidesUrl: "/slides/gm2-sampling-safety.pdf",
  },
  {
    title: "GM 3",
    date: "September 29, 2026",
    videoEmbedUrl: "https://www.youtube.com/embed/fBP_F36uPsU",
  },
];

export interface Fellowship {
  title: string;
  tag: string;
  description: string;
  note: string;
  meta: string[];
  syllabusUrl?: string;
}

export const fellowships: Fellowship[] = [
  {
    title: "Technical AI Safety",
    tag: "INTRO FELLOWSHIP",
    description:
      "Introduces the subfields of technical AI safety: alignment, dangerous-capability evaluations, mechanistic interpretability, and AI control. Weekly meetings, then a capstone project of your choosing.",
    note: "Previous ML experience is appreciated but not required.",
    meta: ["WEEKLY · 1 SEMESTER", "CAPSTONE PROJECT"],
    syllabusUrl: "/curriculum",
  },
  {
    title: "AI Governance",
    tag: "INTRO FELLOWSHIP",
    description:
      "Introduces AI Policy & Governance. With topics in compute, evaluation & standards regimes, liability, and international coordination etc. This group will have active discussion-led meetings with a final practical policy deliverable.",
    note: "No previous experience required.",
    meta: ["WEEKLY · 1 SEMESTER", "PRACTICAL POLICY DELIVERABLE"],
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

export interface CurriculumWeek {
  title: string;
  summary: string;
  // Add { label, url } entries as materials go online.
  materials: { label: string; url: string }[];
}

export const curriculum: CurriculumWeek[] = [
  {
    title: "Week 1",
    // TODO: confirm the week title and summary.
    summary:
      "How modern language models work, and why aligning them with what we actually want is hard: specification gaming, reward hacking, and how failures could play out.",
    materials: [
      { label: "3Blue1Brown — Large Language Models explained briefly", url: "https://www.youtube.com/watch?v=LPZh9BOjkQs" },
      { label: "Rational Animations — Specification Gaming: How AI Can Turn Your Wishes Against You", url: "https://www.youtube.com/watch?v=jQOBaGka7O0" },
      { label: "Ajeya Cotra — Why AI Alignment could be hard with modern deep learning", url: "https://www.cold-takes.com/why-ai-alignment-could-be-hard-with-modern-deep-learning/" },
      { label: "METR — Recent Reward Hacking", url: "https://metr.org/blog/2025-06-05-recent-reward-hacking/" },
      { label: "AI In Context — If you remember one AI disaster, make it this one", url: "https://www.youtube.com/watch?v=r_9wkavYt4Y" },
      { label: "Paul Christiano — What Failure Looks Like", url: "https://www.alignmentforum.org/posts/HBxe6wdjxK239zajf/what-failure-looks-like" },
    ],
  },
];
