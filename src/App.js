import './App.css';

// react-router components
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar'

import UserDashboard from './pages/MyDashboard/UserDashboard/UserDashboard';
import MyInfo from './pages/MyDashboard/MyInfo/MyInfo';
import LogActivity from './pages/MyDashboard/LogActivity/LogActivity';
import ActivityHistory from './pages/MyDashboard/ActivityHistory/ActivityHistory';

import AdminMainDashboard from './pages/AdminDashboard/AdminMainDashboard/AdminMainDashboard';
import ViewTables from './pages/AdminDashboard/ViewTables/ViewTables';
import Analytics from './pages/AdminDashboard/Analytics/Analytics';
import AddEmployee from './pages/AdminDashboard/AddEmployee/AddEmployee';

import ViewTable from './pages/PartnerDashboard/ViewTable/ViewTable';
import Dashboard from './pages/Dashboard';

import WithoutNav from './components/WithoutNav';
import WithUserNav from './components/WithUserNav';
import WithAdminNav from './components/WithAdminNav';
import WithPartnerNav from './components/WithPartnerNav';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route element={<WithoutNav />}>
              <Route exact path="/" element={ <Dashboard /> } />
            </Route>
            <Route element={<WithUserNav />}>
              <Route path="/UserDashboard" element={ <UserDashboard /> } />
              <Route path="/MyInfo" element={ <MyInfo /> } />
              <Route path="/LogActivity" element={ <LogActivity /> } />
              <Route path="/ActivityHistory" element={ <ActivityHistory /> } />
            </Route>
            <Route element={<WithAdminNav />}>
              <Route path="/AdminMainDashboard" element={ <AdminMainDashboard /> } />
              <Route path="/ViewTables" element={ <ViewTables /> } />
              <Route path="/Analytics" element={ <Analytics /> } />
              <Route path="/AddEmployee" element={ <AddEmployee /> } />
            </Route>
            <Route element={<WithPartnerNav />}>
              <Route path="/ViewTable" element={ <ViewTable /> } />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}