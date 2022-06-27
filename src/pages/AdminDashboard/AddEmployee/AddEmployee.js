import "./AddEmployee.css"
import React, {useRef} from "react";
import {client} from '../../../index';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import ConfirmationDialogRaw from '../../../ConfirmationDialogRaw'

async function addUser(nname, aage, ggender, hheight, wweight, ttemperature, ppulse, ppressure, rrespiration, eexercise, vvacation, wwork) {
  const employeeResponse = await client.entities.employee.add({
    name: nname,
    age: isNaN(aage) ? 1 : aage,
    gender: ggender, // ggender
    height: isNaN(hheight) ? 1 : hheight,
    weight: isNaN(wweight) ? 1 : wweight,
    temperature: isNaN(ttemperature) ? 1 : ttemperature,
    pulse: isNaN(ppulse) ? 1 : ppulse,
    pressure: isNaN(ppressure) ? 1 : ppressure,
    respiration: isNaN(rrespiration) ? 1 : rrespiration,
    exercise: isNaN(eexercise) ? 1 : eexercise,
    vacation: isNaN(vvacation) ? 1 : vvacation,
    work: isNaN(wwork) ? 1 : wwork,
  });
}

export default function AddEmployee() {
  const nameRef = useRef('');
  const ageRef = useRef(0);
  const heightRef = useRef(0);
  const weightRef = useRef(0);
  const temperatureRef = useRef(0);
  const pulseRef = useRef(0);
  const pressureRef = useRef(0);
  const respirationRef = useRef(0);
  const exerciseRef = useRef(0);
  const vacationRef = useRef(0);
  const workRef = useRef(0);

  const [openGenderMenu, setGenderOpen] = React.useState(false);
  const [value, setValue] = React.useState('Man');

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
      case nameRef.current.value === "":
      case ageRef.current.value === "":
      case weightRef.current.value === "":
      case heightRef.current.value === "":
      case value === "":
      case isNaN(ageRef.current.value):
      case isNaN(weightRef.current.value):
      case isNaN(heightRef.current.value):
      case isNaN(temperatureRef.current.value):
      case isNaN(pulseRef.current.value):
      case isNaN(pressureRef.current.value):
      case isNaN(respirationRef.current.value):
      case isNaN(exerciseRef.current.value):
      case isNaN(vacationRef.current.value):
      case isNaN(workRef.current.value):
         alert('Please make sure all boxes are filled in correctly!');
         break;
      default:
        addUser(nameRef.current.value, parseFloat(ageRef.current.value), value, parseFloat(heightRef.current.value), parseFloat(weightRef.current.value), parseFloat(temperatureRef.current.value), parseFloat(pulseRef.current.value), parseFloat(pressureRef.current.value), parseFloat(respirationRef.current.value), parseFloat(exerciseRef.current.value), parseFloat(vacationRef.current.value), parseFloat(workRef.current.value));
         break;
   }
  };

    return (
        <div className="addEmployee">
          <div className="userTitleContainer">
            <div className="topLeft">
                <h1 className="userTitle">Add Employee</h1>
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
          <form className="newUserForm">
            <div className="userContainer">
            <div className="userLeft">
            <div className="userShow">
            <span className="userUpdateTitle">Personal Info</span>
            <div className="newUserItem" >
              {/* <label>Full Name</label> */}
              {/* <input type="text" inputref={nameRef} placeholder="John Smith" /> */}
              <TextField
                autoFocus
                margin="dense"
                id="newName"
                label="Full Name"
                fullWidth
                variant="standard"
                inputRef={nameRef}
              />
            </div>
            <div className="newUserItem">
              {/* <label>Age</label> */}
              {/* <input type="text" inputref={ageRef} placeholder="25" /> */}
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
            <div className="newUserItem">
              {/* <label>Height</label> */}
              {/* <input type="text" inputref={heightRef} placeholder="69" /> */}
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
              {/* <label>Weight</label> */}
              {/* <input type="text" inputref={weightRef} placeholder="130" /> */}
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
            {/* <div className="newUserItem">
              <label>Gender</label>
              <div className="newUserGender">
                <input type="radio" name="gender" id="man" value="Man" />
                <label for="Man">Man</label>
                <input type="radio" name="gender" id="woman" value="Woman" />
                <label for="Woman">Female</label>
                <input type="radio" name="gender" id="transgender" value="Transgender" />
                <label for="Transgender">Transgender</label>
                <input type="radio" name="gender" id="nonbinary" value="NonBinary" />
                <label for="NonBinary">NonBinary</label>
                <input type="radio" name="gender" id="notrespond" value="NotRespond" />
                <label for="NotRespond">NotRespond</label>
              </div>
            </div> */}

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
          value={value}
        />
      </List>
    </Box>

            </div>
            </div>
            </div>

            <div className="userContainer">
            <div className="userRight">
            <div className="userShow">
            <span className="userUpdateTitle">Health Details</span>
            <div className="newUserItem">
                {/* <label>Temperature</label> */}
                {/* <input type="text" inputref={temperatureRef} placeholder="98.6" /> */}
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
                <button type="button" className="newUserButton" onClick={handleClickOpen} >Create</button>
            </div>
          </form>
          </div>
        </div>
      );
}