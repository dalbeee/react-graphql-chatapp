import { IChat } from "../../index";
import NewChat from "./NewChat";
import { useSubscribeRoomContext } from "../provider/subscribeRoom";

const IO: React.FC<{ className?: any }> = ({ className }) => {
  const { chats } = useSubscribeRoomContext();

  return (
    <div className={`flex flex-col px-4 bg-gray-200 ${className}`}>
      <div className="flex-1 h-screen">
        <div
          className="flex flex-col-reverse max-h-screen overflow-y-scroll "
          style={{ maxHeight: `${window.innerHeight - 24 * 4}px` }}
        >
          {!!chats.length &&
            chats.map((c: IChat, index: any) => (
              <div className="" key={index}>
                {c.content}
              </div>
            ))}
        </div>
      </div>
      <NewChat />
    </div>
  );
};

export default IO;
