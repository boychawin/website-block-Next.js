import React from "react";
import Link from "next/link";
import ReviewFastwork from "../components/Slide/ReviewFastwork";

function Footer() {
  return (
    <>

      <div className="container ">
        <div className="row">
          <div className="col-xl-12 mt-2 ">
            <ReviewFastwork />
          </div>
        </div>
      </div>
      <footer className="container container2 bg-sidbarfooter color-ccc ">
        <div className="row m-r-l-30">
          <div className="col-xl-4 mt-20 ">
            <div className="mb-20 ">
              <Link href="#/#" >
                <a href="#/#" className="color-white" title="หน้าแรก">
                  <img
                    src="/B_images/logoboychawins.com.png"
                    className="img-footer"
                    alt="logo"
                  />
                </a>
              </Link>

              <h5 className="mtb-10 color-ccc">
                boychawin.com
                มุ่งมั่นที่จะช่วยนำเสนอบทความและแชร์ความรู้อันเป็นประโยชน์เกี่ยวกับการท่องเที่ยวและเทคโนโลยีมาเล่าสู่กันฟัง
              </h5>
            </div>
          </div>
          <div className="col-xl-2 mt-20">
            <div className="mb-30">
              <h5 className="color-primary mb-20" title="Boychawin">
                <b>Boychawin</b>
              </h5>
              <ul className="footer_Boychawin font-11 list-relative list-li-pl-30 list-block list-li-mb-15">
                <li>
                  <Link href="#/#" >
                    <a href="#/#" className="color-white" title="หน้าแรก">
                      {" "}
                      <i className="abs-tlf fas fa-home" />
                      หน้าแรก
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/">
                    <a href="/blog/" className="color-white" title="บทความ">
                      {" "}
                      <i className="abs-tlf fas fa-comment" />
                      บทความ
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact/">
                    <a href="/contact/" className="color-white" title="ติดต่อ">
                      <i className="abs-tlf fas fa-user-circle" />
                      ติดต่อ
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 mt-20">
            <div className="mb-30">
              <h5 className="color-primary mb-20" title="ติดตามเรา">
                <b>ติดตามเรา</b>
              </h5>
              <ul className="font-11 list-relative list-li-pl-30 list-block list-li-mb-15">
                <li>
                  <i className="abs-tl fas fa-envelope"></i>
                  <a href="mailto:boychawin.com@gmail.com">
                    boychawin.com@gmail.com{" "}
                  </a>
                </li>
                <li>
                  <i className="abs-tl fas fa-phone-square-alt" />
                  <a href="tel:+66985679714">098-5679714 </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 mt-20">
            <div className="mb-30">
              <h5 className="color-primary mb-20" title="Youtube">
                <b></b>
              </h5>
              <ul className="font-11  list-a-plr-10 list-a-plr-sm-5 list-a-ptb-15 list-a-ptb-sm-5">
                <li>
                  <a
                    className="pl-0 pl-sm-10"
                    target="_blank"
                    title="facebook-boychawin.com"
                    href="https://www.facebook.com/boychawincom"
                  >
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    title="twitter-boychawin.com"
                    href="https://twitter.com/boychawin"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a

                    target="_blank"
                    title="youtube-boychawin.com"
                    href="https://www.youtube.com/channel/UC4JgG8eoenTbswfYwJ8Z6Gg?view_as=subscriber"
                  >
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li>
                  <a

                    target="_blank"
                    title="line-boychawin.com"
                    href="https://lin.ee/r3rz6ms"
                  >
                    <i className="fab fa-line" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    title="github"
                    className="button"
                    target="_blank"
                    href="https://github.com/boychawin"
                  >
                    <i className="fab fa-github" />
                  </a>
                </li>

                <li>
                  {" "}
                  <a
                    title="telegram"
                    className="button"
                    target="_blank"
                    href="https://t.me/joinchat/uvRrx6avXJAzZTNl"
                  >
                    <i className="fab fa-telegram" />
                  </a>
                </li>

                <br />
                <li className="color-ashs">
                  &copy; 2020-{new Date().getFullYear()} by boychawin.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
