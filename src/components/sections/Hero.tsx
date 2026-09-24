import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.png";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 800], [0, 300]);
  const backgroundScale = useTransform(scrollY, [0, 800], [1, 1.2]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.4, 0.8]);

  return (
    <section ref={sectionRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-12">
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <motion.img
          src={heroBg}
          alt=""
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ scale: backgroundScale }}
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"
          style={{ opacity: overlayOpacity }}
        />
      </motion.div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-purple-500/20 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm font-medium text-primary">Tech Support & Development Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6"
          >
            Expert Software & <span className="text-gradient">Hardware Solutions.</span>
            <br />
            Your One-Stop Tech Partner.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Most developers do not understand hardware, and most repair shops cannot build an app.
            I do both, so your digital tools are backed by optimized, reliable hardware and one accountable technology partner.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="btn-glow bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-12">
              <a href="https://wa.me/27662908976?text=Hi%20JMdev%2C%20I%20need%20a%20quick%20repair%20quote." target="_blank" rel="noopener noreferrer">
                Quick WhatsApp Quote
                <MessageCircle className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border hover:bg-secondary text-base px-8 h-12">
              <a href="#contact">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="inline-flex items-center gap-3 mt-8 px-5 py-3 rounded-xl border border-primary/30 bg-primary/5 text-left"
          >
            <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Peace of mind included</p>
              <p className="text-sm text-muted-foreground">Every repair includes a 3-month workmanship warranty.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-8 md:gap-16 mt-16 pt-16 border-t border-border/50"
          >
            {[
              { value: "3+", label: "Years Experience" },
              { value: "20+", label: "Projects Delivered" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
