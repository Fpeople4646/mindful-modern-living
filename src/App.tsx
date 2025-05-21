
```typescript
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import RoutinePage from "./pages/RoutinePage";
import RencanaHarianPage from "./pages/RencanaHarianPage.tsx"; // Import new page
import HabitsPage from "./pages/HabitsPage";
import WorkoutsPage from "./pages/WorkoutsPage";
import NutritionPage from "./pages/NutritionPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/rutinitas" element={<RoutinePage />} />
            <Route path="/rencana-harian" element={<RencanaHarianPage />} /> {/* Add new route */}
            <Route path="/kebiasaan" element={<HabitsPage />} />
            <Route path="/olahraga" element={<WorkoutsPage />} />
            <Route path="/nutrisi" element={<NutritionPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```
