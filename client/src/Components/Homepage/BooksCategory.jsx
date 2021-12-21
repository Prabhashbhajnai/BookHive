import React from "react";
import { Link } from "react-router-dom";


const HomeSmCard = ({image, id}) => {
    return (
        <Link to={`/books/category/${id}`}>
           <div className="lg:hidden bg-white shadow rounded-md w-90">
               <div className="w-full h-40">
                   <img src={image}
                   alt="Book"
                   className="w-full h-full rounded-md"
                   />
               </div>
           </div>
        </Link>
    );
};


const HomeLgCard = ({image, id}) => {
    return (
    <Link to={`/books/category/${id}`}>
       <div className="hidden lg:block w-full h-60 overflow-hidden">
           <div className="w-full h-full">
               <img src={image}
               alt="Book"
               className="w-full h-full object-cover rounded-md shadow-lg"
               />
           </div>
       </div>
    </Link>
  );
};

const BooksCategory = (props) => {
    return (
        <>
           <HomeSmCard {...props} />
           <HomeLgCard {...props} />
        </>
    );
};

export default BooksCategory;