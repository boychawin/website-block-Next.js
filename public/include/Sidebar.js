import React, { Component } from "react";
import FacebookProvider, { Page } from "react-facebook-next";
import Sidebar_Ad from "../components/Slide/Sidebar_Ad";
import Link from "next/link";
import Hit_All from "../components/Sidebar/Hit_All";
import Hit_Day from "../components/Sidebar/Hit_Day";

export class FBPage extends Component {
  render() {
    return (
      <FacebookProvider appId="3710740645722239">
        <Page href="https://www.facebook.com/boychawincom" tabs="" />
      </FacebookProvider>
    );
  }
}

function Sidebar() {


  return (
    <>
      <div className="col-md-6 col-lg-4 bg-sidbar " id="overflowTest">
        <div className="pl-5 pl-md-0">
          <div className="mtb-20">
            <h4 className="p-title " title="ติดตามเราบน Facebook">
              <b> ติดตาม Facebook </b>
            </h4>
            <FBPage />
          </div>

          {/* <Covid19 /> */}
          <div className="mtb-20">
            <h4 className="p-title " title="เข้าชมมากที่สุดวันนี้">
              <b>ยอดนิยมวันนี้ </b>
            </h4>
            <Hit_Day />
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-format="fluid"
              data-ad-layout-key="-6p+d4-2t-2e+oc"
              data-ad-client="ca-pub-2369444070737256"
              data-ad-slot={4966498447}
            />
          </div>
          <div className="mtb-20">
            <h4 className="p-title " title="ยอดนิยม">
              <b>ยอดนิยม </b>
            </h4>
            <Hit_All />
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-format="fluid"
              data-ad-layout-key="-hw-1f-23-6p+ta"
              data-ad-client="ca-pub-2369444070737256"
              data-ad-slot={2852816861}
            />
          </div>
          <h4 className="p-title " title="เว็บเทรด Bitcoin">
            <b>เว็บเทรด Bitcoin </b>
          </h4>
          <div className="bch-slider bcn-slider ">
            <Sidebar_Ad />
          </div>
          <div className="mb-20">
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-format="fluid"
              data-ad-layout-key="-6p+d4-2t-2e+oc"
              data-ad-client="ca-pub-2369444070737256"
              data-ad-slot={4966498447}
            />
          </div>
          <h4 className="p-title " title="ติดต่องาน Contact">
            <b>Guwork.co </b>
          </h4>
          <div className="bch-slider bcn-slider mb-20">
            <Link href="https://www.guwork.co/login">
              <a href="https://www.guwork.co/login" title="รับทำเว็บไซต์ guwork">
                <img
                  className="d-block w-100 card-img"
                  src="/B_images/guwork.co.png"
                  alt="guwork"
                />

              </a>
            </Link>
          </div>
          <div className="mb-5">
            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-format="fluid"
              data-ad-layout-key="-6p+d4-2t-2e+oc"
              data-ad-client="ca-pub-2369444070737256"
              data-ad-slot={4966498447}
            />
          </div>

        </div>
      </div>
    </>
  );
}

export default Sidebar;
