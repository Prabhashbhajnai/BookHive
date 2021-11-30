import React from 'react';

// components
import Navbar from '../Components/Navbar';
import IndividualBook from '../Components/Individual Book/IndividualBook';
const IndividualBookLayout = (props) => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto py-10 px-4 lg:px-32">
                <IndividualBook 
                    image={"https://edit.org/images/cat/book-covers-big-2019101610.jpg"} 
                    title={"Book Title"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eos id in blanditiis amet quo magni veritatis repellat praesentium expedita. Reprehenderit velit error provident asperiores voluptatibus ab numquam corporis architecto."}
                    author={"Author"}
                    authorAbout={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eveniet natus harum, voluptate iusto delectus impedit ex, ab debitis, ratione quasi animi accusamus culpa illum doloribus. Porro architecto consectetur aspernatur."}
                    publisher={"Publisher"}
                    date={"29-Nov-21"}
                    isbn={123456789}
                />
                <div>{props.children}</div>
            </div>
        </>
    );
};

export default IndividualBookLayout
