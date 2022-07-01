import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import "./Header.css"
import logo from "../../assets/images/logo.png";
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import i18n from 'i18next';
import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  sp: { nativeName: 'Spanish' },
  cn: { nativeName: 'Chinese'}
};

function Header() {
  const [state, setMailState] = React.useState({
    right: false,
  });

  const toggleMailDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setMailState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleMailDrawer(anchor, false)}
      onKeyDown={toggleMailDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <div>
            {Object.keys(lngs).map((lng) => (
              <Button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                {lngs[lng].nativeName}
              </Button>
            ))}
          </div>
          </Menu>
          <div className="headerIconContainer">
            <Badge badgeContent={3} color="error">
              {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                  <MailIcon onClick={toggleMailDrawer(anchor, true)}>{anchor}</MailIcon>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleMailDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </Badge>
          </div>

          <div className="headerIconContainer">
            <Badge badgeContent={2} color="error">
              <NotificationsNoneIcon />
            </Badge>
          </div>
          
          <div className="headerIconContainer">
            <Badge color="error">
              <LanguageIcon         id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}/>
            </Badge>
          </div>

          <div className="headerIconContainer">
            <div className="userSMIcon">
              <AccountCircleIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;