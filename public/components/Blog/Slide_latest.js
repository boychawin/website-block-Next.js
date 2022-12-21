import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { SampleNextArrow, SamplePrevArrow } from "../Function";
import Link from "next/link";

export default class Slide_latest extends React.Component {
  state = {
    persons: [],
  };

 async componentDidMount() {

    let data = []
    const { data: res, status } = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/index4.php`)
    if (res && status == 200) {
      data = await res;
    }
    this.setState({ persons:data });

  }

  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
      slidesToScroll: 1
    };

    return (
      <>
        <Slider {...settings}>
          {Array.isArray(this?.state?.persons) && this.state.persons?.map((person) => {
            return (
              <Carousel.Item className="col-xl-12" data-index={person.title} key={person.title}>
                <Link href={person.link}>
                  <a title={person.title} >
                    <img
                      className="d-block w-100 card-img"
                      src={person.image}
                      alt={person.title}
                    />

                    <Carousel.Caption>
                      <p className="legend2 abs-blr color-white p-20 bg-sm-color-7">
                        {person.title}
                      </p>
                      {/* <p>{person.name}</p> */}
                    </Carousel.Caption>
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



