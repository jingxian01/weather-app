import { LatLngExpression } from "leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";

interface MapListenProps {
  position: LatLngExpression;
  setPosition: (position) => void;
}

const Map: React.FC<MapListenProps> = ({ position, setPosition }) => {
  const Markers = () => {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return position === null ? null : <Marker position={position}></Marker>;
  };

  return (
    <MapContainer
      center={position}
      zoom={3}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers />
    </MapContainer>
  );
};

export default Map;
