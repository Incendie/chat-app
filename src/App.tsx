import { BrowserRouter, HashRouter } from "react-router";
import { AppRoutes } from "./Routes";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyle } from "./createGlobalStyle";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <GlobalStyle />
          <AppRoutes />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
