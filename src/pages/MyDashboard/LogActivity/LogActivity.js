import "./LogActivity.css"
import React, {useRef, useEffect} from "react";
import {client} from '../../../index';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

import {loggedInUser, loggedInId} from '../../Dashboard';

import { useNavigate } from "react-router-dom";

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

let hasUpdated = false;

async function updateHealthHistory(nname, ddate, ttemperature, ppulse, ppressure, rrespiration, eexercise, vvacation, wwork) {
  if (hasUpdated)
    return;
  hasUpdated = true;
  const employeeResponse = await client.entities.employeeHistory.add({
    name: nname,
    date: ddate,
    temperature: isNaN(ttemperature) ? 1 : ttemperature,
    pulse: isNaN(ppulse) ? 1 : ppulse,
    pressure: isNaN(ppressure) ? 1 : ppressure,
    respiration: isNaN(rrespiration) ? 1 : rrespiration,
    exercise: isNaN(eexercise) ? 1 : eexercise,
    vacation: isNaN(vvacation) ? 1 : vvacation,
    work: isNaN(wwork) ? 1 : wwork,
  });
}

async function updateCurrentHealth(nname, ttemperature, ppulse, ppressure, rrespiration, eexercise, vvacation, wwork) {

  // const employe =  await client.entities.employee.get(loggedInId);

  //   employe.temperature = ttemperature;
  //   employe.pulse = ppulse;
  //   employe.pressure = ppressure;
  //   employe.respiration = rrespiration;
  //   employe.exercise = eexercise;
  //   employe.vacation = vvacation;
  //   employe.work = wwork;

  const updateEmployeeHealth = await client.entities.employee.update({
    _id: loggedInId,
    pulse: ppulse,
    temperature: ttemperature,
    pressure: ppressure,
    respiration: rrespiration,
    exercise: eexercise,
    vacation: vvacation,
    work: wwork,
  });
}

let USER = [];

async function getUser(fullname) {
    console.log('pulling user data for logactivity');
    const employeeList =  await client.entities.employee.list();
    var i = 0;
    for (const employee of employeeList.items) {
        const name = employee.name;
        if (fullname.localeCompare(name) !== 0) {
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
  
         USER = createData(fullname, age, gender, height, weight, temperature, pulse, pressure, respiration, exercise, vacation, work);
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

export default function LogActivity() {

  const temperatureRef = useRef(0);
  const pulseRef = useRef(0);
  const pressureRef = useRef(0);
  const respirationRef = useRef(0);
  const exerciseRef = useRef(0);
  const vacationRef = useRef(0);
  const workRef = useRef(0);

  const inputRef = React.useRef(null)

  const navigate = useNavigate();

  const [openLoader, setOpenLoader] = React.useState(false);

  const handleClickOpen = () => {
    switch (true) {
      case isNaN(temperatureRef.current.value) || temperatureRef.current.value === "":
      case isNaN(pulseRef.current.value) || pulseRef.current.value === "":
      case isNaN(pressureRef.current.value) || pressureRef.current.value === "":
      case isNaN(respirationRef.current.value) || respirationRef.current.value === "":
      case isNaN(exerciseRef.current.value) || exerciseRef.current.value === "":
      case isNaN(vacationRef.current.value) || vacationRef.current.value === "":
      case isNaN(workRef.current.value) || workRef.current.value === "":
         alert('Please make sure all boxes are filled in correctly!');
         break;
      default:
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        setOpenLoader(true);
        updateHealthHistory(loggedInUser, today.toUTCString(), parseFloat(USER.temperature), parseFloat(USER.pulse), parseFloat(USER.pressure), parseFloat(USER.respiration), parseFloat(USER.exercise), parseFloat(USER.vacation), parseFloat(USER.work));
        updateCurrentHealth(loggedInUser, parseFloat(temperatureRef.current.value), parseFloat(pulseRef.current.value), parseFloat(pressureRef.current.value), parseFloat(respirationRef.current.value), parseFloat(exerciseRef.current.value), parseFloat(vacationRef.current.value), parseFloat(workRef.current.value)
        ).then(res => {
          setOpenLoader(false);
          navigate('/UserDashboard');
        });
        
      //   setOpenLoader(true);
      //   setTimeout(function () {
      //     setOpenLoader(false);
      //     navigate('/UserDashboard');
      // }, 5000);
          
         break;
   }
  };

  useEffect(() => {
    getUser(loggedInUser);
  }, []);

    return(
        <div className="logActivity">
                    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
            <div className="userTitleContainer">
                <div className="topLeft">
                  <h1 className="userTitle">Log Activity</h1>
                </div>
                <div className="topRight">
                  <Button variant="text" ref={inputRef}>
                    <Link to="/UserDashboard" className="link" >
                      Back to Dashboard
                    </Link>
                  </Button>
                </div>
            </div>
            <div className="userShow">
          <form className="newUserForm">
            <div className="userContainer">
            <div className="userLeft">
            <div className="userShow">
            <span className="userUpdateTitle">Today's Health</span>

            <div className="newUserItem">
                <TextField
                autoFocus
                margin="dense"
                id="newName"
                label="Temperature"
                fullWidth
                variant="standard"
                inputRef={temperatureRef}
              />
            </div>
            <div className="newUserItem">
                {/* <label>Pulse</label> */}
                {/* <input type="text" inputref={pulseRef} placeholder="80" /> */}
                <TextField
                autoFocus
                margin="dense"
                id="newName"
                label="Pulse"
                fullWidth
                variant="standard"
                inputRef={pulseRef}
              />
            </div>
            <div className="newUserItem">
                {/* <label>Pressure</label> */}
                {/* <input type="text" inputref={pressureRef} placeholder="100" /> */}
                <TextField
                autoFocus
                margin="dense"
                id="newName"
                label="Pressure"
                fullWidth
                variant="standard"
                inputRef={pressureRef}
              />
            </div>
            <div className="newUserItem">
                {/* <label>Respiration</label> */}
                {/* <input type="text" inputref={respirationRef} placeholder="14" /> */}
                <TextField
                autoFocus
                margin="dense"
                id="newName"
                label="Respiration"
                fullWidth
                variant="standard"
                inputRef={respirationRef}
              />
            </div>
            <div className="newUserItem">
                {/* <label>Exercise</label> */}
                {/* <input type="text" inputref={exerciseRef} placeholder="5" /> */}
                <TextField
                autoFocus
                margin="dense"
                id="newName"
                label="Exercise"
                fullWidth
                variant="standard"
                inputRef={exerciseRef}
              />
            </div>
            <div className="newUserItem">
                {/* <label>Vacation</label> */}
                {/* <input type="text" inputref={vacationRef} placeholder="12" /> */}
                <TextField
                autoFocus
                margin="dense"
                id="newName"
                label="Vacation"
                fullWidth
                variant="standard"
                inputRef={vacationRef}
              />
            </div>
            <div className="newUserItem">
                {/* <label>Work</label> */}
                {/* <input type="text" inputref={workRef} placeholder="20" /> */}
                <TextField
                autoFocus
                margin="dense"
                id="newName"
                label="Work"
                fullWidth
                variant="standard"
                inputRef={workRef}
              />
            </div>
            </div>
            </div>
            </div>
            <div className="userRight">
                <button type="button" className="newUserButton" onClick={handleClickOpen} >Update</button>
            </div>
          </form>



            
            </div>
            </div>
          
    )
}