import { createContext, useContext } from "react";
import { useSubscribeRoom, IReturn } from "../hooks/useSubscribeRoom";

const SubscribeRoomContext = createContext<IReturn>({} as IReturn);

export const SubscribeRoomProvider: React.FC = ({ children }) => {
  const data = useSubscribeRoom();

  return (
    <SubscribeRoomContext.Provider value={data}>
      {children}
    </SubscribeRoomContext.Provider>
  );
};

export const useSubscribeRoomContext = () => useContext(SubscribeRoomContext);
