import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { thaidate2 } from "../Function";
import Link from "next/link";

export default class Index6 extends Component {
  state = {
    persons: [],
  };

 async componentDidMount() {
    let data = []
    const { data: res, status } = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/index11.php`)
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
            if (person.category === "2") {
              var category = (
                <span className="badge11">
                  {" "}
                  <h6 className="notification">ไอที</h6>{" "}
                </span>
              );
            }
            if (person.category === "3") {
              var category = (
                <span className="badge12">
                  <h6 className="notification">ข่าว</h6>{" "}
                </span>
              );
            }
            if (person.category === "5") {
              var category = (
                <span className="badge13">
                  {" "}
                  <h6 className="notification">ผลงาน</h6>{" "}
                </span>
              );
            }

            return (
              <Carousel.Item
                className="col-xl-12 p-20"
                data-index={person.title}
                key={person.title}
              >
                {category}

                <img
                  className="img-fluid"
                  src={person.image}
                  alt={person.title}
                />
                <Link href={person.link}>
                  <a title={"ข้อมูลเหรียญ " + person.title}>
                    <h5 className="pt-15">
                      <b>{person.title}</b>
                    </h5>
                    <ul className="list-li-mr-20 pt-5 mb-30">
                      <li className="color-lite-black">{thaidate2(person.date)}</li>
                    </ul>
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
