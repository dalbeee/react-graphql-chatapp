import "./index.css";
import IO from "./components/IO";
import Layout from "./Layout";
import LeftPanel from "./components/leftPanel/LeftPanel";
import { RoomInfoProvider } from "./provider/roomInfo";
import { SubscribeRoomProvider } from "./provider/subscribeRoom";

function App() {
  return (
    <RoomInfoProvider>
      <SubscribeRoomProvider>
        <Layout>
          <LeftPanel />
          <IO className={`py-4`} />
        </Layout>
      </SubscribeRoomProvider>
    </RoomInfoProvider>
  );
}

export default App;
