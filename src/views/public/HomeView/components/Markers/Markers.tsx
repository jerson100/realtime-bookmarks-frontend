import { LatLngBoundsExpression } from "leaflet";
import React, { useEffect, useMemo } from "react";
import { useMap } from "react-leaflet";

interface MarkersProps {
  children?: JSX.Element | JSX.Element[];
}

const Markers = ({ children }: MarkersProps) => {
  const map = useMap();
  useEffect(() => {
    map.addEventListener("move", (e) => {
      //   console.log(e);
    });
  }, [map]);
  return <>{children}</>;
};

export default Markers;
