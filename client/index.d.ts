export interface IChat {
  id: string;
  created_at: string;
  content: string;
  uid?: string;
}

export interface IRoom {
  id: string;
  uid: string;
  name: string;
}

export interface IuseRoomReturnProps {
  rooms: IRoom[];
  mutationCall: (_: any) => any;
}
