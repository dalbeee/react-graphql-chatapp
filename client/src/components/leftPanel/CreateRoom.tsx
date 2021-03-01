import { useRoomInfoContext } from "../../provider/roomInfo";

const CreateRoom = () => {
  const { mutationCall } = useRoomInfoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    mutationCall({ variables: { name: e.target.inputBox.value } });
    e.target.inputBox.value = "";
  };

  return (
    <div className="flex flex-col justify-center w-full px-2 py-4 bg-gray-400 rounded-2xl">
      <p className="text-xl font-semibold text-gray-700">create Room</p>
      <form
        onSubmit={handleSubmit}
        action=""
        autoComplete="off"
        className="py-4"
      >
        <input
          type="text"
          name="inputBox"
          className="w-full px-2 bg-gray-400 border-b-2 border-gray-900"
        />
      </form>
    </div>
  );
};

export default CreateRoom;
