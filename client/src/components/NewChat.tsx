import { useMutation } from "@apollo/client";
import { createChats, getChats } from "../graphql/io";
import { useSubscribeRoomContext } from "../provider/subscribeRoom";

const NewChat = () => {
  // const [createChat] = useMutation(createChats);
  const { operation } = useSubscribeRoomContext();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // createChat({
    //   variables: {
    //     chat: e.target.inputBox.value,
    //   },
    //   // refetchQueries: [{ query: getChats }],
    // });
    operation.sendMessage(e.target.inputBox.value);
    e.target.inputBox.value = "";
  };

  return (
    <div className="h-16 bg-gray-200">
      <form action="" onSubmit={handleSubmit} autoComplete="off">
        <div className="flex">
          <input type="text" name="inputBox" className="w-full" />
          <button
            type="submit"
            className="px-4 py-2 ml-4 text-gray-700 bg-blue-500 rounded-xl"
          >
            send
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewChat;
