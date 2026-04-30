import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const packages = [
  {
    name: "PC Diagnostics",
    price: "R 200",
    period: "One-time Fee",
    description: "Problem identification and assessment",
    features: [
      "Full System Diagnostics",
      "Performance Analysis",
      "Hardware Status Check",
      "Written Report & Recommendations",
    ],
    popular: false,
  },
  {
    name: "Repair Services",
    price: "R 300+",
    period: "Based on issue",
    description: "Hardware and software repairs",
    features: [
      "PC & Console Repairs",
      "Virus & Malware Removal",
      "Component Replacement",
      "System Optimization",
      "3-Month Warranty on Work",
    ],
    popular: true,
  },
  {
    name: "Web Development",
    price: "R 1,499+",
    period: "Custom projects",
    description: "Websites and web applications",
    features: [
      "Responsive Web Design",
      "Full-Stack Development",
      "Mobile Optimization",
      "SEO & Analytics Setup",
      "Post-Launch Support",
    ],
    popular: false,
  },
  {
    name: "App Development",
    price: "R 2,999 - R 15,000+",
    period: "Full project scope",
    description: "Custom mobile and web applications",
    features: [
      "React/React Native Apps",
      "Backend Development",
      "Database Design",
      "API Integration",
      "Ongoing Maintenance Available",
    ],
    popular: false,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function Pricing() {
  return (
    <SectionWrapper id="pricing" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-heading">Transparent Pricing</span>
          <h2 className="section-title">
            Service <span className="text-gradient">Packages</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Clear pricing with no hidden fees for repairs, web development, and custom applications.
            Choose a package that fits your needs or request a custom quote.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`relative glass-card p-8 flex flex-col ${
                pkg.popular ? "border-primary/50 md:scale-105" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-4 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-display font-bold text-foreground">
                    {pkg.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {pkg.period}
                </p>
              </div>

              <p className="text-muted-foreground mb-6">{pkg.description}</p>

              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full ${
                  pkg.popular
                    ? "btn-glow bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <a href="#contact">Select {pkg.name}</a>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {/* Branding Services */}
          <div className="glass-card p-6">
            <h4 className="text-lg font-display font-semibold text-foreground mb-4">
              Branding Services
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Logo Only", price: "R 899" },
                { name: "Branding Kit", price: "R 1,999" },
                { name: "Full Identity Package", price: "R 3,499" },
              ].map((service, i) => (
                <li key={i} className="flex justify-between items-center">
                  <span className="text-muted-foreground">{service.name}</span>
                  <span className="font-medium text-foreground">
                    {service.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* SEO & Digital Assets */}
          <div className="glass-card p-6">
            <h4 className="text-lg font-display font-semibold text-foreground mb-4">
              SEO & Digital Assets
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Basic SEO Setup", price: "R 1,499" },
                { name: "Monthly SEO", price: "R 999/mo" },
                { name: "Local SEO Boost", price: "R 2,999" },
              ].map((service, i) => (
                <li key={i} className="flex justify-between items-center">
                  <span className="text-muted-foreground">{service.name}</span>
                  <span className="font-medium text-foreground">
                    {service.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
