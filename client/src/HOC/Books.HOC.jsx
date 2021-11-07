import React from "react";
import { Route } from "react-router-dom";

//Layout
import BooksLayout from "../Layout/Books.layout";

const BooksLayoutHOC = ({component: Component, ...rest}) => {
    return (
    <>
      <Route 
         {...rest} 
         component={(props) => (
           <BooksLayout>
             <Component {...props}/>
           </BooksLayout>
        )} 
      />
    </>
  );
};

export default BooksLayoutHOC;
