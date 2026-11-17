import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { servicePages } from "./src/data/servicePages";

const SITE_URL = "https://jmdev.co.za";

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * Writes dist/<route>/index.html for every service page so those URLs return
 * HTTP 200 on static hosts (instead of 404) and ship route-specific SEO tags
 * before any JavaScript runs. Also writes 404.html as an SPA fallback.
 */
function staticRoutePages(): Plugin {
  let outDir = "dist";
  return {
    name: "jmdev-static-route-pages",
    apply: "build",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const template = fs.readFileSync(path.join(outDir, "index.html"), "utf8");

      for (const service of Object.values(servicePages)) {
        const title = escapeHtml(`${service.title} ${service.titleAccent} | JMdev`);
        const description = escapeHtml(service.description);
        const url = `${SITE_URL}${service.path}`;
        const schema = JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.serviceType,
          description: service.description,
          url,
          areaServed: { "@type": "City", name: "Cape Town" },
          provider: { "@type": "Organization", name: "JMdev", url: `${SITE_URL}/` },
        });

        const html = template
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
          .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${description}$2`)
          .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
          .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
          .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`)
          .replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${description}$2`)
          .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${title}$2`)
          .replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, `$1${description}$2`)
          .replace(
            "</head>",
            `  <script type="application/ld+json" id="jmdev-service-schema">${schema}</script>\n  </head>`,
          );

        const routeDir = path.join(outDir, service.path.replace(/^\//, ""));
        fs.mkdirSync(routeDir, { recursive: true });
        fs.writeFileSync(path.join(routeDir, "index.html"), html);
      }

      fs.writeFileSync(path.join(outDir, "404.html"), template);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger(), staticRoutePages()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Long-lived vendor chunks stay cached across site updates.
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          motion: ["framer-motion"],
        },
      },
    },
  },
}));
