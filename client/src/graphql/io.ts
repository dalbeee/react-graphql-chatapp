import { gql } from "@apollo/client";

export const getChats = gql`
  query chats {
    chats(limit: 30, sort: "created_at:desc") {
      content
      created_at
    }
  }
`;

export const createChats = gql`
  mutation($room: ID, $content: String!) {
    createChat(input: { data: { content: $content, room: $room } }) {
      chat {
        content
      }
    }
  }
`;

export const getRooms = gql`
  query rooms {
    rooms {
      name
      id
      uid
    }
  }
`;

export const getRoom = gql`
  query($uid: String!) {
    roomByUid(uid: $uid) {
      uid
      id
      chats {
        content
        created_at
      }
    }
  }
`;

export const createRoom = gql`
  mutation($name: String) {
    createRoom(input: { data: { name: $name } }) {
      room {
        id
        uid
        name
      }
    }
  }
`;

export const createUserId = gql`
  mutation {
    createAppUser {
      appUser {
        uid
      }
    }
  }
`;

export const subscription = gql`
  subscription {
    chat
  }
`;

export const subscriptionRoom = gql`
  subscription($uid: String!) {
    subscriptionRoom(uid: $uid)
  }
`;
