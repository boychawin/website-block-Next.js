import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";

class Index_Movie extends Component {
  state = {
    persons: [],
  };

  async componentDidMount() {


    let data = []
    const { data: res, status } = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/index13.php`)
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
          {this.state.persons?.map((person) => {
            return (
              <Carousel.Item
                className="col-xl-12 p-20"
                data-index={person.id}
                key={person.id}
              >
                <span className="badge12_Movie">
                  {" "}
                  <h6 className="notification">
                    {" "}
                    {person.tags != 0 ? "คะแนน " + person.tags : "หนังใหม่"}
                  </h6>{" "}
                </span>

                <img
                  className="img-fluid"
                  src={"https://image.tmdb.org/t/p/w500/" + person.photo}
                  alt={"ภาพยนตร์ " + person.title}
                />
                <Link href={"/movie-detail/" + person.id}>
                  <a title={"ภาพยนตร์ " + person.title}>
                    <h5 className="pt-15">
                      <b> {"ภาพยนตร์ : " + person.title} </b>
                    </h5>
                    {/* <ul className="list-li-mr-20 pt-5 mb-30">
                      <li className="color-lite-black">{thaidate4(person.release_date)}</li>
                    </ul> */}
                  </a>
                </Link>
              </Carousel.Item>

              //   <Carousel.Item
              //     className="col-xl-12 mt-10 p-20"
              //     data-index={person.id}
              //     key={person.id}
              //   >

              //         <span className="badge10">
              //           <h6 className="notification">
              //              {person.tags != 0 ? 'คะแนน '+person.tags : 'หนังใหม่'}
              //           </h6>
              //         </span>
              //         <Link href={person.link}>
              //       <a
              //         title={"ภาพยนตร์ " + person.title}
              //       >
              //         <img
              //           className="card-img"
              //           src={"https://image.tmdb.org/t/p/w500/" +person.photo}
              //           alt={"ภาพยนตร์ " + person.title}
              //         />
              //         {/* <Carousel.Caption>
              //           <h4 className="legend abs-blr color-white p-20 bg-sm-color-7">
              //           ภาพยนตร์ {person.title}
              //           </h4>
              //         </Carousel.Caption> */}
              //       </a>
              //     </Link>
              //   </Carousel.Item>
            );
          })}
        </Slider>
      </>
    );
  }
}

export default Index_Movie;
