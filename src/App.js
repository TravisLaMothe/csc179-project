import './App.css';

// react-router components
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar'

import MyInfo from './pages/MyDashboard/MyInfo/MyInfo';
import LogActivity from './pages/MyDashboard/LogActivity/LogActivity';
import ActivityHistory from './pages/MyDashboard/ActivityHistory/ActivityHistory';

import ViewTables from './pages/AdminDashboard/ViewTables/ViewTables';
import Analytics from './pages/AdminDashboard/Analytics/Analytics';
import AddEmployee from './pages/AdminDashboard/AddEmployee/AddEmployee';

import ViewTable from './pages/PartnerDashboard/ViewTable/ViewTable';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={ <MyInfo /> } />
            <Route path="/LogActivity" element={ <LogActivity /> } />
            <Route path="/ActivityHistory" element={ <ActivityHistory /> } />

            <Route path="/ViewTables" element={ <ViewTables /> } />
            <Route path="/Analytics" element={ <Analytics /> } />
            <Route path="/AddEmployee" element={ <AddEmployee /> } />

            <Route path="/ViewTable" element={ <ViewTable /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}