import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { useLenis } from "@/hooks/useLenis";
import SplashScreen from "./components/SplashScreen";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import SearchResults from "./pages/SearchResults";
import BusinessProfile from "./pages/BusinessProfile";
import ProductListing from "./pages/ProductListing";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderTracking from "./pages/OrderTracking";
import Reviews from "./pages/Reviews";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  
  // Initialize Lenis smooth scroll
  useLenis();

  const handleSplashComplete = () => {
    setShowSplash(false);
    // Trigger fade-in of main content immediately
    setTimeout(() => setFadeIn(true), 50);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      
      <div
        className={`transition-opacity duration-700 ${
          showSplash ? "opacity-0" : fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Main App Content */}
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <CartProvider>
              <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                  <ScrollToTop />
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/search" element={<SearchResults />} />
                    <Route path="/business/:id" element={<BusinessProfile />} />
                    <Route path="/business/:id/products" element={<ProductListing />} />
                    <Route path="/business/:id/product/:productId" element={<ProductDetail />} />
                    <Route path="/business/:id/reviews" element={<Reviews />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/order-confirmation" element={<OrderConfirmation />} />
                    <Route path="/order-tracking" element={<OrderTracking />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/privacy" element={<Privacy />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </BrowserRouter>
              </TooltipProvider>
            </CartProvider>
          </AuthProvider>
        </QueryClientProvider>
      </div>
    </>
  );
};

export default App;
