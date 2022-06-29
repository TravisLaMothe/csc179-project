import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { Link } from "react-router-dom";
import "./Sidebar.css"
import TableViewIcon from '@mui/icons-material/TableView';
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

export default function PartnerSidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
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
                    <Link to="/" className="link">
                    <div className='sidebarFooter'>
                        <LogoutIcon className="sidebarIcon" />
                        Logout
                    </div>
                </Link>
                </div>
            </div>
        </div>
    )
}