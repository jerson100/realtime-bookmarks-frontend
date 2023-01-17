import {
  CurrentUserContainerStyle,
  CurrrentUserImageStyle,
} from "./currentUser.style";
import UserSvg from "../../../assets/img/svg/user.svg";
import { SocketContextProps } from "../../../types";
import useSocketContext from "../../../hooks/useSocketContext";
import { useEffect, useState } from "react";

const CurrentUser = () => {
  const { socket }: SocketContextProps = useSocketContext();
  const [countUsers, setCountUsers] = useState<number>(0);

  useEffect(() => {
    if (socket) {
      socket.on("countActiveUsers", (countUsers) => {
        setCountUsers(countUsers);
      });
    }
  }, []);

  return (
    <CurrentUserContainerStyle>
      <p>{countUsers}</p>
      <CurrrentUserImageStyle src={UserSvg} alt="Imagen de usuario" />
    </CurrentUserContainerStyle>
  );
};

export default CurrentUser;
