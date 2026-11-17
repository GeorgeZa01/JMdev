import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Check, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.webp";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 800], [0, 90]);
  const backgroundScale = useTransform(scrollY, [0, 800], [1, 1.08]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden pb-20 pt-32 sm:pt-36 lg:min-h-[780px] lg:pb-24 lg:pt-40"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-48 top-16 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="hero-grid absolute inset-0 opacity-30" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/[0.07] px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm">
              Tech support &amp; development · South Africa
            </span>
          </motion.div>

          <h1
            className="mb-6 text-[clamp(3.1rem,7vw,5.75rem)] font-display font-semibold leading-[0.98] tracking-[-0.065em]"
          >
            Tech that works.
            <br />
            Ideas that <span className="text-gradient">take off.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
          >
            From a stubborn laptop to your next big digital idea, get thoughtful
            repairs and custom software from one hands-on tech partner.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          >
            <Button asChild size="lg" className="btn-glow h-12 bg-primary px-6 text-base text-primary-foreground hover:bg-primary/90">
              <a href="https://wa.me/27662908976?text=Hi%20JMdev%2C%20I%20need%20a%20quick%20repair%20quote." target="_blank" rel="noopener noreferrer">
                Let&apos;s talk
                <MessageCircle className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 border-border/80 bg-background/40 px-6 text-base hover:border-primary/40 hover:bg-secondary">
              <a href="#expertise">
                Explore services
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex items-center gap-3"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/[0.08]">
              <ShieldCheck className="h-4 w-4 text-primary" />
            </span>
            <div className="text-sm">
              <p className="font-medium text-foreground">Every repair comes with a 3-month warranty</p>
              <p className="mt-0.5 text-muted-foreground">Clear communication. No surprises.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-11 grid max-w-lg grid-cols-3 gap-4 border-t border-border/70 pt-6 sm:gap-8"
          >
            {[
              { value: "3+", label: "Years Experience" },
              { value: "20+", label: "Projects Delivered" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-[11px] leading-4 text-muted-foreground sm:text-xs">{stat.label}</div>
              </div>
            ))}
          </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[560px] lg:max-w-none"
          >
            <motion.div
              style={{ y: backgroundY }}
              className="relative aspect-[0.94] overflow-hidden rounded-[2rem] border border-white/10 bg-secondary shadow-[0_35px_100px_-35px_hsl(var(--primary)/0.28)] sm:aspect-[1.08]"
            >
              <motion.img
                src={heroBg}
                alt="Abstract teal and violet digital circuit lines"
                width={1200}
                height={675}
                style={{ scale: backgroundScale }}
                initial={{ scale: 1.12 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-background/10 to-background/75" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/10" />

              <div className="absolute left-5 right-5 top-5 flex items-center justify-between rounded-2xl border border-white/10 bg-background/55 px-4 py-3 backdrop-blur-xl sm:left-7 sm:right-7 sm:top-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">JM</span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">JMdev</p>
                    <p className="text-xs text-muted-foreground">Your one-stop tech partner</p>
                  </div>
                </div>
                <span className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Ready to help
                </span>
              </div>

              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-background/75 p-5 backdrop-blur-xl sm:bottom-7 sm:left-7 sm:right-7 sm:p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">One partner. Every layer.</span>
                  <ArrowDown className="h-4 w-4 text-primary" />
                </div>
                <p className="max-w-sm text-xl font-medium leading-snug tracking-tight text-foreground sm:text-2xl">
                  Hardware sorted.
                  <br />
                  Software thoughtfully built.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["PC & console repair", "Web & app development"].map((service) => (
                    <span key={service} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-muted-foreground">
                      <Check className="h-3 w-3 text-primary" />
                      {service}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            <div className="pointer-events-none absolute -bottom-5 -right-4 -z-10 h-40 w-40 rounded-full bg-primary/20 blur-[80px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
