import React from "react";
import { motion } from "framer-motion";

const CardProject = ({ key, imgSrc, title, desc, webUrl }) => {
  return (
    <motion.div
      key={key}
      whileHover={{ scale: 1.01 }}
      className="flex w-[640px] flex-col justify-center h-auto bg-cardBg rounded-md drop-shadow-lg hover:drop-shadow-xl"
    >
      <img
        className="relative rounded-md"
        src={imgSrc || "https://placeimg.com/640/480/any"}
        alt="image web"
      />
      <div className="p-4">
        <p>{title || "No Tittle"}</p>
        {webUrl && (
          <button className="btn btn-blue">
            <a href={webUrl} target="_blank">
              {webUrl}
            </a>
          </button>
        )}
        <p>
          {desc || "No Desc"}
          Lorem ipsum dolor asit amet consectetur adipisicing elit. Eius,
          molestiae.
        </p>
      </div>
    </motion.div>
  );
};

export default CardProject;
