import "./App.css";
import Dashboard from "./components/Dashboard";
import Users from "./components/pages/users/Users";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
