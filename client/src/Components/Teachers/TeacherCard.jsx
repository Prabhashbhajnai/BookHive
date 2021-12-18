import React from 'react';
import { Link } from 'react-router-dom';

const TeacherCard = (props) => {
    return (
        <Link to={`/quespaper/teacher/${props._id}`}>
            <div className="bg-white w-full p-2 mb-2 rounded-2xl transition duration-700 ease-in-out hover:shadow-lg md:w-1/2 lg:w-64">
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
        </Link>
    );
};

export default TeacherCard;