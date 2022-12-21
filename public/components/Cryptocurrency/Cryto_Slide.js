

import React from "react";
import Slider from "react-slick";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { SampleNextArrow, SamplePrevArrow } from "../Function";
import Link from "next/link";

class Cryto_Slide extends React.Component {

  state = {
    persons: [],
  };

  async componentDidMount() {

    let data = []
    const { data: res, status } = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/react/cryto_slide.php`)
    if (res && status == 200) {
      data = await res;
    }
    this.setState({ persons: data });

  }

  render() {
    const settings = {
      centerMode: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      slidesToScroll: 1
    };

    return (
      <>
        <Slider {...settings}>
          {Array.isArray(this.state.persons) && this.state.persons?.map((person) => {
            return (
              <Carousel.Item className="col-xl-12" data-index={person.title} key={person.title}>
                <Link href={person.link}>
                  <a title={person.title} href={person.link}>
                    <img
                      className="d-block w-100 card-img"
                      src={person.image}
                      alt={person.title}
                    />
                    <Carousel.Caption>
                      <p className="legend3 abs-blr color-white p-20 bg-sm-color-7">
                        {person.title}
                      </p>
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

export default Cryto_Slide;




