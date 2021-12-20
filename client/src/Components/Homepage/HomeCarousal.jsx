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
        image: "https://media.istockphoto.com/photos/open-book-on-library-roomeducation-concept-picture-id543067020?k=20&m=543067020&s=612x612&w=0&h=Y1oaroI-HgWhH-FC3IpBY32x7Raz-hyG5XrT_vSXiCA=",
        title: "Book 2",
    },
    {
        image: "https://media.istockphoto.com/photos/flying-color-books-on-pastel-yellow-background-picture-id1304915362?b=1&k=20&m=1304915362&s=170667a&w=0&h=1oBLMT9JLYt6Ju3LbSppu8Fga92YfvSHiPu7zQlculg=",
        title: "Book 3",
    },
    {
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJvb2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        title: "Book 4",
    },
    {
        image: "https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648?b=1&k=20&m=1279460648&s=170667a&w=0&h=uZa830sWo8hlFN0Y7FnQ14giNC0Z2EBNuTMuNJeJhQg=",
        title: "Book 5",
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
            <h1 className="text-xl mb-4 mt-4 font-semibold">
                Inspiration for your first Order
            </h1>
            <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">

                {categories.map((books) => (
                    <BooksCategory {...books} />
                ))}


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