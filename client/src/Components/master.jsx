import React from "react";
import { useParams } from "react-router-dom";

//components
import Homepage from "./Homepage";


const Master = () => {
    const { type } = useParams();
    return 
     <div className="my-5">{type === "home" && <Homepage />}</div>
};


export default Master;