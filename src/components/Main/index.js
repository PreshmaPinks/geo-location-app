import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { getLocation } from "../../services/geoLocationServices";
import osmtogeojson from "osmtogeojson";
import GeoLocationBox from "../geoLocationBox";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import CurrentLocation from "../currentLocation";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MyMap = () => {
  const [geoJsonData, setGeoJsonData] = useState(null);
  const [error, setError] = useState("");

  const onEachFeature = (feature, layer) => {
    if (feature.properties) {
      let popupContent = "<ul>";
      for (const key in feature.properties) {
        popupContent += `<li>${key}: ${feature.properties[key]}</li>`;
      }
      popupContent += "</ul>";
      layer.bindPopup(popupContent);
    }
  };

  const pointToLayer = (feature, latlng) => {
    return L.circleMarker(latlng, {
      radius: 10,
      color: "blue",
      fillColor: "red",
      fillOpacity: 0.8,
    });
  };

  const onSubmit = async (minLong, minLat, maxLong, maxLat) => {
    try {
      const data = await getLocation(minLong, minLat, maxLong, maxLat);
      const geojson = osmtogeojson(data);
      setGeoJsonData(geojson);
    } catch (e) {
      //   console.log("e", e.Error);
      setError(e);
    }
  };

  return (
    <div>
      <h1>My Map</h1>
      <GeoLocationBox onSubmit={onSubmit} />
      {error && (
        <div style={{ margin: "10px", color: "red" }}>
          An error occurred: {error.message}
        </div>
      )}
      <MapContainer
        style={{ height: "80vh", width: "100vw", border: "2px solid black" }}
        zoom={8}
        center={[51.505, -0.09]}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <CurrentLocation />
        {geoJsonData && (
          <GeoJSON
            data={geoJsonData}
            onEachFeature={onEachFeature}
            pointToLayer={pointToLayer}
          />
        )}
      </MapContainer>
    </div>
  );
};

export default MyMap;
