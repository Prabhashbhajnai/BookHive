import React from "react";
import { Route } from "react-router-dom";

//Layout
import QuestionPaperLayout from "../Layout/QuestionPaper.layout";

const QuestionPaperLayoutHOC = ({component: Component, ...rest}) => {
    return (
    <>
      <Route 
         {...rest} 
         component={(props) => (
           <QuestionPaperLayout>
             <Component {...props}/>
           </QuestionPaperLayout>
        )} 
      />
    </>
  );
};

export default QuestionPaperLayoutHOC;
