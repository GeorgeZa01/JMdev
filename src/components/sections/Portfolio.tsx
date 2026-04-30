import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const projects = [
  {
    title: "E-Commerce Bakery Platform",
    description:
      "Full-stack web platform for order processing and customer management with real-time inventory tracking and AI-powered recommendations.",
    tags: ["React/TS", "Node.js API", "AI Integration"],
    image: "https://images.unsplash.com/photo-1556742212-5b321f3c261d?w=600&h=400&fit=crop",
  },
  {
    title: "Oracle Apex Warehouse System",
    description:
      "Enterprise warehouse management application with advanced analytics, reporting dashboards, and multi-user access controls.",
    tags: ["Oracle Apex", "Analytics", "Dashboard"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Console Repair & Restoration",
    description:
      "Successful repair and restoration of multiple gaming consoles including PlayStation, Xbox, and Nintendo units with full hardware diagnostics.",
    tags: ["Hardware", "Diagnostics", "Quality Assured"],
    image: "https://images.unsplash.com/photo-1538481143235-c8f36f1f1b75?w=600&h=400&fit=crop",
  },
  {
    title: "PC System Optimization",
    description:
      "Comprehensive system diagnostics, malware removal, and performance optimization for enterprise and personal computers across Windows and Linux.",
    tags: ["Hardware", "Software", "Security"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function Portfolio() {
  return (
    <SectionWrapper id="portfolio" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 gradient-bg opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-heading">Experience & Results</span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hardware repairs, software development, and digital solutions.
            Each project showcases expertise across PC repairs, console restoration,
            and full-stack application development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass-card overflow-hidden group"
            >
              {/* Project Image */}
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View Full Portfolio CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">
            All projects, case studies, and live demonstrations are available at my
            dedicated portfolio site.
          </p>
          {/* <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border hover:bg-secondary"
          >
            <a
              href="https://jemaile-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Portfolio
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button> */}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
