import { BrowserRouter, HashRouter } from "react-router";
import { AppRoutes } from "./Routes";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyle } from "./createGlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <AppRoutes />
          </ThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
