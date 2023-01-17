import { useContext } from "react";
import { SocketContext } from "../contexts/Socket";
import { SocketContextProps } from "../types";

const useSocketContext = (): SocketContextProps => {
  const context = useContext<SocketContextProps>(SocketContext);
  if (!context) throw new Error("No se puede acceder al context del socket");
  return context;
};

export default useSocketContext;
