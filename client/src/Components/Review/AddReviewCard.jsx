import React, { useState } from 'react';
import { MdArrowRight } from 'react-icons/md';

// components
import ReviewModal from './ReviewModal';

const AddReviewCard = () => {
    let [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        if(!localStorage.elibraryUser){
            return alert("Please Sign in to post a review");
        }

        setIsOpen(true)
    };

    return (
        <>
            <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <button onClick={openModal} className='flex flex-wrap items-center text-Library-400'>
                Write a Review <MdArrowRight className='text-lg' />
            </button>
        </>
    )
}

export default AddReviewCard
