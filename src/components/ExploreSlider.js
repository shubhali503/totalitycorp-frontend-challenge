import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

export default function ExploreSlider(props) {
  const settings = {
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              arrows: true
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
      ]
  }
  
  return (
    <Slider {...settings}>
      {props.images.map((item) => {
        return (
          <a href="#" className="explore__slider-card" key={item.id}>
            <figure>
              <img src={item.src} alt={item.alt} />
              <figcaption>
                <h5>{item.heading}</h5>
                <span>Floor: {item.span}</span>
              </figcaption>
            </figure>
          </a>
        );
      })}
    </Slider>
  );
}