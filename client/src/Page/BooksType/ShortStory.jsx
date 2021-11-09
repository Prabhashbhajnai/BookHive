import React from "react";
import {BsBook} from "react-icons/bs";

const ShortStory=()=>{
	return(
		<>
		    <div className="pb-6">
		       <p> Short stories come in all kinds of categories: action, adventure, biography, comedy, crime, detective, drama, dystopia, fable, fantasy, history, horror, mystery, philosophy, politics, romance, satire, science fiction, supernatural, thriller, tragedy, and Western. But would be a short one unlike others. 
		       </p>
		    </div>
		    <div className=" bg-white shadow-md rounded-md w-24 h-56 md:w-40">
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
		                  <p className="py-2 mb-2 text-gray-300 truncate">The description of the book can be added here. It should include everything about the book but in a short manner</p>
		              </div>
		        </div>
		    </div>
		</>
	);
}

export default ShortStory;