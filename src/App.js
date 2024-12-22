import logo from "./logo.svg";
import "./App.css";
import PersonalInfo from "./pages/PersonalInfo";
import { Route, Router, Routes } from "react-router-dom";
import AppRoutes from "./routes/route";

function App() {
  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
