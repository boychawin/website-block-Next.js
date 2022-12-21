import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";

class Index_Cryto extends Component {
  state = {
    persons: [],
  };

 async componentDidMount() {


    let data = []
    const { data: res, status } = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/index12.php`)
    if (res && status == 200) {
      data = await res;
    }
    this.setState({ persons:data });


  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <>
        <Slider {...settings}>
          {Array.isArray(this?.state?.persons) && this.state.persons?.map((person) => {
            return (
              <Carousel.Item
                className="col-xl-12 mt-10 p-20"
                data-index={person.name}
                key={person.name}
              >
                <span className="badge10_Cryto">
                  <h6 className="notification">
                    อันดับ {person.market_cap_rank}
                  </h6>
                </span>

                <img
                  className="card-img"
                  src={person.image}
                  alt={"ข้อมูลเหรียญ " + person.title}
                />
                <Link href={person.link}>
                  <a
                    title={person.title}
                    // title={"ข้อมูลเหรียญ " + person.title}
                  >
                    <Carousel.Caption>
                      <h5 className="legend boychawin-blr  p-20 ">
                        ข้อมูลเหรียญ {person.title}
                      </h5>
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

export default Index_Cryto;
