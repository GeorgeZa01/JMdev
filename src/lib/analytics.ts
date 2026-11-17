type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: GtagParams) => void;
  }
}

/** Send a GA4 event. Safe to call when gtag is blocked (e.g. no cookie consent). */
export function trackEvent(eventName: string, params: GtagParams = {}) {
  try {
    window.gtag?.("event", eventName, params);
  } catch {
    // Analytics must never break the site.
  }
}

/** Name of the page section a click came from, e.g. "hero", "contact", "footer". */
function sectionOf(element: Element) {
  const section = element.closest("section[id], footer, header");
  if (!section) return "unknown";
  return section.id || section.tagName.toLowerCase();
}

/**
 * Track every contact-intent click site-wide (WhatsApp, email, phone) with one
 * listener, so new CTAs are measured automatically without extra code.
 */
export function initContactClickTracking() {
  document.addEventListener(
    "click",
    (event) => {
      const link = (event.target as Element | null)?.closest?.("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;

      const href = link.href;
      const params = {
        link_location: sectionOf(link),
        page_path: window.location.pathname,
      };

      if (href.includes("wa.me/") || href.includes("api.whatsapp.com")) {
        trackEvent("whatsapp_click", params);
      } else if (href.startsWith("mailto:")) {
        trackEvent("email_click", params);
      } else if (href.startsWith("tel:")) {
        trackEvent("phone_click", params);
      }
    },
    { capture: true },
  );
}
