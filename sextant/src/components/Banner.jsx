import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
          <SignalCellularAltIcon /> {document.title} For Cisco
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
