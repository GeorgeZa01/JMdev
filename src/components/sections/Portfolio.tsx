import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const projects = [
  {
    title: "Arize Electronics E-commerce Store",
    problem: "An electronics business needed a secure online store with admin controls.",
    solution: "Developed a full-stack store with JWT-based admin verification and REST API integration.",
    result: "A complete commerce experience backed by Node.js, Express, MySQL, and JavaScript.",
    tags: ["Node.js", "Express.js", "MySQL", "JWT", "REST APIs"],
    liveUrl: "https://arize-e-commerce.vercel.app/",
    image: "https://github.com/GeorgeZa01/Project-Screenshots/blob/main/arize.png?raw=true",
  },
  {
    title: "FaviconMagic Pro",
    problem: "Creating consistent favicon and branding assets can be slow and fragmented.",
    solution: "Built a focused React utility for creating assets with a fast, user-friendly interface.",
    result: "A polished visual tool that turns asset creation into a simpler workflow.",
    tags: ["Vercel", "React", "Frontend UI"],
    liveUrl: "https://favicon-by-jmdev.netlify.app/",
    image: "https://github.com/GeorgeZa01/Project-Screenshots/blob/main/FaviconMagic.png?raw=true",
  },
  {
    title: "Kairo-sKoffee",
    problem: "A coffee brand needed a modern online presence that felt inviting and memorable.",
    solution: "Designed a branded showcase site around product presentation and a welcoming visual identity.",
    result: "A focused digital storefront experience built to make the brand easy to discover.",
    tags: ["Vercel", "React", "Branding", "Landing Page"],
    liveUrl: "https://kairo-s-koffee.vercel.app/",
    image: "https://github.com/GeorgeZa01/Project-Screenshots/blob/main/KAiro'sKoffee-mockup.png?raw=true",
  },
  {
    title: "Tastes By T",
    problem: "A hospitality brand needed a stronger online presentation and customer experience.",
    solution: "Created a branded website that combines visual identity with clear hospitality-focused content.",
    result: "A polished web presence designed to help customers understand and remember the brand.",
    tags: ["Vercel", "Branding", "Hospitality Web Design"],
    liveUrl: "https://www.tastesbyt.co.za/",
    image: "https://www.tastesbyt.co.za/assets/header.png",
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
            A selection of product utilities, branded experiences, and full-stack systems
            built to solve practical problems and make businesses easier to use.
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
                <img src={project.image} alt="" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
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
                <div className="space-y-3 mb-5 text-sm leading-relaxed">
                  <p><span className="font-semibold text-primary">Problem:</span> <span className="text-muted-foreground">{project.problem}</span></p>
                  <p><span className="font-semibold text-primary">Solution:</span> <span className="text-muted-foreground">{project.solution}</span></p>
                  <p><span className="font-semibold text-primary">Result:</span> <span className="text-muted-foreground">{project.result}</span></p>
                </div>
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
                <div className="flex flex-wrap items-center gap-4 mt-6">
                  {project.liveUrl && (
                    <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        View project
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
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
          <p className="text-muted-foreground">
            Selected work across product design, branding, and full-stack delivery.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
