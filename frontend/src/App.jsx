import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import AppRoute from "./pages/AppRoute";
import { Toaster } from "./components/ui/toaster";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppRoute />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
