import React from 'react';
import { MapContainer, TileLayer, WMSTileLayer } from 'react-leaflet';

const MapWithBathymetry = () => {
  const mapCenter = [0, 0]; // Coordonnées initiales du centre de la carte (ici, le centre du monde)
  const mapZoom = 3.5; // Niveau de zoom initial

  return (
    <MapContainer
        center={[51.505, -0.09]} 
      zoom={mapZoom}
      style={{ width: '100%', height: '500px' }}
    >
      {/* Ajoutez un fond de carte de base, par exemple, OpenStreetMap */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* Ajoutez les données bathymétriques de GEBCO via le service WMS */}
      <WMSTileLayer
        url="https://www.gebco.net/data_and_products/gebco_web_services/web_map_service/mapserv?"
        layers="gebco_2020_grid"
        format="image/png"
        transparent={true}
      />
    </MapContainer>
  );
};

export default MapWithBathymetry;