import Slider from "react-slick";
import Carousel from "react-bootstrap/Carousel";
import React from "react";

export const SliderData = [
  {
    id: "1",
    name: "รับออกแบบระบบเว็บไซต์ Front-end และ Back-end ราคาคุยได้ ดูแลตลอดชีพ | boychawin.com ",
    image:
      "/B_images/img_work/1_รับออกแบบระบบเว็บไซต์ Front-end และ Back-end ราคาคุยได้ ดูแลตลอดชีพ.png",
  },
  {
    id: "2",
    name: "รับออกแบบระบบเว็บไซต์ Front-end และ Back-end ราคาคุยได้ ดูแลตลอดชีพ | boychawin.com ",
    image: "/B_images/img_work/2_ระบบจัดการงาน รับทำระบบ.png",
  },
  {
    id: "3",
    name: "รับออกแบบระบบเว็บไซต์ Front-end และ Back-end ราคาคุยได้ ดูแลตลอดชีพ | boychawin.com ",
    image: "/B_images/img_work/3_ระบบจัดการงาน รับทำระบบ.png",
  },
  {
    id: "4",
    name: "รับออกแบบระบบเว็บไซต์ Front-end และ Back-end ราคาคุยได้ ดูแลตลอดชีพ | boychawin.com ",
    image: "/B_images/img_work/4_ระบบจัดการงาน รับทำระบบ.png",
  },
  {
    id: "5",
    name: "รับออกแบบระบบเว็บไซต์ Front-end และ Back-end ราคาคุยได้ ดูแลตลอดชีพ | boychawin.com ",
    image: "/B_images/img_work/5_ระบบจัดการงาน รับทำระบบ.png",
  },
  {
    id: "6",
    name: "รับออกแบบระบบเว็บไซต์ Front-end และ Back-end ราคาคุยได้ ดูแลตลอดชีพ | boychawin.com ",
    image: "/B_images/img_work/6_ระบบจัดการงาน รับทำระบบ.png",
  },
  {
    id: "7",
    name: "รับออกแบบระบบเว็บไซต์ Front-end และ Back-end ราคาคุยได้ ดูแลตลอดชีพ | boychawin.com ",
    image: "/B_images/img_work/7_ระบบจัดการงาน รับทำระบบ.png",
  },
  {
    id: "8",
    name: "รับออกแบบระบบเว็บไซต์ Front-end และ Back-end ราคาคุยได้ ดูแลตลอดชีพ | boychawin.com ",
    image: "/B_images/img_work/8_ระบบจองห้องโต๊ะ รับทำระบบ.png",
  },
  {
    id: "9",
    name: "รับออกแบบระบบเว็บไซต์ Front-end และ Back-end ราคาคุยได้ ดูแลตลอดชีพ | boychawin.com ",
    image: "/B_images/img_work/9_ระบบจองห้องโต๊ะ รับทำระบบ.png",
  },
  {
    id: "10",
    name: "รับออกแบบระบบเว็บไซต์ Front-end และ Back-end ราคาคุยได้ ดูแลตลอดชีพ | boychawin.com ",
    image: "/B_images/img_work/10_รับทำเว็บบล็อก โดย boychawin.com.png",
  },
  {
    id: "11",
    name: "รับออกแบบระบบเว็บไซต์ Front-end และ Back-end ราคาคุยได้ ดูแลตลอดชีพ | boychawin.com ",
    image: "/B_images/img_work/11_รับทำเว็บบล็อก โดย boychawin.com.png",
  },
  {
    id: "12",
    name: "รับออกแบบระบบเว็บไซต์ Front-end และ Back-end ราคาคุยได้ ดูแลตลอดชีพ | boychawin.com ",
    image: "/B_images/img_work/12_รับทำเว็บบล็อก โดย boychawin.com.png",
  },
];

class Contact_slide extends React.Component {
  render() {

    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
      appendDots: dots => (
        <div
          style={{

            borderRadius: "10px",
            padding: "0px",
            "margin-bottom": "-20px"

          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            width: "30px",
            // color: "#02d667",
            "border-style": "rgba(0, 0, 0, 0.19)",
            "-moz-box-shadow": "5px 5px 5px rgba(0, 0, 0, 0.19)",
            "-webkit-box-shadow": "5px 5px 5px rgba(0, 0, 0, 0.19)",
            "box-shadow": "0 5px 5px 5px var(rgba(0, 0, 0, 0.19))"
            // border: "1px rgba(0, 0, 0, 0.19) solid"
          }}
        >
          {i + 1}
        </div>
      )
    };

    return (
      <>
        <Slider {...settings}>
          {Array.isArray(SliderData) && SliderData.map((person) => {
            return (
              <Carousel.Item
                className="col-xl-12 "
                data-index={person.id}
                key={person.id}
              >
                <a href={"#/#"} title={person.name}>
                  <img
                    className="d-block w-100 card-img"
                    src={person.image}
                    alt={person.name}
                  />
                </a>
              </Carousel.Item>
            );
          })}
        </Slider>
      </>
    );
  }
}

export default Contact_slide;
