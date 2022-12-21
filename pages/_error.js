import Ad_1 from "../public/include/Ad/Ad";
import Ad_all_index from "../public/include/Ad/Ad_all_index";
import Sidebar from "../public/include/Sidebar";
import Head from "next/head";

function Error({ statusCode }) {
  return (
    <>
      <Head>
        <title>เกิดข้อผิดพลาด | boychawin.com</title>
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
                      <h1 className="fas fas fa-tools"></h1>
                    </div>
                    <h3 className="ml-10">
                      {statusCode
                        ? `เกิดข้อผิดพลาด ${statusCode}  บนเซิร์ฟเวอร์ (server)`
                        : "เกิดข้อผิดพลาดในไคลเอนต์ (client)"}
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

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
