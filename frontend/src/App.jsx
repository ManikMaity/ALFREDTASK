import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import AppRoute from "./pages/AppRoute";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppRoute />
    </QueryClientProvider>
  );
}

export default App;
