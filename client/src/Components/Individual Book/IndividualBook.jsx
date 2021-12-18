import React from 'react'
import { Link } from 'react-router-dom';

// components
import Buttons from './Buttons';

const IndividualBook = (props) => {
    return (
        <div>
            <div className='w-full md:hidden'>
                <div className=' border-b-2 scrollbar-hide'>
                    <h1 className='font-semibold text-2xl'>{props.title}</h1>
                    <h6>{props.author}</h6>
                </div>
                <img
                    src={props.image}
                    alt="book"
                    className='w-full h-full my-2'
                />

                <p>{props.description}</p>

                <div className='mt-5'>
                    <p><span className='text-gray-500'>Author: </span>{props.author}</p>
                    <p><span className='text-gray-500'>Publisher: </span>{props.publisher}</p>
                    <p><span className='text-gray-500'>Published date: </span>{props.date}</p>
                    <p><span className='text-gray-500'>ISBN: </span>{props.isbn}</p>
                </div>

                <div className='mt-5'>
                    <h2 className='text-2xl font-semibold'>About {props.author}</h2>
                    <p>{props.authorAbout}</p>
                </div>

                <div className='flex flex-wrap gap-3 mt-5'>
                    <Buttons isActive>Issue</Buttons>
                    <a href={props.location} target="_blank" >
                        <Buttons isActive>Read Online</Buttons>
                    </a>
                </div>
            </div>


            <div className='hidden w-full h-80 md:flex flex gap-3'>
                <div className='w-5/12 h-auto'>
                    <img
                        src={props.image}
                        alt="book"
                        className='w-96 h-100'
                    />
                </div>
                <div className='w-7/12'>
                    <div className='flex items-center justify-between border-b-2 scrollbar-hide'>
                        <div>
                            <h1 className='text-4xl font-semibold'>{props.title}</h1>
                            <h6>({props.author})</h6>
                        </div>
                        <div className='flex w-1/3 gap-3'>
                            <Buttons isActive>Issue</Buttons>
                            <a href={props.location} target="_blank" >
                                <Buttons isActive>Read Online</Buttons>
                            </a>
                        </div>
                    </div>

                    <div className='overflow-y-scroll h-34 scrollbar-hide'>
                        <p className='text-lg mt-5'>{props.description}</p>

                        <div className='mt-5 text-lg'>
                            <p><span className='text-gray-500'>Author: </span>{props.author}</p>
                            <p><span className='text-gray-500'>Publisher: </span>{props.publisher}</p>
                            <p><span className='text-gray-500'>Published date: </span>{props.date}</p>
                            <p><span className='text-gray-500'>ISBN: </span>{props.isbn}</p>
                        </div>

                        <div className='mt-5'>
                            <h2 className='text-2xl font-semibold'>About {props.author}</h2>
                            <p className='text-lg'>{props.authorAbout}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default IndividualBook;
