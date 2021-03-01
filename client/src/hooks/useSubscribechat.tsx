import { useLazyQuery, useSubscription } from "@apollo/client";
import { useEffect, useState } from "react";
import { IChat } from "../..";
import { getChats, subscription } from "../graphql/io";

export const useSubscribeChat = () => {
  const [chat, setChat] = useState<Array<IChat>>([]);
  const [loadInitChat] = useLazyQuery(getChats, {
    onCompleted: (data) => setChat(data.chats),
  });

  useSubscription(subscription, {
    onSubscriptionData: ({
      subscriptionData: {
        data: { chat },
      },
    }) => {
      const appendChat: IChat = {
        id: chat.id,
        content: chat.content,
        created_at: chat.created_at,
      };
      setChat((prev) => [appendChat, ...prev]);
    },
  });

  useEffect(() => {
    loadInitChat();
  }, []);

  return chat;
};
