import "./App.css";
import QuickInbox from "./components/QuickInbox";
import QuickChat from "./components/QuickChat";

import { FaSearch, FaRocketchat, FaTasks } from "react-icons/fa";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { useEffect, useState } from "react";
import Task from "./components/Task";
import { useDispatch, useSelector } from "react-redux";

function App() {
const quickChat = useSelector(state => state.State.quickChat)
const dispacth = useDispatch()
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
          className="bg-red-400 rounded-full p-3"
          onClick={() => {
            dispacth({type:"OPEN_CHAT"})
          }}
        >
          <FaRocketchat className="text-cyan-400 text-3xl  " />
        </button>
        <button
          className="bg-red-400 rounded-full p-3"
          onClick={() => {
            dispacth({type:"OPEN_TASK"})
          }}
        >
          <FaTasks className="text-cyan-400 text-3xl  " />
        </button>
        <button
          className="bg-cyan-400 rounded-full p-3"
          onClick={() => {
            dispacth({type:"OPEN_TODO"})
          }}
        >
          <AiTwotoneThunderbolt className="text-white text-3xl  " />
        </button>
      </div>
    </div>
  );
}

export default App;
