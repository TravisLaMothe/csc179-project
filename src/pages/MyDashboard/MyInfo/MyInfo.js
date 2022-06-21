import "./MyInfo.css"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import WcIcon from '@mui/icons-material/Wc';
import StraightenIcon from '@mui/icons-material/Straighten';
import ScaleIcon from '@mui/icons-material/Scale';

import ThermostatIcon from '@mui/icons-material/Thermostat';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import DownhillSkiingOutlinedIcon from '@mui/icons-material/DownhillSkiingOutlined';
import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';

import PublishIcon from '@mui/icons-material/Publish';

import {client} from '../../../index'
async function getUser() {
    const userResponse = await client.entities.user.get('0181747f-3b8d-d2ac-139b-3052b7e850b7');
    const name = userResponse.name; 
    const age = userResponse.age;
    const gender = userResponse.gender;
    const height = userResponse.height;
    const weight = userResponse.weight;
    const temperature = userResponse.temperature;
    const pulse = userResponse.pulse;
    const pressure = userResponse.pressure;
    const respiration = userResponse.respiration;
    const exercise = userResponse.exercise;
    const vacation = userResponse.vacation;
    const work = userResponse.work;
}

export default function MyInfo() {
    return(
        <div className="myInfo">
        <div className="userTitleContainer">
          <h1 className="userTitle">My Info</h1>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <div className="userPhoto"><AccountCircleIcon /></div>
              <div className="userShowTopTitle">
                <span className="userShowUsername">Anna Becker</span>
              </div>
            </div>
            <div className="userWrapper">
                <div className="userLeft">
                    <span className="userShowTitle">Personal Information</span>
                    {/* name */}
                    <div className="userShowInfo">
                        <PermIdentityIcon className="userShowIcon" />
                        Name: 
                        <span className="userShowInfoTitle">annabeck99</span>
                    </div>
                    {/* age */}
                    <div className="userShowInfo">
                        <CalendarTodayIcon className="userShowIcon" />
                        Age:
                        <span className="userShowInfoTitle">10.12.1999</span>
                    </div>
                    {/* gender */}
                    <div className="userShowInfo">
                        <WcIcon className="userShowIcon" />
                        Gender: 
                        <span className="userShowInfoTitle">10.12.1999</span>
                    </div>
                    {/* height */}
                    <div className="userShowInfo">
                        <StraightenIcon className="userShowIcon" />
                        Height: 
                        <span className="userShowInfoTitle">10.12.1999</span>
                    </div>
                    {/* weight */}
                    <div className="userShowInfo">
                        <ScaleIcon className="userShowIcon" />
                        Weight: 
                        <span className="userShowInfoTitle">10.12.1999</span>
                    </div>
                </div>

                <div className="userRight">
                    <span className="userShowTitle">Health Details</span>
                    {/* pemperature */}
                    <div className="userShowInfo">
                        <ThermostatIcon className="userShowIcon" />
                        Temperature: 
                        <span className="userShowInfoTitle">+1 123 456 67</span>
                    </div>
                    {/* pulse */}
                    <div className="userShowInfo">
                        <TimelineOutlinedIcon className="userShowIcon" />
                        Pulse: 
                        <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                    </div>
                    {/* pressure */}
                    <div className="userShowInfo">
                        <SpeedOutlinedIcon className="userShowIcon" />
                        Pressure: 
                        <span className="userShowInfoTitle">New York | USA</span>
                    </div>
                    {/* respiration */}
                    <div className="userShowInfo">
                        <AirOutlinedIcon className="userShowIcon" />
                        Respiration: 
                        <span className="userShowInfoTitle">New York | USA</span>
                    </div>
                    {/* exercise */}
                    <div className="userShowInfo">
                        <DownhillSkiingOutlinedIcon className="userShowIcon" />
                        Exercise: 
                        <span className="userShowInfoTitle">New York | USA</span>
                    </div>
                    {/* vacation */}
                    <div className="userShowInfo">
                        <HolidayVillageOutlinedIcon className="userShowIcon" />
                        Vacation: 
                        <span className="userShowInfoTitle">New York | USA</span>
                    </div>
                    {/* work */}
                    <div className="userShowInfo">
                        <WorkHistoryOutlinedIcon className="userShowIcon" />
                        Work: 
                        <span className="userShowInfoTitle">New York | USA</span>
                    </div>
                </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="annabeck99"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Anna Becker"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+1 123 456 67"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="New York | USA"
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <label htmlFor="file">
                    <PublishIcon className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}