import React from "react";
import Slider from "react-slick";
import Carousel from "react-bootstrap/Carousel";

export const SliderData = [
  {
    title: "เปิดบัญชี binance",
    link: "https://www.binance.com/th/register?ref=OUBNZEHS",
    name: "Binance เว็บซื้อขาย Bitcoin อันดับ 1 ของโลก",
    image: "/B_images/binance.jpg",
  },

  {
    title: "เปิดบัญชี bitkub",
    link: "https://www.bitkub.com/signup?ref=14328",
    name: "Bitkub เว็บไซต์ซื้อขาย Bitcoin ในไทย",
    image: "/B_images/bitkub.png",
  },
  {
    title: "เปิดบัญชี zipmex",
    link: "https://trade.zipmex.co.th/accounts/sign-up?aff=SsVJw4hkjA",
    name: "เว็บซื้อขาย Bitcoin ที่ได้รับอนุญาตจาก ก.ล.ต. ไทย ",
    image: "/B_images/zipmex.jpg",
  },
  {
    title: "เปิดบัญชี kulap",
    link: "https://swap.kulap.io/register?ref=kh7os3ird0abw",
    name: "kulap Decentralized Exchange เจ้าแรกในไทย",
    image: "/B_images/kulap.jpg",
  },
  {
    title: "เปิดบัญชี bitazza",
    link: "https://bitazza.com/signup?aff=1GTAB5",
    name: "bitazza ซื้อ-ขายคริปโต ชั้นนำของเอเชียอาคเนย์",
    image: "/B_images/bitazza.jpeg",
  },
  {
    title: "เปิดบัญชี satang",
    link: "https://satangcorp.com/exchange/en/register?referral=ST2DV1FL",
    name: "ผู้บุกเบิกวงการสกุลเงินดิจิทัลในประเทศไทยตั้งแต่ปี 2017",
    image: "/B_images/satangcorp.jpeg",
  },
];

class Sidebar_Ad extends React.Component {
  render() {
    const settings = {
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
          {Array.isArray(SliderData) && SliderData?.map((person) => {

            return (
              <Carousel.Item
                className="col-xl-12"
                data-index={person.name}
                key={person.name}
              >
                <img
                  className="d-block w-100 card-img"
                  src={person.image}
                  alt="cryto"
                />
                <Carousel.Caption>
                  <a target="_blank" title={person.title} href={person.link}>
                    <font className="legend4 abs-blr color-white p-20 bg-sm-color-7">
                      {person.name}
                    </font>
                  </a>
                  {/* <p>{person.name}</p> */}
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Slider>
      </>
    );
  }
}

export default Sidebar_Ad;
