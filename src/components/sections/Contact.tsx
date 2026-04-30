import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const endpoint = "https://formspree.io/f/xdkprbzk";
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      const res = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        toast({
          title: "Message sent!",
          description: "I'll respond within 48 hours.",
        });
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        toast({
          title: "Submission failed",
          description:
            data?.error || "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (err) {
      toast({
        title: "Network error",
        description: "Unable to send message. Check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="py-24 md:py-32 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="section-heading">Let's Connect</span>
            <h2 className="section-title">
              Ready to Fix or Build{" "}
              <span className="text-gradient">Something?</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Get your PC repaired, console fixed, or web project started.
              I'll respond within 48 hours with a detailed quote or solution plan.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="service"
                  className="text-sm font-medium text-foreground"
                >
                  Service Type
                </label>
                <Select name="service">
                  <SelectTrigger className="bg-secondary/50 border-border focus:border-primary">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pc-repair">PC Repair & Diagnostics</SelectItem>
                    <SelectItem value="console-repair">Console Repair & Restoration</SelectItem>
                    <SelectItem value="web-dev">Web Development</SelectItem>
                    <SelectItem value="app-dev">App Development</SelectItem>
                    <SelectItem value="custom">Custom Project</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Project Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Describe your issue, project needs, timeline, and budget. For PC repairs, include symptoms. For development, describe features and goals..."
                  rows={5}
                  required
                  className="bg-secondary/50 border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full btn-glow bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Alternative Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-center"
          >
            <a
              href="mailto:jmdev.za@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              support@jmdev.co.za
            </a>
            <span className="hidden sm:block text-border">|</span>
            <a
              href="https://wa.me/27662908976"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
