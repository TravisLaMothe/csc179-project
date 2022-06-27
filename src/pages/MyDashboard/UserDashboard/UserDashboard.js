import "./UserDashboard.css"
import * as React from 'react';
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

// import {client} from '../../../index'
// async function getUser() {
//     const userResponse = await client.entities.user.get('0181747f-3b8d-d2ac-139b-3052b7e850b7');
//     const name = userResponse.name; 
//     const age = userResponse.age;
//     const gender = userResponse.gender;
//     const height = userResponse.height;
//     const weight = userResponse.weight;
//     const temperature = userResponse.temperature;
//     const pulse = userResponse.pulse;
//     const pressure = userResponse.pressure;
//     const respiration = userResponse.respiration;
//     const exercise = userResponse.exercise;
//     const vacation = userResponse.vacation;
//     const work = userResponse.work;
// }

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
  return(
    <div className="UserDashboard">
      <div className="userTitleContainer">
        <h1 className="userTitle">Welcome, Anna Becker</h1>
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
                        98.6
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
                            100
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
                          120
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
                          12
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
                          12
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
                          34
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
                        91
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