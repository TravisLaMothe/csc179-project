import React, {useRef} from "react";
import PropTypes from 'prop-types';
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
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import ConfirmationDialogRaw from '../ConfirmationDialogRaw'

import {client} from '../index'

async function populateTable() {
      const employeeList =  await client.entities.employee.list()

      let USERS = []
      var i = 0;
     for (const employee of employeeList.items) {
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

         USERS[i++] = createData(name, age, gender, height, weight, temperature, pulse, pressure, respiration, exercise, vacation, work);
     }
     rows = USERS;
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
       {
         date: '2020-01-05',
         customerId: '11091700',
         amount: 3,
       },
       {
         date: '2020-01-02',
         customerId: 'Anonymous',
         amount: 1,
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
                     <TableCell>Customer</TableCell>
                     <TableCell align="right">Amount</TableCell>
                     <TableCell align="right">Total price ($)</TableCell>
                   </TableRow>
                 </TableHead>
                 <TableBody>
                   {row.history.map((historyRow) => (
                     <TableRow key={historyRow.date}>
                       <TableCell component="th" scope="row">
                         {historyRow.date}
                       </TableCell>
                       <TableCell>{historyRow.customerId}</TableCell>
                       <TableCell align="right">{historyRow.amount}</TableCell>
                       <TableCell align="right">
                         {Math.round(historyRow.amount * row.price * 100) / 100}
                       </TableCell>
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
         amount: PropTypes.number.isRequired,
         customerId: PropTypes.string.isRequired,
         date: PropTypes.string.isRequired,
       }),
     ).isRequired,
   }).isRequired,
 };
 
  var rows = [];
 
function AdminDashboard() {
   const [data, setData] = React.useState([])
    
    populateTable().then(res => setData(rows));

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleCancel = () => {
      setOpen(false);
    };

    const handleSubmit = (res) => {
      switch (true) {
         case firstNameRef.current.value === "":
         case lastNameRef.current.value === "":
         case ageRef.current.value === "":
         case weightRef.current.value === "":
         case heightRef.current.value === "":
         case value === "":
         case isNaN(ageRef.current.value):
         case isNaN(weightRef.current.value):
         case isNaN(heightRef.current.value):
            alert('Please make sure all boxes are filled in correctly!');
            break;
         default:

            (async () => {
               try {
                  const employeeAddResponse = await client.entities.employee.add({
                     name: firstNameRef.current.value + ' ' + lastNameRef.current.value,
                     age: ageRef.current.value,
                     gender: value,
                     height: heightRef.current.value,
                     weight: weightRef.current.value,
                     temperature: 0,
                     pulse: 0,
                     pressure: 0,
                     respiration: 0,
                     exercise: 0,
                     vacation: 0,
                     work: 0
                   });
               } catch (e) {

               }
           })();

            setOpen(false);
            break;
      }
      
    };
   

    const firstNameRef = useRef('')
    const lastNameRef = useRef('')
    const ageRef = useRef('')
    const weightRef = useRef('')
    const heightRef = useRef('')




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



    return (
       <div>
          <h1>Admin Dashboard</h1>
          <Stack direction="row"  spacing={2}>
            <Button variant="contained" endIcon={<AddIcon />} 
            onClick={handleClickOpen}>
               Add Employee
            </Button>
         </Stack>

         

         <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>New Employee Creation Form</DialogTitle>
        <DialogContent>

         
          
          <TextField
            autoFocus
            margin="dense"
            id="newName"
            label="First Name"
            type="email"
            fullWidth
            variant="standard"
            inputRef={firstNameRef}
          />


          <TextField
            autoFocus
            margin="dense"
            id="newName"
            label="Last Name"
            type="email"
            fullWidth
            variant="standard"
            inputRef={lastNameRef}
          />







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










          <TextField
            autoFocus
            margin="dense"
            id="newName"
            label="Age (Number)"
            type="email"
            fullWidth
            variant="standard"
            inputRef={ageRef}
          />

          <TextField
            autoFocus
            margin="dense"
            id="newName"
            label="Height (Number in inches)"
            type="email"
            fullWidth
            variant="standard"
            inputRef={heightRef}
          />

          <TextField
            autoFocus
            margin="dense"
            id="newName"
            label="Weight (Number in pounds)"
            type="email"
            fullWidth
            variant="standard"
            inputRef={weightRef}
          />





        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>


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
    );
}

 
export default AdminDashboard;