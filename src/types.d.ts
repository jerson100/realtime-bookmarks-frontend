import { LatLng } from "leaflet";
import { Socket } from "socket.io-client";

export interface SocketContextProps {
  socket: Socket | undefined;
}

export interface SocketInitialContext {
  currentOneLocation: LatLng;
  currentTwoLocation: LatLng;
}
