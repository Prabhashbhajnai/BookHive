import React from "react";
import {BsBook} from "react-icons/bs";

const Poetry=()=>{
	return(
		<>
		    <div className="pb-6">
		       <p> Poetry is a form of literature that uses aesthetic and often rhythmic qualities of language − such as phonaesthetics, sound symbolism, and metre − to evoke meanings in addition to, or in place of, a prosaic ostensible meaning.
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
		                  <p className="text-gray-300 text-xs">The description of the book can be added here. It should include everything about the book but in a short manner</p>
		              </div>
		        </div>
		    </div>
		</>
	);
}

export default Poetry;