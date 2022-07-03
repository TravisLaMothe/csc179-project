import "./UserDashboard.css"

import React, {useEffect, useState, useRef, useCallback } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


import ThermostatIcon from '@mui/icons-material/Thermostat';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import DownhillSkiingOutlinedIcon from '@mui/icons-material/DownhillSkiingOutlined';
import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';

import PersonIcon from '@mui/icons-material/Person';
import AddchartIcon from '@mui/icons-material/Addchart';
import TimelineIcon from '@mui/icons-material/Timeline';

 import {client} from '../../../index'
 import {loggedInUser} from '../../Dashboard';

let USER = [];

async function populateUser(fullname) {
    console.log('pulling data');
    const employeeList =  await client.entities.employee.list()
  
    var i = 0;
    for (const employee of employeeList.items) {
        const name = employee.name;
        if (fullname.localeCompare(name) != 0) {
            continue;
        }
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
  
         USER = createData(name, age, gender, height, weight, temperature, pulse, pressure, respiration, exercise, vacation, work);
    }
  }

  function createData(name, age, gender, height, weight, temperature, pulse, pressure, respiration, exercise, vacation, work) {
    return {
      name,
      age,
      gender,
      height, 
      weight,
      temperature, pulse, pressure, respiration, exercise, vacation, work
    };
  }

const ColorButton = styled(Button)(() => ({
  display: 'block',
  boxShadow: 'none',
  textTransform: 'none',
  padding: 10,
  fontSize: 24,
  lineHeight: 1.5,
  color: '#000000',
  backgroundColor: '##FBFBFF',
  '&:hover': {
      backgroundColor: '#E4E4FA',
  }
}));

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    borderRadius: 75,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function UserDashboard() {
  const [name, setName] = useState(NaN);
  const [age, setAge] = useState(NaN);
  const [height, setHeight] = useState(NaN);
  const [temperature, setTemperature] = useState(NaN);
  const [weight, setWeight] = useState(NaN);
  const [pulse, setPulse] = useState(NaN);
  const [pressure, setPressure] = useState(NaN);
  const [respiration, setRespiration] = useState(NaN);
  const [exercise, setExercise] = useState(NaN);
  const [vacation, setVacation] = useState(NaN);
  const [work, setWork] = useState(NaN);
  const [gender, setGender] = useState(NaN);

    useEffect(() => {
      populateUser(loggedInUser).then(res => {
        setName(USER.name);
        setAge(USER.age);
        setTemperature(USER.temperature);
        setHeight(USER.height);
        setWeight(USER.weight);
        setPulse(USER.pulse);
        setPressure(USER.pressure);
        setRespiration(USER.respiration);
        setExercise(USER.exercise);
        setVacation(USER.vacation);
        setWork(USER.work);
        setGender(USER.gender);
      });
    }, []);

  return(
    <div className="UserDashboard">
      <div className="userTitleContainer">
        <h1 className="userTitle">Welcome, {name}</h1>
      </div>

      <div className="cardContainer">
        <Box sx={{ flexGrow: 1 }}>            
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

            <Grid item xs={3.333}>
              <Paper>
            <ColorButton className="pi" variant="text">
              <Link to="/MyInfo" className="link">
                  <li className="sidebarListItem">
                      <PersonIcon className="sidebarIcon" />
                      My Information
                  </li>
              </Link>
            </ColorButton>
            </Paper>
            </Grid>

            <Grid item xs={3.333}>
              <Paper>
                <ColorButton className="la" variant="text">
                  <Link to="/LogActivity" className="link">
                      <li className="sidebarListItem">
                          <AddchartIcon className="sidebarIcon" />
                          Log Activity
                      </li>
                  </Link>
                </ColorButton>
            </Paper>
            </Grid>

            <Grid item xs={3.333}>
              <Paper>
                <ColorButton className="ah" variant="text">
                  <Link to="/ActivityHistory" className="link">
                      <li className="sidebarListItem">
                          <TimelineIcon className="sidebarIcon" />
                          Activity History
                      </li>
                  </Link>
                </ColorButton>
              </Paper>
            </Grid>

          </Grid>
        </Box>
      </div>
    </div>
  )
}