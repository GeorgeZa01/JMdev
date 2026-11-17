import { useEffect } from "react";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { ServiceDetails } from "@/data/servicePages";

type ServicePageProps = {
  service: ServiceDetails;
};

function ServicePage({ service }: ServicePageProps) {
  const pageTitle = `${service.title} ${service.titleAccent} | JMdev`;
  const canonicalUrl = `https://jmdev.co.za${service.path}`;

  useEffect(() => {
    const previousTitle = document.title;
    document.title = pageTitle;

    const metaDefinitions = [
      { selector: 'meta[name="description"]', attributes: { name: "description" }, content: service.description },
      { selector: 'meta[property="og:title"]', attributes: { property: "og:title" }, content: pageTitle },
      { selector: 'meta[property="og:description"]', attributes: { property: "og:description" }, content: service.description },
      { selector: 'meta[property="og:url"]', attributes: { property: "og:url" }, content: canonicalUrl },
    ];

    const previousMeta = metaDefinitions.map(({ selector, attributes, content }) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      const created = !element;
      if (!element) {
        element = document.createElement("meta");
        Object.entries(attributes).forEach(([name, value]) => element?.setAttribute(name, value));
        document.head.appendChild(element);
      }

      const previousContent = element.getAttribute("content");
      element.setAttribute("content", content);
      return { element, created, previousContent };
    });

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const createdCanonical = !canonical;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    const previousCanonical = canonical.href;
    canonical.href = canonicalUrl;

    let schema = document.getElementById("jmdev-service-schema") as HTMLScriptElement | null;
    const createdSchema = !schema;
    if (!schema) {
      schema = document.createElement("script");
      schema.id = "jmdev-service-schema";
      schema.type = "application/ld+json";
      document.head.appendChild(schema);
    }
    const previousSchema = schema.textContent;
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.serviceType,
      description: service.description,
      url: canonicalUrl,
      areaServed: {
        "@type": "City",
        name: "Cape Town",
      },
      provider: {
        "@type": "Organization",
        name: "JMdev",
        url: "https://jmdev.co.za/",
      },
    });

    return () => {
      document.title = previousTitle;
      previousMeta.forEach(({ element, created, previousContent }) => {
        if (created) {
          element.remove();
        } else if (previousContent === null) {
          element.removeAttribute("content");
        } else {
          element.setAttribute("content", previousContent);
        }
      });

      if (createdCanonical) {
        canonical?.remove();
      } else if (previousCanonical) {
        canonical.href = previousCanonical;
      }

      if (createdSchema) {
        schema?.remove();
      } else {
        schema.textContent = previousSchema;
      }
    };
  }, [canonicalUrl, pageTitle, service]);

  const message = encodeURIComponent(`Hi JMdev, I'm interested in ${service.serviceType} in Cape Town.`);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28">
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="hero-grid absolute inset-0" aria-hidden="true" />
          <div className="gradient-bg absolute inset-0" aria-hidden="true" />
          <div className="container relative mx-auto px-6">
            <div className="max-w-3xl">
              <p className="section-heading">JMdev Services · Cape Town</p>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-6xl">
                {service.title}{" "}
                <span className="text-gradient">{service.titleAccent}</span>
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {service.intro}
              </p>
              {service.price && (
                <p className="mb-8 max-w-2xl text-sm text-muted-foreground">
                  {service.price}
                </p>
              )}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="btn-glow">
                  <a href={`https://wa.me/27662908976?text=${message}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Ask about this service
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="/#contact">Send a project enquiry</a>
                </Button>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">
                {service.serviceType === "Small business website design"
                  ? "Contact us for a quote based on your business and project scope."
                  : "Repairs include a 3-month warranty. Contact us for a quote based on your device."}
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto grid gap-8 px-6 py-16 md:grid-cols-2 md:py-20">
          <div className="glass-card p-8 md:p-10">
            <p className="section-heading">How we can help</p>
            <h2 className="mb-6 text-2xl font-semibold text-foreground">{service.featuresTitle}</h2>
            <ul className="space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8 md:p-10">
            <p className="section-heading">Simple, clear process</p>
            <h2 className="mb-6 text-2xl font-semibold text-foreground">What happens next</h2>
            <ol className="space-y-5">
              {service.process.map((step, index) => (
                <li key={step} className="flex items-start gap-4 text-muted-foreground">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="container mx-auto px-6 pb-20">
          <div className="glass-card flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center md:p-10">
            <div>
              <h2 className="mb-2 text-2xl font-semibold text-foreground">Ready to get started?</h2>
              <p className="text-muted-foreground">Tell us what you need and we’ll get back to you within 48 hours.</p>
            </div>
            <Button asChild size="lg" className="btn-glow shrink-0">
              <a href={`https://wa.me/27662908976?text=${message}`} target="_blank" rel="noopener noreferrer">
                Contact JMdev <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ServicePage;
