import "./LogActivity.css"
import * as React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export default function LogActivity() {
    return(
        <div className="logActivity">
            <div className="userTitleContainer">
                <div className="topLeft">
                  <h1 className="userTitle">Log Activity</h1>
                </div>
                <div className="topRight">
                  <Button variant="text">
                    <Link to="/UserDashboard" className="link">
                      Back to Dashboard
                    </Link>
                  </Button>
                </div>
            </div>
            <div className="userShow">
            <div className="userContainer">
            <div className="userLeft">
            <span className="userUpdateTitle">Today's health</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Temperature</label>
                  <input
                    type="text"
                    placeholder="98.6"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Pulse</label>
                  <input
                    type="text"
                    placeholder="80"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Pressure</label>
                  <input
                    type="text"
                    placeholder="100"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Respiration</label>
                  <input
                    type="text"
                    placeholder="14"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Exercise</label>
                  <input
                    type="text"
                    placeholder="5"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Vacation</label>
                  <input
                    type="text"
                    placeholder="12"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Work</label>
                  <input
                    type="text"
                    placeholder="20"
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userContainer">
              <div className="userRight">
                <button className="newUserButton">Update</button>
              </div>
              </div>
            </form>
            </div>
            </div>
            </div>
        </div>
    )
}