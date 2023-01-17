import { LatLng } from "leaflet";
import { Socket } from "socket.io-client";
import { FitBoundsOptions, LatLngBoundsExpression } from "leaflet";

export interface SocketContextProps {
  socket: Socket | undefined;
}

export interface SocketInitialContext {
  currentOneLocation: LatLng;
  currentTwoLocation: LatLng;
}

export interface AnimateProps {
  positions?: LatLngBoundsExpression;
  options?: FitBoundsOptions;
}
