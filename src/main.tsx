import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "./index.css";
import { initContactClickTracking } from "./lib/analytics";

initContactClickTracking();

createRoot(document.getElementById("root")!).render(<App />);
