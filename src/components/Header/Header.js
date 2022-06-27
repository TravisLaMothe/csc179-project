import "./Header.css"
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="topLeft">
          <Link to="/" className="link">
            <img className="logoPic" src={logo} alt="Logo" />
            <span className="logoText"> Better Health</span>
          </Link>
        </div>
        <div className="topRight">
          <div className="headerIconContainer">
            <NotificationsNoneIcon />
            <span className="headerIconBag">3</span>
          </div>
          <div className="headerIconContainer">
            <LanguageIcon />
            <span className="headerIconBag">2</span>
          </div>
          <div className="headerIconContainer">
            <SettingsIcon />
          </div>
          <div className="headerIconContainer">
              <AccountCircleIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;