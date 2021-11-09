import React from "react";
import {BsBook} from "react-icons/bs";

const ScTech=()=>{
	return(
		<>
		    <div className="pb-6">
		       <p> Technology in science fiction delves into the possibilities and implications of new technological concepts. Authors have taken, or created, new innovations and technologies, and elaborated on what they might be and how they might be used.
		       </p>
		    </div>
		    <div className=" bg-white shadow-md rounded-md w-24 md:w-40">
		       <div className="w-full h-32">
		          <img alt="book-cover" src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" className="w-full h-full rounded-t-md px-6 pt-4 pb-2 " />
		       </div>
		       <div className="flex flex-col gap-2">
		          <h3 className="text-sm my-1 text-center font-bold text-xl">Book Name</h3>
		              <div>
		                  <span className="flex items-center gap-1">
		                  	<BsBook />
		                  	by: Author Name
		                  </span>
		                  <p className="text-gray-300 text-xs truncate">The description of the book can be added here. It should include everything about the book but in a short manner</p>
		              </div>
		        </div>
		    </div>
		</>
	);
}

export default ScTech;