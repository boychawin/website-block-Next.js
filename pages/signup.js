import React from "react";
import Ad_1 from "../public/include/Ad/Ad";
import Ad_all_index from "../public/include/Ad/Ad_all_index";
import Sidebar from "../public/include/Sidebar";
import Head from "next/head";
import Link from "next/link";

const signup = (props) => {
  return (
    <>
      <Head>
        <title>สมัครสมาชิก | Boychawin.com</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://boychawin.com/login" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="สมัครสมาชิก | Boychawin.com" />
        <meta
          property="og:description"
          content="สมัครสมาชิก Boychawin.com ของคุณ"
        />
        <meta
          property="og:image"
          content="https://boychawin.com/B_images/boychawin.com_logo.png"
        />
        <meta name="description" content="สมัครสมาชิก Boychawin ของคุณ" />
        <meta name="keywords" content="สมัครสมาชิก, Login" />
        <meta name="author" content="Boychawin.com" />
      </Head>
      <section>
        <div className="container ">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-sm-12 mb-30">
                  <div className="row">
                    <div className="col-4 col-sm-3">
                      <h4 title="เข้าสู่ระบบ">
                        <Link href="/login/">
                          <a href="/login/" title="เข้าสู่ระบบ">
                            <font >เข้าสู่ระบบ</font>
                          </a>
                        </Link>
                      </h4>
                    </div>
                    <div className="col-8 col-sm-9">
                      <h4 className="p-title" title="สมัครสมาชิก">
                        <Link href="/signup/">
                          <a href="/signup/" title="สมัครสมาชิก">
                            <font >สมัครสมาชิก</font>
                          </a>
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-12 ">
                      <div className="row">
                        <div
                          className="row col-sm-12 icon_three"
                          title="สมัครสมาชิก"
                        >
                          <div className="loginForm">
                            <div className="centers">
                              <h2 className="mt-10 mb-30 p-title2">
                                สมัครสมาชิก
                              </h2>
                              <div className="loginForm">
                                <div className=" mb-3">
                                  <span className="loginIc">
                                    <i className="fas fa-envelope" />
                                  </span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="อีเมล"
                                  />
                                </div>
                                <div className="mb-3">
                                  <span className="loginIc">
                                    <i className="fas fa-lock" />
                                  </span>
                                  <input
                                    type="password"
                                    className="form-control"
                                    placeholder="รหัสผ่าน"
                                  />
                                </div>
                                <div className="mb-3">
                                  <span className="loginIc">
                                    <i className="fas fa-lock" />
                                  </span>
                                  <input
                                    type="confirm_password"
                                    className="form-control"
                                    placeholder="ยืนยันรหัสผ่าน"
                                  />
                                </div>
                                <button
                                  type="button"
                                  className="btn bg-login btn-block mb-3"
                                >
                                  สมัครสมาชิก
                                </button>
                              </div>
                            </div>
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



export default signup;
