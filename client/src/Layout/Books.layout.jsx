import React from 'react';

//components
import BooksNavbar from "../Components/Navbar/BooksNavbar";
import Image from "../Components/Books/Image"
const BooksLayout=()=>{
	return(
		<>
		{" "}
		<BooksNavbar />
	    <div className="container mx-auto px-4 lg:px-20">
	    	<Image />
	    </div>
		</>
	);
}

export default BooksLayout;