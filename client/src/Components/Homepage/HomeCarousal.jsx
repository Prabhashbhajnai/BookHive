import React from "react";
import Slider from "react-slick";

//component
import BooksCategory from "./BooksCategory";
import { NextArrow, PrevArrow } from "../CarousalArrows";


const HomeCarousal = () => {

    const categories = [{
        image: "https://e-library-vit.s3.ap-south-1.amazonaws.com/All%20The%20Bright%20Places.jpg"
    },
    {
        image: "https://e-library-vit.s3.ap-south-1.amazonaws.com/Harry%20Potter.jpg",
    },
    {
        image: "https://e-library-vit.s3.ap-south-1.amazonaws.com/Looking%20for%20Alaska.jpg",
    },
    {
        image: "https://e-library-vit.s3.ap-south-1.amazonaws.com/Lord%20of%20the%20Rings%201.jpg",
    },

    ];
    const settings = {
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
            <h1 className="text-xl mb-4 mt-4 font-semibold">
                Inspiration for your first Order
            </h1>
            <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
                <Slider {...settings} className='flex flex-wrap px-3 w-full'>
                    {categories.map((books) => (
                        <BooksCategory {...books} />
                    ))}
                </Slider>
            </div>

            <div className="hidden lg:block">

                <Slider {...settings} className='flex flex-wrap px-32 w-full'>
                    {categories.map((books) => (
                        <BooksCategory {...books} />
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default HomeCarousal;