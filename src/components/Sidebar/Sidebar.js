import { Link } from "react-router-dom";
import "./Sidebar.css"
import PersonIcon from '@mui/icons-material/Person';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TableViewIcon from '@mui/icons-material/TableView';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">My Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem">
                                <PersonIcon className="sidebarIcon" />
                                My Info
                            </li>
                        </Link>
                        <Link to="/LogActivity" className="link">
                            <li className="sidebarListItem">
                                <TimelineIcon className="sidebarIcon" />
                                Log Activity
                            </li>
                        </Link>
                        <Link to="/ActivityHistory" className="link">
                            <li className="sidebarListItem">
                                <TrendingUpIcon className="sidebarIcon" />
                                Activity History
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Admin Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/ViewTables" className="link">
                            <li className="sidebarListItem">
                                <TableViewIcon className="sidebarIcon" />
                                View Tables
                            </li>
                        </Link>
                        <Link to="/Analytics" className="link">
                            <li className="sidebarListItem">
                                <TimelineIcon className="sidebarIcon" />
                                Analytics
                            </li>
                        </Link>
                        <Link to="/AddEmployee" className="link">
                            <li className="sidebarListItem">
                                <PersonAddIcon className="sidebarIcon" />
                                Add Employee
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Partner Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/ViewTable" className="link">
                            <li className="sidebarListItem">
                                <TableViewIcon className="sidebarIcon" />
                                View Table (name only)
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}