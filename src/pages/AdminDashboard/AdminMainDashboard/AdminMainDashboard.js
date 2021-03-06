import "./AdminMainDashboard.css"
import React, {useRef, useEffect, useState} from "react";
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

import TableViewIcon from '@mui/icons-material/TableView';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import DownhillSkiingOutlinedIcon from '@mui/icons-material/DownhillSkiingOutlined';
import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';

import PersonIcon from '@mui/icons-material/Person';
import AddchartIcon from '@mui/icons-material/Addchart';
import TimelineIcon from '@mui/icons-material/Timeline';

import {client} from '../../../index';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

let employeeCountInt = 0;

async function getDataCounts() {
  console.log('pulling user data for admindash');
  const employeeList =  await client.entities.employee.list();
  var i = 0;

  // console.log('What: ' + employee1.name);
  for (const employee of employeeList.items) {
      i++;
  }

  employeeCountInt = i;
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

export default function AdminMainDashboard() {
  const [openLoader, setOpenLoader] = React.useState(false);

  const [employeeCount, setEmployeeCount] = useState(NaN);

  useEffect(() => {
    setOpenLoader(true);
    getDataCounts().then(() => {
      setEmployeeCount(employeeCountInt);
      setOpenLoader(false);
    });
  }, []);

  return(
    <div className="AdminMainDashboard">
                          <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="userTitleContainer">
        <h1 className="userTitle">Welcome to HR Dashboard</h1>
      </div>
      <div className="cardContainer">
        <Box sx={{ flexGrow: 1 }}>            
          <Grid container rowSpacing={5} columnSpacing={2} justify="center">

            <Grid item xs={3.333}>
              <Paper>
                <ColorButton className="vt" variant="text">
                <Link to="/ViewTables" className="link">
                    <div className="buttonWrapper">
                        <div className="left">View Tables</div>
                        <div className="right"><TableViewIcon className="adminDashboardIcon" /></div>
                    </div>
                </Link>
                </ColorButton>
                </Paper>
            </Grid>

            <Grid item xs={3.333}>
              <Paper>
                <ColorButton className="vt" variant="text">
                  <Link to="/Analytics" className="link">
                    <div className="buttonWrapper">
                        <div className="left">Analytics</div>
                        <div className="right"><AnalyticsIcon className="adminDashboardIcon" /></div>
                    </div>
                  </Link>
                </ColorButton>
            </Paper>
            </Grid>

            <Grid item xs={3.333}>
              <Paper>
                <ColorButton className="vt" variant="text">
                  <Link to="/AddEmployee" className="link">
                    <div className="buttonWrapper">
                        <div className="left">Add Employee</div>
                        <div className="right"><PersonAddIcon className="adminDashboardIcon" /></div>
                    </div>
                  </Link>
                </ColorButton>
              </Paper>
            </Grid>

            <Grid item xs={3.333}>
              <Paper>
                  <Card sx={{}}>
                  <CardActionArea>
                      <CardContent className="exercise">
                      <Typography gutterBottom variant="h5" component="div">
                          
                      </Typography>
                      <DownhillSkiingOutlinedIcon className="userShowIcon" />
                      <Typography variant="body2" color="text.secondary">
                          
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
                        
                      </Typography>
                      <HolidayVillageOutlinedIcon className="userShowIcon" />
                      <Typography variant="body2" color="text.secondary">
                        
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
                        Employees
                      </Typography>
                      <WorkHistoryOutlinedIcon className="userShowIcon" />
                      <Typography variant="body2" color="text.secondary">
                        {employeeCount}
                      </Typography>
                      </CardContent>
                  </CardActionArea>
                  </Card>
              </Paper>
            </Grid>

          </Grid>
        </Box>
      </div>
    </div>
  )
}