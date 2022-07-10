
import React from 'react'
import styled from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    
    return (
        <Carousel {...settings}>
            <Wrap>
            <a href="/detail">
                <img src="/images/slider-badging.jpg" />
                </a>
            </Wrap>
            <Wrap>
            <a href="/detail">
                <img src="/images/slider-badag.jpg" />
                </a>
            </Wrap>
            <Wrap>
            <a href="/detail">
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/46B428B48739ED520A3ED05C60E048ADA6FC0BCC2DB2B2F897092C466BF6F5FA/scale?width=1440&aspectRatio=3.91&format=jpeg" />
                </a>
            </Wrap>
            <Wrap>
            <a href="/detail">
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/07003EE660ABB5B858A4F0F766C79EE7BE1ADE41E2C8FD4E8998DF9E04505A77/scale?width=1440&aspectRatio=3.91&format=jpeg" />
                </a>
            </Wrap>
            
        </Carousel>
    )
}

export default ImgSlider


const Carousel = styled(Slider)`
    margin-top: 20px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }


`

const Wrap = styled.div`
    cursor: pointer;
    img {
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);

        }

    }

`
