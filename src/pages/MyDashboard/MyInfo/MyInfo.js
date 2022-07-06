import "./MyInfo.css"

import React, {useEffect, useState, useRef, useCallback } from "react";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import WcIcon from '@mui/icons-material/Wc';
import StraightenIcon from '@mui/icons-material/Straighten';
import ScaleIcon from '@mui/icons-material/Scale';

import ThermostatIcon from '@mui/icons-material/Thermostat';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import DownhillSkiingOutlinedIcon from '@mui/icons-material/DownhillSkiingOutlined';
import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';

import PublishIcon from '@mui/icons-material/Publish';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import ConfirmationDialogRaw from '../../../ConfirmationDialogRaw'

import {client} from '../../../index'

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import {loggedInId} from '../../Dashboard';

import { useNavigate } from "react-router-dom";


let USER = [];

async function populateUser(id) {
    console.log('pulling data');
    //const employeeList =  await client.entities.employee.list();
    //var i = 0;
    // for (const employee of employeeList.items) {
        //  const name = employee.name;
    //     if (fullname.localeCompare(name) !== 0) {
    //         continue;
    //     }

        const employee = await client.entities.employee.get(id);
        const name = employee.name;
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
    //}
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

  async function updateCurrentInfo(iid, aage, hheight, wweight, ggender) {
    const updateEmployeeHealth = await client.entities.employee.update({
      _id: iid,
      age: aage,
      height: hheight,
      weight: wweight,
      gender: ggender,
    });
  }

export default function MyInfo() {
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
      populateUser(loggedInId).then(res => {
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

        setValue(USER.gender);
      });
    }, []);

    const nameRef = useRef();
    const ageRef = useRef();
    const heightRef = useRef();
    const weightRef = useRef();

    const [openGenderMenu, setGenderOpen] = React.useState(false);
    const [value, setValue] = React.useState('Woman');
  
    const handleClickListItem = () => {
     setGenderOpen(true);
    };
  
    const handleClose = (newValue) => {
     setGenderOpen(false);
  
      if (newValue) {
        setValue(newValue);
      }
    };

     const handleClickOpen = () => {
      switch (true) {
        //case nameRef.current.value === "":
        case ageRef.current.value === "":
        case weightRef.current.value === "":
        case heightRef.current.value === "":
        case isNaN(ageRef.current.value):
        case isNaN(weightRef.current.value):
        case isNaN(heightRef.current.value):
        case value === "":
           alert('Please make sure all boxes are filled in correctly!');
           break;
        default:
           setOpenLoader(true);
           updateCurrentInfo(loggedInId, parseFloat(ageRef.current.value), parseFloat(heightRef.current.value), parseFloat(weightRef.current.value), value
           ).then(res => {
             setOpenLoader(false);
             setAge(ageRef.current.value);
             setGender(value);
             setHeight(heightRef.current.value);
             setWeight(weightRef.current.value);
           });
          break;
     }
    };

    const [open, setOpen] = React.useState(false);
    const handleCloseLoading = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };

    const navigate = useNavigate();

    const [openLoader, setOpenLoader] = React.useState(false);

    return(
        <div className="myInfo">
         <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
        <div className="userTitleContainer">
          <div className="topLeft">
            <h1 className="userTitle">My Info</h1>
          </div>
          <div className="topRight">
            <Button variant="text">
              <Link to="/UserDashboard" className="link">
                Back to Dashboard
              </Link>
            </Button>
          </div>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <div className="userPhoto"><AccountCircleIcon /></div>
              <div className="userShowTopTitle">
                <span className="userShowUsername">{name}</span>
              </div>
            </div>
            <div className="userWrapper">
                <div className="userLeft">
                    <span className="userShowTitle">Personal Information</span>
                    {/* name */}
                    <div className="userShowInfo">
                        <PermIdentityIcon className="userShowIcon" />
                        Name: 
                        <span className="userShowInfoTitle">tlamothe</span>
                    </div>
                    {/* age */} 
                    <div className="userShowInfo">
                        <CalendarTodayIcon className="userShowIcon" />
                        Age:
                        <span className="userShowInfoTitle">{age}</span>
                    </div>
                    {/* gender */}
                    <div className="userShowInfo">
                        <WcIcon className="userShowIcon" />
                        Gender: 
                        <span className="userShowInfoTitle">{gender}</span>
                    </div>
                    {/* height */}
                    <div className="userShowInfo">
                        <StraightenIcon className="userShowIcon" />
                        Height: 
                        <span className="userShowInfoTitle">{height}</span>
                    </div>
                    {/* weight */}
                    <div className="userShowInfo">
                        <ScaleIcon className="userShowIcon" />
                        Weight: 
                        <span className="userShowInfoTitle">{weight}</span>
                    </div>
                </div>

                <div className="userRight">
                    <span className="userShowTitle">Health Details</span>
                    {/* pemperature */}
                    <div className="userShowInfo">
                        <ThermostatIcon className="userShowIcon" />
                        Temperature: 
                        <span className="userShowInfoTitle">{temperature}</span>
                    </div>
                    {/* pulse */}
                    <div className="userShowInfo">
                        <TimelineOutlinedIcon className="userShowIcon" />
                        Pulse: 
                        <span className="userShowInfoTitle">{pulse}</span>
                    </div>
                    {/* pressure */}
                    <div className="userShowInfo">
                        <SpeedOutlinedIcon className="userShowIcon" />
                        Pressure: 
                        <span className="userShowInfoTitle">{pressure}</span>
                    </div>
                    {/* respiration */}
                    <div className="userShowInfo">
                        <AirOutlinedIcon className="userShowIcon" />
                        Respiration: 
                        <span className="userShowInfoTitle">{respiration}</span>
                    </div>
                    {/* exercise */}
                    <div className="userShowInfo">
                        <DownhillSkiingOutlinedIcon className="userShowIcon" />
                        Exercise: 
                        <span className="userShowInfoTitle">{exercise}</span>
                        <span className="userShowInfoTitle"> </span>
                        hours
                    </div>
                    {/* vacation */}
                    <div className="userShowInfo">
                        <HolidayVillageOutlinedIcon className="userShowIcon" />
                        Vacation: 
                        <span className="userShowInfoTitle">{vacation}</span>
                        <span className="userShowInfoTitle"> </span>
                        hours
                    </div>
                    {/* work */}
                    <div className="userShowInfo">
                        <WorkHistoryOutlinedIcon className="userShowIcon" />
                        Work: 
                        <span className="userShowInfoTitle">{work}</span>
                        <span className="userShowInfoTitle"> </span>
                        hours
                    </div>
                </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
              {/* <div className="newUserItem">
                <TextField
                autoFocus
                margin="dense"
                id="newName"
                label="Name"
                fullWidth
                variant="standard"
                inputRef={nameRef}
              />
            </div> */}
            <div className="newUserItem">
                {/* <label>Pressure</label> */}
                {/* <input type="text" inputref={pressureRef} placeholder="100" /> */}
                <TextField
                autoFocus
                margin="dense"
                id="newName"
                label="Age"
                fullWidth
                variant="standard"
                inputRef={ageRef}
              />
            </div>






            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="div" role="group">
        <ListItem
          button
          divider
          aria-haspopup="true"
          aria-controls="ringtone-menu"
          aria-label="Gender"
          onClick={handleClickListItem}
        >
          <ListItemText primary="Gender" secondary={value} />
        </ListItem>
      
        <ConfirmationDialogRaw
          id="ringtone-menu"
          keepMounted
          open={openGenderMenu}
          onClose={handleClose}
        />
      </List>
    </Box>










                <div className="newUserItem">
                {/* <label>Pressure</label> */}
                {/* <input type="text" inputref={pressureRef} placeholder="100" /> */}
                <TextField
                autoFocus
                margin="dense"
                id="newName"
                label="Height"
                fullWidth
                variant="standard"
                inputRef={heightRef}
              />
            </div>
            <div className="newUserItem">
                <TextField
                autoFocus
                margin="dense"
                id="newName"
                label="Weight"
                fullWidth
                variant="standard"
                inputRef={weightRef}
              />
            </div>
            </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <label htmlFor="file">
                    <PublishIcon className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button type="button" className="newUserButton" onClick={handleClickOpen} >Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}