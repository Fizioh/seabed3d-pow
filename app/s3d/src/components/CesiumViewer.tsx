import React, { useEffect } from 'react';
import { Cartesian3, createOsmBuildingsAsync, Ion, Math as CesiumMath, Terrain, Viewer } from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

const CesiumViewer = () => {
  useEffect(() => {
    // Your access token can be found at: https://ion.cesium.com/tokens.
    // Replace `your_access_token` with your Cesium ion access token.
    Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjZjcxODQ2MS1kMDAxLTRkNzktOGQ5YS04ZDEyYjk3ZjI3MDIiLCJpZCI6MTQ4ODk5LCJpYXQiOjE2ODc2NDEzMzR9.T1cCMaTfhfi-HRQtNKQkaj56_RE_il_yHtSEZKpRY1w';

    // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
    const viewer = new Viewer('cesiumContainer', {
      terrain: Terrain.fromWorldTerrain(),
    });

    // Fly the camera to San Francisco at the given longitude, latitude, and height.
    viewer.camera.flyTo({
      destination: Cartesian3.fromDegrees(-122.4175, 37.655, 400),
      orientation: {
        heading: CesiumMath.toRadians(0.0),
        pitch: CesiumMath.toRadians(-15.0),
      },
    });

    // Add Cesium OSM Buildings, a global 3D buildings layer.
    const addCesiumOSMBuildings = async () => {
      const buildingTileset = await createOsmBuildingsAsync();
      viewer.scene.primitives.add(buildingTileset);
    };
    addCesiumOSMBuildings();

    // Clean up the Cesium viewer when the component is unmounted
    return () => {
      viewer.destroy();
    };
  }, []);

  return <div id="cesiumContainer" style={{ width: '100%', height: '500px' }} />;
};

export default CesiumViewer;
