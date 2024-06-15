import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { useRef, useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/useTypedDispatch";
import { fetchRouteInfo, fetchUserAddress } from "../../redux/slices/mapbox";

const baseCoords = {
  longitude: "37.378278",
  latitude: "55.713139",
};

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
    if (map.current) return;
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
        trackUserLocation: true,
        showUserHeading: true,
      }),
      "top-right"
    );

    const popup = new mapboxgl.Popup({ offset: [0, -15] })
      .setLngLat({ lng: 37.378278, lat: 55.713139 })
      .setHTML(
        `<h4>El-Delivery - Мы здесь!</h4><p>пос. Немчиновка, 3, Новоивановское, Московская обл., 143025</p>`
      )
      .addTo(map.current);

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    if (lng !== undefined && lat !== undefined) {
      const addressConfig = {
        params: {
          access_token: mapboxgl.accessToken,
          longitude: lng,
          latitude: lat,
          types: "address",
        },
      };
      dispatch(fetchUserAddress(addressConfig)).then((data) => {
        setUserAddress(data.payload);
      });
      const routeConfig = {
        params: {
          access_token: mapboxgl.accessToken,
          waypoints_per_route: true,
        },
        longitude: lng,
        latitude: lat,
        baseCoords,
      };
      dispatch(fetchRouteInfo(routeConfig));
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
        Долгота (Longitude): {lng} | Широта (Latitude): {lat} | Зум: {zoom}
      </div>
      <div> Ваш адрес: {userAddress}</div>
      <div ref={mapContainer} className="map-container" />
    </>
  );
};
