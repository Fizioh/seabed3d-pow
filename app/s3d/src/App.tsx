import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CesiumViewer from './components/CesiumViewer';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <CesiumViewer />
      {/* Autres composants et sections */}
    </div>
  );
};

export default App;
