import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

// c-spell:disable
mapboxgl.accessToken =
  "pk.eyJ1Ijoib3NhZGF0aGVjb2RlciIsImEiOiJja3Zsbzc4dDc5N2RyMnVzN3l5eDE2Y2xsIn0.Yi-PSKvQzgFU7sQAIcwzKA";
// c-spell:enable

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  }, []);

  return <Wrapper id="map"></Wrapper>;
};

const Wrapper = tw.div`
  flex-1
`;
export default Map;
