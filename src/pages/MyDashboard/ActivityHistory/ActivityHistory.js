import "./ActivityHistory.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { BarChart, Bar } from 'recharts';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const exerciseData = [{name: '6/17', minute: 400, pv: 2400, amt: 2400}, 
{name: '6/18', minute: 300, pv: 2400, amt: 2400}, 
{name: '6/19', minute: 100, pv: 2400, amt: 2400}, 
{name: '6/20', minute: 350, pv: 2400, amt: 2400}, 
{name: '6/21', minute: 400, pv: 2400, amt: 2400}];

const vacationData = [
{name: 'February', days: 12, pv: 2400, amt: 2400}, 
{name: 'March', days: 10, pv: 50, amt: 2400}, 
{name: 'April', days: 8, pv: 2400, amt: 2400}, 
{name: 'May', days: 15, pv: 2400, amt: 2400}, 
{name: 'June', days: 13, pv: 2400, amt: 2400}];

const renderLineChart = (
  <LineChart width={1000} height={500} data={exerciseData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="minute" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
);

const renderBarChart = (
    <BarChart width={1000} height={500} data={vacationData}>
      <XAxis dataKey="name" stroke="#8884d8" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="days" fill="#8884d8" barSize={30} />
    </BarChart>
  );

export default function ActivityHistory() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
        <div className="activityHistory">
            <div className="userTitleContainer">
              <div className="topLeft">
                <h1 className="userTitle">Activity Histor</h1>
              </div>
              <div className="topRight">
                <Button variant="text">
                  <Link to="/UserDashboard" className="link">
                        Back to Dashboard
                  </Link>
                </Button>
              </div>
            </div>
            <div className="userShow">
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="lab API tabs example">
                                <Tab label="Temperature" value="1" />
                                <Tab label="Pulse" value="2" />
                                <Tab label="Pressure" value="3" />
                                <Tab label="Respiration" value="4" />
                                <Tab label="Exercise" value="5" />
                                <Tab label="Vacation" value="6" />
                                <Tab label="Work" value="7" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">{renderLineChart}</TabPanel>
                        <TabPanel value="2">{renderLineChart}</TabPanel>
                        <TabPanel value="3">{renderLineChart}</TabPanel>
                        <TabPanel value="4">{renderLineChart}</TabPanel>
                        <TabPanel value="5">{renderBarChart}</TabPanel>
                        <TabPanel value="6">{renderBarChart}</TabPanel>
                        <TabPanel value="7">{renderBarChart}</TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>
    )
}