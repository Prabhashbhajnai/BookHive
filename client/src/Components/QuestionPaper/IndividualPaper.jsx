import React from 'react'

const IndividualPaper = (props) => {
    return (
        <a href={props.location} target="_blank">
            <div className='w-full bg-white -ml-10 border-2 px-2 align-middle items-center text-xl h-16 rounded-xl transition duration-100 ease-in-out hover:shadow-lg transform transition duration-100 hover:scale-105 overflow-hidden'>
                <button className='mt-4'>{props.subject} {props.date}</button>
            </div>
        </a>
    );
};

export default IndividualPaper;
