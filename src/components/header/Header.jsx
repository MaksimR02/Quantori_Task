import * as React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import '../../styles/variable-color.css';
import './Header.style.css';

import LoginModalButton from '../LoginModal/LoginModal';

export default function Header() {
  const [tab, setTab] = React.useState('Home');
  const buttonSx = {
    '&.Mui-selected': {
      backgroundColor: '#66837e',
      color: 'white',
    },
    color: '#66837e',
    border: 'none',
    textTransform: 'capitalize',
  };

  const groupSx = {
    display: 'flex',
    border: '1px solid #66837e',
    borderRadius: '50px',

    '& .MuiToggleButtonGroup-grouped': {
      border: 'none',
      borderRadius: '0px',
      margin: 0,
      '&:first-of-type': {
        borderTopLeftRadius: '50px',
        borderBottomLeftRadius: '50px',
      },
      '&:last-of-type': {
        borderTopRightRadius: '50px',
        borderBottomRightRadius: '50px',
      },
    },
  };

  return (
    <div className="container-header">
      <div className="left">
        <AccountCircleIcon className="main-icon" sx={{ fontSize: 40 }} />
        <ToggleButtonGroup
          className="tab-group"
          value={tab}
          exclusive
          onChange={(e, tab) => {
            setTab(tab);
          }}
          sx={groupSx}
        >
          <ToggleButton value="Home" sx={buttonSx}>
            Home
          </ToggleButton>
          <ToggleButton value="Contact" sx={buttonSx}>
            Contact
          </ToggleButton>
          <ToggleButton value="About" sx={buttonSx}>
            About
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className="right">
        <LoginModalButton></LoginModalButton>
      </div>
    </div>
  );
}
