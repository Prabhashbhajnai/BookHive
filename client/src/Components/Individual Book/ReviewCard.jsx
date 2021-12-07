import React from 'react';

const ReviewCard = () => {
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
                            <h3 className="text-lg font-semibold">User Name</h3>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="w-full">
                        <p className="w-full text-gray-800 font-light text-base">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit dolores quidem odio eos, vel tenetur excepturi aperiam dolor qui quas quo id esse similique, sequi labore a, placeat accusamus! Tempora.       
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewCard;