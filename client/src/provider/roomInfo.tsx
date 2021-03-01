import { createContext, Reducer, useContext } from "react";
import { IuseRoomReturnProps } from "../..";
import { useRoomInfo } from "../hooks/useRoomInfo";

const RoomInfo = createContext<IuseRoomReturnProps>({} as IuseRoomReturnProps);

export const RoomInfoProvider: React.FC = ({ children }): any => {
  const data = useRoomInfo();
  return <RoomInfo.Provider value={data}>{children}</RoomInfo.Provider>;
};

export const useRoomInfoContext = () => useContext(RoomInfo);
