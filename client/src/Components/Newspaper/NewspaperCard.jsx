import React from "react";
import { Link } from "react-router-dom";

const NewspaperCard = (props) => {
  return (
    <a href={props.link} target="_blank" className="w-full md:w-1/3 lg:w-1/4 pt-5">
      <div className="bg-white p-4 w-full rounded-2xl transition duration-200 ease-in-out hover:shadow-lg transform transition duration-500 hover:scale-105 overflow-hidden">
        <div className="w-full h-56 lg:64 relative border-2">
          <img
            src={props.photos.length && props.photos[0]}
            alt="Books"
            className="w-full h-full rounded-2xl"
          />
        </div>
        <div className="my-2 flex flex-col gap-2	">
          <div className="flex items-center justify-center">
            <h1>{props.name}</h1>
          </div>
        </div>
      </div>
    </a>
  );
};


export default NewspaperCard;