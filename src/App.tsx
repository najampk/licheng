import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster as AppToaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";

import ScrollToTop from "@/components/ScrollToTop";
import CategoryPage from "@/components/CategoryPage";
import AllCategoriesPage from "@/components/AllCategoriesPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductCategories from "./pages/ProductCategories";
import Product from "./pages/Product";
import SolutionsPage from './pages/SolutionsPage';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import Consultation from "./pages/Consultation";
import AfterSalesSupport from "./pages/AfterSalesSupport";
import CustomManufacturing from "./pages/CustomManufacturing";
import TechnicalSupport from "./pages/TechnicalSupport";
import InstallationServices from "./pages/InstallationServices";
import ImportExportAgency from "./pages/ImportExportAgency";
import InternationalLogistics from "./pages/InternationalLogistics";
import ExcavatorPartsMap from "./pages/ExcavatorPartsMap";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ThemeProvider defaultTheme="light">
            <ScrollToTop />
            <AppToaster />
            <SonnerToaster />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/category/:slug" element={<CategoryPage />} />
              <Route path="/products/categories" element={<AllCategoriesPage />} />
              <Route path="/products" element={<ProductCategories />} />
              <Route path="/product/:slug" element={<Product />} />
              <Route path="/after-sales-support" element={<AfterSalesSupport />} />
              <Route path="/custom-manufacturing" element={<CustomManufacturing />} />
              <Route path="/technical-support" element={<TechnicalSupport />} />
              <Route path="/installation-services" element={<InstallationServices />} />
              <Route path="/import-export-agency" element={<ImportExportAgency />} />
              <Route path="/international-logistics" element={<InternationalLogistics />} />
              <Route path="/excavator-parts-map" element={<ExcavatorPartsMap />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ThemeProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </BrowserRouter>
);

export default App;