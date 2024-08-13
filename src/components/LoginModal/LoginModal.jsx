import React, { useState } from 'react';
import { Modal, Box, Button, Typography, TextField } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import './LoginModalButton.style.css';
import authorize from '../../services/Auth.service';

export default function LoginModalButton() {
  const [modalOpen, setModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const doLogin = async () => {
    try {
      const response = await authorize({ login, password });

      if (response.token) {
        handleClose();
        setUsername(response.username);
      } else {
        alert('Login failed: ' + response.message);
      }
    } catch (error) {
      console.error('Authorization error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const defaultButtonSx = {
    height: 28,
    textTransform: 'capitalize',
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    p: 3,
    borderRadius: '8px',
  };

  return (
    <div>
      <div className="buttons">
        {username ? (
          <span>{username}</span>
        ) : (
          <Button
            variant="contained"
            color="primary"
            className="login-button"
            onClick={handleOpen}
            sx={{ ...defaultButtonSx }}
          >
            Login
          </Button>
        )}

        <Button
          variant="outlined"
          id="burger-button"
          color="primary"
          className="burger-button"
          sx={{
            width: 28,
            height: 28,
            minWidth: 28,
            minHeight: 28,
          }}
          onClick={handleOpen}
        >
          <MoreVertIcon />
        </Button>
      </div>

      <Modal open={modalOpen} onClose={handleClose}>
        <Box sx={style}>
          <Typography
            variant="h6"
            component="h2"
            sx={{ mb: 4 }}
            color="primary"
          >
            Login
          </Typography>

          <TextField
            id="login"
            label="Email"
            placeholder="email@example.com"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            focused
            sx={{ mb: 4, width: '100%' }}
          />

          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            focused
            sx={{ mb: 2, width: '100%' }}
          />

          <div className="action-container">
            <Button
              color="primary"
              variant="outlined"
              sx={{ ...defaultButtonSx }}
              onClick={handleClose}
            >
              Cancel
            </Button>

            <Button
              color="primary"
              variant="contained"
              sx={{ ...defaultButtonSx }}
              onClick={doLogin}
            >
              Login
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
