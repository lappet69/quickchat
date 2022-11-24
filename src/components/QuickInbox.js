import React from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import CardTask from "./CardTask";
import ChatPerson from "./ChatPerson";
import QuickChat from "./QuickChat";
import Task from "./Task";

const QuickInbox = () => {
  const isOpen = useSelector((state) => state.State);

  return (
    <div className="w-full relative h-screen bg-chatInbox">
      <div className="w-full flex items-center bg-seacrhBg">
        <button>
          <FaSearch className="px-1 mx-5 text-2xl text-white" />
        </button>
        <form className="w-full ">
          <input
            type="text"
            className="w-full bg-transparent p-2 text-center"
            placeholder="Search"
          />
        </form>
      </div>
      <div className="absolute bottom-36 right-0">
        {isOpen.isChat && <QuickChat />}
        {isOpen.isTask && <Task />}
        {isOpen.isChatPerson && <ChatPerson />}
        {isOpen.isMyTask && <CardTask />}
      </div>
    </div>
  );
};

export default QuickInbox;
