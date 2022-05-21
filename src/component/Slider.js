import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slider  from 'react-slick'
function Slider() {
let settings={
    dots:true,
    infinite:true,
    speed:1000,
    slidesToShow:1,
    slidesToScroll:1,
    autoplay:true
}

  return (
    <Carousel {...settings}>

       <Wrap>
           <img src='/images/slider-badging.jpg' alt=''/>
       </Wrap>
       <Wrap>
           <img src='/images/slider-badag.jpg' alt=''/>
       </Wrap>
    </Carousel>
  )
}
const Wrap = styled.div`
     img{
         border-radius:10px;
         width:100%;
         height:100%;
         box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px,
         rgb(0 0 0/73%) 0px 16px 10px -10px;
     }
`
const Carousel = styled(slider)`
.slick-list{
    overflow: visible;
}
`
export default Slider