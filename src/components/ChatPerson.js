import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
const ChatPerson = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const data = useSelector((state) => state.State.chatsUser);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <div className=" relative w-full h-[500px] md:h-[700px] md:w-[500px] bg-white  right-4  flex-col rounded-md">
      {/* ChatPerson */}
      <div className="w-full flex flex-row items-center  px-5 bg-white rounded-md">
        <div className="flex w-full  my-3 ">
          <button onClick={() => dispatch({ type: "OPEN_CHAT" })}>
            <FaArrowLeft className="px-1 text-2xl" />
          </button>
        </div>
      </div>
      <div className="relative   w-full h-full bg-gray-600  px-5 flex rounded-b-md ">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="w-full   h-full  flex flex-col gap-5 my-3">
            <div
              key={data.id}
              className="w-full  bg-white p-2 cursor-pointer"
              // onClick={() => dispatch({ type: "OPEN_CHAT_PERSON" })}
            >
              <p>{data.name}</p>
              <p>{data.chats.slice(-1)[0]}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPerson;
