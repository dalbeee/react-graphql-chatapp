import { useRoomInfoContext } from "../../provider/roomInfo";
import { useSubscribeRoomContext } from "../../provider/subscribeRoom";

const ShowRooms = () => {
  const context = useSubscribeRoomContext();

  const { rooms } = useRoomInfoContext();

  const handleClick = (e) => {
    e.preventDefault();
    const targetUID = e.currentTarget.children[1].innerText;
    context.operation.selectRoom(targetUID);
  };

  return (
    <div className="flex flex-1 w-full h-12 text-xl font-semibold bg-gray-300 rounded-xl">
      <div className="w-full">
        {rooms &&
          rooms.map((r) => {
            return (
              <div className="px-2 pt-2" key={r.id}>
                <button
                  onClick={handleClick}
                  className="block w-full px-2 py-2 bg-gray-200 rounded-xl"
                >
                  <p className="flex justify-start">{r.name}</p>
                  <div className="flex justify-end text-xs">{r.uid}</div>
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ShowRooms;
