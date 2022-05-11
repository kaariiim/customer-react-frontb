import "./App.css";
import Dashboard from "./components/Dashboard";
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./components/Login";
 
function App() {
  return ( 
     
        <Routes>
          <Route  path="/dashboard" element={<Dashboard />} />
          <Route  path="/" element={<Login />} />
        </Routes>  
    
  );
}

export default App;
