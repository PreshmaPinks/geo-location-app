import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

const CurrentLocation = () => {
  const map = useMap();

  useEffect(() => {
    if (map) {
      map.locate({ setView: true, maxZoom: 7 });

      const onLocationFound = (e) => {
        const { lat, lng } = e.latlng;
        const marker = L.marker([lat, lng]);
        marker
          .addTo(map)
          .bindPopup(
            `You are Here!, Your location is:<br>Latitude: ${lat}<br>Longitude: ${lng}`
          )
          .openPopup();

        map.flyTo([lat, lng], 3);
      };

      map.on("locationfound", onLocationFound);

      return () => {
        map.off("locationfound", onLocationFound);
      };
    }
  }, [map]);

  return null;
};

export default CurrentLocation;
