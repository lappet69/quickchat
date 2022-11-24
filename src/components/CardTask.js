import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";

const CardTask = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const data = useSelector((state) => state.State.chatsUser);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <div className="absolute w-[650px]  h-[650px]  bg-white  right-5 bottom-7  flex-col rounded-md">
      <div className="w-full flex flex-row items-center  px-5 bg-white rounded-md">
        <div className="flex w-full  my-3 ">
          <button onClick={() => dispatch({ type: "OPEN_TASK" })}>
            <FaArrowLeft className="px-1 text-2xl" />
          </button>
        </div>
      </div>
      <div className="h-full w-full  bg-white  px-5 flex rounded-b-md ">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="w-full h-full flex flex-col gap-5 my-3">
            detail task
          </div>
        )}
      </div>
    </div>
  );
};

export default CardTask;
