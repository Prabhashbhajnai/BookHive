import React from 'react';
import { Link } from 'react-router-dom'

const BookCard = (props) => {
    return (
        <Link to={`/books/category/${props._id}`}>
            <div className=" bg-white shadow-lg rounded-xl w-24 md:w-56 transform transition duration-1000 hover:scale-105">
                <div className="w-full h-32">
                    <img
                        src={props.photo}
                        alt="book-cover"
                        className="w-full h-56 rounded-t-md px-6 pt-4 pb-2"
                    />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-md text-center font-bold mt-24">{props.title}</h3>
                    <div className="items-center">
                        <p className='text-center'>
                            by: {props.author}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard
