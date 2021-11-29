import React from "react";
import { Route } from "react-router-dom";

//Layout
import IndividualBookLayout from "../Layout/IndividualBook.layout";

const IndividualBookLayoutHOC = ({component: Component, ...rest}) => {
    return (
    <>
      <Route 
         {...rest} 
         component={(props) => (
           <IndividualBookLayout>
             <Component {...props}/>
           </IndividualBookLayout>
        )} 
      />
    </>
  );
};

export default IndividualBookLayoutHOC;
