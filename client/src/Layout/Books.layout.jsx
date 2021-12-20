import React from 'react';

//components
import Navbar from "../Components/Navbar/index"
import Image from "../Components/Books/Image";
import TabContainer from "../Components/Books/Tabs";

const BooksLayout=(props)=>{
	return(
		<>
		<Navbar />
	    <div className="container mx-auto py-10 px-4 lg:px-20">
	    	<Image />
	    	<div className="my-4">
	    	<TabContainer />
	    	</div>
	    	{props.children}
	    </div>
		</>
	);
}

export default BooksLayout;