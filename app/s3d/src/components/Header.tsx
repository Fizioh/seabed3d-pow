import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mon Application
        </Typography>
        {/* Ajoutez ici vos éléments de menu de navigation */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;