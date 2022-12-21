
import Ad_1 from "../public/include/Ad/Ad";
import Ad_all_index from "../public/include/Ad/Ad_all_index";
import Sidebar from "../public/include/Sidebar";
import Head from "next/head";
import * as successData from "../public/loading/500.json";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: successData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Custom500() {
  return (
    <>
      <Head>
        <title>500 | boychawin.com</title>
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
                    <div
                      className="col-12 center "
                      style={{ "font-size": "100%" }}
                    >

                      <Lottie
                        options={defaultOptions}
                        height={500}
                        width={500}
                      />
                    </div>

                    <h3 className="ml-10">ลองใหม่อีกครั้ง</h3>
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
