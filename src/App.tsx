import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import MaintenanceOverlay from "./MaintenanceOverlay";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Captains from "./pages/Captains";
import WhatWeDo from "./pages/WhatWeDo";
import Competitions from "./pages/Competitions";
import Outreach from "./pages/Outreach";
import Gallery from "./pages/Gallery";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <ScrollToTop />

          <MaintenanceOverlay>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />

                <Route path="about" element={<About />} />

                <Route path="captains" element={<Captains />} />

                <Route path="what-we-do" element={<WhatWeDo />} />

                <Route path="outreach" element={<Outreach />} />

                <Route
                  path="competitions"
                  element={<Competitions />}
                />

                <Route path="gallery" element={<Gallery />} />

                <Route path="donate" element={<Donate />} />

                <Route path="contact" element={<Contact />} />
              </Route>

              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MaintenanceOverlay>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
