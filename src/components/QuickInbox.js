import React from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import ChatPerson from "./ChatPerson";
import QuickChat from "./QuickChat";
import Task from "./Task";

const QuickInbox = () => {
  const isOpen = useSelector((state) => state.State);

  return (
    <div className="w-full relative h-screen bg-black">
      <div className="w-full flex items-center bg-slate-500">
        <button>
          <FaSearch className="px-1 text-2xl" />
        </button>
        <form className="w-full ">
          <input
            type="text"
            className="w-full bg-transparent p-2 text-center"
            placeholder="search"
          />
        </form>
      </div>
      <div className="absolute bottom-36 right-0">
        {isOpen.isChat && <QuickChat />}
        {isOpen.isTask && <Task />}
        {isOpen.isChatPerson && <ChatPerson />}
      </div>
    </div>
  );
};

export default QuickInbox;
