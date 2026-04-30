import { motion } from "framer-motion";
import { Award, Target, Zap } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";

const values = [
  {
    icon: Award,
    title: "Quality First",
    description:
      "Every repair is thoroughly tested. Every line of code is production-ready. Your satisfaction is guaranteed.",
  },
  {
    icon: Target,
    title: "Direct Communication",
    description:
      "No middlemen. Direct access to the expert working on your project. Transparent timelines and upfront pricing.",
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    description:
      "Quick turnarounds on repairs and development. Proven track record across hardware fixes and software solutions.",
  },
];

export function About() {
  return (
    <SectionWrapper id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="section-heading">Who We Are</span>
            <h2 className="section-title">
              Expert <span className="text-gradient">Tech Services</span>
            </h2>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-8 md:p-12 mb-12"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Welcome to JMdev — your trusted partner for comprehensive tech solutions. 
              Whether your PC needs emergency repairs, your gaming console deserves 
              expert restoration, or your business needs a custom web or mobile application, 
              we deliver professional, reliable service.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With years of hands-on experience across hardware diagnostics, software 
              development, and system optimization, we understand the frustration of technical 
              problems. Our mission is to solve them — quickly, affordably, and with complete transparency. 
              No jargon. No hidden fees. Just expert solutions delivered directly to you.
            </p>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
