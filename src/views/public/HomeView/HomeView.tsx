import { useState, useMemo, useEffect } from "react";
import { LatLng } from "leaflet";
import { Marker } from "react-leaflet";
import Map from "../../../components/commons/Map";
import Markers from "./components/Markers";
import { HomeContainerStyle } from "./home.style";
import useSocketContext from "../../../hooks/useSocketContext";
import { SocketContextProps, SocketInitialContext } from "../../../types";

const HomeView = () => {
  const [markerOne, setmarkerOne] = useState<LatLng>();
  const [markertwo, setmarkerTwo] = useState<LatLng>();

  const socketContext: SocketContextProps = useSocketContext();

  useEffect(() => {
    if (socketContext?.socket) {
      socketContext.socket.on(
        "sendInitialLocation",
        (data: SocketInitialContext) => {
          setmarkerOne(data.currentOneLocation);
          setmarkerTwo(data.currentTwoLocation);
        }
      );
      socketContext.socket.on("updateMarkerOne", (data: LatLng) => {
        setmarkerOne(data);
      });
      socketContext.socket.on("updateMarkerTwo", (data: LatLng) => {
        setmarkerTwo(data);
      });
    }
  }, [socketContext]);

  const eventHandlers = useMemo(
    () => ({
      drag({
        latlng,
        target: {
          options: { alt },
        },
      }: any) {
        if (alt === "markerOne") {
          socketContext?.socket?.emit("updateMarkerOne", latlng);
        } else {
          socketContext?.socket?.emit("updateMarkerTwo", latlng);
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

  //   const initialPositions: LatLngBoundsExpression = useMemo(() => {
  //     return [
  //       [-12.026957954416517, -77.06472011954492],
  //       [-12.042625817899827, -77.07279027343546],
  //     ];
  //   }, []);

  return (
    <HomeContainerStyle>
      {!markerOne || !markertwo ? (
        <p>Cargando...</p>
      ) : (
        <Map scrollWheelZoom={true} zoom={12} center={markerOne}>
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
          {/* <Map.Animate
            positions={initialPositions}
          /> */}
        </Map>
      )}
    </HomeContainerStyle>
  );
};

export default HomeView;
