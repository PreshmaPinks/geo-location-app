const url = "https://www.openstreetmap.org/api/0.6/map";

export const getLocation = async (minLong, minLat, maxLong, maxLat) => {
  try {
    const response = await fetch(
      `${url}?bbox=${minLong},${minLat},${maxLong},${maxLat}`
    );
    const osmText = await response.text();
    if (!response.ok) throw new Error(osmText);

    const domParser = new DOMParser();
    return domParser.parseFromString(osmText, "application/xml");
  } catch (e) {
    return Promise.reject(e);
  }
};
