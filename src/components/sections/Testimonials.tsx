import { motion } from "framer-motion";
import { ArrowUpRight, Quote, Star } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote:
      "Jemaile's ethics and technical vision are exceptional. As Programme and Technical Director, he drives our mission with integrity, delivering innovative solutions that truly empower communities.",
    author: "Chad P",
    role: "CEO",
    company: "DCCSA",
    companyUrl: "https://thedccsa.org/",
  },
  {
    quote:
      "Direct communication, zero fluff. We got a higher quality product faster and cheaper than any agency quote. Highly recommended.",
    author: "Tia O.",
    role: "Owner",
    company: "TastesbyT",
    companyUrl: "https://tastesbyt.co.za/",
  },
  {
    quote:
      "My laptop was completely unresponsive and I thought it was done for. Jemaile diagnosed the issue quickly and got it running like new. Professional, efficient, and affordable.",
    author: "Michael K.",
    role: "Student",
    company: "Repair Client",
    companyUrl: "#",
  },
  {
    quote:
      "Great service for my PS5 repair. Jemaile was knowledgeable, transparent about costs, and the console works perfectly now. Will definitely come back for any future repairs.",
    author: "Sarah L.",
    role: "Gamer",
    company: "Repair Client",
    companyUrl: "#",
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
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 },
};

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-heading">Client Success Stories</span>
          <h2 className="section-title">
            What Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real feedback from clients across repair services, web development,
            and custom application projects. Trusted for quality and direct communication.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass-card p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-primary/20" />
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-primary-foreground font-display font-bold">
                  {testimonial.author[0]}
                </div>
                <div>
                  <div className="font-medium text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role},{" "}
                    <a
                      href={testimonial.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {testimonial.company}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass-card mx-auto mt-10 flex max-w-6xl flex-col items-start justify-between gap-6 p-6 sm:flex-row sm:items-center sm:p-8"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Star className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                Worked with JMdev?
              </h3>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Share an honest review on Google. Your feedback helps others find the right tech support.
              </p>
            </div>
          </div>
          <Button asChild className="btn-glow shrink-0 bg-primary text-primary-foreground hover:bg-primary/90">
            <a
              href="https://g.page/r/CXhxD0qOb3UHEBM/review"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave a Google review
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
