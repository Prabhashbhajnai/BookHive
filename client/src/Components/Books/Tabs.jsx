import React from "react";
import classnames from "classnames";
import {useLocation, Link, useParams} from "react-router-dom";

const Tab=(props)=>{
	const {id}=useParams()
	return(
       <Link to={`/books/${id}/${props.route}`}>

           <div className={classnames("text-gray-500 font-light", {"text-Library-400 font-semibold":props.isActive,})}>
           	  <h3 className="text-lg md:text-1xl">{props.title}</h3>
           </div>
       </Link>
	);
}



const TabContainer=(props)=>{
	const location=useLocation();
	const currentPath=location.pathname;
     const tabs=[
     {
     	title:"Humor",
     	route:"humor",
     	isActive:currentPath.includes("humor"),
     },
     {
     	title:"Fiction",
     	route:"fiction",
     	isActive:currentPath.includes("fiction"),
     },
     {
     	title:"Science Fiction",
     	route:"science-fic",
     	isActive:currentPath.includes("science-fic"),
     },
     {
     	title:"Romance",
     	route:"romance",
     	isActive:currentPath.includes("romance"),
     },
     {
     	title:"Science & technology",
     	route:"science-tech",
     	isActive:currentPath.includes("science-tech"),
     },
     {
     	title:"Mystry",
     	route:"mystry",
     	isActive:currentPath.includes("mystry"),
     },
     
     {
     	title:"Biography/Autobiography",
     	route:"bio-auto-graphy",
     	isActive:currentPath.includes("bio-auto-graphy"),
     },
      
     {
     	title:"Fable",
     	route:"fable",
     	isActive:currentPath.includes("fable"),
     },
     {
     	title:"Horror",
     	route:"horror",
     	isActive:currentPath.includes("horror"),
     },
     {
     	title:"Short Stories",
     	route:"s-story",
     	isActive:currentPath.includes("s-story"),
     },
     {
     	title:"Poetry",
     	route:"poem",
     	isActive:currentPath.includes("poem"),
     },
     ];
	return(
       <>
	       <div className="flex items-center pb-4 gap-8 md:gap-20 overflow-x-scroll scrollbar-hide border-b-2">
              {tabs.map((tab)=>(
                 <Tab {...tab} key={`123${tab.route}`} />
              	))}
	       </div>
       </>
	);
}

export default TabContainer;