import React from 'react';

const TeacherInfo = (props) => {
    return (
        <>
            <div className='flex h-auto mx-auto md:flex lg:px-20 gap-3 md:gap-10'>
                <div className='md:hidden h-1/3 w-1/3 mb-5' >
                    <img
                        src={props.photo}
                        alt="teacher"
                        className='w-full h-full rounded-xl'
                    />
                </div>
                <div className='hidden md:block h-56 w-1/5 mb-5' >
                    <img
                        src={props.photo}
                        alt="teacher"
                        className='w-full h-full rounded-xl'
                    />
                </div>
                <div>
                    <p><span className='text-gray-500'>Name: </span>{props.name}</p>
                    <p><span className='text-gray-500'>Subject: </span>{props.subject}</p>
                    <p><span className='text-gray-500'>Position: </span>{props.position}</p>
                </div>
            </div>
            <div className='mx-20 border-b-2'></div>
        </>
    );
};

export default TeacherInfo;
