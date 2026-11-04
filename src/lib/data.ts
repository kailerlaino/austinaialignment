export interface GeneralMeeting {
  title: string;
  date: string;
  videoEmbedUrl: string;
  slidesUrl?: string;
}

export const generalMeetings: GeneralMeeting[] = [
  {
    title: "GM 1: Why AI Safety?",
    date: "September 15, 2026",
    videoEmbedUrl: "https://www.youtube.com/embed/UKlMiBnk7Ug",
    slidesUrl: "/slides/gm1-why-ai-safety.pdf",
  },
  {
    title: "GM 2: Sampling Safety",
    date: "September 22, 2026",
    videoEmbedUrl: "https://www.youtube.com/embed/xwErQuiwcO0",
    slidesUrl: "/slides/gm2-sampling-safety.pdf",
  },
  {
    title: "GM 3: Henry Castillo on SAE Pre-conditioning and Approaches to Research",
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
    tag: "Intro fellowship",
    description:
      "Introduces the subfields of technical AI safety: alignment, dangerous-capability evaluations, mechanistic interpretability, and AI control. Weekly meetings, then a capstone project of your choosing.",
    note: "Previous ML experience is appreciated but not required.",
    meta: ["Weekly, one semester", "Capstone project"],
    syllabusUrl: "/curriculum",
  },
  {
    title: "AI Governance",
    tag: "Intro fellowship",
    description:
      "Introduces AI Policy & Governance. With topics in compute, evaluation & standards regimes, liability, and international coordination etc. This group will have active discussion-led meetings with a final practical policy deliverable.",
    note: "No previous experience required.",
    meta: ["Weekly, one semester", "Practical policy deliverable"],
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
    role: "President\nTechnical co-lead",
    photoUrl: "/organizers/aarushi-lakhi.jpg",
    bookingUrl: "https://calendly.com/aarushi-lakhi/30min?back=1",
  },
  {
    name: "Kailer Laino",
    role: "Technical co-lead",
    photoUrl: "/organizers/kailer-laino.jpg",
    bookingUrl: "https://calendar.app.google/WyLChdhGLtXLFDRy7",
  },
  {
    name: "Tarun Dasari",
    role: "Outreach lead\nGovernance co-lead",
    photoUrl: "/organizers/tarun-dasari.jpg",
    bookingUrl: "https://cal.com/tarun-dasari-ur7ibb/15min",
  },
  {
    name: "Feifan Liu",
    role: "Governance co-lead",
    photoUrl: "/organizers/feifan-liu.jpg?v=2",
    bookingUrl: "https://calendly.com/feifan-liu-utexas/30min",
  },
  {
    name: "John Dunbar",
    role: "Technical co-lead",
    photoUrl: "/organizers/john-dunbar.jpg",
    bookingUrl: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2cQrNL4xHCtaU0PjJO4wwtlFUEiMEcFz0QAg4-1A3N884Eh6hNiDqv5_bfA9SRZVwj1ezALK5a",
  },
];

export const slackInviteUrl = "https://join.slack.com/t/austinaialignment/shared_invite/zt-48uudtl0g-xg8AEDJi5I0jAHU~WcOniw";

export const blogUrl = "https://austinaialignment.substack.com/";

export interface CurriculumWeek {
  title: string;
  summary: string;
  // Add { label, url } entries as materials go online.
  materials: { label: string; url: string; time?: string; optional?: boolean; note?: string }[];
}

export const curriculum: CurriculumWeek[] = [
  {
    title: "Week 1",
    // TODO: confirm the week title and summary.
    summary:
      "How modern language models work, and why aligning them with what we actually want is hard: specification gaming, reward hacking, and how failures could play out.",
    materials: [
      { label: "Large Language Models explained briefly (3Blue1Brown)", url: "https://www.youtube.com/watch?v=LPZh9BOjkQs" },
      { label: "Specification Gaming: How AI Can Turn Your Wishes Against You (Rational Animations)", url: "https://www.youtube.com/watch?v=jQOBaGka7O0" },
      { label: "Why AI Alignment could be hard with modern deep learning (Ajeya Cotra)", url: "https://www.cold-takes.com/why-ai-alignment-could-be-hard-with-modern-deep-learning/" },
      { label: "Recent Reward Hacking (METR)", url: "https://metr.org/blog/2025-06-05-recent-reward-hacking/" },
      { label: "If you remember one AI disaster, make it this one (AI In Context)", url: "https://www.youtube.com/watch?v=r_9wkavYt4Y" },
      { label: "What Failure Looks Like (Paul Christiano)", url: "https://www.alignmentforum.org/posts/HBxe6wdjxK239zajf/what-failure-looks-like" },
    ],
  },
  {
    title: "Week 2",
    // TODO: confirm the week title and summary.
    summary:
      "Inner alignment and mesa-optimizers, and Constitutional AI as an approach to training models to follow written principles.",
    materials: [
      { label: "The OTHER AI Alignment Problem: Mesa-Optimizers and Inner Alignment (Robert Miles)", url: "https://www.youtube.com/watch?v=bJLcIBixGj8" },
      { label: "Constitutional AI: Harmlessness from AI Feedback (Anthropic)", url: "https://arxiv.org/html/2212.08073v1" },
    ],
  },
  {
    title: "Week 3",
    // TODO: confirm the week title and summary.
    summary:
      "How models are trained on human feedback, whether that feedback can scale to hard tasks, and evidence of models faking alignment or scheming.",
    materials: [
      { label: "A simple technical explanation of RLH(AI)F", url: "https://kairos.fm/simple-technical-rlhaif/", time: "~12 min" },
      { label: "Can we scale human feedback for complex AI tasks?", url: "https://blog.bluedot.org/p/scalable-oversight-intro", time: "20-25 min" },
      { label: "Alignment faking in large language models", url: "https://www.anthropic.com/research/alignment-faking", time: "15 min" },
      { label: "Detecting and reducing scheming in AI models", url: "https://openai.com/index/detecting-and-reducing-scheming-in-ai-models/", time: "~10-12 min" },
      { label: "Current AIs seem pretty misaligned to me", url: "https://blog.redwoodresearch.org/p/current-ais-seem-pretty-misaligned", optional: true },
      { label: "The anti-scheming paper", url: "https://antischeming.ai", optional: true },
    ],
  },
  {
    title: "Week 4",
    // TODO: confirm the week number, title and summary.
    summary:
      "An introduction to machine learning: neural networks and backpropagation, plus optional background on supervised, self-supervised and reinforcement learning, and transformers.",
    materials: [
      { label: "Neural Networks, Chapters 1–6 (3Blue1Brown)", url: "https://youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&feature=shared", time: "2 hours" },
      { label: "A Short Introduction to Machine Learning (Richard Ngo)", url: "https://www.alignmentforum.org/posts/qE73pqxAZmeACsAdF/a-short-introduction-to-machine-learning", optional: true },
      { label: "Machine Learning for Humans, Part 2.1: Supervised Learning (Maini and Sabri)", url: "https://medium.com/@v_maini/supervised-learning-740383a2feab", optional: true },
      { label: "What Is Self-Supervised Learning? (CodeBasics)", url: "https://youtu.be/sJzuNAisXHA", optional: true },
      { label: "Introduction to Reinforcement Learning (Hado van Hasselt; watch 2:00–1:02:10)", url: "https://www.youtube.com/watch?v=TCCjZe0y4Qc&t=2m0s", time: "60 min", optional: true },
      { label: "The Spelled-Out Intro to Neural Networks and Backpropagation: Building Micrograd (Andrej Karpathy)", url: "https://youtu.be/VMj-3S1tku0", time: "150 min", optional: true },
      { label: "Transformers from Scratch (Brandon Rohrer)", url: "https://e2eml.school/transformers.html", optional: true },
    ],
  },
  {
    title: "Week 5",
    // TODO: confirm the week number, title and summary.
    summary:
      "An introduction to mechanistic interpretability: why understanding the inside of models matters, the circuits and features view of neural networks, superposition, and sparse autoencoders, through to tracing how Claude computes its answers.",
    materials: [
      {
        label: "The Urgency of Interpretability (Amodei)",
        url: "https://www.darioamodei.com/post/the-urgency-of-interpretability",
        note: "The opening; “The Dangers of Ignorance” through its third paragraph; “The Utility of Interpretability”; “What We Can Do” through “tip the scales”; then footnotes 2 and 8.",
      },
      {
        label: "Zoom In: An Introduction to Circuits (Olah et al.)",
        url: "https://distill.pub/2020/circuits/zoom-in/",
        note: "The opening of “Claim 1: Features” through its first paragraph; “Polysemantic Neurons”; the opening statement of “Claim 2: Circuits”; and “Circuit 3: Cars in Superposition”.",
      },
      {
        label: "God Help Us, Let’s Try To Understand AI Monosemanticity (Alexander)",
        url: "https://www.astralcodexten.com/p/god-help-us-lets-try-to-understand",
        note: "From “Inside Every AI Is A Bigger AI, Trying To Get Out” through “God From The Machine”; stop before “I Have Seen The Soul Of The AI”.",
      },
      {
        label: "How might LLMs store facts (3Blue1Brown)",
        url: "https://www.3blue1brown.com/lessons/mlp",
        note: "Written lesson: the “Superposition” and “A Quick Demo” sections, then “Additional Resources”.",
      },
      {
        label: "An Intuitive Explanation of Sparse Autoencoders for LLM Interpretability (Karvonen)",
        url: "https://adamkarvonen.github.io/machine_learning/2024/06/11/sae-intuitions.html",
        note: "From “Challenges with interpretability” through “Challenges with Sparse Autoencoder Evaluations”; skip the code. The matrix-dimension paragraph, the reference-implementation paragraph and the 2024 update are optional.",
      },
      {
        label: "Mapping the Mind of a Large Language Model (Anthropic)",
        url: "https://www.anthropic.com/research/mapping-mind-language-model",
        note: "From “We successfully extracted millions of features” through the Golden Gate Bridge feature; then from “Importantly, we can also manipulate these features” to “There’s much more to be done”. The paragraph on hoped-for uses is optional.",
      },
      {
        label: "Tracing the Thoughts of a Large Language Model (Anthropic)",
        url: "https://www.anthropic.com/research/tracing-thoughts-language-model",
        note: "The opening through “worthy of our trust”; “Does Claude plan its rhymes?”; then “Are Claude’s explanations always faithful?” and “Multi-step reasoning”. The multilingual and mental-math sections are optional.",
      },
    ],
  },
  {
    title: "Week 6",
    // TODO: confirm the week number, title and summary.
    summary:
      "What interpretability can and can’t do for catching deception: the case that it won’t reliably find deceptive AI, a pragmatic research agenda, and recent work on persona vectors, probes, natural language autoencoders and evaluation awareness.",
    materials: [
      {
        label: "Interpretability Will Not Reliably Find Deceptive AI (Nanda)",
        url: "https://www.lesswrong.com/posts/PwnadG4BFjaER3MGf/interpretability-will-not-reliably-find-deceptive-ai",
        note: "From the TL;DR through “The Role of Interpretability”. “High Reliability Seems Unattainable,” the points other than “How to prove a negative” in “Why Won’t Interpretability be Reliable?”, and the black-box section are optional.",
      },
      {
        label: "A Pragmatic Vision for Interpretability (Nanda et al.)",
        url: "https://www.lesswrong.com/posts/StENzDcD3kpfGJssR/a-pragmatic-vision-for-interpretability",
        note: "“Executive Summary” through “Motivating Example: Steering Against Evaluation Awareness”; then “Reflections On The Field’s Progress” through “Case Study: Sparse Autoencoders”.",
      },
      {
        label: "Persona Vectors: Monitoring and Controlling Character Traits in Language Models (Anthropic)",
        url: "https://www.anthropic.com/research/persona-vectors",
        note: "Full post, up to the short conclusion.",
      },
      {
        label: "Difficulties with Evaluating a Deception Detector for AIs (Smith, Chughtai, and Nanda)",
        url: "https://www.lesswrong.com/posts/zmngpxsvGbotFeQca/paper-difficulties-with-evaluating-a-deception-detector-for",
        note: "Alignment Forum summary: the abstract; then from “Several recent works” through Workaround 5, including the three-problems figure.",
      },
      {
        label: "Telling FIBS: Probes Effectively Detect Sabotage and Catch Unverbalized Deception (Hollinsworth et al.)",
        url: "https://arxiv.org/abs/2610.12445",
        note: "Version 3: Abstract and Figure 1 through the opening paragraph of Section 4.4, skipping the passages marked optional in the packet; Section 5.2 from “hidden-goal-organisms” through “Limitations on model organisms”; Section 6 “Limitations” and “Recommendations”.",
      },
      {
        label: "Natural Language Autoencoders: Turning Claude’s Thoughts into Text (Anthropic)",
        url: "https://www.anthropic.com/research/natural-language-autoencoders",
        note: "“What is a natural language autoencoder?” through the end of “Understanding what Claude thinks but doesn’t say”; the first two paragraphs of “The future of NLAs” and their figure. “Discovering hidden motivations” is optional.",
      },
      {
        label: "Steering Evaluation-Aware Language Models to Act Like They Are Deployed (Hua et al.)",
        url: "https://arxiv.org/pdf/2510.20487",
        note: "Figure 1; Section 1 through the paragraph beginning “Our results suggest”; Section 6 “Limitations”.",
      },
    ],
  },
];
