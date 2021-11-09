import React from "react";
import {AiTwotoneStar} from "react-icons/ai";
import {Link} from "react-router";

const SourcesCard = (props) => {
    return (
    <>
    <div className="bg-white p-4 w-full mb-4 rounded-2xl transition duration-700 ease-in-out hover:shadow-lg  md:w-1/2 lg:w-1/4">
         <div className="w-full h-56 lg:64 relative">
             <div className="absolute w-full bottom-4 flex items-end justify-between">
               <div className="flex flex-col gap-2 items-start ">
                   {props.isPro && (
                       <span className="bg-red-400 text-white px-2 py-1 rounded text-sm">
                           Pro extra 10% off
                           </span>
                    )}
                    {props.isOff && (
                            <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                                ₹{props.isOff}OFF 
                            </span>
                    )}
               </div>
               <span className="bg-white bg-opacity-75 p-1 rounded mr-3">
                   {props.duration} min
                </span>
             </div>
             <img
               src={props.photos.length && props.photos[0] }               
               alt="Books"
               className="w-full h-full rounded-2xl"
               />
         </div>
         <div className=" my-2 flex flex-col gap-2">
            
             <div className="flex items-center justify-between">
                 <h4 className="text-xl font-medium">{props.name}</h4>
                 <span className="bg-green-800 text-white text-sm flex items-center p-1 rounded  ">
                    {props.booksReviewValue} <AiTwotoneStar />
                 </span>
             </div>
             <div className="flex items-center justify-between text-gray-500">
                 <p>{props.category.join(", ")}</p>
                 <p>₹ {props.averageCost} for one</p>
             </div>
             
         </div>
    </div>
    </>
    );
};


export default SourcesCard;