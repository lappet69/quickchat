import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Loader from "./Loader";
import UserImg from "../assets/user.png";

const QuickChat = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const data = [
    { id: 1, name: "James", chats: ["helo", "goodbeye", "done"] },
    { id: 2, name: "Rambo", chats: ["helo", "goodbeye", "last"] },
    { id: 3, name: "Mad", chats: ["helo", "HAHAHAHA", "last-again"] },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);
  return (
    <div className="absolute w-[650px]  h-[650px]  bg-white  right-5 bottom-7  flex-col rounded-md">
      <div className="w-full flex flex-row items-center  px-5 bg-white rounded-md">
        <form className="flex w-full px-5 my-3 border ">
          <input
            type="text"
            className="w-full p-2 border-none  "
            placeholder="Search"
          />
          <button>
            <FaSearch className="px-1 text-2xl" />
          </button>
        </form>
      </div>
      <div className="h-full w-full  bg-white  px-5 flex rounded-b-md ">
        {isLoading ? (
          <Loader text={"Loading Chats ..."} />
        ) : (
          <div className="w-full h-full flex flex-col gap-5 my-3">
            {data &&
              data.map((user) => (
                <div
                  key={user.id}
                  className="w-full  bg-white p-2 cursor-pointer"
                  onClick={() =>
                    dispatch({
                      type: "OPEN_CHAT_PERSON",
                      payload: { name: user.name, chats: user.chats },
                    })
                  }
                >
                  <div className="w-full flex items-center gap-5 border-b border-b-divider pb-10">
                    <img src={UserImg} alt="" className="-mt-7" />
                    <div className="w-full">
                      <div className="w-full flex gap-6 items-center">
                        <h1 className="text-primary text-lg font-bold">Title</h1>
                        <p className="text-xs text-textColor">{ new Date('2011', '04' - 1, '11', '11', '51', '00').toLocaleString()}</p>
                      </div>
                      <p className="text-textColor font-bold">{user.name}</p>
                      <p className="text-textColor">{user.chats.slice(-1)[0]}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickChat;
