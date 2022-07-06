import React, {useRef, useEffect} from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import {client} from '../../../index'
import "./ViewTables.css"

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

var loaded = false;
async function populateTable() {
    if (loaded)
      return;
    loaded = true;
    console.log('pulling data');
    const employeeList =  await client.entities.employee.list();
  
    let USERS = []
    var i = 0;
    for (const employee of employeeList.items) {
      const iid = employee._id;
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
  
        USERS[i] = createData(name, age, gender, height, weight, temperature, pulse, pressure, respiration, exercise, vacation, work);

        const employeeHistoryList =  await client.entities.employeeHistory.list();
        let x = 0;
        for (const employeeHistory of employeeHistoryList.items) {
          const nameHist = employeeHistory.name; 
          if (nameHist.localeCompare(iid) === 0) {
            const dateHist = employeeHistory.date;
            const temperatureHist = employeeHistory.temperature;
            const pulseHist = employeeHistory.pulse;
            const pressureHist = employeeHistory.pressure;
            const respirationHist = employeeHistory.respiration;
            const exerciseHist = employeeHistory.exercise;
            const vacationHist = employeeHistory.vacation;
            const workHist = employeeHistory.work;
    
            USERS[i].history[x++] = createSingletonData(dateHist, temperatureHist, pulseHist, pressureHist, respirationHist, exerciseHist, vacationHist, workHist);
          }
        }
        i++;
    }

    
    rows = USERS;
  }

  function createSingletonData(date, temperature, pulse, pressure, respiration, exercise, vacation, work) {
    return {
      date,
      temperature, pulse, pressure, respiration, exercise, vacation, work
    };
  }

function createData(name, age, gender, height, weight, temperature, pulse, pressure, respiration, exercise, vacation, work) {
    return {
      name,
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

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
 
 
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.age}</TableCell>
          <TableCell align="right">{row.gender}</TableCell>
          <TableCell align="right">{row.height}</TableCell>
          <TableCell align="right">{row.weight}</TableCell>
        </TableRow>
        <TableRow>
 
 
 
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
 
 
            <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  More Info
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Temperature</TableCell>
                      <TableCell>Pulse</TableCell>
                      <TableCell>Pressure</TableCell>
                      <TableCell>Respiration</TableCell>
                      <TableCell>Exercise</TableCell>
                      <TableCell>Vacation</TableCell>
                      <TableCell>Work</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.moreInfo.map((moreInfoRow) => (
                      <TableRow key={moreInfoRow.temperature}>
                        <TableCell component="th" scope="row">
                          {moreInfoRow.temperature}
                        </TableCell>
                        <TableCell>{moreInfoRow.pulse}</TableCell>
                        <TableCell>{moreInfoRow.pressure}</TableCell>
                        <TableCell>{moreInfoRow.respiration}</TableCell>
                        <TableCell>{moreInfoRow.exercise}</TableCell>
                        <TableCell>{moreInfoRow.vacation}</TableCell>
                        <TableCell>{moreInfoRow.work}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
 
 
            <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead> 
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Temperature</TableCell>
                      <TableCell >Pulse</TableCell>
                      <TableCell >Pressure</TableCell>
                      <TableCell >Respiration</TableCell>
                      <TableCell >Exercise</TableCell>
                      <TableCell >Vacation</TableCell>
                      <TableCell >Work</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <TableCell component="th" scope="row">
                          {historyRow.date}
                        </TableCell>
                        <TableCell>{historyRow.temperature}</TableCell>
                        <TableCell >{historyRow.pulse}</TableCell>
                        <TableCell >{historyRow.pressure}</TableCell>
                        <TableCell >{historyRow.respiration}</TableCell>
                        <TableCell >{historyRow.exercise}</TableCell>
                        <TableCell >{historyRow.vacation}</TableCell>
                        <TableCell >{historyRow.work}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
             
              </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
  Row.propTypes = {
    row: PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      gender: PropTypes.string.isRequired,
      height: PropTypes.number.isRequired,
      weight: PropTypes.number.isRequired,
      moreInfo: PropTypes.arrayOf(
       PropTypes.shape({
          temperature: PropTypes.number.isRequired, 
          pulse: PropTypes.number.isRequired, 
          pressure: PropTypes.number.isRequired, 
          respiration: PropTypes.number.isRequired,
           exercise: PropTypes.number.isRequired, 
           vacation: PropTypes.number.isRequired, 
           work: PropTypes.number.isRequired
        }),
 
      ).isRequired,
      history: PropTypes.arrayOf(
        PropTypes.shape({
          date: PropTypes.string.isRequired,
          temperature: PropTypes.number.isRequired,
          pulse: PropTypes.number.isRequired,
          pressure: PropTypes.number.isRequired,
          respiration: PropTypes.number.isRequired,
          exercise: PropTypes.number.isRequired,
          vacation: PropTypes.number.isRequired,
          work: PropTypes.number.isRequired,
        }),
      ).isRequired,
    }).isRequired,
  };
  
var rows = [];

export default function ViewTables() {
    const [data, setData] = React.useState([]);

    const [openLoader, setOpenLoader] = React.useState(false);

    useEffect(() => {
      setOpenLoader(true);
      populateTable().then(res => {
        setData(rows);
        setOpenLoader(false);
      })
    }, []);

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpenLoader(true);
      loaded = false;
      populateTable().then(() => setOpenLoader(false));
    };

  

    return (
        <div className="viewTables">
                              <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
          <div className="userTitleContainer">
            <div className="topLeft">
              <h1 className="userTitle">View Tables</h1>
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
        

        <Stack direction="row"  spacing={2}>
          <Button variant="contained"
          onClick={handleClick}>
             Refresh
          </Button>
        </Stack>


        <TableContainer component={Paper}>
    <Table aria-label="collapsible table">
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell>Full Name</TableCell>
          <TableCell align="right">Age</TableCell>
          <TableCell align="right">Gender</TableCell>
          <TableCell align="right">Height</TableCell>
          <TableCell align="right">Weight</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
       {rows.map((row) => (
          <Row key={row.name} row={row} />
       ))}
      </TableBody>
    </Table>
  </TableContainer>
     </div>
     </div>
    )
}