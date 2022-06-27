import "./Analytics.css"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function Analytics() {
    return(
        <div className="analytics">
            <div className="userTitleContainer">
                <div className="topLeft">
                    <h1 className="userTitle">Analytics</h1>
                </div>
                <div className="topRight">
                    <Button variant="text">
                    <Link to="/AdminMainDashboard" className="link">
                        Back to Dashboard
                    </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}