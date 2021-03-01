import CreateRoom from "./CreateRoom";
import Register from "./Register";
import ShowRooms from "./ShowRooms";

const LeftPanel = () => {
  return (
    <div className="flex-col hidden sm:flex ">
      <CreateRoom />
      <ShowRooms />
      <Register />
    </div>
  );
};

export default LeftPanel;
