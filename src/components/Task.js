import React, { useEffect, useState } from "react";
import { BiPencil } from "react-icons/bi";
import { BsChevronUp } from "react-icons/bs";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";
import { useDispatch } from "react-redux";

import Loader from "./Loader";

const Task = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const [data, setData] = useState();

  const fetchTodo = async () => {
    const results = await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setTimeout(() => {
          setIsLoading(false);
        }, 1200);
      });
    return results;
  };

  useEffect(() => {
    fetchTodo();
  }, []);
  return (
    <div className=" absolute w-[650px]  h-[650px]  bg-white  right-5 bottom-7  flex-col rounded-md overflow-x-auto">
      <div className="h-full w-full  bg-white  px-5 flex rounded-b-md ">
        {isLoading ? (
          <Loader text={"Loading Task List ..."} />
        ) : (
          <div className="w-full   h-full  flex flex-col gap-5 my-3">
            <div className="w-full flex justify-between">
              <select className=" p-2 ml-24 bg-transparent border border-textColor text-sm rounded-md text-textColor text-end">
                <option value="">My Task</option>
              </select>
              <button
                className="bg-primary p-2 rounded-md text-white text-end"
                type=""
              >
                New Task
              </button>
            </div>
            {data &&
              data.map((task) => (
                <div
                  key={task.id}
                  className="w-full  bg-white px-2 pb-8 border-b border-b-textColor"
                >
                  <div className="w-full flex justify-between ">
                    <div className="w-full flex gap-5">
                      <input
                        type="checkbox"
                        className="cursor-pointer "
                        name=""
                        value=""
                      />
                      <p
                        className="text-textColor font-bold cursor-pointer "
                        onClick={() =>
                          dispatch({
                            type: "OPEN_MY_TASK",
                            payload: { taskName: task.name, chats: task.desc },
                          })
                        }
                      >
                        {task?.title}
                      </p>
                    </div>
                    <div className="w-full flex flex-end gap-5 mr-auto relative  ml-auto">
                      <p className="text-red-500 text-sm">2 Day left</p>
                      <p className="text-sm">
                        {new Date("2011", "04").toLocaleDateString()}
                      </p>
                      <BsChevronUp className="cursor-pointer " />
                      <HiDotsHorizontal className="cursor-pointer " />
                    </div>
                  </div>
                  <div className="w-full px-9 pt-5">
                    <div className="w-full flex items-center gap-3">
                      <IoMdTime className="text-primary text-xl" />
                      <input
                        type="date"
                        name=""
                        className="border border-textColor p-1"
                        value=""
                        defaultValue={new Date().toDateString()}
                      />
                    </div>
                    <div className="w-full flex items-center gap-3">
                      <BiPencil className="text-primary text-xl" />
                      <p>{task.desc || "No Description"}</p>
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

export default Task;
