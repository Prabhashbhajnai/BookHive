import React from "react";
import { useParams } from "react-router-dom";

//components
import Homepage from "../Components/Homepage";


const Books = () => {
    const { type } = useParams();
    return 
     <div className="my-5">{type === "home" && <Homepage />}</div>
};


export default Books;