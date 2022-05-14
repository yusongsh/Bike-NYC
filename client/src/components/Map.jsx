import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBb8JrVABmeVpoBE1FcOlz4bX4PDV8Jhgk",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Maps />;
}
const center = { lat: 40.712776, lng: -74.005974 };

function Maps() {
  return (
    <div style={{ widh: "100vw", height: "400px" }}>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker />
      </GoogleMap>
    </div>
  );
}
