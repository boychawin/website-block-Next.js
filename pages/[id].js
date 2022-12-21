import React from "react";
import Ad_1 from "../public/include/Ad/Ad";
import Ad_all_index from "../public/include/Ad/Ad_all_index";
import Sidebar from "../public/include/Sidebar";
import Head from "next/head";
import Contact_slide from "../public/components/Contact/contact_slide";
import Link from "next/link";
import ReviewFastwork2 from "../public/components/Slide/ReviewFastwork2";
import { useRouter } from "next/router";
import { useWindowSize } from "react-use";
import Animate from "@charlesvien/react-animatecss";

const contact = (props) => {
  const { width, height } = useWindowSize(500, 500);

  const router = useRouter();

  const { data } = props;

  const id = data;
  return (
    <>
      <Head>
        <title>
          รับออกแบบระบบพัฒนาเว็บไซต์ ทุกประเภท Web Application ราคาคุยได้
          ดูแลตลอดชีพ {id}| boychawin.com
        </title>

        <meta property="og:type" content="website" />
        <meta property="og:url" content={"https://boychawin.com/" + data} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={
            id +
            " ติดต่องาน รับออกแบบ ระบบเว็บไซต์ Front-end และ Back-end   - boychawin.com"
          }
        />
        <meta
          property="og:description"
          content={
            id +
            " ติดต่องาน รับทำเว็บไซต์ทุกประเภท ด้วย PHP , MySql , HTML , CSS ,JavaScript , React , Bootstrap รองรับ Responsive ทุกหน้าจอ ทำ SEO ให้ด้วยถ้าต้องการครับ รับออกแบบระบบพัฒนาเว็บไซต์ ทุกประเภท Web Application ราคาคุยได้ ดูแลตลอดชีพ | boychawin.com"
          }
        />
        <meta
          property="og:image"
          content={
            "https://boychawin.com/B_images/img_work/1_%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A%E0%B9%84%E0%B8%8B%E0%B8%95%E0%B9%8C%20Front-end%20%E0%B9%81%E0%B8%A5%E0%B8%B0%20Back-end%20%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%84%E0%B8%B8%E0%B8%A2%E0%B9%84%E0%B8%94%E0%B9%89%20%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5%E0%B8%95%E0%B8%A5%E0%B8%AD%E0%B8%94%E0%B8%8A%E0%B8%B5%E0%B8%9E.png"
          }
        />
        <meta
          name="description"
          content={
            id +
            " ติดต่องาน รับทำเว็บไซต์ทุกประเภท ด้วย PHP , MySql , HTML , CSS ,JavaScript , React , Bootstrap รองรับ Responsive ทุกหน้าจอ ทำ SEO ให้ด้วยถ้าต้องการครับ "
          }
        />
        <meta
          name="keywords"
          content={
            "รับออกแบบระบบเว็บไซต์, Front-end, Back-end, ติดต่องาน,พัฒนาเว็บไซต์ ,Support UX & UI" +
            id
          }
        />
        <meta name="author" content={"boychawin.com " + id} />
      </Head>

      <section>
        <div className="container ">
          {/* <Confetti width={width} height={height} /> */}

          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-sm-12 mb-30">
                  <h1
                    style={{
                      fontSize: "1.8rem",
                      "text-shadow": "0px 1px 0px #898999",
                    }}
                    className="p-title"
                    title={"รับออกแบบระบบ พัฒนาเว็บไซต์ " + id}
                  >
                    <b>
                      <Animate
                        animationIn="fadeIn"
                        animationOut="fadeOut"
                        inDuration={1000}
                        outDuration={1000}
                        visible
                      >
                        รับทำระบบ พัฒนาเว็บไซต์ (<u>{id}</u>){" "}
                      </Animate>
                    </b>
                  </h1>
                  <div className="row">
                    <div className="col-sm-12 col-md-12 ">
                      <Contact_slide />
                      <div className="col mtbb">
                        <h3 lassName="mb-5" style={{ color: "#4169E1" }}>
                          <b>
                            <Animate
                              animationIn="fadeIn"
                              animationOut="fadeOut"
                              inDuration={1000}
                              outDuration={1000}
                              visible
                            >
                              รับออกแบบระบบ พัฒนาเว็บไซต์ ทุกประเภท Web
                              Application ({id}) ราคาคุยได้ ดูแลตลอดชีพ 💯
                            </Animate>
                          </b>{" "}
                        </h3>
                        <p className="mb-10 mt-20">
                          <span  className="mark2">
                            รับทำออกแบบระบบธุรกิจขนาดเล็ก - ธุรกิจขนาดใหญ่
                            เว็บไซต์ทุกประเภท
                          </span>{" "}
                          เครื่องมือพัฒนา เช่น PHP, NodeJS ,Python Django MySql
                          , HTML , CSS , JavaScript , React Next.js, Vue.js
                          Nuxt.js Bootstrap รองรับ Responsive ทุกหน้าจอ
                        </p>

                        <p
                          title={
                            " รับทำเว็บไซต์ทุกประเภท ด้วย PHP, NodeJS ,Python DjangoMySql , HTML , CSS , JavaScript , React Next.js,Vue.js Nuxt.js Bootstrap รองรับ Responsive ทุกหน้าจอ " +
                            id
                          }
                        >
                          <br />
                          - การปรับเว็บไซต์ให้ใช้งานง่ายบนมือถือ รองรับ
                          Responsive
                          <br />
                          <br />
                          - UX & UI ที่ทันสมัยและใช้งานง่าย <br />
                          <br />
                          - ทำ SEO เบื้องต้นให้ฟรี (Free) <br />
                          <br />
                          - ทำ Google Analytics หรือ Facebook Pixel ได้
                          <br />
                          <br />
                          - รองรับ SSL Certificate
                          ซึ่งช่วยป้องกันการดักข้อมูลต่างๆ เช่น ข้อมูลส่วนตัว
                          <br />
                          <br />
                          -
                          ส่งความคืบหน้างานจะมีการอัพเดตงานให้ดูแบบตลอดพร้อมปรับแก้ตามความต้องการ
                          ครับ <br />
                          <br />
                          - รองรับ 1 ภาษา (ถ้าต้องการภาษาอื่นๆ แจ้งได้ครับ)
                          <br />
                          <br />
                          - รับเช่าโดเมน (Domain name) และ เช่าโฮสติ้ง (Hosting)
                          (เริ่มต้น 1 ปี)
                          <br />
                          <br />
                          <br />
                          <span className="circle-sketch-highlight">
                            {" "}
                            ===========ครบจบเว็บไซต์พร้อมใช้งานครับ===========
                          </span>
                          <br />
                          <br />{" "}
                        </p>
                        <p
                          title={
                            "รับทำโปรเจค นักศึกษา ระบบต่างๆ เช่น - ระบบจองห้อง " +
                            id
                          }
                        >
                          - รับทำโปรเจคนักศึกษา ระบบต่างๆคุยกันได้ เช่น -
                          ระบบจองห้อง ระบบสแกนใบหน้า <br />
                          <br />
                          - ราคาขึ้นอยู่กับขอบเขตงาน (Terms of Reference) <br />
                          <br />
                          - ดูแลการแก้ Code ให้ตลอดฟรี <br />
                          <br />
                          - เพิ่ม Feature ได้
                          <br />
                          <br />
                          - อื่นๆตามต้องการครับ
                          <br />
                          <br />
                        </p>

                        <p
                         
                          title={"ตัวอย่างการเขียนขอบเขตงาน" + id}
                        >
                          {" "}
                          ดูตัวอย่างการเขียนขอบเขตงาน ={" "}
                          <Link href="/blog-detail/2">
                            <a
                             className="mark2"
                              href="/blog-detail/"
                              style={{ "font-size": "1.5rem" }}
                            >
                              คลิกที่นี่
                            </a>
                          </Link>
                        </p>
                        <br />
                        <br />

                        <div className="row">
                          <div className="col-sm-12">
                            <div className=" center package ">
                              <font
                                title={
                                  "One page , Landing page , Sale Page และ Web Information / Company (มีระบบหลังบ้าน) " +
                                  id
                                }
                              >
                                <h4
                                  className="p-title3"
                                  style={{ color: "#4169E1" }}
                                >
                                  {/* <a
                                    href="#/#"
                                    target="_blank"
                                    
                                  > */}{" "}
                                  <b>
                                    แพ็กเกจ : เว็บไซต์หน้าเดียว หรือหลายหน้า
                                    และระบบจัดการเว็บไซต์ Single page , Landing
                                    page , Sale Page และ Web Information /
                                    Company ({id})
                                  </b>
                                </h4>
                                <p>
                                  <br />
                                  <br />
                                  - ดูแลให้ตลอดชีพ <br />
                                  <br />
                                  - ทำ SEO เบื้องต้นให้ฟรี <br />
                                  <br />
                                  - เว็บไซต์เล็กถึงขนาดใหญ่ <br />
                                  <br />
                                  - เว็บไซต์ตามความต้องการ <br />
                                  <br />
                                  - รองรับ 1 ภาษา (ถ้าต้องการภาษาอื่นๆ
                                  แจ้งได้ครับ) <br />
                                  <br />
                                  - การปรับเว็บไซต์ให้ใช้งานง่ายบนมือถือ
                                  Responsive <br />
                                  {/* <br />- SSL Certificate
                                  ซึ่งช่วยป้องกันการดักข้อมูลต่างๆ เช่น
                                  ข้อมูลส่วนตัว <br /> */}
                                  <br />
                                  <br />
                                </p>
                                <h2
                                  className="price blinking_online mb-5 "
                                  style={{
                                    "text-shadow": "1px 2px 0px #898999",
                                    // fontSize: "1.8rem",
                                  }}
                                >
                                <span >  เริ่มต้นเพียง 1,500 บาท </span> 
                                </h2>
                                <br />
                               
                                <div className="mt-5">
                                  <p>
                                    ออกแบบเว็บไซต์ UX & UI
                                    ให้ทันสมัยและใช้งานง่าย , รองรับ Mobile
                                    ,เว็บไซต์หน้าเดียว,เว็บโปรไฟล์, ระบบบล็อก
                                    ,ระบบสต๊อกสินค้า ระบบตะกร้าสินค้า , ระบบจอง
                                    ,ระบบจัดการอัลบั้ม ,ระบบจัดการวิดีโอ
                                    ,รีวิวที่พัก ,ระบบข่าวสาร นิตยสาร , รองรับ
                                    SEO , ระบบหน้าร้าน , ระบบหลังร้าน ,
                                    ระบบการชำระเงิน ,จัดการงาน ,ระบบคลังสินค้า
                                  </p>
                                  <br />
                                  <u>ระยะเวลาในการทำงาน 3-60 วัน</u>
                                </div>
                                <br/>
                                <p  className="circle-sketch-highlight">
                                ปล. คุยกันก่อนได้เพื่อให้เราประเมินราคางานให้ครับ ไม่จ้างไม่เป็นไรครับ หรือไม่พอใจกับราคาที่ประเมินก็สามารถเสนอมาได้ครับ
                                </p>

                                <br />
                              </font>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                      <h4
                        className="p-title mt-50"
                        title={"ผลงานเว็บไซต์ " + id}
                      >
                        <b>ผลงานเว็บไซต์</b>
                      </h4>
                      <p className="mb-20">
                        {" "}
                        ผลงานเว็บไซต์นำมาแสดงได้เท่านี้นะครับ
                        ถ้าอยากดูเพิ่มต้องติดต่อส่วนตัวเท่านั้น 😉
                      </p>
                      <h5>
                        <a
                        
                          target="_blank"
                          className="realistic-marker-highlight"
                          href="https://osgsecurityguard.com "
                        >
                          {" "}
                          1. เว็บโปรไฟล์บริษัท OSG SECURITY GUARD
                        </a>
                      </h5>

                      <h5>
                        <a
                          target="_blank"
                          className="realistic-marker-highlight"
                          href="https://safecore.co.th"
                        >
                          {" "}
                          2. เว็บโปรไฟล์บริษัท รักษาความปลอดภัย เซฟคอร์ แอนด์
                          ไฟร์ เซฟตี้ จำกัด
                        </a>
                      </h5>
{/* 
                      <h5>
                        <a
                          target="_blank"
                          className="realistic-marker-highlight"
                          href="https:///api/pulletdiaper"
                        >
                          {" "}
                          3. เว็บแสดงสินค้า และบทความ Pulletdiaper
                        </a>
                      </h5> */}

                      <h5>
                        <a
                          target="_blank"
                          className="realistic-marker-highlight"
                          href="https://bitchaink.com "
                        >
                          {" "}
                          4. ระบบ bitchaink.com
                        </a>
                      </h5>

                      <h5>
                        <a
                          target="_blank"
                          className="realistic-marker-highlight"
                          href="http://113.53.239.193/brcar"
                        >
                          {" "}
                          5. ระบบยืมรถด้วยการสแกนใบหน้า Car
                        </a>
                      </h5>

                      <h5>
                        <a
                          target="_blank"
                          className="realistic-marker-highlight"
                          href="https://jobm.edoclite.online"
                        >
                          {" "}
                          6. ระบบจัดการงาน Job Management
                        </a>
                      </h5>

                      <h5>
                        <a
                          target="_blank"
                          className="realistic-marker-highlight"
                          href="https://jobm.edoclite.online/installation/pages/Inventory_login"
                        >
                          {" "}
                          7. ระบบคงคลัง Inventory
                        </a>
                      </h5>

                      <h5>
                        <a
                          target="_blank"
                          className="realistic-marker-highlight"
                          href="https://farmkub.com/login"
                        >
                          {" "}
                          8. ระบบฟาร์ม Farmkub 
                        </a>
                      </h5>

                      {/* <h5>
                        <a
                          target="_blank"
                          className="realistic-marker-highlight"
                          href="https:///mind-sun/"
                        >
                          {" "}
                          9. ระบบตัวแทนจำหน่าย มายด์ซันสกินแคร์ 
                        </a>
                      </h5> */}

                      <h5>
                        <a
                          target="_blank"
                          className="realistic-marker-highlight"
                          href="https://www.atmomkitchen.com/"
                        >
                          {" "}
                          10. Atmomkitchen
                        </a>
                      </h5>

                      <div className="row col-12">
                        {/* <div className="col-12 mt-2 mb-2">
                          <iframe
                            style={{
                              border: "0px solid black",
                              "border-radius": "10px",
                            }}
                            width="100%"
                            // height={500}
                            src="https://"
                            title="boychawin.com Free Online Web Tutorials"
                          ></iframe>

                          <h6 className="center">
                            <a
                              className="pl-5 go_to_the_moon"
                              href="https://"
                            >
                              {" "}
                              ไปที่เว็บไซต์
                            </a>
                          </h6>
                        </div> */}

                        <div className="col-12 mt-2 mb-2">
                          <iframe
                            style={{
                              border: "0px solid black",
                              "border-radius": "10px",
                            }}
                            width="100%"
                            // height={500}
                            src="https://osgsecurityguard.com/"
                            title={
                              "boychawin.com Free Online Web Tutorials " + id
                            }
                          ></iframe>

                          <h6 className="center">
                            <a
                              className="pl-5 go_to_the_moon"
                              href="https://osgsecurityguard.com/"
                            >
                              {" "}
                              ไปที่เว็บไซต์
                            </a>
                          </h6>
                        </div>

                        <div className="col-12 mt-2 mb-2">
                          <iframe
                            style={{
                              border: "0px solid black",
                              "border-radius": "10px",
                            }}
                            width="100%"
                            // height={500}
                            src="https://safecore.co.th/"
                            title="boychawin.com Free Online Web Tutorials"
                          ></iframe>

                          <h6 className="center">
                            <a
                              className="pl-5 go_to_the_moon"
                              href="https://safecore.co.th/"
                            >
                              {" "}
                              ไปที่เว็บไซต์
                            </a>
                          </h6>
                        </div>

                        <div className="col-12 mt-2 mb-5">
                          <iframe
                            style={{
                              border: "0px solid black",
                              "border-radius": "10px",
                            }}
                            width="100%"
                            // height={500}
                            src="https://www.atmomkitchen.com/"
                            title="boychawin.com Free Online Web Tutorials"
                          ></iframe>

                          <h6 className="center">
                            <a
                              className="pl-5 go_to_the_moon"
                              href="https://www.atmomkitchen.com/"
                            >
                              {" "}
                              ไปที่เว็บไซต์
                            </a>
                          </h6>
                        </div>
                      </div>

                      <div className="mt-10" data-index="Secret">
                        <div className="oflow-hidden pos-relative mb-5 dplay-block  ">
                          <div className="wh-100x abs-tlr">
                            <img
                              className="img-fluid"
                              style={{ borderRadius: "50%" }}
                              src="https://storage.googleapis.com/fastwork-static/829871a5-4327-4e68-a09a-e4a32e02a686.jpg"
                              alt="เป็น Web Developer ทำงาน Freelance และทำงานให้ภาครัฐวิสาหกิจ ทำระบบให้ทางมหาลัยจึงเชี่ยวชาญในการออกแบบระบบ"
                            />
                          </div>
                          <div className="ml-120 min-h-100x">
                            <h5>
                              <b>FB : Boy Chawin</b>
                            </h5>
                            <h6
                              title={
                                "เป็น Web Developer ทำงาน Freelance และทำงานให้ภาครัฐวิสาหกิจ ทำระบบให้ทางมหาลัยจึงเชี่ยวชาญในการออกแบบระบบ" +
                                id
                              }
                              className="pt-5"
                            >
                              เราเป็น Web Developer ทำงาน Freelance และ
                              ทำงานให้ภาครัฐวิสาหกิจ ทำระบบให้ทางมหาลัย
                              จึงเชี่ยวชาญในการออกแบบระบบ
                            </h6>
                          </div>
                        </div>
                      </div>

                      <h4
                        className="p-title mt-50"
                        title={"ช่องทางติดต่อเรา" + id}
                      >
                        <b>ช่องทางติดต่อเรา</b>
                      </h4>
                      <div className="row">
                        <div className="col-sm-4 ">
                          <a
                            style={{ background: "#3578E5", color: "#fff" }}
                            target="_blank"
                            className="icon_two"
                            title={"boychawin.com ติดต่อผ่าน facebook" + id}
                            href="https://www.facebook.com/boychawincom/"
                          >
                            <i className=" center fab fa-facebook"></i>
                          </a>
                        </div>

                        <div className="col-sm-4 ">
                          <a
                            style={{ background: "#07b53b", color: "#fff" }}
                            target="_blank"
                            className="icon_two"
                            title={"boychawin.com ติดต่อผ่าน line" + id}
                            href="https://lin.ee/r3rz6ms/"
                          >
                            <i className="center fab fa-line"></i>
                          </a>
                        </div>

                        <div className="col-sm-4 ">
                          <a
                            style={{ background: "#1da1f2", color: "#fff" }}
                            target="_blank"
                            className="icon_two"
                            title={"boychawin.com ติดต่อผ่าน twitter" + id}
                            href="https://twitter.com/boychawin"
                          >
                            <i className="center fab fa-twitter"></i>
                          </a>
                        </div>

                        <div className="col-sm-12 ">
                          <a
                            style={{ background: "#0f82df" }}
                            target="_blank"
                            className="icon_two"
                            title={"boychawin.com ติดต่อผ่าน fastwork" + id}
                            href="https://fastwork.co/user/boychawin/web-development-64476393"
                          >
                            <img
                              className="center"
                              data-v-4bd5d028
                              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzODQgNjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM4NCA2NDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMTguMSw5Yy0yLjItMS4xLTQuOC0xLjctNy4zLTEuN2MtNi41LDAtMTIuNSw0LTEyLjUsMTIuMXYzNS44YzAsMC44LDAuNiwxLjQsMS40LDEuNGg1LjcKCQljMC44LDAsMS40LTAuNiwxLjQtMS40VjI5LjFoNy40YzAuOCwwLDEuNC0wLjYsMS40LTEuNHYtMy40YzAtMC44LTAuNi0xLjQtMS40LTEuNGgtNy40di0zLjZjMC0zLjEsMi00LjUsNC42LTQuNQoJCWMxLjEsMCwyLjMsMC4zLDMuNCwwLjhjMC43LDAuNCwxLjYsMC4xLDEuOS0wLjZsMi0zLjlDMTE5LjEsMTAuMywxMTguOCw5LjQsMTE4LjEsOXoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNTQuOCwyMS40aC01LjdjLTAuOCwwLTEuNCwwLjYtMS40LDEuNFYyN2MtMi42LTMuOS02LjctNi4xLTEyLjEtNmMtOS45LDAuMS0xNi41LDcuMy0xNi41LDE3LjkKCQljMCwxMC44LDYuNywxOC4yLDE2LjgsMTguMmM1LjMsMCw5LjMtMi4yLDExLjgtNnY0LjJjMCwwLjgsMC42LDEuNCwxLjQsMS40aDUuN2MwLjgsMCwxLjQtMC42LDEuNC0xLjRWMjIuOAoJCUMxNTYuMywyMiwxNTUuNiwyMS40LDE1NC44LDIxLjR6IE0xNDcuNSwzOS4zYzAsMS0wLjEsMi4xLTAuMywzLjFjLTEuMiw0LjUtNC42LDcuNS05LjUsNy41Yy01LjksMC0xMC00LjQtMTAtMTAuOAoJCWMwLjEtNi4zLDQuMi0xMC44LDEwLTEwLjhjNC45LDAsOC4zLDIuOSw5LjUsNy41YzAuMywxLDAuMywyLjEsMC4zLDMuMVYzOS4zeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE3MS42LDMwLjhjMC0yLjIsMi0zLjEsNC44LTMuMWMyLjcsMCw2LDAuOSw5LjEsMi41YzAuNywwLjQsMS42LDAuMSwyLTAuNmwxLjgtMy43YzAuMy0wLjcsMC4xLTEuNS0wLjYtMS45CgkJYy0zLjQtMS45LTcuNy0zLTExLjgtM2MtNy4xLDAtMTMuMywzLjQtMTMuMywxMC42Yy0wLjEsMTIuNSwxOC40LDksMTguNCwxNS41YzAsMi4zLTIuMiwzLjMtNS4yLDMuM2MtMy4zLDAtNy41LTEuMi0xMC42LTMuNAoJCWMtMC43LTAuNS0xLjctMC4yLTIuMSwwLjZsLTEuNywzLjRjLTAuMywwLjYtMC4xLDEuNCwwLjQsMS44YzMuNywyLjcsOC43LDQuMiwxMy42LDQuMmM3LjUsMCwxMy45LTMuNSwxMy45LTEwLjcKCQlDMTkwLjMsMzMuNywxNzEuNiwzNi44LDE3MS42LDMwLjh6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjEzLjgsNDkuNmMtMC4yLTAuOC0xLjEtMS4yLTEuOS0wLjljLTEuMywwLjUtMi41LDAuOC0zLjUsMC44Yy0yLjQsMC0zLjgtMS43LTMuOC01LjVWMjkuMWg4LjcKCQljMC44LDAsMS40LTAuNiwxLjQtMS40di0zLjRjMC0wLjgtMC42LTEuNC0xLjQtMS40aC04Ljd2LTguM2MwLTAuOC0wLjYtMS40LTEuNC0xLjRoLTUuN2MtMC44LDAtMS40LDAuNi0xLjQsMS40djMwLjkKCQljMCw3LjcsNC42LDExLjYsMTAuNiwxMS42YzIuNSwwLDUuMS0wLjcsNy42LTJjMC42LTAuMywxLTEuMSwwLjctMS43TDIxMy44LDQ5LjZ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjk0LjksMjEuMWMtMTEuMiwwLTE4LjcsNy4yLTE4LjcsMTcuOWMwLDEwLjgsNy41LDE4LDE4LjcsMThjMTEsMCwxOC42LTcuMywxOC42LTE4CgkJQzMxMy40LDI4LjMsMzA1LjksMjEuMSwyOTQuOSwyMS4xeiBNMjk0LjksNDkuOGMtNS45LDAtMTAtNC40LTEwLTEwLjdzNC4xLTEwLjcsMTAtMTAuN2M1LjgsMCw5LjksNC40LDkuOSwxMC43CgkJUzMwMC43LDQ5LjgsMjk0LjksNDkuOHoiLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMzguOCwyMS4xYy00LjcsMC41LTguMywyLjktMTAuNCw3di01LjRjMC0wLjgtMC42LTEuNC0xLjQtMS40aC01LjdjLTAuOCwwLTEuNCwwLjYtMS40LDEuNHYzMi40CgkJYzAsMC44LDAuNiwxLjQsMS40LDEuNGg1LjdjMC44LDAsMS40LTAuNiwxLjQtMS40VjM5LjdjMC02LDQtMTAuMiwxMC42LTEwLjNjMC44LDAsMS40LTAuNywxLjQtMS40di01LjMKCQlDMzQwLjQsMjEuNywzMzkuNywyMSwzMzguOCwyMS4xeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM3Ny42LDU0LjVMMzY1LjIsMzVsMTAuNy0xMS4yYzAuOS0wLjksMC4yLTIuNC0xLTIuNEgzNjljLTAuNCwwLTAuOCwwLjItMSwwLjRMMzUzLjksMzZWOS4xCgkJYzAtMC44LTAuNi0xLjQtMS40LTEuNGgtNS43Yy0wLjgsMC0xLjQsMC42LTEuNCwxLjR2NDYuMWMwLDAuOCwwLjYsMS40LDEuNCwxLjRoNS43YzAuOCwwLDEuNC0wLjYsMS40LTEuNHYtOC4zbDUuNC01LjdsOS4xLDE0LjgKCQljMC4zLDAuNCwwLjcsMC43LDEuMiwwLjdoNi44QzM3Ny41LDU2LjcsMzc4LjIsNTUuNCwzNzcuNiw1NC41eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI3MC44LDI1Ljd2LTIuOGMwLTAuOC0wLjYtMS40LTEuNC0xLjRoLTUuN2MtMC44LDAtMS40LDAuNi0xLjQsMS40djguOGMwLDMuNSwwLjEsNywwLDEwLjUKCQljLTAuMSwyLjgtMS43LDUuMy00LjUsNi4xYy0zLjYsMS03LjQtMS41LTcuOC01LjJjLTAuMS0xLDAtMiwwLTNjMC0yLjIsMC00LjQsMC02LjZWMjIuOGMwLTAuOC0wLjYtMS40LTEuNC0xLjRoLTUuNwoJCWMtMC44LDAtMS40LDAuNi0xLjQsMS40djguOGMwLDMuNSwwLjEsNywwLDEwLjVjLTAuMSwyLjktMS44LDUuNC00LjcsNi4yYy0zLjYsMC45LTcuMy0xLjctNy42LTUuNGMtMC4xLTAuOSwwLTEuOSwwLTIuOAoJCWMwLTIuMiwwLTQuNCwwLTYuNlYyMi44YzAtMC44LTAuNi0xLjQtMS40LTEuNEgyMjJjLTAuOCwwLTEuNCwwLjYtMS40LDEuNGMwLDYuNSwwLDEzLjEsMCwxOS42YzAsNi45LDUsMTMsMTEuOSwxNC4zCgkJYzUuMywxLDEwLjQtMS4zLDEzLjMtNS45YzIuMSwzLjQsNS42LDUuNyw5LjYsNi4xYzMuNiwwLjMsNy40LTEsMTAuMi0zLjNjMi4zLTEuOSw0LTQuNiw0LjgtNy41YzAuNi0yLjEsMC41LTQuMiwwLjUtNi4zCgkJQzI3MC44LDM1LjEsMjcwLjgsMzAuNCwyNzAuOCwyNS43eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTcxLjEsNDUuMkw3MS4xLDQ1LjJMNTYuNSwzMy45bDEuNCw3LjhsMTAsNy43YzEuOSwxLjQsMi40LDQsMS4yLDYuMWMtMS4yLDItMy43LDIuOS01LjgsMmwwLDBoLTAuMQoJCWwtMTEuOC00LjljLTAuOCwwLjYtMS43LDEuMS0yLjcsMS41bC0zLjgsMS42bDE2LjQsNi44YzEuMiwwLjUsMi41LDAuOCwzLjgsMC44YzEuMSwwLDIuMi0wLjIsMy4yLTAuNWMyLjMtMC44LDQuMi0yLjQsNS40LTQuNQoJCWMxLjItMi4xLDEuNi00LjYsMS4xLTYuOUM3NC4zLDQ4LjgsNzMsNDYuNiw3MS4xLDQ1LjJ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTQuMywzNy42bC0zLjctMjhsMCwwYy0wLjMtMi40LTEuNS00LjYtMy4zLTYuMnMtNC4yLTIuNS02LjYtMi41UzM1LjksMS44LDM0LDMuNGMtMS44LDEuNi0zLDMuOC0zLjMsNi4yCgkJbDAsMGwtMi45LDIyTDEwLjIsNDUuMmwwLDBjLTEuOSwxLjUtMy4yLDMuNi0zLjcsNkM2LDUzLjUsNi40LDU2LDcuNiw1OC4xczMuMSwzLjcsNS40LDQuNWMxLDAuNCwyLjEsMC41LDMuMiwwLjUKCQljMS4zLDAsMi42LTAuMywzLjgtMC44bDI2LjEtMTAuOEM1MS43LDQ5LjMsNTUuMSw0My41LDU0LjMsMzcuNnogTTM2LDEwLjNjMC4zLTIuMywyLjMtNC4xLDQuNy00LjFTNDUsOCw0NS4zLDEwLjNsMCwwbDIuMiwxNi45CgkJYy00LjItMi42LTkuNi0yLjYtMTMuOCwwTDM2LDEwLjN6IE0xOC4xLDU3LjRjLTIuMiwwLjktNC43LDAtNS45LTJzLTAuNy00LjYsMS4yLTYuMWwyMi40LTE3LjJjMi45LTIuMiw2LjktMi4yLDkuNywwbDMsMi4zCgkJbDAuNSwzLjhjMC41LDMuNi0xLjUsNy00LjksOC40TDQwLjYsNDhsLTMuNS0xLjRjLTMuMS0xLjMtNS00LjMtNC45LTcuNWwtNC44LDMuN2MxLDMuNCwzLjIsNi4zLDYuNCw4LjFMMTguMSw1Ny40eiIvPgo8L2c+Cjwvc3ZnPgo="
                              alt="logo"
                            />
                          </a>
                        </div>
                      </div>

                      <h4
                        className="p-title mt-50"
                        title="ช่องทางการชำระเงิน | boychawin.com"
                      >
                        <b>ช่องทางการชำระเงิน</b>
                      </h4>
                      <div className="row">
                        <div className="col-sm-4 ">
                          <a
                            href="#/#"
                            style={{ color: "#f7931a" }}
                            className="icon_two"
                            title="รับชำระเงินด้วย bitcoin (btc)"
                          >
                            <i className=" center fab fa-bitcoin"></i>
                          </a>
                        </div>

                        <div className="col-sm-4 ">
                          <a
                            href="#/#"
                            style={{ color: "#8b93b4" }}
                            className="icon_two"
                            title="รับชำระเงินด้วย ethereum"
                          >
                            <i className="center fab fa-ethereum"></i>
                          </a>
                        </div>

                        <div className="col-sm-4 ">
                          <a
                            href="#/#"
                            style={{ color: "#1DBA5E" }}
                            className="icon_two"
                            title="รับชำระเงินด้วย  Bitkub Coin"
                          >
                            <i className="center fab fa-gg"></i>
                          </a>
                        </div>

                      
                        
                        <div
                          className="row col-sm-12 icon_three"
                          title="รับชำระเงินโอนผ่านทุกธนาคาร"
                        >
                          <div className="col-sm-4 center">
                            <img
                              alt
                              width={120}
                              src="https://promptpay.io/0985679714.png"
                            />
                          </div>
                          <div className="col-sm-8 pt-30 center_two">
                            <h6 className="p-titledona_two">
                              <b> ชำระผ่าน QR Code พร้อมเพย์ </b>
                            </h6>
                            <h6>0985679714 ชื่อ นายชวิน หิตะคุณ </h6>
                          </div>
                        </div>
{/* 
                        <div className="col-sm-12">
                          <a
                            
                            target="_blank"
                            className="icon_two center"
                            title={"boychawin.com ติดต่อผ่าน fastwork" + id}
                            href="https://fastwork.co/user/boychawin/web-development-64476393"
                          >
                            
                            <img
                              style={{ fontSize: "50%" }}
                              className=""
                              data-v-4bd5d028
                              src="https://www.fastworkbusiness.com/wp-content/uploads/2021/06/Logo_For-business.png"
                              alt="logo"
                            />
                          </a>
                        </div> */}
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12 mt-2 ">
                  <h4 className="p-title" title={"รีวิวจากผู้ว่าจ้าง" + id}>
                    <b>รีวิวจากผู้ว่าจ้าง</b>
                  </h4>
                  <ReviewFastwork2 />
                </div>
              </div>
              <Ad_1 />
              <Ad_all_index />

              <div className="col-sm-12 mtb-20 ">
                <Ad_1 />
              </div>
            </div>

            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
};

contact.getInitialProps = async (ctx) => {
  const { query } = ctx;
  // const res = await fetch(
  //   "https:///api/8a5da52ed126447d359e70c05721a8aa/work_content_id.php?key=3c6e0b8a9c15224a8228b9a98ca1531d&id=" +
  //     query.id
  // );
  // const data = await res.json();
  // const { data: res, status:status1 } = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}index1.php`)
  // if (res && status1 == 200) {
  //   data = await res;
  // }
  // data.data[0].data 
  // console.log("test"+data);
  return { data: query.id};
};

export default contact;
