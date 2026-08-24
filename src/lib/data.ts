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
      "Introduces the subfields of technical AI safety: interpretability, dangerous-capability evaluations, robustness, scalable oversight, and alignment theory. Weekly meetings, then a capstone project you design and present.",
    note: "Previous ML experience is appreciated but not required.",
    meta: ["WEEKLY · 1 SEMESTER", "CAPSTONE PROJECT"],
    syllabusUrl: "#",
  },
  {
    title: "AI Governance",
    tag: "INTRO FELLOWSHIP",
    description:
      "Introduces AI governance and policy: compute governance, evaluation and standards regimes, liability, international coordination, and the strategic picture behind them. Discussion-led, with short writing each week.",
    note: "No previous experience required.",
    meta: ["WEEKLY · 1 SEMESTER", "POLICY MEMO"],
    syllabusUrl: "#",
  },
];

export interface Organizer {
  name: string;
  role: string;
  photoUrl?: string;
  bookingUrl: string;
}

export const organizers: Organizer[] = [
  { name: "Name", role: "PRESIDENT", bookingUrl: "#" },
  { name: "Name", role: "CO-PRESIDENT", bookingUrl: "#" },
];

export const slackInviteUrl = "#";
