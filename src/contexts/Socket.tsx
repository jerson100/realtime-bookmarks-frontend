import React, { createContext, PropsWithChildren, useEffect } from "react";
import useSocket from "../hooks/useSocket";
import { SocketContextProps } from "../types";

// const socket = io("ws://localhost:1200");
export const SocketContext = createContext<SocketContextProps>({
  socket: undefined,
});

const Socket: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  const socket = useSocket("http://localhost:1200", {
    autoConnect: false,
    reconnectionDelay: 5000,
    reconnectionAttempts: 5,
  });
  useEffect(() => {
    socket.connect();
    socket.on("connect", () => {
      console.log(socket.id);
    });
  }, [socket]);
  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default Socket;
