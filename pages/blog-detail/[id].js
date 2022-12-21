import { useRouter } from "next/router";
import Link from "next/link";
import Ad_1 from "../../public/include/Ad/Ad";
import Ad_all_index from "../../public/include/Ad/Ad_all_index";
import { Redirect } from "react-router-dom";
import Head from "next/head";
import Sidebar from "../../public/include/Sidebar";
import { thaidate2 } from "../../public/components/Function";
import Blog_Slide from "../../public/components/Blog_details/Blog_Slide";
import parse from "html-react-parser";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import NumberFormat from "react-number-format";
import React from "react";
import axios from "axios";

const blog_details = (props) => {

  const { data } = props;

  const Header_Blogdata = () => {
    return Array.isArray(data) && data?.map((res) => {
      return (
        <>
          <Head data-index={res.id} key={res.id}>
            <title>{res.title} | boychawin.com</title>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content={"https://boychawin.com/blog-detail/" + res.id}
            />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={res.title} />
            <meta
              property="og:description"
              content={res.tags + " | boychawin.com"}
            />
            <meta
              property="og:image"
      
              content={`${process.env.NEXT_PUBLIC_LINK_API}/blogs/images/${res.photo}`}
            />
            <meta name="description" content={res.tags + " | boychawin.com"} />
            <meta name="keywords" content={res.tags} />
            <meta name="author" content={res.author} />
          </Head>
        </>
      );
    });
  };

  const DataTable = () => {
    return Array.isArray(data) && data?.map((res) => {
      function facebook() {
        window.open(
          "https://www.facebook.com/share.php?u=https://boychawin.com/blog-detail/" +
            res.id,
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400"
        );
      }

      function twitter() {
        window.open(
          "https://twitter.com/share?url=https://boychawin.com/blog-detail/" +
            res.id,
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400"
        );
      }

      function line() {
        window.open(
          "https://lineit.line.me/share/ui?url=https://boychawin.com/blog-detail/" +
            res.id,
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400"
        );
      }

      if (res.codefull) {
        if (res.GitHub === null) {
          var github = (
            <a
              className="button buttonGitHub center"
              target="_blank"
              href={`https://github.com/boychawin`}
            >
              <i className="fab fa-github" /> GitHub
            </a>
          );
        } else {
          var github = (
            <a
              className="button buttonGitHub center"
              target="_blank"
              href={res.GitHub}
            >
              <i className="fab fa-github" /> GitHub
            </a>
          );
        }

        var codefull = (
          <Editor
            className="box bg_codefull"
            value={res.codefull}
            onValueChange={(codefull) => this.setState({ codefull })}
            highlight={(codefull) => highlight(codefull, languages.js)}
            // padding={10}
            style={{
              fontSize: 12,
            }}
          />
        );
      }
      const router = useRouter();
      return (
        <>
          <div className="col-md-12 col-lg-8" data-index={res.id} key={res.id}>
            <h1 className="mt-20 h1font-size">
              <b>{res.title}</b>
            </h1>
            <div className="float-left-right text-center mt-5 mt-sm-0 divboychawin">
              <ul className="list-li-mr-5 mtb-5 ">
                <li>
                  &nbsp; by&nbsp;
                  <a title={res.author} href="/contact">
                    <b>{res.author}</b>
                  </a>
                </li>
              </ul>
              <ul className="list-li-mr-5 mtb-5 ">
                <li>
                  {thaidate2(res.date)}&nbsp;
                  <i className="color-primary mr-5 font-12 fas fa-eye" />
                  <NumberFormat
                    value={res.view}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                </li>
              </ul>
            </div>
            <img
              className="card-img "

              src={`${process.env.NEXT_PUBLIC_LINK_API}/blogs/images/${res.photo}`}
         
              alt={res.title}
            />
            <div className="mt-5">
              <Ad_1 />
            </div>
            <div className="float-left-right text-center mt-0 mt-sm-0">
              <ul className="mb-5 list-a-hw-radial-35 list-a-hvr-primary list-li-ml-5">
                <li className="mr-5 ml-0">Share</li>
                <li>
                  <a title="facebook" href="#/#" onClick={facebook}>
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a title="twitter" href="#/#"onClick={twitter}>
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a title="line" href="#/#"onClick={line}>
                    <i className="fab fa-line" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12">
              <p>
                {parse(res.content)}
                {github}
                {codefull}
              </p>
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
                  <a href="#/#" title="facebook" onClick={facebook}>
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#/#" title="twitter" onClick={twitter}>
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#/#" title="line" onClick={line}>
                    <i className="fab fa-line" />
                  </a>
                </li>
              </ul>
            </div>
            {/* f1 */}
            <Ad_1 />
            <div className="brdr-ash-1 opacty-5" />
            <h4 className="p-title mt-50 ">
              <b>บทความอื่นที่น่าสนใจ</b>
            </h4>

            <Blog_Slide />
            {/* <h4 className="p-title mt-20 ">
              <b>ความคิดเห็น</b>
              <button
                className="b-btn theme--dark b-btn--contained ml-20"
                onClick={() => router.reload()}
              >
                <i className="fas fa-sync-alt"></i>
              </button>
            
            </h4> */}

            <div className="sided-70 mb-20 ">
              {/* <FBComments URL_data={router.asPath}/> */}
        
              {/* <div
                className="fb-comments"
                data-href={"https://boychawin.com/blog-detail/" + res.id}
                data-numposts={5}
                data-width="100%"
                data-lazy="true"
                data-colorscheme={resolvedTheme === "dark" ? "dark" : "light"}
              /> */}
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

  const { data: res1, status:status1 } = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/react/blog_detail.php?id=${query.id}`)
  if (res1 && status1 == 200) {
    data = await res1;
  }

  return { data: data };
};

export default blog_details;
