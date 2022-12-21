// pages/404.js
import Ad_1 from "../../public/include/Ad/Ad";
import Ad_all_index from "../../public/include/Ad/Ad_all_index";
import Head from "next/head";
import Link from "next/link";

//login
import {
  useSession,
} from "next-auth/client";


export default function verify_request() {
  const [session, loading] = useSession();

  if (session) {
    location.replace("/profile");
  }
  return (
    <>
      <Head>
        <title>ตรวจสอบข้อความในอีเมล | boychawin.com</title>
        <meta
          property="og:image"
          content="https://boychawin.com/B_images/boychawin.com_logo.png"
        />
      </Head>
      <section>
        <div className="container ">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="row">
                <div className="col-sm-12 mb-30">
                  <div className="row center">
                    <div className="col-12 center">
                      <Link href="/login">
                        <a href="/login"> 
                          <h1 className="fas far fa-envelope mb-30"></h1>
                        </a>
                      </Link>
                    </div>
                    <h3 className="ml-10">
                      ตรวจสอบข้อความในอีเมล <br /> (Check email messages )
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

            {/* <Sidebar /> */}
          </div>
        </div>
      </section>
    </>
  );
}
