import React from "react";
import classnames from "classnames";
import {useLocation, Link, useParams} from "react-router-dom";

const Tab=(props)=>{
	const {id}=useParams()
	return(
       <Link to={`/quespaper/teacher/${id}/${props.route}`}>

           <div className={classnames("text-gray-500 font-light", {"text-Library-400 font-semibold":props.isActive,})}>
           	  <h3 className="text-lg md:text-1xl">{props.title}</h3>
           </div>
       </Link>
	);
}



const MobileTab=(props)=>{
	const location = useLocation();

    const currentPath = location.pathname;

    const tabs = [
        {
            title: "Mid-Sem",
            route: "midsem",
            isActive: currentPath.includes("midsem"),
        },
        {
            title: "Term End",
            route: "termend",
            isActive: currentPath.includes("termend"),
        },
    ];
	return(
       <>
	       <div className="lg:hidden flex items-center mx-2 gap-8 md:gap-20 overflow-x-scroll scrollbar-hide border-b-2">
              {tabs.map((tab)=>(
                 <Tab {...tab} key={`123${tab.route}`} />
              	))}
	       </div>
       </>
	);
}

export default MobileTab;