import React from "react";
import Ad_1 from "../public/include/Ad/Ad";
import Ad_all_index from "../public/include/Ad/Ad_all_index";
import Sidebar from "../public/include/Sidebar";
import { useSession, getProviders, getCsrfToken } from "next-auth/client";
import { thaidate } from "../public/components/Function";

const profile = () => {
  const [session, loading] = useSession();

  if (session === null) {
    location.replace("/login");
  }

  return (
    <>
      <Head>
        <title>ข้อมูลส่วนตัว | Boychawin.com</title>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://boychawin.com/login" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ข้อมูลส่วนตัว | Boychawin.com" />
        <meta property="og:description" content="ข้อมูลส่วนตัว Boychawin.com" />
        <meta
          property="og:image"
          content="https://boychawin.com/B_images/boychawin.com_logo.png"
        />
        <meta name="description" content="ข้อมูลส่วนตัว Boychawin ของคุณ" />
        <meta name="keywords" content="ข้อมูลส่วนตัว, Login" />
        <meta name="author" content="Boychawin.com" />
      </Head>

      <section>
        <div className="container ">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-sm-12 mb-30">
                  <div className="row">
                    <h4 className="p-title" title="ข้อมูลส่วนตัว">
                      <b>ข้อมูลส่วนตัว</b>
                    </h4>
                  </div>

                  <div className="row">
                    <div className="col-sm-12 col-md-12 ">
                      <div className="row">
                        <div
                          className="row col-sm-12 icon_three"
                          title="ข้อมูลส่วนตัว"
                        >
                          {session && (
                            <>
                              <div className="loginForm ">
                                <div className="centers">
                                  <div className="col ">
                                    <a href="#/#"
                                      // target="_blank"
                                      className="icon_two center"
                                      title="boychawin.com"
                                    // href="#"
                                    >
                                      <img alt=""
                                        className="img-profile "
                                        width="100"
                                        src={
                                          session.user.image
                                            ? session.user.image
                                            : "https://boychawin.com/B_images/logoboychawin.com.png"
                                        }
                                      />
                                    </a>
                                  </div>

                                  <h2 className="mt-30 mb-30 p-title2">
                                    ข้อมูลส่วนตัว
                                  </h2>

                                  <div className="row">
                                    <div className="col-sm-6">
                                      <div className="mb-3">
                                        <span className="loginIcToForm">
                                          <i className="fas fa-user" />
                                        </span>
                                        <input
                                          readOnly
                                          type="text"
                                          className="form-control"
                                          placeholder="ชื่อผู้ใช้"
                                          value={
                                            session.user.name
                                              ? session.user.name
                                              : "ไม่มีข้อมูล"
                                          }
                                          required
                                        />
                                      </div>
                                    </div>
                                    <div className="col-sm-6">
                                      <div className="mb-3">
                                        <span className="loginIcToForm">
                                          <i className="fas fa-envelope" />
                                        </span>
                                        <input
                                          readOnly
                                          type="text"
                                          className="form-control"
                                          placeholder="อีเมล"
                                          value={
                                            session.user.email
                                              ? session.user.email
                                              : "ไม่มีข้อมูล"
                                          }
                                          required
                                        />
                                      </div>
                                    </div>
                                    <div className="col-sm-12">
                                      <div className="mb-3">
                                        <span className="loginIcToForm">
                                          <i className="fas fa-clock" />
                                        </span>
                                        <input
                                          readOnly
                                          type="text"
                                          className="form-control"
                                          placeholder="วันที่สมัคร"
                                          value={
                                            session.user.createdAt != null
                                              ? session.user.createdAt
                                              : thaidate(session.expires)
                                          }
                                          required
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                          {!session && (
                            <>
                              {" "}
                              <div className="col-12">
                                <i
                                  style={{ "font-size": "50px" }}
                                  className="center fas fa-spinner Rotate-sunf"
                                ></i>
                              </div>{" "}
                            </>
                          )}
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

export async function getServerSideProps(context) {
  return {
    props: {
      providers: await getProviders(),
      csrfToken: await getCsrfToken(context),
    },
  };
}

export default profile;
