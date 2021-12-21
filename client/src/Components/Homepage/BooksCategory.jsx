import React from "react";


const HomeSmCard = ({image, title}) => {
    return (
        <>
           <div className="lg:hidden bg-white shadow rounded-md w-90">
               <div className="w-full h-40">
                   <img src={image}
                   alt="Book"
                   className="w-full h-full rounded-md"
                   />
               </div>
           </div>
        </>
    );
};


const HomeLgCard = ({image, title}) => {
    return (
    <>
       <div className="hidden lg:block w-full h-60 overflow-hidden">
           <div className="w-full h-full">
               <img src={image}
               alt="Book"
               className="w-full h-full object-cover rounded-md shadow-lg"
               />
           </div>
       </div>
    </>
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