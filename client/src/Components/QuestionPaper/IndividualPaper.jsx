import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// redux action
import { getPaper } from '../../Redux/Reducer/Quespaper/quespaper.action';

const IndividualPaper = (props) => {
    const [paper, setPaper] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPaper(props._id)).then((data) => {
            setPaper(data.payload.paper);
        });
    }, []);

    return (
        <a href={props?.location} target="_blank">
            <div className='w-full bg-white -ml-10 border-2 px-2 text-xl h-16 rounded-xl transition duration-100 ease-in-out hover:shadow-lg transform transition duration-100 hover:scale-105 overflow-hidden'>
                <button className='mt-4'>{props?.subject} {props?.date}</button>
            </div>
        </a>
    );
};

export default IndividualPaper;
