import "./Analytics.css"
import React, {useEffect, useState, useRef } from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import {client} from '../../../index'

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import ThermostatIcon from '@mui/icons-material/Thermostat';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import DownhillSkiingOutlinedIcon from '@mui/icons-material/DownhillSkiingOutlined';
import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';


import PeopleOutlineRounded from '@mui/icons-material/PeopleOutlineRounded';

let loaded = false;
let USERS = [];


async function populateUsers() {
    if (loaded)
        return;
    loaded = true;
    console.log('pulling data');
    const employeeList =  await client.entities.employee.list()

    let i = 0;
    for (const employee of employeeList.items) {
        const gender = employee.gender;
        const age = employee.age;
        const height = employee.height;
        const weight = employee.weight;
        const temperature = employee.temperature;
        const pulse = employee.pulse;
        const pressure = employee.pressure;
        const respiration = employee.respiration;
        const exercise = employee.exercise;
        const vacation = employee.vacation;
        const work = employee.work;

        USERS[i++] = createData(age, gender, height, weight, temperature, pulse, pressure, respiration, exercise, vacation, work);
    }
  }

  function createData(age, gender, height, weight, temperature, pulse, pressure, respiration, exercise, vacation, work) {
    return {
      age,
      gender,
      height, 
      weight,
          temperature, pulse, pressure, respiration, exercise, vacation, work
    };
  }
  
  const genders = [
    'All',
    'Woman',
    'Man',
    'Transgender',
    'NonBinary',
    'NotRespond',
  ];

export default function Analytics() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
      updateAverages(genders[newValue - 1], statistic);
    };

    const handleStatisticChange = (event) => {
        setStatistic(event.target.value);
        updateAverages(genders[value - 1], event.target.value);
      };

    // const [age, setAge] = useState(NaN);
    const [height, setHeight] = useState(NaN);
    const [temperature, setTemperature] = useState(NaN);
    const [weight, setWeight] = useState(NaN);
    const [pulse, setPulse] = useState(NaN);
    const [pressure, setPressure] = useState(NaN);
    const [respiration, setRespiration] = useState(NaN);
    const [exercise, setExercise] = useState(NaN);
    const [vacation, setVacation] = useState(NaN);
    const [work, setWork] = useState(NaN);


    const [statistic, setStatistic] = useState(0);

    const renderAverageBox = (
        <Grid container rowSpacing={5} columnSpacing={2} justify="center">
            <Grid item xs={2.5}>
            <Paper>
                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardContent className="temp">
                    <Typography gutterBottom variant="h5" component="div">
                        Temperature
                    </Typography>
                    <div className="icon">
                        <ThermostatIcon className="userShowIcon" />
                    </div>
                    <Typography variant="body2" color="text.secondary">
                        {temperature}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Paper>
            </Grid>
    
            <Grid item xs={2.5}>
            <Paper>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent className="pulse">
                        <Typography gutterBottom variant="h5" component="div">
                            Pulse
                        </Typography>
                        <TimelineOutlinedIcon className="userShowIcon" />
                        <Typography variant="body2" color="text.secondary">
                            {pulse}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Paper>
            </Grid>
    
            <Grid item xs={2.5}>
            <Paper>
                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardContent className="bp">
                    <Typography gutterBottom variant="h5" component="div">
                        Blood Pressure
                    </Typography>
                    <SpeedOutlinedIcon className="userShowIcon" />
                    <Typography variant="body2" color="text.secondary">
                        {pressure}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Paper>
            </Grid>
    
            <Grid item xs={2.5}>
            <Paper>
                <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardContent className="respiration">
                    <Typography gutterBottom variant="h5" component="div">
                        Respiration
                    </Typography>
                    <AirOutlinedIcon className="userShowIcon" />
                    <Typography variant="body2" color="text.secondary">
                        {respiration}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Paper>
            </Grid>
    
            <Grid item xs={3.333}>
            <Paper>
                <Card sx={{}}>
                <CardActionArea>
                    <CardContent className="exercise">
                    <Typography gutterBottom variant="h5" component="div">
                        Exercise
                    </Typography>
                    <DownhillSkiingOutlinedIcon className="userShowIcon" />
                    <Typography variant="body2" color="text.secondary">
                        {exercise}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Paper>
            </Grid>
    
            <Grid item xs={3.333}>
            <Paper>
                <Card sx={{}}>
                <CardActionArea>
                    <CardContent className="vacation">
                    <Typography gutterBottom variant="h5" component="div">
                        Vacation
                    </Typography>
                    <HolidayVillageOutlinedIcon className="userShowIcon" />
                    <Typography variant="body2" color="text.secondary">
                        {vacation}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Paper>
            </Grid>
    
            <Grid item xs={3.333}>
            <Paper>
                <Card sx={{}}>
                <CardActionArea>
                    <CardContent className="work">
                    <Typography gutterBottom variant="h5" component="div">
                        Work
                    </Typography>
                    <WorkHistoryOutlinedIcon className="userShowIcon" />
                    <Typography variant="body2" color="text.secondary">
                        {work}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Paper>
            </Grid>



            <Grid item xs={5}>
            <Paper>
                <Card sx={{}}>
                <CardActionArea>
                    <CardContent className="height">
                    <Typography gutterBottom variant="h5" component="div">
                        Height
                    </Typography>
                    <PeopleOutlineRounded className="userShowIcon" />
                    <Typography variant="body2" color="text.secondary">
                        {height}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Paper>
            </Grid>

            <Grid item xs={5}>
            <Paper>
                <Card sx={{}}>
                <CardActionArea>
                    <CardContent className="weight">
                    <Typography gutterBottom variant="h5" component="div">
                        Weight
                    </Typography>
                    <PeopleOutlineRounded className="userShowIcon" />
                    <Typography variant="body2" color="text.secondary">
                        {weight}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Paper>
            </Grid>
        </Grid>
      );

      const median = arr => {
        let middle = Math.floor(arr.length / 2);
          arr = [...arr].sort((a, b) => a - b);
        return arr.length % 2 !== 0 ? arr[middle] : (arr[middle - 1] + arr[middle]) / 2;
      };

      function getStandardDeviation (array) {
        const n = array.length
        const mean = array.reduce((a, b) => a + b) / n
        return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
      }

      const average = (array) => array.reduce((a, b) => a + b) / array.length;

    function updateAverages(gender, statistic) {
        let temp = 0, puls = 0, press = 0, resp = 0, exer = 0, vaca = 0, workk = 0, heit = 0, weit = 0;

        let heightArray = [];
        let weightArray = [];

        let tempArray = [];
        let pulsArray = [];
        let pressArray = [];
        let respArray = [];
        let exerArray = [];
        let vacaArray = [];
        let workArray = [];

        let i = 0;
        USERS.forEach(user => {
            if (gender.localeCompare('All') === 0 || gender.localeCompare(user.gender) === 0) {
                tempArray[i] = user.temperature;
                pulsArray[i] = user.pulse;
                pressArray[i] = user.pressure;
                respArray[i] = user.respiration;
                exerArray[i] = user.exercise;
                vacaArray[i] = user.vacation;

                heightArray[i] = user.height;
                weightArray[i] = user.weight;

                workArray[i++] = user.work;
            }
        });
        if (tempArray.length === 0) {
            temp = NaN;
            puls = NaN;
            press = NaN;
            resp = NaN;
            exer = NaN;
            vaca = NaN;
            workk = NaN;
            heit = NaN;
            weit = NaN;
        } else {
            switch (statistic) {
                case 0: // Averages
                    temp = average(tempArray);
                    puls = average(pulsArray);
                    press = average(pressArray);
                    resp = average(respArray);
                    exer = average(exerArray);
                    vaca = average(vacaArray);
                    workk = average(workArray);

                    heit = average(heightArray);
                    weit = average(weightArray);

                    break;
                case 1: // Standard deviations
                    temp = getStandardDeviation(tempArray);
                    puls = getStandardDeviation(pulsArray);
                    press = getStandardDeviation(pressArray);
                    resp = getStandardDeviation(respArray);
                    exer = getStandardDeviation(exerArray);
                    vaca = getStandardDeviation(vacaArray);
                    workk = getStandardDeviation(workArray);

                    heit = getStandardDeviation(heightArray);
                    weit = getStandardDeviation(weightArray);
                    break;
                case 2: // Medians
                    temp = median(tempArray);
                    puls = median(pulsArray);
                    press = median(pressArray);
                    resp = median(respArray);
                    exer = median(exerArray);
                    vaca = median(vacaArray);
                    workk = median(workArray);
                
                    heit = median(heightArray);
                    weit = median(weightArray);
                    break;
                default:
                    break;
            }
        }
        
        setTemperature(Math.round(temp * 100) / 100);
        setPulse(Math.round(puls * 100) / 100);
        setPressure(Math.round(press * 100) / 100);
        setRespiration(Math.round(resp * 100) / 100);
        setExercise(Math.round(exer * 100) / 100);
        setVacation(Math.round(vaca * 100) / 100);
        setWork(Math.round(workk * 100) / 100);

        setHeight(Math.round(heit * 100) / 100);
        setWeight(Math.round(weit * 100) / 100);
      }

    useEffect(() => {
        populateUsers().then(res => {
            updateAverages('All', 0);
        });
      }, []);

    return(
        <div className="analytics">
            <div className="userTitleContainer">
                <div className="topLeft">
                    <h1 className="userTitle">Analytics - Averages</h1>
                </div>
                <div className="topRight">
                    <Button variant="text">
                    <Link to="/AdminMainDashboard" className="link">
                        Back to Dashboard
                    </Link>
                    </Button>
                </div>
            </div>


            <div className="userShow">
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Statistic</InputLabel>
                    <Select
                    defaultValue={0}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={statistic}
                    label="Statistic"
                    
                    onChange={handleStatisticChange}
                    >
                    <MenuItem value={0}>Averages</MenuItem>
                    <MenuItem value={1}>Standard Deviations</MenuItem>
                    <MenuItem value={2}>Medians</MenuItem>
                    </Select>
                </FormControl>
            </Box>


                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="lab API tabs example">
                                <Tab label="All" value="1" />
                                <Tab label="Woman" value="2" />
                                <Tab label="Man" value="3" />
                                <Tab label="Transgender" value="4" />
                                <Tab label="Non-binary/non-conforming" value="5" />
                                <Tab label="Prefer not to respond" value="6" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">{renderAverageBox}</TabPanel>
                        <TabPanel value="2">{renderAverageBox}</TabPanel>
                        <TabPanel value="3">{renderAverageBox}</TabPanel>
                        <TabPanel value="4">{renderAverageBox}</TabPanel>
                        <TabPanel value="5">{renderAverageBox}</TabPanel>
                        <TabPanel value="6">{renderAverageBox}</TabPanel>
                    </TabContext>
                </Box>
            </div>



        </div>
    )
}