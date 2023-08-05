import React, { useEffect } from 'react';
import * as Cesium from 'cesium';

const CesiumMap = () => {
  let viewer: Cesium.Viewer | undefined;

  useEffect(() => {
    // Cesium initialization
    const initCesium = async () => {
      const terrainProvider = await Cesium.createWorldTerrainAsync();
      viewer = new Cesium.Viewer('cesiumContainer', {
        terrainProvider: terrainProvider,
      });
    };

    initCesium();

    return () => {
      // Clean up Cesium viewer when component unmounts
      if (Cesium.defined(viewer)) {
        viewer && viewer.destroy();
      }
    };
  }, []);

  return <div id="cesiumContainer" style={{ width: '100%', height: '100vh' }} />;
};

export default CesiumMap;