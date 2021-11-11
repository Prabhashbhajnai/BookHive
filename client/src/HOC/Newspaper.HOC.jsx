import React from "react";
import { Route } from "react-router-dom";

//Layout
import NewspaperLayout from "../Layout/Newspaper.layout";

const NewspaperLayoutHOC = ({component: Component, ...rest}) => {
    return (
    <>
      <Route 
         {...rest} 
         component={(props) => (
           <NewspaperLayout>
             <Component {...props}/>
           </NewspaperLayout>
        )} 
      />
    </>
  );
};

export default NewspaperLayoutHOC;