import { BrowserRouter } from "react-router";
import { AppRoutes } from "./Routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
