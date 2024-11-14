import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import NurseProfile from "./pages/NurseProfile";
import BookingSchedule from "./pages/BookingSchedule";
import BookingConfirmation from "./pages/BookingConfirmation";
import Messaging from "./pages/Messaging";
import Payment from "./pages/Payment";
import NurseDashboard from "./pages/NurseDashboard";
import Reviews from "./pages/Reviews";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nurse-profile" element={<NurseProfile />} />
          <Route path="/booking-schedule" element={<BookingSchedule />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/nurse-dashboard" element={<NurseDashboard />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;