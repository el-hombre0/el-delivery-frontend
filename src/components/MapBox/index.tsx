import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { useRef, useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/useTypedDispatch";
import { fetchUserAddress } from "../../redux/slices/mapbox";

export const MapBox = (props: any) => {
  const dispatch = useAppDispatch();
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZXZlbmRvdCIsImEiOiJjbHRpeXc2dW8wZ2YzMm1wNmsxZDd6cnNoIn0.JhOFqRXEYoaGG3Luefmd7Q";
  const mapContainer = useRef(null);
  const map = useRef<any>();
  const [lng, setLng] = useState(props.location.coordinates.lng);
  const [lat, setLat] = useState(props.location.coordinates.lat);
  const [zoom, setZoom] = useState(9);
  const [userAddress, setUserAddress] = useState("");
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

    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true,
      }),
      "top-right"
    );

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    if (lng !== undefined && lat !== undefined) {
      const config = {
        params: {
          access_token: mapboxgl.accessToken,
          longitude: lng,
          latitude: lat,
          types: "address",
        },
      };
      dispatch(fetchUserAddress(config)).then((data) => {
        setUserAddress(data.payload);
      });
    }
  }, [
    props.location.coordinates.lng,
    props.location.coordinates.lat,
    lng,
    lat,
    zoom,
    dispatch,
  ]);

  return (
    <>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div> Your address: {userAddress}</div>
      <div ref={mapContainer} className="map-container" />
    </>
  );
};
