import React from 'react';

//components
import BooksNavbar from "../Components/Navbar/BooksNavbar";
import Image from "../Components/Books/Image";
import TabContainer from "../Components/Books/Tabs";
const BooksLayout=()=>{
	return(
		<>
		{" "}
		<BooksNavbar />
	    <div className="container mx-auto px-4 lg:px-20">
	    	<Image />
	    	<TabContainer />
	    </div>
		</>
	);
}

export default BooksLayout;