import React from 'react';
import Slider from 'react-slick';
import { MdArrowRight } from 'react-icons/md';


// components
import { NextArrow, PrevArrow } from '../../Components/CarousalArrows';
import SimilarBooksCard from '../../Components/Individual Book/SimilarBooksCard';
import ReviewCard from '../../Components/Individual Book/ReviewCard';

const SpecificBook = () => {
    const settings = {
        arrows: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <>
            <div className="flex flex-col mt-3 md:mt-80">
                <h4 className='text-2xl font-bold'>Readers who viewed this also viewed</h4>
                <div className='flex flex-col gap-4 mt-3'>
                    <Slider {...settings}>
                        <SimilarBooksCard
                            image="https://edit.org/images/cat/book-covers-big-2019101610.jpg"
                            title="Book Title"
                        />
                        <SimilarBooksCard
                            image="https://edit.org/images/cat/book-covers-big-2019101610.jpg"
                            title="Book Title"
                        />
                        <SimilarBooksCard
                            image="https://edit.org/images/cat/book-covers-big-2019101610.jpg"
                            title="Book Title"
                        />
                        <SimilarBooksCard
                            image="https://edit.org/images/cat/book-covers-big-2019101610.jpg"
                            title="Book Title"
                        />
                        <SimilarBooksCard
                            image="https://edit.org/images/cat/book-covers-big-2019101610.jpg"
                            title="Book Title"
                        />
                        <SimilarBooksCard
                            image="https://edit.org/images/cat/book-covers-big-2019101610.jpg"
                            title="Book Title"
                        />
                        <SimilarBooksCard
                            image="https://edit.org/images/cat/book-covers-big-2019101610.jpg"
                            title="Book Title"
                        />
                        <SimilarBooksCard
                            image="https://edit.org/images/cat/book-covers-big-2019101610.jpg"
                            title="Book Title"
                        />
                    </Slider>
                </div>
                <div className='mt-6'>
                    <h4 className="text-xl font-medium">What the readers have to say</h4>
                    <div className='flex gap-5'>
                        <div>
                            <ReviewCard />
                            <ReviewCard />
                            <ReviewCard />
                        </div>
                        <aside
                            style={{ height: "fit-content" }}
                            className="hidden md:flex md:w-4/12 sticky rounded-xl fixed top-2 bg-white p-3 shadow-md flex flex-col gap-4"
                        >
                            <button className='flex flex-wrap items-center text-Library-400'>Write a Review <MdArrowRight className='text-lg' /></button>
                        </aside>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SpecificBook;