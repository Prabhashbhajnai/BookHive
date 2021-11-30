import React from 'react';
import Slider from 'react-slick';


// components
import { NextArrow, PrevArrow } from '../../Components/CarousalArrows';
import SimilarBooksCard from '../../Components/Individual Book/SimilarBooksCard';

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
            </div>
        </>
    )
}

export default SpecificBook;