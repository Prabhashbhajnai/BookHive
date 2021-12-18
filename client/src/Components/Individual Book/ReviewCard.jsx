import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

// redux action
import { getUser } from '../../Redux/Reducer/user/user.action';

const ReviewCard = (props) => {
    const [user, setUser] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(props.user)).then((data) =>
            setUser(data.payload.user)
        );
    }, []);

    return (
        <>
            <div className="my-3 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full">
                            <img
                                src="https://b.zmtcdn.com/images/user_avatars/cupcake.png"
                                alt="avatar"
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-lg font-semibold">{user?.fullname}</h3>
                            <small className="text-gray-500">{dayjs(props.createdAt).format("DD MMM YYYY")}</small>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="w-full">
                        <p className="w-full text-gray-800 font-light text-base">
                            {props.reviewText}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewCard;