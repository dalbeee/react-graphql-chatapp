import { useLazyQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { IChat } from "../..";
import { createChats, getRoom } from "../graphql/io";

export interface IReturn {
  selectedRoom: room;
  chats: IChat[];
  operation: {
    selectRoom: (roomId: string) => void;
    sendMessage: (message: string) => void;
  };
}

interface room {
  id: string;
  uid: string;
}

export const useSubscribeRoom = () => {
  const [selectedRoom, setSelectedRoom] = useState<room>({} as room);
  const [chats, setChat] = useState<IChat[]>([]);

  const [callMutation] = useMutation(createChats, {
    onError: (e) => console.log(e.message),
    onCompleted: ({ createChat: { chat } }) =>
      setChat((prev) => [chat, ...prev]),
  });
  const [callQueryGetroom] = useLazyQuery(getRoom, {
    onCompleted: ({ roomByUid }) => {
      setSelectedRoom({ id: roomByUid.id, uid: roomByUid.uid });
      setChat(roomByUid.chats);
    },
    fetchPolicy: "network-only",
  });

  const selectRoom = (roomUid: string) => {
    callQueryGetroom({ variables: { uid: roomUid } });
  };

  const sendMessage = (message: string) => {
    console.log(selectedRoom.id, message);
    callMutation({ variables: { room: selectedRoom.id, content: message } });
  };

  const operation = {
    selectRoom,
    sendMessage,
  };

  useEffect(() => {
    console.log(selectedRoom);
  }, [selectedRoom]);

  useEffect(() => console.log(chats), [chats]);

  return { chats, selectedRoom, operation };
};
