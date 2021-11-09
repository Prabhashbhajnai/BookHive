import React from "react";
import {BsBook} from "react-icons/bs";

const Fable=()=>{
	return(
		<>
		    <div className="pb-6">
		       <p> Fable is a literary genre: a succinct fictional story, in prose or verse, that features animals, legendary creatures, plants, inanimate objects, or forces of nature that are anthropomorphized, and that illustrates or leads to a particular moral lesson (a "moral"), which may at the end be added explicitly as a concise maxim or saying.
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

export default Fable;