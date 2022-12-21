import React from "react";
import Ad_1 from "../public/include/Ad/Ad";
import Ad_all_index from "../public/include/Ad/Ad_all_index";
import Sidebar from "../public/include/Sidebar";
import Head from "next/head";

const contact = (props) => {
  return (
    <>
      <Head>
        <title>ข้อมูลติดต่อ Contact | boychawin.com</title>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://boychawin.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ข้อมูลติดต่อ - boychawin.com" />
        <meta
          property="og:description"
          content="ข้อมูลติดต่อเรา(contact) boychawin.com"
        />
        <meta
          property="og:image"
          content="https://boychawin.com/B_images/boychawin.com_logo.png"
        />
        <meta
          name="description"
          content="ข้อมูลติดต่อเรา(contact)  boychawin.com"
        />
        <meta name="keywords" content="ข้อมูลติดต่อเรา, contact" />
        <meta name="author" content="Boy Chawin" />
      </Head>

      <section>
        <div className="container ">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-sm-12 mb-30">
                  <h4 className="p-title" title="เกี่ยวกับเรา">
                    <b>เกี่ยวกับเรา</b>
                  </h4>
                  <div className="row">
                    <div className="col-sm-12 col-md-12 ">
  

                      <div className="timelinebox">
                        <div className="tl-container">
                          <ul className="tl">
                            <li className="tl-item" ng-repeat="itembx">
                              <div className="timestamp">
                                2563-ปัจจุบัน
                                <br />
                                FT and PT
                              </div>
                              <div className="item-title">
                                National Telecom Public Company Limited and
                                freelance
                              </div>
                            </li>
                            <li className="tl-item" ng-repeat="itembx">
                              <div className="timestamp">
                                8 เมษายน 2564
                                <br />
                                1st
                              </div>
                              <div className="item-title">
                                เคยศึกษา Computer science ที่ Sakonnakhon
                                Rajabhat University
                              </div>
                            </li>
                            <li className="tl-item" ng-repeat="itembx">
                              <div className="timestamp">
                                เมษายน 2560
                                <br />
                              
                              </div>
                              <div className="item-title">
                                เคยศึกษาที่ Sawangdaendin School
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <h4 className="p-title" title="ช่องทางติดต่อเรา">
                        <b>ช่องทางติดต่อเรา</b>
                      </h4>
                      <div className="row">
                        <div className="col-sm-4 ">
                          <a
                            target="_blank"
                            className="icon_two"
                            title="boychawin.com facebook"
                            href="https://www.facebook.com/boychawincom/"
                          >
                            <i className=" center fab fa-facebook"></i>
                          </a>
                        </div>

                        <div className="col-sm-4 ">
                          <a
                            target="_blank"
                            className="icon_two"
                            title="boychawin.com line"
                            href="https://lin.ee/r3rz6ms/"
                          >
                            <i className="center fab fa-line"></i>
                          </a>
                        </div>

                        <div className="col-sm-4 ">
                          <a
                            target="_blank"
                            className="icon_two"
                            title="boychawin.com twitter"
                            href="https://twitter.com/boychawin"
                          >
                            <i className="center fab fa-twitter"></i>
                          </a>
                        </div>

                        <div className="col-sm-4 ">
                          <a
                            target="_blank"
                            className="icon_two"
                            title="boychawin.com youtube"
                            href="https://www.youtube.com/channel/UC4JgG8eoenTbswfYwJ8Z6Gg?view_as=subscriber/"
                          >
                            <i className="center fab fa-youtube"></i>
                          </a>
                        </div>

                        <div className="col-sm-4 ">
                          <a
                            target="_blank"
                            className="icon_two"
                            title="boychawin.com instagram"
                            href="https://www.instagram.com/boy.chawin/"
                          >
                            <i className="center fab fa-instagram"></i>
                          </a>
                        </div>

                        <div className="col-sm-4 ">
                          <a
                            target="_blank"
                            className="icon_two"
                            title="boychawin.com github"
                            href="https://github.com/boychawin"
                          >
                            <i className="center fab fa-github"></i>
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
                          <a href="#/#"
                            style={{ color: "#f7931a" }}
                            className="icon_two"
                            title="รับชำระเงินด้วย bitcoin (btc)"
                          >
                            <i className=" center fab fa-bitcoin"></i>
                          </a>
                        </div>

                        <div className="col-sm-4 ">
                          <a href="#/#"
                            style={{ color: "#8b93b4" }}
                            className="icon_two"
                            title="รับชำระเงินด้วย ethereum"
                          >
                            <i className="center fab fa-ethereum"></i>
                          </a>
                        </div>

                        <div className="col-sm-4 ">
                          <a href="#/#"
                            style={{ color: "#1DBA5E" }}
                            className="icon_two"
                            title="รับชำระเงินด้วย  Bitkub Coin แต่นี่ไม่ใช่โลโก้ของ Bitkub นะจ่ะ"
                          >
                            <i className="center fab fa-gg"></i>
                          </a>
                        </div>

                        <div
                          className="row col-sm-12 icon_three"
                          title="รับชำระเงินโอนผ่านทุกธนาคาร"
                        >
                          <div className="col-sm-4 center">
                            <img alt=""
                              width={120}
                              src="https://promptpay.io/0985679714.png"
                            />
                          </div>
                          <div className="col-sm-8 pt-30 ">
                            <h6 className="p-titledona_two">
                              <b> ชำระผ่าน QR Code พร้อมเพย์ </b>
                            </h6>
                            <h6 >
                              0985679714 ชื่อ นายชวิน หิตะคุณ{" "}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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


export default contact;
