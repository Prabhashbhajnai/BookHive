import React from "react";
import Slider from "react-slick";

//component
import BooksCategory from "./BooksCategory";
import { NextArrow, PrevArrow } from "../CarousalArrows";


const HomeCarousal = () => {

    const categories = [{
        image: "https://e-library-vit.s3.ap-south-1.amazonaws.com/All%20The%20Bright%20Places.jpg",
        id: "61c1aa394cbcec2cf8de0c9c"
    },
    {
        image: "https://e-library-vit.s3.ap-south-1.amazonaws.com/Harry%20Potter.jpg",
        id: "61bca40afe8a6ed6c8c19d92"
    },
    {
        image: "https://e-library-vit.s3.ap-south-1.amazonaws.com/Looking%20for%20Alaska.jpg",
        id: "61c1a6ee4cbcec2cf8de0c92"
    },
    {
        image: "https://e-library-vit.s3.ap-south-1.amazonaws.com/Lord%20of%20the%20Rings%201.jpg",
        id: "61c198b14cbcec2cf8de0c77"
    },

    ];
    const settings = {
        arrows: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
            <div className="lg:hidden flex flex-wrap justify-between mt-4">
                <Slider {...settings} className='flex flex-wrap px-3 w-full'>
                    {categories.map((books) => (
                        <BooksCategory {...books} />
                    ))}
                </Slider>
            </div>

            <div className="hidden lg:block">

                <Slider {...settings} className='flex flex-wrap px-32 w-full mt-4'>
                    {categories.map((books) => (
                        <BooksCategory {...books} />
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default HomeCarousal;