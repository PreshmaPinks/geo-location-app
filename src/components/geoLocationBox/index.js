import React, { useState } from "react";

const GeoLocationBox = ({ onSubmit }) => {
  const [minLat, setMinLat] = useState(0);
  const [maxLat, setMaxLat] = useState(0);
  const [minLong, setMinLong] = useState(0);
  const [maxLong, setMaxLong] = useState(0);
  return (
    <div style={{ margin: "8px" }}>
      Min Longitude:
      <input
        type="number"
        placeholder="Enter min Longitude"
        value={minLong}
        onChange={(e) => setMinLong(Number(e.target.value))}
      />
      Min Latitude:
      <input
        type="number"
        placeholder="Enter min Latitute"
        value={minLat}
        onChange={(e) => setMinLat(Number(e.target.value))}
      />
      Max Longitude:
      <input
        type="number"
        placeholder="Enter min Longitude"
        value={maxLong}
        onChange={(e) => setMaxLong(Number(e.target.value))}
      />
      Max Latitude:
      <input
        type="number"
        placeholder="Enter max Latitute"
        value={maxLat}
        onChange={(e) => setMaxLat(Number(e.target.value))}
      />
      <button
        type="submit"
        onClick={() => onSubmit(minLong, minLat, maxLong, maxLat)}
      >
        Submit
      </button>
    </div>
  );
};

export default GeoLocationBox;
