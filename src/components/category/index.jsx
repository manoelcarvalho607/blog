/* eslint-disable no-dupe-keys */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import "./category.css";
import { category } from '../../data/data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const SmapleNextArrow = (props) => {
    const { onClick } = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className='next'>
                <MdNavigateNext className='icon' />
            </button>
        </div>
    )
}
const SmaplePrevArrow = (props) => {
    const { onClick } = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className='prev'>
                <GrFormPrevious className='icon' />
            </button>
        </div>
    )
}


function Category() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: <SmapleNextArrow />,
        prevArrow: <SmaplePrevArrow />,
        responsive :[
          {
            breakpoint: 800,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        ],

    };

    return (
        <section className="category">
            <div className="content">
                <Slider {...settings}>
                    {category.map((item) => (
                        <div className='boxs'>
                            <div className='box' key={item.id}>
                                <img src={item.cover} alt="cover" />
                                <div className='overlay'>
                                    <h4>{item.category}</h4>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Category;