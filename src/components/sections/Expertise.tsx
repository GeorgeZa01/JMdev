import { motion } from "framer-motion";
import { Code2, Layers, Zap, Shield } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const expertiseAreas = [
  {
    icon: Shield,
    title: "PC Repairs & Diagnostics",
    description:
      "Hardware troubleshooting, component repairs, software issues, virus removal, and system optimization for Windows and Linux systems.",
  },
  {
    icon: Zap,
    title: "Console Repairs & Restoration",
    description:
      "Expert repairs for PlayStation, Xbox, and Nintendo consoles. Fixes for hardware failures, disc errors, and performance issues.",
  },
  {
    icon: Code2,
    title: "Web & App Development",
    description:
      "React/Next, Node.js, TypeScript — production-grade web applications and mobile apps with modern frameworks and best practices.",
  },
  {
    icon: Layers,
    title: "Technical Solutions",
    description:
      "End-to-end problem solving from hardware diagnostics to software optimization. Performance tuning, system maintenance, and custom development.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Expertise() {
  return (
    <SectionWrapper id="expertise" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-heading">What We Offer</span>
          <h2 className="section-title">
            Services That <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hardware repairs, software development, and complete technical solutions.
            From fixing your gaming console to building your next web app, I deliver
            reliable, professional service across all platforms.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass-card p-8 hover-lift group"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-6">
            Technologies I work with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "PostgreSQL",
              "Tailwind CSS",
              "Supabase",
              "Vercel",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
