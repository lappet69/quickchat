import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Loader from "./Loader";

const Task = () => {
  const [isLoading, setIsLoading] = useState(true);
  const data = [
    { id: 1, title: "Task 1", desc: "this is task 1" },
    { id: 2, title: "Task 2", desc: "this is task 2" },
    { id: 3, title: "Task 3", desc: "this is task 3" },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);
  return (
    <div className=" relative w-full h-[500px] md:h-[700px] md:w-[500px] bg-white  right-4  flex-col rounded-md ">
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
      <div className="relative   w-full h-full bg-gray-600  px-5 flex rounded-b-md">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="w-full   h-full  flex flex-col gap-5 my-3">
            {data &&
              data.map((task) => (
                <div
                  key={task.id}
                  className="w-full  bg-white p-2 cursor-pointer "
                >
                  <h4>{task.title}</h4>
                  <p>{task.desc}</p>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
