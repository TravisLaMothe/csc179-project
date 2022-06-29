import React from 'react';
import './Dashboard.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import UserDashboard from './MyDashboard/UserDashboard/UserDashboard';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Dashboard() {
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        if (data.get('email')==="user" && data.get('password')==="user") {
            navigate("/UserDashboard", { replace: true });
        } else if (data.get('email')==="admin" && data.get('password')==="admin") {
            navigate("/AdminMainDashboard", { replace: true });
        } else if  (data.get('email')==="partner" && data.get('password')==="partner") {
            navigate("/ViewTable", { replace: true });
        } else {
            alert("You entered wrong username or password. Please try again.")
        }
    };

    return (
        <div className="Dashboard">
            <div className="shadows"><h1>Welcome to Better Health</h1></div>
            <div className="subShadows">Make</div>
            <div className="flip">
                <div><div>work</div></div>
                <div><div>lifeStyle</div></div>
                <div><div>Everything</div></div>
            </div>
            <div className="subShadows">AweSoMe!</div>
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
                Sign In
                </Button>
            </Box>
            <div class="footer">
                <p>Team: Better Dragon</p>
            </div>
        </div>
    )
}