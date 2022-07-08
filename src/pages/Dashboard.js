import React, {useRef, useEffect} from "react";
import './Dashboard.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';

import UserDashboard from './MyDashboard/UserDashboard/UserDashboard';

import {client} from '../index';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export let loggedInId = ""; // 0181c150-13fb-49d3-ec66-6ac66f45b2d1

async function getUser(fullname) {
    console.log('pulling user data for logactivity');
    const employeeList =  await client.entities.employee.list();
    var i = 0;

    // console.log('What: ' + employee1.name);
    for (const employee of employeeList.items) {
         const name = employee.name;
        if (name.localeCompare(fullname) !== 0) {
            continue;
        }
        const iid = employee._id;
        loggedInId = iid;
        break;
    }
  }

export default function Dashboard() {
    const { t, i18n } = useTranslation();

    let navigate = useNavigate();

    const [openLoader, setOpenLoader] = React.useState(false);

    useEffect(() => {
        loggedInId = "";
      }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        setOpenLoader(true);

        // if (data.get('email')==="tlamothe" && data.get('password')==="user") {
        //     navigate("/UserDashboard", { replace: true });
        // } else 
        if (data.get('email')==="admin" && data.get('password')==="admin") {
            setOpenLoader(false);
            navigate("/AdminMainDashboard", { replace: true });
        } else {
            getUser(data.get('email')).then(() => {
                setOpenLoader(false);
                if  (loggedInId !== "" && data.get('password')==="user") {
                    navigate("/UserDashboard", { replace: true });
                } else {
                    alert("You entered wrong username or password. Please try again.")
                }
            });
        }
    };

    return (
        <div className="Dashboard">
                                <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

            <div className="shadows"><h1><Trans i18nKey="description.part1">Welcome to Better Health</Trans></h1></div>
            <div className="subShadows"><Trans i18nKey="description.part2">Make</Trans></div>
            <div className="flip">
                <div><div><Trans i18nKey="description.part3">work</Trans></div></div>
                <div><div><Trans i18nKey="description.part4">lifeStyle</Trans></div></div>
                <div><div><Trans i18nKey="description.part5">Everything</Trans></div></div>
            </div>
            <div className="subShadows"><Trans i18nKey="description.part6">Awesome!</Trans></div>
            <Box className="loginForm" component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="User Name"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                <Trans i18nKey="description.part7">Sign In</Trans>
                </Button>
            </Box>
            <div className="footer">
                <p>Team: Better Dragon</p>
            </div>
        </div>
    )
}