import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { Link } from "react-router-dom";
import "./Sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TableViewIcon from '@mui/icons-material/TableView';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';

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

export default function AdminSidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
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
                        {/* <ColorButton variant="text">
                            <Link to="/Analytics" className="link">
                                <li className="sidebarListItem">
                                    <AnalyticsIcon className="sidebarIcon" />
                                    Analytics
                                </li>
                            </Link>
                        </ColorButton> */}
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
                <Link to="/" className="link">
                    <div className='sidebarFooter'>
                        <LogoutIcon className="sidebarIcon" />
                        Logout
                    </div>
                </Link>
            </div>
        </div>
    )
}