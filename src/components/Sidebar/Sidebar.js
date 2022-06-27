import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { Link } from "react-router-dom";
import "./Sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import TimelineIcon from '@mui/icons-material/Timeline';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AddchartIcon from '@mui/icons-material/Addchart';
import TableViewIcon from '@mui/icons-material/TableView';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const ColorButton = styled(Button)(() => ({
    width: 'fix-content',
    textAlign: 'left',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    lineHeight: 1.5,
    color: '#000000',
    backgroundColor: '##FBFBFF',
    '&:hover': {
        backgroundColor: '#E4E4FA',
    },
    '&:active': {
        backgroundColor: '#E4E4FA',
    },
}));

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">User Menu</h3>
                    <ul className="sidebarList">
                        <ColorButton variant="text">
                            <Link to="/UserDashboard" className="link">
                                <li className="sidebarListItem">
                                    <DashboardIcon className="sidebarIcon" />
                                    Dashboard
                                </li>
                            </Link>
                        </ColorButton>
                        <ColorButton variant="text">
                            <Link to="/MyInfo" className="link">
                                <li className="sidebarListItem">
                                    <PersonIcon className="sidebarIcon" />
                                    My Info
                                </li>
                            </Link>
                        </ColorButton>
                        <ColorButton variant="text">
                            <Link to="/LogActivity" className="link">
                                <li className="sidebarListItem">
                                    <AddchartIcon className="sidebarIcon" />
                                    Log Activity
                                </li>
                            </Link>
                        </ColorButton>
                        <ColorButton variant="text">
                            <Link to="/ActivityHistory" className="link">
                                <li className="sidebarListItem">
                                    <TimelineIcon className="sidebarIcon" />
                                    Activity History
                                </li>
                            </Link>
                        </ColorButton>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Admin Menu</h3>
                    <ul className="sidebarList">
                        <ColorButton variant="text">
                            <Link to="/AdminMainDashboard" className="link">
                                <li className="sidebarListItem">
                                    <DashboardIcon className="sidebarIcon" />
                                    Dashboard
                                </li>
                            </Link>
                        </ColorButton>
                        <ColorButton variant="text">
                            <Link to="/ViewTables" className="link">
                                <li className="sidebarListItem">
                                    <TableViewIcon className="sidebarIcon" />
                                    View Tables
                                </li>
                            </Link>
                        </ColorButton>
                        <ColorButton variant="text">
                            <Link to="/Analytics" className="link">
                                <li className="sidebarListItem">
                                    <AnalyticsIcon className="sidebarIcon" />
                                    Analytics
                                </li>
                            </Link>
                        </ColorButton>
                        <ColorButton variant="text">
                            <Link to="/AddEmployee" className="link">
                                <li className="sidebarListItem">
                                    <PersonAddIcon className="sidebarIcon" />
                                    Add Employee
                                </li>
                            </Link>
                        </ColorButton>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Partner Menu</h3>
                    <ul className="sidebarList">
                        <ColorButton variant="text">
                            <Link to="/ViewTable" className="link">
                                <li className="sidebarListItem">
                                    <TableViewIcon className="sidebarIcon" />
                                    View Table
                                </li>
                            </Link>
                        </ColorButton>
                    </ul>
                </div>
            </div>
        </div>
    )
}