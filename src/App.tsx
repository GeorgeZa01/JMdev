import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Index from "./pages/Index";
import { servicePages } from "./data/servicePages";

// Secondary routes load on demand so the homepage ships less JavaScript.
const Shop = lazy(() => import("./pages/Shop"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <MotionConfig reducedMotion="user">
      <Toaster />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/shop" element={<Shop />} />
            {Object.values(servicePages).map((service) => (
              <Route key={service.path} path={service.path} element={<ServicePage service={service} />} />
            ))}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </MotionConfig>
  );
};

export default App;
