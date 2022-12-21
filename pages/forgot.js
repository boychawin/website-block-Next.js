import React from "react";
import Ad_1 from "../public/include/Ad/Ad";
import Ad_all_index from "../public/include/Ad/Ad_all_index";
import Sidebar from "../public/include/Sidebar";
import Head from "next/head";

import Link from "next/link";

const forgot = (props) => {
  return (
    <>
      <Head>
        <title>ลืมรหัสผ่าน | Boychawin.com</title>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://boychawin.com/login" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ลืมรหัสผ่าน | Boychawin.com" />
        <meta
          property="og:description"
          content="ลืมรหัสผ่าน Boychawin.com ของคุณ"
        />
        <meta
          property="og:image"
          content="https://boychawin.com/B_images/boychawin.com_logo.png"
        />
        <meta name="description" content="ลืมรหัสผ่าน Boychawin ของคุณ" />
        <meta name="keywords" content="ลืมรหัสผ่าน, Login" />
        <meta name="author" content="Boychawin.com" />
      </Head>

      <section>
        <div className="container ">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-sm-12 mb-30">
                  <div className="row">
                    <h4 className="p-title" title="ลืมรหัสผ่าน">
                      <Link href="/forgot/">
                        <a href="/forgot/" title="ลืมรหัสผ่าน">
                          <font >ลืมรหัสผ่าน</font>
                        </a>
                      </Link>
                    </h4>
                  </div>

                  <div className="row">
                    <div className="col-sm-12 col-md-12 ">
                      <div className="row">
                        <div
                          className="row col-sm-12 icon_three"
                          title="ลืมรหัสผ่าน"
                        >
                          <div className="loginForm">
                            <div className="centers">
                              <h2 className="mt-10 mb-30 p-title2">
                                ลืมรหัสผ่าน
                              </h2>

                              <div className="loginForm">
                                <div className=" mb-3">
                                  <span className="loginIc" title="อีเมล">
                                    <i className="fas fa-envelope" />
                                  </span>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="อีเมล"
                                  />
                                </div>

                                <button
                                  type="button"
                                  className="btn bg-login btn-block mb-3"
                                >
                                  ลืมรหัสผ่าน
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

export default forgot;
