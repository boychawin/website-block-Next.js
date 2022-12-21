import React from "react";
import Slider from "react-slick";
import Carousel from "react-bootstrap/Carousel";

export const SliderData = [
  //   {
  //     title: "รับทำเว็บไซต์ boychawin.com to fastwork",
  //     link: "/contact-work",
  //     name: "รับทำเว็บไซต์ boychawin.com to fastwork",
  //     image: "/B_images/banner_work.png",
  //   },
  {
    id: "1",
    title:
      "เก่งดีครับ เข้าใจงาน จบทั้งฟร้อนท์และแบ็คเอน โอกาสหน้ามาใช้งานอีกแน่นอนครับ ที่สำคัญราคาสมเหตุสมผล แนะนำเลย",

    name: "Peerayakorn W.",
    date: "03/05/21",
    image:
      "https://storage.googleapis.com/fastwork-static/09bb4cc8-a4ad-4b0b-8552-35be5d82a3b2.jpg",
  },
  {
    id: "2",
    title:
      "ดีมากค่ะ ใจเย็นมากกก รับฟังดีมากค่ะ เราไม่มีความรู้เรื่องเว็บไซต์เลย แต่งานออกมาตรงตามความต้องการค่ะ แนะนำให้ใช้บริการค่ะ",

    name: "TitLe P.",
    date: "26/06/21",
    image:
      "https://storage.googleapis.com/fastwork-static/36e04366-8483-4c6d-95a1-61074513ea09.jpg",
  },
  {
    id: "3",
    title:
      "ทำงานไว ให้คำแนะนำดี แก้ไขงานได้ทันใจ และได้งานตรงตามที่เราต้องการแบบ 100% เลยครับ",

    name: "buay w.",
    date: "10/09/21",
    image:
      "https://storage.googleapis.com/fastwork-static/cc1a98b1-8d8b-4625-a6d6-82277a876f77.jpg",
  },
  {
    id: "4",
    title: "5 ดาว",

    name: "Cb W.",
    date: "26/08/21",
    image:
      "https://storage.googleapis.com/fastwork-static/89f0ae89-75ea-4794-9dd0-caee0db8d865.jpg",
  },
  {
    id: "5",
    title: "5 ดาว",

    name: "Cb W.",
    date: "04/07/21",
    image:
      "https://storage.googleapis.com/fastwork-static/89f0ae89-75ea-4794-9dd0-caee0db8d865.jpg",
  },
  {
    id: "6",
    title: "เข้าใจงานได้เร็ว แก้ไขปรับปรุงงานตามความต้องการของลูกค้าได้ทุกอย่าง ให้คำแนะนำติดตามงานเป็นอย่างดีครับ",

    name: "อิฏฐวัตน์ ป.",
    date: "15/10/21",
    image:
      "https://storage.googleapis.com/fastwork-static/1194f09c-cb5d-47e3-99e0-6f7bb85cdad2.jpg",
  },
];

class ReviewFastwork2 extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      // speed: 3000,
      // slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToScroll: 1,
    };

    return (
      <>
        <Slider {...settings}>
          {SliderData?.map((person) => {
            return (
              <Carousel.Item
                className="col-xl-12"
                data-index={person.id}
                key={person.id}
              >
                <div className="mt-10" data-index="Secret">
                  <div className="oflow-hidden pos-relative mb-5 dplay-block  ">
                    <div className="wh-100x abs-tlr">
                      <span className="badge">
                        <h6 className="notification"> {person.name} </h6>
                      </span>
                      <img
                        className="img-fluid"
                        style={{ borderRadius: "50%" }}
                        src={person.image ? person.image : "https://boychawin.com/B_images/logoboychawin.com.png"}
                        alt={person.title}
                      />
                    </div>
                    <div className="ml-120 min-h-100x">
                      {/* <h5>{person.title}</h5> */}
                      <h6 className="color-lite-black pt-5">{person.date}</h6>
                      <h5>{person.title}</h5>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Slider>
      </>
    );
  }
}

export default ReviewFastwork2;
