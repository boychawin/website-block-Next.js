import Head from "next/head";
import Link from "next/link";
import React from "react";
import Index_latest from "../public/components/Slide/Index_latest";
import Index_Cryto from "../public/components/Slide/Index_Cryto";
import Video from "../public/include/Video";
import Index6 from "../public/components/Index/Index6";
import Ad_1 from "../public/include/Ad/Ad";
import Ad_all_index from "../public/include/Ad/Ad_all_index";
import Sidebar from "../public/include/Sidebar";
import NumberFormat from "react-number-format";
import { thaidate2 } from "../public/components/Function";
import Index_Movie from "../public/components/Slide/Index_Movie";
import axios from "axios";

export default function Home(props) {
  const { data, data2, data3, data4, data5, data6 } = props;


  return (
    <>
      {/* {JSON.stringify(data)} */}
      <Head>
        <title>แบ่งปันเรื่องราวความรู้บทความ - Boychawin.com</title>

        <meta property="og:url" content="https://boychawin.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="แบ่งปันเรื่องราวความรู้บทความ | Boychawin.com"
        />
        <meta
          property="og:description"
          content="มุ่งมั่นที่จะช่วยนำเสนอบทความและแชร์ความรู้อันเป็นประโยชน์เกี่ยวกับการท่องเที่ยวและเทคโนโลยีมาเล่าสู่คนที่สนใจได้รับรู้อีกช่องทาง"
        />
        <meta
          property="og:image"
          content="https://boychawin.com/B_images/boychawin.com_logo.png"
        />
        <meta
          name="description"
          content="มุ่งมั่นที่จะช่วยนำเสนอบทความและแชร์ความรู้อันเป็นประโยชน์เกี่ยวกับการท่องเที่ยวและเทคโนโลยีมาเล่าสู่คนที่สนใจได้รับรู้อีกช่องทาง"
        />
        <meta
          name="keywords"
          content="บล็อก, แบ่งปันเรื่องราวความรู้, บทความ"
        />
      </Head>

      {/* {session && (
          <>
            ยินดีตอนรับ{session.user.name} <br />
            <div>ตอนนี้คุณสามารถเข้าถึงหน้าลับสุดยอดของเราได้แล้ว</div>
            <button>
              <Link href="/secret">เพื่อความลับ</Link>
            </button>
            <button onClick={signOut}>ออกจากระบบ</button>
          </>
        )} */}
     <div className="container ">
        <div className=" h-500x h-2-3 h-sm-auto oflow-hidden ">
          {data?.map((person) => {
            return (
              <div
                className=" oflow-hiddens pb-5 pr-5 pr-sm-0 float-left float-sm-none w-2-3 w-sm-100 h-100 h-sm-300x"
                data-index={person.title}
                key={person.title}
              >
                <Link href={person.link}>
                  <a href={person.link}
                    className="btn-play pos-relative h-100 dplay-block"
                    title={person.title}
                  >
                    <span className="span1" />
                    <img
                      className="img-fluid"
                      width="200px"
                      src={person.image}
                      alt={person.title}
                    />
                    <div className="abs-blr color-white p-20 bg-sm-color-7">
                      <h2 className="mb-15 mb-sm-5 font-sm-13">
                        <b>
                          <font style={{ "text-shadow": "1px 2px 0px #898999" ,"line-height": "1.4" }} className="menuu">{person.title}</font>
                        </b>
                      </h2>
                      <ul className="list-li-mr-20">
                        <li> {thaidate2(person.date)}</li>
                        <li>
                          <i className="color-primary mr-5 font-12 fas fa-eye" />
                          <NumberFormat
                            value={person.view}
                            displayType={"text"}
                            thousandSeparator={true}
                          />
                        </li>
                      </ul>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}

          <div className="float-left float-sm-none w-1-3 w-sm-100 h-100 h-sm-600x">
            {data2?.map((person) => {
              return (
                <div
                  className=" oflow-hiddens pl-5 pb-5 pl-sm-0 ptb-sm-5 pos-relative h-50"
                  data-index={person.title}
                  key={person.title}
                >
                  <Link href={person.link}>
                    <a href={person.link}
                      className="btn-play pos-relative h-100 dplay-block"
                      title={"ภาพยนตร์ยอดนิยม"+person.title}
                    >
                      <span className="span1" />
                      <img
                        className="img-fluid"
                        width="200px"
                        src={person.image}
                        alt={"ภาพยนตร์ยอดนิยม"+person.title}
                      />
                      <div className="abs-blr color-white p-20 bg-sm-color-7">
                        <h4 className="mb-15 mb-sm-5 font-sm-13">
                          <b>
                            <font style={{ "text-shadow": "1px 2px 0px #898999" ,"line-height": "1.4" }} className="menuu">{"ภาพยนตร์ "+person.title}</font>
                          </b>
                        </h4>
                        <ul className="list-li-mr-20">
                          <li> {thaidate2(person.date)}</li>
                          <li>
                            <i className="color-primary mr-5 font-12 fas fa-eye" />
                            <NumberFormat
                              value={person.view}
                              displayType={"text"}
                              thousandSeparator={true}
                            />
                          </li>
                        </ul>
                      </div>
                    </a>
                  </Link>
                </div>
              );
            })}
            {data3?.map((person) => {
              return (
                <div
                  className=" oflow-hiddens pl-5 pb-5 pl-sm-0 ptb-sm-5 pos-relative h-50"
                  data-index={person.title}
                  key={person.title}
                >
                  <Link href={person.link}>
                    <a href={person.link}
                      className="btn-play pos-relative h-100 dplay-block"
                      title={"ข้อมูลเหรียญ " + person.name} 
                    >
                    
                      <img
                        className="img-fluid"
                        width="200px"
                        src={person.image}
                        alt={person.title}
                      />
                      <div className="abs-blr color-white p-20 bg-sm-color-7">
                        <h4 className="mb-15 mb-sm-5 font-sm-13">
                          <b>
                            <font style={{ "text-shadow": "1px 2px 0px #898999" ,"line-height": "1.4" }} className="menuu">
                              {"ข้อมูลเหรียญ " + person.name}
                            </font>
                          </b>
                        </h4>
                        <ul className="list-li-mr-20">
                          <li> {thaidate2(person.date)}</li>
                          <li>
                            <i className="color-primary mr-5 font-12 fas fa-eye" />
                            <NumberFormat
                              value={person.view}
                              displayType={"text"}
                              thousandSeparator={true}
                            />
                          </li>
                        </ul>
                      </div>
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div> 
      <section>
        <Video />
      </section>
      <section>
        {/* <div className="bch-slider bcn-slider mb-20">
          <Link href="https://www.guwork.co/login">
            <a href="https://www.guwork.co/login" title="รับทำเว็บไซต์ guwork">
              <img
                className="d-block w-100 card-img"
                src="/B_images/guwork.co.png"
                alt="guwork"
              />

            </a>
          </Link>
        </div> */}
        <div className="container ">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-sm-12 mb-30">
                  <h4 className="p-title">
                    <b>ล่าสุด</b>
                  </h4>
                  <Index_latest />
                </div>
               <div className="mt-30"></div>

        <div className="col-xl-6 " data-wow-delay="0.1s">
                  {data4?.map((person) => {
                    if (person.category === "9") {
                      var title_index4 = "ข้อมูลเหรียญ "+ person.title;
                      var link_index4 =
                        "/cryptocurrency-detail/" +
                        person.id +
                        "?b=" +
                        person.ids;
                      var image_index4 = person.image;
                    } else if (person.category === "11") {

                      var title_index4 = "ภาพยนตร์ "+ person.title;
                      var link_index4 = "/movie-detail/" + person.id;
                      var image_index4 =
                        person.image == "" || person.image == null
                          ? "/B_images/boychawin.com_logo.png"
                          : "https://image.tmdb.org/t/p/w500/" + person.image;
                    } else {

                      var title_index4 = person.title;
                      var link_index4 = "/blog-detail/" + person.id;
                      var image_index4 =
                      `${process.env.NEXT_PUBLIC_LINK_API}/blogs/images/${person.image}`
                    }
                    return (
                      <Link href={link_index4}>
                        <a href={link_index4}
                          data-index={person.id}
                          key={person.id}
                          className="oflow-hidden  mb-5 dplay-block"
                          title={title_index4}
                        >
                          <span className="badge10_New">
                            <h6 className="notification">
                              <i className="ion-fireball"> </i> ใหม่
                            </h6>
                          </span>
                          <img
                            className="img-fluid"
                            src={image_index4}
                            alt={title_index4}
                          />

                          <h4 className=" pt-5 ">
                            <b>{title_index4}</b>
                          </h4>
                          <ul className="list-li-mr-20 pt-5 pb-20">
                            <li className="color-lite-black">
                              {thaidate2(person.date)}
                            </li>
                            <li>
                              <i className="color-primary mr-5 font-12 fas fa-eye" />
                              <b>
                                <NumberFormat
                                  value={person.view}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                />
                              </b>
                            </li>
                          </ul>
                        </a>
                      </Link>
                    );
                  })}
                </div> 

              <div className="col-xl-6 " data-wow-delay="0.1s">
                  {data5?.map((person) => {
                    if (person.category === "9") {
                      var title_index5 = "ข้อมูลเหรียญ "+ person.title;
                      var link_index5 =
                        "/cryptocurrency-detail/" +
                        person.id +
                        "?b=" +
                        person.ids;
                      var image_index5 = person.image;
                    } else if (person.category === "11") {
                      var title_index5 = "ภาพยนตร์ "+ person.title;
                      var link_index5 = "/movie-detail/" + person.id;
                      var image_index5 =
                        person.image == "" || person.image == null
                          ? "/B_images/boychawin.com_logo.png"
                          : "https://image.tmdb.org/t/p/w500/" + person.image;
                    } else {
                      var title_index5 = person.title;
                      var link_index5 = "/blog-detail/" + person.id;
                      var image_index5 =
                      `${process.env.NEXT_PUBLIC_LINK_API}/blogs/images/${person.image}`
                    }

                    return (
                      <Link href={link_index5}>
                        <a href={link_index5}
                          data-index={person.id}
                          key={person.id}
                          className="oflow-hidden pos-relative  mb-20 dplay-block"
                          title={title_index5}
                        >
                          <div className="wh-100x abs-tlr">
                            <img
                              className="img-fluid"
                              src={image_index5}
                              alt={title_index5}
                            />
                          </div>
                          <div className="ml-120 min-h-100x">
                            <h5>
                              <b>{title_index5}</b>
                            </h5>
                            <h6 className="color-lite-black pt-5">
                              {thaidate2(person.date)}
                            </h6>
                          </div>
                        </a>
                      </Link>
                    );
                  })}
                </div> 
              </div>
              <Ad_1 />
              <h4 className="p-title mt-10">
                <b>บทความ</b>
              </h4>
              <Index6 />
              <h4 className="p-title mt-10">
                <b>คริปโทเคอร์เรนซี</b>
              </h4>
              <Index_Cryto />
              <h4 className="p-title mt-10">
                <b>ภาพยนตร์แนะนำ</b>
              </h4>
              <Index_Movie/>
              <Link href="blog">
                <a href="blog"
                  className="dplay-block btn-brdr-primary mt-30 mb-20 "
                  data-wow-delay="0.1s"
                  title="อ่านเพิ่มเติม"
                >
                  <span>อ่านเพิ่มเติม...</span>
                </a>
              </Link>
              <Ad_all_index />
            </div>

            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
}

Home.getInitialProps = async (ctx) => {

  let data = [];
  let data2 = [];
  let data3 = [];
  let data4 = [];
  let data5 = [];
  let data6 = [];

  const { data: res1, status:status1 } = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/index1.php`)
  if (res1 && status1 === 200) {
    data = await res1;
  }


  const { data: res2, status:status2 } = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/index2.php`)
  if (res2 && status2 === 200) {
    data2 = await res2;
  }

  const { data: res3, status:status3 } = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/index3.php`)
  if (res3 && status3 === 200) {
    data3 = await res3;
  }



  const { data: res4, status:status4 } = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/index5.php`)
  if (res4 && status4 === 200) {
    data4 = await res4;
  }

  const { data: res5, status:status5 } = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/index6.php`)
  if (res5 && status5 === 200) {
    data5 = await res5;
  }

  const { data: res6, status:status6 } = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/index11.php`)
  if (res6 && status6 === 200) {
    data6 = await res6;
  }

  return {
    data: data,
    data2: data2,
    data3: data3,
    data4: data4,
    data5: data5,
    data6: data6,
  };

};
