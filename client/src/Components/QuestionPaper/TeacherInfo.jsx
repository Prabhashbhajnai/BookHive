import React from 'react';

const TeacherInfo = (props) => {
    return (
        <>
            <div className='container flex w-full h-auto mx-auto md:flex lg:px-20 mt-5 gap-3 md:gap-10'>
                <div className='md:hidden h-1/3 w-1/3' >
                    <img
                        src="https://vitbhopal.ac.in/file/2021/06/Dr_Manas_C.jpg"
                        alt="teacher"
                        className='w-full h-full rounded-xl'
                    />
                </div>
                <div className='hidden md:block h-56 w-1/5' >
                    <img
                        src="https://vitbhopal.ac.in/file/2021/06/Dr_Manas_C.jpg"
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
        </>
    );
};

export default TeacherInfo;