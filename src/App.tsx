import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index.tsx";
import ProjectHRM from "./pages/ProjectHRM.tsx";
import ProjectEcommerce from "./pages/ProjectEcommerce.tsx";
import ProjectEmailAutomation from "./pages/ProjectEmailAutomation.tsx";
import ProjectWoocommerce from "./pages/ProjectWoocommerce.tsx";
import ProjectMetaAds from "./pages/ProjectMetaAds.tsx";
import ProjectMarketingWebsite from "./pages/ProjectMarketingWebsite.tsx";
import AllProjects from "./pages/AllProjects.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/atiqur-koushik">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/project/hrm" element={<ProjectHRM />} />
            <Route path="/project/ecommerce" element={<ProjectEcommerce />} />
            <Route path="/project/email-automation" element={<ProjectEmailAutomation />} />
            <Route path="/project/woocommerce" element={<ProjectWoocommerce />} />
            <Route path="/project/meta-ads" element={<ProjectMetaAds />} />
            <Route path="/project/marketing-website" element={<ProjectMarketingWebsite />} />
            <Route path="/project/marketing-website" element={<ProjectMarketingWebsite />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
