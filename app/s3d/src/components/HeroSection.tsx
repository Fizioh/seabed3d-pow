import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Application de visualisation des fonds marins
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Explorez les profondeurs de l'océan avec notre carte 3D immersive.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button variant="contained" color="primary">
          Inscrivez-vous maintenant
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;