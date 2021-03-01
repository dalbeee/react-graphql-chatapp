import { useLazyQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { IRoom, IuseRoomReturnProps } from "../..";
import { createRoom, getRooms } from "../graphql/io";

export const useRoomInfo = (): IuseRoomReturnProps => {
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const [callQuery] = useLazyQuery(getRooms, {
    onCompleted: ({ rooms }: { rooms: IRoom[] }) =>
      setRooms((prev) => [...prev, ...rooms]),
  });

  const [mutationCall] = useMutation(createRoom, {
    onCompleted: ({ createRoom: { room } }) =>
      setRooms((prev) => [...prev, room]),
  });

  useEffect(() => callQuery(), []);
  useEffect(() => console.log(rooms), [rooms]);

  return { rooms, mutationCall };
};
