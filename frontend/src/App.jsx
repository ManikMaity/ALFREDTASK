import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import AppRoute from "./pages/AppRoute";
import { Toaster } from "./components/ui/toaster";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
      <AppRoute />
      <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
