import React from "react";

const Image=()=>{
	return(
        <>
            <div className="md:flex gap-3 w-full h-80 overflow-hidden">
		    	<div className="w-7/12 h-full overflow-hidden ">
		    	    <img src="https://quotefancy.com/media/wallpaper/3840x2160/6840-Stephen-King-Quote-If-you-want-to-be-a-writer-you-must-do-two.jpg" 
		    	    alt="quote" 
		    	    className="w-full h-full  rounded-lg transform transition duration-1000 hover:scale-110" />
		    	</div>
		    	<div className="w-7/12 h-full overflow-hidden ">
		    	    <img src="https://www.quotemaster.org/images/19/1936c21ba2ee6e72ce39566e21aac614.jpg" 
		    	    alt="quote" 
		    	    className="w-full h-full rounded-lg transform transition duration-1000 hover:scale-110" />
		    	</div>
	    	</div> 
	    </>
	)
}
export default Image;