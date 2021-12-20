import React from "react";

const SimilarBooksCard = (props) => {
    return (
        <>
            <div className="w-48">
                <div className="bg-white shadow rounded-md">
                    <div className="h-48 ">
                        <img
                            src={props.image}
                            alt="Book"
                            className="w-full h-full object-cover rounded-t-md"
                        />
                    </div>
                    <div className="flex flex-col items-center gap-2 p-3">
                        <h3 className="font-semibold text-lg">{props.title}</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SimilarBooksCard;