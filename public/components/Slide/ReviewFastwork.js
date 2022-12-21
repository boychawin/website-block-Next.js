import React from "react";
import Slider from "react-slick";
import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";
export const SliderData = [
  {
    title: "รับทำเว็บไซต์ boychawin.com to fastwork",
    link: "/Website",
    name: "รับทำเว็บไซต์ boychawin.com to fastwork",
    image: "/B_images/banner_work.png",
  },
];

class ReviewFastwork extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 5000,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToScroll: 1,
    };

    return (
      <>
        <Slider {...settings}>
          {SliderData?.map((person) => {
            return (
              <Carousel.Item
                className="col-xl-12"
                data-index={person.image}
                key={person.image}
              >
                <Link href={person.link}>
                  <a href={person.link}  title={person.title}>
                    <img
                      className="d-block w-100 card-img"
                      src={person.image}
                      alt={person.name}
                    />
                  </a>
                </Link>
              </Carousel.Item>
            );
          })}
        </Slider>
      </>
    );
  }
}

export default ReviewFastwork;
