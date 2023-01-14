import { useEffect } from "react";
import {
  FitBoundsOptions,
  LatLng,
  LatLngBoundsExpression,
  MapOptions,
} from "leaflet";
import { TileLayer, useMap } from "react-leaflet";
import { MapContainerStyle } from "./map.style";
import "leaflet/dist/leaflet.css";

interface MapProps {
  children?: JSX.Element | JSX.Element[];
}

const position = new LatLng(51.505, -0.09);

const Map = ({
  children,
  center = position,
  zoom = 13,
  scrollWheelZoom = false,
  ...rest
}: MapProps & MapOptions) => {
  return (
    <MapContainerStyle
      center={center}
      zoom={zoom}
      scrollWheelZoom={scrollWheelZoom}
      {...rest}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainerStyle>
  );
};

interface AnimateProps {
  positions?: LatLngBoundsExpression;
  options?: FitBoundsOptions;
}

const Animate = ({
  positions,
  options = {
    animate: true,
    duration: 5000,
  },
}: AnimateProps) => {
  const map = useMap();
  //   const positionMarkers: LatLngBoundsExpression | undefined = useMemo(() => {
  //     return React.Children.toArray(children).map((child: any) => {
  //       const position = child?.props?.position;
  //       return [position.lat, position.lng];
  //     });
  //   }, [children]);
  useEffect(() => {
    if (positions) map.fitBounds(positions, options);
  }, [positions]);
  //   useEffect(() => {
  //     if (positionMarkers) {
  //       map.fitBounds(positionMarkers, {
  //         maxZoom: 10,
  //         animate: true,
  //         duration: 5000,
  //       });
  //     }
  //   }, [positionMarkers]);
  return <></>;
};

Map.Animate = Animate;

export default Map;
