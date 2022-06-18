import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import Analytics from './pages/Analytics';
import Header from './pages/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <div className="container">
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/AdminDashboard" element={<AdminDashboard />} />
            <Route path="/Analytics" element={<Analytics />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;