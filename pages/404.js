// pages/404.js
import Ad_1 from "../public/include/Ad/Ad";
import Ad_all_index from "../public/include/Ad/Ad_all_index";
import Sidebar from "../public/include/Sidebar";
import Head from "next/head";
//loading...
import * as loadingData from "../public/loading/404.json";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 | boychawin.com</title>
        <meta
          property="og:image"
          content="https://boychawin.com/B_images/boychawin.com_logo.png"
        />
      </Head>

      <section>
        <div className="container ">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-sm-12 mb-30">
                  <div className="row center">
                    <div className="col-12 center mb-30">
                      {/* <i className="fas fas fa-tools" style={{"font-size": "100px"}}></i> */}
                      <Lottie
                        options={defaultOptions}
                        height={500}
                        width={500}
                      />
                    </div>
                    <h3 className="ml-10 mt-20 ">
                      404 - ไม่พบหน้านี้ (Page Not Found)
                    </h3>
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
}
