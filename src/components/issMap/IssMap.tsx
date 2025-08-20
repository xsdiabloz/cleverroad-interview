import React, { useState, type FC } from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

interface IMapProps {
  longitude: number;
  latitude: number;
}

const IssMap: FC<IMapProps> = ({ longitude, latitude }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const center = {
    lat: latitude,
    lng: longitude,
  };

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "400px" }}
      center={center}
      zoom={4}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default IssMap;
