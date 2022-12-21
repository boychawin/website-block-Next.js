import React from "react";
import Slider from "react-slick";
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";
import { SampleNextArrow, SamplePrevArrow } from "../Function";
import Link from "next/link";

class Index_latest extends React.Component {
  // shouldComponentUpdate() {
  //   return false;
  // }
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
    // var settings = {
    //   centerMode: true,
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToScroll: 1,
    //   slidesToShow: 1,
    //   autoplay: true,
    //   autoplaySpeed: 2000,
    // };

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />,
      slidesToScroll: 1,
    };

    return (
      <>
        <Slider {...settings}>
          {Array.isArray(this?.state?.persons) && this.state.persons?.map((person) => {
            if (person.category === "9") {
              var title_index4 = "ข้อมูลเหรียญ " + person.title;
              var link_index4 =
                "/cryptocurrency-detail/" + person.id + "?b=" + person.ids;
              var image_index4 = person.image;
            } else if (person.category === "11") {
              var title_index4 = "ภาพยนตร์ " + person.title;
              var link_index4 = "/movie-detail/" + person.id;
              var image_index4 =
                person.image == "" || person.image == null
                  ? "/B_images/boychawin.com_logo.png"
                  : "https://image.tmdb.org/t/p/w1280/" + person.image;
            } else {
              var title_index4 = person.title;
              var link_index4 = "/blog-detail/" + person.id;
              var image_index4 =
              `${process.env.NEXT_PUBLIC_LINK_API}/blogs/images/${person.image}`
            }

            return (
              <Carousel.Item
                className="col-xl-12"
                data-index={person.id}
                key={person.id}
              >
                <img
                  className="d-block w-100 card-img"
                  src={image_index4}
                  alt="First slide"
                />
                <Link href={link_index4}>
                  <a title={title_index4}>
                    <Carousel.Caption>
                      <p className="legend2 abs-blr color-white p-20 bg-sm-color-7">
                        {title_index4}
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

export default Index_latest;
