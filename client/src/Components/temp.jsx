import React from "react";
import {useLocation} from "react-router-dom";


const Temp = () => {
	const loc=useLocation();
    return <div> Hello this is a temporary component{loc.pathname}</div>;
};


export default Temp;