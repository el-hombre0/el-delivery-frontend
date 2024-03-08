import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { useRef, useEffect, useState } from "react";

export const MapBox = (props: any) => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZXZlbmRvdCIsImEiOiJjbHRpeXc2dW8wZ2YzMm1wNmsxZDd6cnNoIn0.JhOFqRXEYoaGG3Luefmd7Q";
  const mapContainer = useRef(null);
  const map = useRef<any>();
  const [lng, setLng] = useState(props.location.coordinates.lng);
  const [lat, setLat] = useState(props.location.coordinates.lat);
  const [zoom, setZoom] = useState(9);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    setLng(props.location.coordinates.lng);
    setLat(props.location.coordinates.lat);
    map.current = new mapboxgl.Map({
      container: mapContainer.current as any,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </>
  );
};
