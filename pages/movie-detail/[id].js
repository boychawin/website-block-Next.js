import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Ad_1 from "../../public/include/Ad/Ad";
import Ad_all_index from "../../public/include/Ad/Ad_all_index";
import { Redirect } from "react-router-dom";
import Head from "next/head";
import Sidebar from "../../public/include/Sidebar";
import { thaidate2, thaidate4 } from "../../public/components/Function";
import parse from "html-react-parser";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import NumberFormat from "react-number-format";
import Movie_Slide from "../../public/components/Movie-detail/Movie_Slide";
import FBComments from "../../public/components/FB/FBComments";
import axios from "axios";
const blog_details = (props) => {

  const { data } = props;

  const Header_Blogdata = () => {
    return Array.isArray(data) && data?.map((res) => {
      return (
        <>
          <Head data-index={res.id} key={res.id}>
            <title>
              {res.title} ({res.name}) | boychawin.com
            </title>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content={"https://boychawin.com/movie-detail/" + res.id}
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:title"
              content={"ภาพยนตร์ " + res.title + res.name}
            />
            <meta
              property="og:description"
              content={"ภาพยนตร์ " + res.content + res.codefull +" | boychawin.com"}
            />
            <meta
              property="og:image"
              content={"https://image.tmdb.org/t/p/w1280/" + res.photo}
            />
            <meta
              name="description"
              content={"ภาพยนตร์ " + res.content + res.codefull + " | boychawin.com"}
            />
            <meta name="keywords" content={res.title+"ดูรายละเอียดหนังออนไลน์ฟรี,หนังอนไลน์ฟรี,รวมรายชื่อหนังทั่วโลก"} />
            <meta name="author" content="boychawin.com" />
          </Head>
        </>
      );
    });
  };

  const DataTable = () => {
    return Array.isArray(data) && data?.map((res) => {
      function facebook() {
        window.open(
          "https://www.facebook.com/share.php?u=https://boychawin.com/movie-detail/" +
            res.id,
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400"
        );
      }

      function twitter() {
        window.open(
          "https://twitter.com/share?url=https://boychawin.com/movie-detail/" +
            res.id,
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400"
        );
      }

      function line() {
        window.open(
          "https://lineit.line.me/share/ui?url=https://boychawin.com/movie-detail/" +
            res.id,
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400"
        );
      }

      if (res.content == "" || res.content == null || res.content == 0) {
        var content = "";
        var language_TH ="";
      } else {
        var content = parse(res.content);
        var language_TH ="(TH)";
      }

      if (res.codefull == null || res.codefull == "" || res.codefull == 0) {
        var content2 = "";
        var language_EN ="";
      } else {
        var content2 = parse(res.codefull);
        var language_EN ="(EN)";
      }

      const router = useRouter();

      return (
        <>
          <div className="col-md-12 col-lg-8" data-index={res.id} key={res.id}>
            <h1 className="mt-20 h1font-size">
              <b title={"ภาพยนตร์ยอดนิยม " + res.title + res.name}>
                {res.title} ({res.name}) {thaidate4(res.market_cap)}
              </b>
            </h1>
            <div className="float-left-right text-center mt-5 mt-sm-0 divboychawin">
              <ul className="list-li-mr-5 mtb-5 ">
                <li>
                  &nbsp; คะแนนเฉลี่ย &nbsp;
                  <a title={res.tags} href="/contact">
                    <b>{res.tags}</b>
                  </a>
                <b> {language_TH}</b> <b> {language_EN}</b>
                </li>
              </ul>
              <ul className="list-li-mr-5 mtb-5 ">
                <li>
                  {thaidate2(res.market_cap)}&nbsp;
                  <i className="color-primary mr-5 font-12 fas fa-eye" />
                  <NumberFormat
                    value={res.view}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </li>
              </ul>
            </div>

            <a href="#/#"
              className="oflow-hidden pos-relative mb-5 dplay-block"
              title={res.title}
            >
              <span className="badgeMovie_detail">
                <h6 className="card-rating">
                  <font className="mr-1"> คะแนน </font>
                  <NumberFormat
                    value={res.fully_diluted_valuation}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </h6>
              </span>

              <span className="badgeMovie2">
                <h6 className="card-rating2">{res.tags}</h6>
                {/* <font className="ml-10 card-rating" >เฉลี่ย {res.tags}</font> */}
              </span>

              <img
                className="card-img "
                src={
                  res.photo==null || res.photo=="" || res.photo==0
                    ? "/B_images/boychawin.com_logo.png"
                    : "https://image.tmdb.org/t/p/w1280/" + res.photo
                }
           
                alt={"ภาพยนตร์ยอดนิยม " + res.title + res.name}
              />
            </a>
            <div className="mt-5">
              <Ad_1 />
            </div>
            <div className="float-left-right text-center mt-0 mt-sm-0">
              <ul className="mb-5 list-a-hw-radial-35 list-a-hvr-primary list-li-ml-5">
                <li className="mr-5 ml-0">Share</li>
                <li>
                  <a href="#/#" title="facebook" onClick={facebook}>
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#/#"title="twitter" onClick={twitter}>
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#/#"title="line" onClick={line}>
                    <i className="fab fa-line" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12">
              <p>{content}</p>
            </div>
            <div className="col-12 mt-20">
              <p>{content2}</p>
            </div>
            <div className="float-left-right text-center mt-40 mt-sm-20 ">
              <ul className="mb-30 list-li-mt-10 list-li-mr-5 list-a-plr-15 list-a-ptb-7 list-a-bg-grey list-a-br-2 list-a-hvr-primary ">
                <li>
                  <Link href={"/tags/" + res.tags}>
                    <a href={"/tags/" + res.tags} title={res.tags}>
                      <i className="fas fa-tag"></i>
                      {" " + res.tags}
                    </a>
                  </Link>
                </li>
              </ul>
              <ul className="mb-30  list-a-hw-radial-35 list-a-hvr-primary list-li-ml-5">
                <li className="mr-10 ml-0">Share</li>
                <li>
                  <a href="#/#"title="facebook" onClick={facebook}>
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#/#"title="twitter" onClick={twitter}>
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#/#"title="line" onClick={line}>
                    <i className="fab fa-line" />
                  </a>
                </li>
              </ul>
            </div>
            {/* f1 */}
            <Ad_1 />
            <div className="brdr-ash-1 opacty-5" />
            <h4 className="p-title mt-50 ">
              <b>ภาพยนตร์อื่นที่น่าสนใจ</b>
            </h4>

            <Movie_Slide />
            <h4 className="p-title mt-20 ">
              <b>ความคิดเห็น</b>
              <button
                className="b-btn theme--dark b-btn--contained ml-20"
                onClick={() => window.location.reload(false)}
              >
                <i className="fas fa-sync-alt"></i>
              </button>
            </h4>

            <div className="sided-70 mb-10 ">
            <FBComments URL_data={router.asPath}/>
              {/* <div
                className="fb-comments"
                data-href={"https://boychawin.com/movie-detail/" + res.id}
                data-numposts={5}
                data-width="100%"
                data-lazy="true"
                data-colorscheme={resolvedTheme === "dark" ? "dark" : "light"}
              />*/}
            </div> 

            <div className="mt-5">
              <Ad_all_index />
            </div>
          </div>
        </>
      );
    });
  };

  const redirect_cryto = () => {
    return Array.isArray(data) && data?.map((res) => {
      if (res.category == 9) {
        var dddd = (
          <Redirect to={"/cryptocurrency-detail/" + `${res.id}?b=${res.ids}`} />
        );
      } else {
        var dddd = "";
      }
      return <>{dddd}</>;
    });
  };

  return (
    <>
      {redirect_cryto()}
      {Header_Blogdata()}
      <section>
        <div className="container ">
          <div className="row">
            {DataTable()}
            <div className="d-none d-md-block d-lg-none col-md-3" />
            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
};

blog_details.getInitialProps = async (ctx) => {
  const { query } = ctx;

  let data = [];

  const { data: res1, status: status1 } = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/react/movie_detail.php?id=${query.id}`)
  if (res1 && status1 == 200) {
    data = await res1;
  }


  return { data: data };
};

export default blog_details;
