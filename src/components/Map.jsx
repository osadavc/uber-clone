import { useEffect, useRef } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

// c-spell:disable
mapboxgl.accessToken =
  "pk.eyJ1Ijoib3NhZGF0aGVjb2RlciIsImEiOiJja3Zsbzc4dDc5N2RyMnVzN3l5eDE2Y2xsIn0.Yi-PSKvQzgFU7sQAIcwzKA";
// c-spell:enable

const Map = ({ locationData }) => {
  const map = useRef(null);
  const pickUpMarker = useRef(null);
  const dropOffMarker = useRef(null);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: locationData?.pickup ? 0 : 3,
    });
  }, []);

  useEffect(() => {
    if (locationData?.pickup && locationData?.drop) {
      if (!pickUpMarker.current && !dropOffMarker.current) {
        pickUpMarker.current = addToMap(locationData?.pickup?.coordinates);
        dropOffMarker.current = addToMap(locationData?.drop?.coordinates);
      }

      setTimeout(() => {
        map.current.fitBounds(
          [locationData?.pickup?.coordinates, locationData?.drop?.coordinates],
          {
            padding: 60,
            speed: 5,
          }
        );
      }, 100);
    }
  }, [locationData]);

  const addToMap = (coordinates) => {
    return new mapboxgl.Marker().setLngLat(coordinates).addTo(map.current);
  };

  return <Wrapper id="map" />;
};

const Wrapper = tw.div`
  flex-1
  h-[45%]
`;
export default Map;
