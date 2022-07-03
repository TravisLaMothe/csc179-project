import React, {useRef, useState, useEffect} from "react";
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

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import {client} from '../../../index'
import "./Aggregate.css"

var loaded = false;

async function populateTable(ingender) {
  console.log('test: ' + genders[ingender]);

    loaded = true;
    console.log('pulling data');
    const employeeList =  await client.entities.employee.list()
  
    let USERS = []
    var i = 0;
    for (const employee of employeeList.items) {
        const gender = employee.gender;

        if (genders[ingender].localeCompare('All') === 0 || gender.localeCompare(genders[ingender]) === 0) {
          const keyy = employee._id;
          const height = employee.height;
          const weight = employee.weight;
          const temperature = employee.temperature;
          const pulse = employee.pulse;
          const pressure = employee.pressure;
          const respiration = employee.respiration;
          const exercise = employee.exercise;
          const vacation = employee.vacation;
          const work = employee.work;
    
          USERS[i++] = createData(keyy, gender, height, weight, temperature, pulse, pressure, respiration, exercise, vacation, work);
      }
    }
    rows = USERS;
  }

function createData(keyy, gender, height, weight, temperature, pulse, pressure, respiration, exercise, vacation, work) {
    return {
      keyy,
      gender,
      height, 
      weight,
      moreInfo: [
       {
          temperature, pulse, pressure, respiration, exercise, vacation, work
        },
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
            {row.keyy}
          </TableCell>
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
 
 
          
             
              </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
  Row.propTypes = {
    row: PropTypes.shape({
      keyy: PropTypes.string.isRequired,
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
    }).isRequired,
  };
  

  const genders = [
    'All',
    'Woman',
    'Man',
    'Transgender',
    'NonBinary',
    'NotRespond',
  ];

var rows = [];

export default function ViewTables() {
    const [data, setData] = React.useState([]);

    useEffect(() => {
      populateTable(0).then(res => setData(rows));
    }, []);



    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      // loaded = false;
      // populateTable(0);
    };

    const [gender, setGender] = useState(0);

    const handleGenderChange = (event) => {
      setGender(event.target.value);
      loaded = false;
      populateTable(event.target.value).then(res => setData(rows));
    };

    return (
        <div className="viewTables">
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
          <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                    defaultValue={0}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gender}
                    label="Gender"
                    
                    onChange={handleGenderChange}
                    >
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={1}>Woman</MenuItem>
                    <MenuItem value={2}>Man</MenuItem>
                    <MenuItem value={3}>Transgender</MenuItem>
                    <MenuItem value={4}>NonBinary</MenuItem>
                    <MenuItem value={5}>NotRespond</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Stack>


        <TableContainer component={Paper}>
    <Table aria-label="collapsible table">
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell >Key</TableCell>
          <TableCell align="right">Gender</TableCell>
          <TableCell align="right">Height</TableCell>
          <TableCell align="right">Weight</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
       {rows.map((row) => (
          <Row key={row.keyy} row={row} />
       ))}
      </TableBody>
    </Table>
  </TableContainer>
     </div>
     </div>
    )
}