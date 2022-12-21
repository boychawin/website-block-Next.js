import React from "react";
import Slider from "react-slick";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { SampleNextArrow, SamplePrevArrow } from "../Function";
import Link from "next/link";

class Movie_Slide extends React.Component {

  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/react/movie_Slide.php`)
      .then((res) => {
        const persons = res.data;
        this.setState({ persons });
      });
  }

  render() {
    const settings = {
      centerMode: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToScroll: 1,
    };

    return (
      <>
        <Slider {...settings}>
          {Array.isArray(this?.state?.persons) && this.state.persons?.map((person) => {
            return (
              <Carousel.Item
                className="col-xl-12"
                data-index={person.title}
                key={person.title}
              >
                <Link href={"/movie-detail/" + person.link + "/"}>
                <a
                  href={"/movie-detail/" + person.link + "/"}
                  title={person.title}
                >
                  <img
                    className="d-block w-100 card-img"
                    src={person.photo=="" || person.photo==null
                    ? "/B_images/boychawin.com_logo.png"
                    : "https://image.tmdb.org/t/p/w1280/" + person.photo}
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

export default Movie_Slide;
