import React from "react";
import {BsBook} from "react-icons/bs";

const BioAuto=()=>{
	return(
		<>
		    <div className="pb-6">
		       <p> A biography, or simply bio, is a detailed description of a person's life. It involves more than just the basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Works in diverse media, from literature to film, form the genre known as biography.
		       </p>
		    </div>
		    <div className=" bg-white shadow-md rounded-md w-24 md:w-40">
		       <div className="w-full h-32 ">
		          <img alt="book-cover" src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" className=" w-full h-full rounded-t-md  px-6 pt-4 pb-2 " />
		       </div>
		       <div className="flex flex-col gap-2">
		          <h3 className="text-sm my-1 text-center font-bold text-xl">Book Name</h3>
		              <div>
		                  <span className="flex items-center gap-1">
		                  	<BsBook />
		                  	by: Author Name
		                  </span>
		                  <p className="text-gray-300 truncate">This book is a type of fiction which will be truncated</p>
		              </div>
		        </div>
		    </div>
		</>
	);
}

export default BioAuto;