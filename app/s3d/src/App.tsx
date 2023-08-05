import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CesiumViewer from './components/CesiumViewer';
import CesiumMap from './components/CesiumMap'
import MapWithBathymetry from './components/MapWithBathymetry';
import Box from '@mui/material/Box'

const App: React.FC = () => {
  return (
    <Box>
      <Header />
      <HeroSection />
      <MapWithBathymetry />
       {/*<CesiumViewer />
      Autres composants et sections */}
    </Box>
  );
};

export default App;
