import { useState, useMemo } from "react";
import { LatLng, LatLngBoundsExpression } from "leaflet";
import { Marker } from "react-leaflet";
import Map from "../../../components/commons/Map";
import Markers from "./components/Markers";
import { HomeContainerStyle } from "./home.style";

const HomeView = () => {
  const [markerOne, setmarkerOne] = useState(
    new LatLng(-12.026957954416517, -77.06472011954492)
  );
  const [markertwo, setmarkerTwo] = useState(
    new LatLng(-12.042625817899827, -77.07279027343546)
  );

  const eventHandlers = useMemo(
    () => ({
      drag({
        oldLatLng,
        latlng,
        target: {
          options: { alt },
        },
      }: any) {
        if (alt === "markerOne") {
        } else {
        }
      },
      dragend({
        target: {
          _latlng,
          options: { alt },
        },
      }: any) {
        if (alt === "markerOne") {
          setmarkerOne(_latlng);
        } else {
          setmarkerTwo(_latlng);
        }
      },
    }),
    []
  );

  const initialPositions: LatLngBoundsExpression = useMemo(() => {
    return [
      [-12.026957954416517, -77.06472011954492],
      [-12.042625817899827, -77.07279027343546],
    ];
  }, []);

  return (
    <HomeContainerStyle>
      <Map scrollWheelZoom={true} zoom={12}>
        <Markers>
          <Marker
            position={markerOne}
            draggable
            eventHandlers={eventHandlers}
            alt="markerOne"
          />
          <Marker
            position={markertwo}
            draggable
            eventHandlers={eventHandlers}
            alt="markerTwo"
          />
        </Markers>
        <Map.Animate
          positions={initialPositions}
          //   options={{ maxZoom: 12 }}
        />
      </Map>
    </HomeContainerStyle>
  );
};

export default HomeView;
