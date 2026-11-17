export type ServiceDetails = {
  path: string;
  title: string;
  titleAccent: string;
  description: string;
  intro: string;
  price?: string;
  featuresTitle: string;
  features: string[];
  process: string[];
  serviceType: string;
};

export const servicePages: Record<"console" | "computer" | "websites", ServiceDetails> = {
  console: {
    path: "/console-repairs-cape-town",
    title: "PS4 & PS5 Repairs in",
    titleAccent: "Cape Town",
    description:
      "Need PS4 or PS5 repairs in Cape Town? JMdev diagnoses console faults, explains the repair options, and tests your console before it comes back to you.",
    intro:
      "When your PlayStation stops working properly, get a clear diagnosis before deciding what to do next. JMdev provides hands-on PS4 and PS5 repair support for Cape Town gamers.",
    featuresTitle: "PlayStation faults we can assess",
    features: [
      "Console hardware faults and startup problems",
      "Disc reading errors",
      "Performance issues and unexpected shutdowns",
      "PS4 and PS5 diagnostics with repair options explained before work begins",
    ],
    process: [
      "Tell us your PlayStation model and what is happening.",
      "We assess the fault and explain the recommended repair and cost.",
      "Once approved, the repair is completed and tested.",
    ],
    serviceType: "PlayStation console repair",
  },
  computer: {
    path: "/laptop-pc-repairs-cape-town",
    title: "Laptop & PC Repairs in",
    titleAccent: "Cape Town",
    description:
      "Laptop and PC repairs in Cape Town for hardware faults, software issues, viruses, and slow systems. Get a clear diagnosis and repair quote from JMdev.",
    intro:
      "Whether your laptop is running slowly or your desktop will not start, JMdev can help identify the cause and talk you through practical repair options.",
    price: "Diagnostics: R200, waived when you proceed with the repair. Repairs from R300, depending on the issue.",
    featuresTitle: "Laptop and computer support",
    features: [
      "Hardware troubleshooting and component repairs",
      "Windows and Linux software issues",
      "Virus and malware removal",
      "System performance analysis and optimization",
    ],
    process: [
      "Describe your device, symptoms, and anything you have already tried.",
      "We run diagnostics and share the findings and quote.",
      "After approval, the repair is completed and tested.",
    ],
    serviceType: "Laptop and PC repair",
  },
  websites: {
    path: "/small-business-websites-cape-town",
    title: "Small Business Website Design in",
    titleAccent: "Cape Town",
    description:
      "Get a professional, mobile-friendly website for your Cape Town small business. JMdev builds custom websites with clear pricing and SEO setup.",
    intro:
      "A good business website makes it easier for customers to understand what you offer and get in touch. JMdev builds responsive websites tailored to your small business and its goals.",
    price: "Website development starts at R1,499. Final pricing depends on the scope of your project.",
    featuresTitle: "A website built for your business",
    features: [
      "Responsive design for mobile, tablet, and desktop",
      "Clear service information and contact paths",
      "SEO and analytics setup options",
      "Post-launch support and custom functionality when needed",
    ],
    process: [
      "Share your business, audience, goals, and must-have features.",
      "Review a project scope and quote before development starts.",
      "Work together through design, build, and launch.",
    ],
    serviceType: "Small business website design",
  },
};
