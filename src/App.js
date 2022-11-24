import "./App.css";
import InboxImg from "./assets/inbox.png";
import TaskImg from "./assets/task.png";
import ThunderImg from "./assets/thunder.png";
import QuickInbox from "./components/QuickInbox";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const quickChat = useSelector((state) => state.State.quickChat);
  const dispacth = useDispatch();
  // const [quickChat, setQuickChat] = useState(false);

  const [chatPerson, setChatPerson] = useState(false);
  const [task, setTask] = useState(false);
  const [todo, setTodo] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="w-screen h-screen relative">
      <QuickInbox quickChat={quickChat} task={task} chatPerson={chatPerson} />

      <div className="flex absolute right-0 bottom-0 gap-3 p-4">
        <button
          className=""
          onClick={() => {
            dispacth({ type: "OPEN_TASK" });
          }}
        >
          <img src={TaskImg} alt="" />
        </button>
        <button
          className=""
          onClick={() => {
            dispacth({ type: "OPEN_CHAT" });
          }}
        >
          <img src={InboxImg} alt="Inbox" />
        </button>

        <button
          onClick={() => {
            dispacth({ type: "OPEN_TODO" });
          }}
        >
          <img src={ThunderImg} alt="" />
        </button>
      </div>
    </div>
  );
}

export default App;
