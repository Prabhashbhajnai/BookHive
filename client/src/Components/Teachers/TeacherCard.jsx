import React from 'react'

const TeacherCard = (props) => {
    return (
        <>
            <div className="bg-white p-2 mb-4  w-full rounded-2xl transition duration-700 ease-in-out hover:shadow-lg md:w-1/2 lg:w-1/3 lg:p-8">
                <div className="w-full h-56 relative px-4">
                    <img
                        src={props.photo}
                        alt="food"
                        className="w-full h-full rounded-2xl"
                    />
                </div>
                <div className="my-1 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h4 className="text-xl font-medium px-4">{props.name}</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeacherCard;