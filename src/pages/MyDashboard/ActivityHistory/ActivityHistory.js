import "./ActivityHistory.css"
import React, {useRef, useEffect, useState, Component} from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import { loggedInId} from '../../Dashboard';
import {client} from '../../../index';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

let temperatureData = new Map();
let pulseDataMap = new Map();
let pressureDataMap = new Map();
let respirationDataMap = new Map();
let exerciseDataMap = new Map();
let vacationDataMap = new Map();
let workDataMap = new Map();

let USER = null;

var loaded = false;
async function populateTable(iiid) {
    if (loaded)
      return;
    loaded = true;
    console.log('pulling data');
    //const employeeList =  await client.entities.employee.list();
    const employee = await client.entities.employee.get(iiid);
    // var i = 0;
    // for (const employee of employeeList.items) {
         const id = employee._id;
    //     if (id !== loggedInId)
    //       continue;
        const age = employee.age;
        const gender = employee.gender;
        const height = employee.height;
        const weight = employee.weight;
        const temperature = employee.temperature;
        const pulse = employee.pulse;
        const pressure = employee.pressure;
        const respiration = employee.respiration;
        const exercise = employee.exercise;
        const vacation = employee.vacation;
        const work = employee.work;
  
        USER = createData(id, age, gender, height, weight, temperature, pulse, pressure, respiration, exercise, vacation, work);

        const employeeHistoryList =  await client.entities.employeeHistory.list();
        let x = 0;
        for (const employeeHistory of employeeHistoryList.items) {
          const nameHist = employeeHistory.name; 
          if (nameHist.localeCompare(id) === 0) {
            const dateHist = employeeHistory.date;
            const dateDate = new Date(Date.parse(dateHist));

            const temperatureHist = employeeHistory.temperature;
            const pulseHist = employeeHistory.pulse;
            const pressureHist = employeeHistory.pressure;
            const respirationHist = employeeHistory.respiration;
            const exerciseHist = employeeHistory.exercise;
            const vacationHist = employeeHistory.vacation;
            const workHist = employeeHistory.work;
    
            USER.history[x++] = createSingletonData(dateHist, temperatureHist, pulseHist, pressureHist, respirationHist, exerciseHist, vacationHist, workHist);

            temperatureData.set(Date.parse(dateHist), 
              {
                date: dateDate.toLocaleDateString(),
                temp: temperatureHist
              });

              pulseDataMap.set(Date.parse(dateHist), 
              {
                date: dateDate.toLocaleDateString(),
                pulse: pulseHist
              });

              pressureDataMap.set(Date.parse(dateHist), 
              {
                date: dateDate.toLocaleDateString(),
                pressure: pressureHist
              });

              respirationDataMap.set(Date.parse(dateHist), 
              {
                date: dateDate.toLocaleDateString(),
                respiration: respirationHist
              });

              exerciseDataMap.set(Date.parse(dateHist), 
              {
                date: dateDate.toLocaleDateString(),
                exercise: exerciseHist
              });

              vacationDataMap.set(Date.parse(dateHist), 
              {
                date: dateDate.toLocaleDateString(),
                vacation: vacationHist
              });

              workDataMap.set(Date.parse(dateHist), 
              {
                date: dateDate.toLocaleDateString(),
                work: workHist
              });
          }
        }

        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        const dateHist = today.toUTCString();
        const dateDate = new Date(Date.parse(dateHist));

        USER.history[x++] = createSingletonData(dateHist, temperature, pulse, pressure, respiration, exercise, vacation, work); // Add current data last!

        temperatureData.set(Date.parse(dateHist), 
        {
          date: dateDate.toLocaleDateString(),
          temp: temperature
        });

        pulseDataMap.set(Date.parse(dateHist), 
        {
          date: dateDate.toLocaleDateString(),
          pulse: pulse
        });

        pressureDataMap.set(Date.parse(dateHist), 
        {
          date: dateDate.toLocaleDateString(),
          pressure: pressure
        });

        respirationDataMap.set(Date.parse(dateHist), 
        {
          date: dateDate.toLocaleDateString(),
          respiration: respiration
        });

        exerciseDataMap.set(Date.parse(dateHist), 
        {
          date: dateDate.toLocaleDateString(),
          exercise: exercise
        });

        vacationDataMap.set(Date.parse(dateHist), 
        {
          date: dateDate.toLocaleDateString(),
          vacation: vacation
        });

        workDataMap.set(Date.parse(dateHist), 
        {
          date: dateDate.toLocaleDateString(),
          work: work
        });
       // i++;
    //}
  }

  function createSingletonData(date, temperature, pulse, pressure, respiration, exercise, vacation, work) {
    return {
      date,
      temperature, pulse, pressure, respiration, exercise, vacation, work
    };
  }

function createData(id, age, gender, height, weight, temperature, pulse, pressure, respiration, exercise, vacation, work) {
    return {
      id,
      age,
      gender,
      height, 
      weight,
      moreInfo: [
       {
          temperature, pulse, pressure, respiration, exercise, vacation, work
        },
      ],
      history: [
      ],
    };
  }

export default function ActivityHistory() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    function updateTempData(starterDate, enderDate) {
      let tempTempData = new Map();
      let tempPulseData = new Map();
      let tempPressureData = new Map();
      let tempRespirationData = new Map();
      let tempExerciseData = new Map();
      let tempVacationData = new Map();
      let tempWorkData = new Map(); 
      if (starterDate == null)
        starterDate = startDate;
      if (enderDate == null)
        enderDate = endDate;  

      for (const [key, value] of temperatureData.entries()) {
        let dateData = new Date(Date.parse(value.date));
        if (dateData <= enderDate && dateData >= starterDate) {
          tempTempData.set(key, value);
        }
      }

      for (const [key, value] of pulseDataMap.entries()) {
        let dateData = new Date(Date.parse(value.date));
        if (dateData <= enderDate && dateData >= starterDate) {
          tempPulseData.set(key, value);
        }
      }

      for (const [key, value] of pressureDataMap.entries()) {
        let dateData = new Date(Date.parse(value.date));
        if (dateData <= enderDate && dateData >= starterDate) {
          tempPressureData.set(key, value);
        }
      }

      for (const [key, value] of respirationDataMap.entries()) {
        let dateData = new Date(Date.parse(value.date));
        if (dateData <= enderDate && dateData >= starterDate) {
          tempRespirationData.set(key, value);
        }
      }

      for (const [key, value] of exerciseDataMap.entries()) {
        let dateData = new Date(Date.parse(value.date));
        if (dateData <= enderDate && dateData >= starterDate) {
          tempExerciseData.set(key, value);
        }
      }

      for (const [key, value] of vacationDataMap.entries()) {
        let dateData = new Date(Date.parse(value.date));
        if (dateData <= enderDate && dateData >= starterDate) {
          tempVacationData.set(key, value);
        }
      }

      for (const [key, value] of workDataMap.entries()) {
        let dateData = new Date(Date.parse(value.date));
        if (dateData <= enderDate && dateData >= starterDate) {
          tempWorkData.set(key, value);
        }
      }

      const tempMapSorted = new Map([...tempTempData.entries()].sort());
      setTempData(Array.from(tempMapSorted.values()));

      const pulseMapSorted = new Map([...tempPulseData.entries()].sort());
      setPulseData(Array.from(pulseMapSorted.values()));

      const pressureSortedMap = new Map([...tempPressureData.entries()].sort());
      setPressureData(Array.from(pressureSortedMap.values()));

      const respirationSortedMap = new Map([...tempRespirationData.entries()].sort());
      setRespirationData(Array.from(respirationSortedMap.values()));

      const exerciseSortedMap = new Map([...tempExerciseData.entries()].sort());
      setExerciseData(Array.from(exerciseSortedMap.values()));

      const vacationSortedMap = new Map([...tempVacationData.entries()].sort());
      setVacationData(Array.from(vacationSortedMap.values()));

      const workSortedMap = new Map([...tempWorkData.entries()].sort());
      setWorkData(Array.from(workSortedMap.values()));
    }

    const handleStartDateChange = (date) => {
      setStartDate(date);
      
      updateTempData(date, null);
    };

    const handleEndDateChange = (date) => {
      setEndDate(date);

      updateTempData(null, date);
    };

    useEffect(() => {
      setOpenLoader(true);
      populateTable(loggedInId).then(res => {
        if (temperatureData.size > 0) {
          let earliestDate = null;
          let oldestDate = null;

          const tempMapSorted = new Map([...temperatureData.entries()].sort());

          for (const [key, value] of temperatureData.entries()) {
            let date = new Date(Date.parse(value.date));
            if (earliestDate === null) {
              earliestDate = date;
              oldestDate = date;
            } else {
              if (date > oldestDate)
                oldestDate = date;
              if (date < earliestDate)
                earliestDate = date;
            }
          }
          
          setStartDate(earliestDate);
          setEndDate(oldestDate);

          
          setTempData(Array.from(tempMapSorted.values()));


          const pulseMapSorted = new Map([...pulseDataMap.entries()].sort());
          setPulseData(Array.from(pulseMapSorted.values()));

          const pressureSortedMap = new Map([...pressureDataMap.entries()].sort());
          setPressureData(Array.from(pressureSortedMap.values()));

          const respirationSortedMap = new Map([...respirationDataMap.entries()].sort());
          setRespirationData(Array.from(respirationSortedMap.values()));

          const exerciseSortedMap = new Map([...exerciseDataMap.entries()].sort());
          setExerciseData(Array.from(exerciseSortedMap.values()));

          const vacationSortedMap = new Map([...vacationDataMap.entries()].sort());
          setVacationData(Array.from(vacationSortedMap.values()));

          const workSortedMap = new Map([...workDataMap.entries()].sort());
          setWorkData(Array.from(workSortedMap.values()));

          setOpenLoader(false);
        }
      });
    }, []);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [openLoader, setOpenLoader] = React.useState(false);
    const [tempData, setTempData] = React.useState([[]]);
    const [pulseData, setPulseData] = React.useState([[]]);

    const [pressureData, setPressureData] = React.useState([[]]);
    const [respirationData, setRespirationData] = React.useState([[]]);
    const [exerciseData, setExerciseData] = React.useState([[]]);
    const [vacationData, setVacationData] = React.useState([[]]);
    const [workData, setWorkData] = React.useState([[]]);

    return(
        <div className="activityHistory">
                                        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>


            <div className="userTitleContainer">
              <div className="topLeft">
                <h1 className="userTitle">Activity History</h1>
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



                <Box sx={{ width: '100%', typography: 'body1' }}>
                <label > Start Date</label>
                <DatePicker selected={startDate} onChange={handleStartDateChange} />
                </Box>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                <label > End Date</label>
                <DatePicker selected={endDate} onChange={handleEndDateChange} />
                </Box>




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
                        <TabPanel value="1">
                          
                          <LineChart width={1000} height={500} data={tempData}>
                            <Line type="monotone" dataKey="temp" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc"  />
                            <XAxis dataKey="date" domain={['auto', 'auto']} allowDataOverflow={true}/>
                            <YAxis type="number" domain={['auto', 'auto']} allowDataOverflow={true}/>
                            <Tooltip />
                          </LineChart>
                          
                          
                          </TabPanel>
                        <TabPanel value="2">

                        <LineChart width={1000} height={500} data={pulseData}>
                            <Line type="monotone" dataKey="pulse" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc"  />
                            <XAxis dataKey="date" domain={['auto', 'auto']} allowDataOverflow={true}/>
                            <YAxis type="number" domain={['auto', 'auto']} allowDataOverflow={true}/>
                            <Tooltip />
                          </LineChart>

                        </TabPanel>
                        <TabPanel value="3">

                        <LineChart width={1000} height={500} data={pressureData}>
                            <Line type="monotone" dataKey="pressure" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc"  />
                            <XAxis dataKey="date" domain={['auto', 'auto']} allowDataOverflow={true}/>
                            <YAxis type="number" domain={['auto', 'auto']} allowDataOverflow={true}/>
                            <Tooltip />
                          </LineChart>

                        </TabPanel>
                        <TabPanel value="4">

                        <LineChart width={1000} height={500} data={respirationData}>
                            <Line type="monotone" dataKey="respiration" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc"  />
                            <XAxis dataKey="date" domain={['auto', 'auto']} allowDataOverflow={true}/>
                            <YAxis type="number" domain={['auto', 'auto']} allowDataOverflow={true}/>
                            <Tooltip />
                          </LineChart>

                        </TabPanel>
                        <TabPanel value="5">

                        <LineChart width={1000} height={500} data={exerciseData}>
                            <Line type="monotone" dataKey="exercise" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc"  />
                            <XAxis dataKey="date" domain={['auto', 'auto']} allowDataOverflow={true}/>
                            <YAxis type="number" domain={['auto', 'auto']} allowDataOverflow={true}/>
                            <Tooltip />
                          </LineChart>

                        </TabPanel>
                        <TabPanel value="6">

                        <LineChart width={1000} height={500} data={vacationData}>
                            <Line type="monotone" dataKey="vacation" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc"  />
                            <XAxis dataKey="date" domain={['auto', 'auto']} allowDataOverflow={true}/>
                            <YAxis type="number" domain={['auto', 'auto']} allowDataOverflow={true}/>
                            <Tooltip />
                          </LineChart>

                        </TabPanel>
                        <TabPanel value="7">

                        <LineChart width={1000} height={500} data={workData}>
                            <Line type="monotone" dataKey="work" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc"  />
                            <XAxis dataKey="date" domain={['auto', 'auto']} allowDataOverflow={true}/>
                            <YAxis type="number" domain={['auto', 'auto']} allowDataOverflow={true}/>
                            <Tooltip />
                          </LineChart>

                        </TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>
    )
}