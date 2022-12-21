import React from "react";
import Ad_1 from "../../public/include/Ad/Ad";
import Ad_all_index from "../../public/include/Ad/Ad_all_index";
import Sidebar from "../../public/include/Sidebar";
import { thaidate2 } from "../../public/components/Function";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";

const tags = (props) => {
  const router = useRouter();
  const { id, b } = router.query;
  const { data } = props;

  const Helmet_head = () => {
    return Array.isArray(data) && data?.map((res) => {
      return (
        <>
          <Head data-index={res.id} key={res.id}>
            <title>แท็ก : {id} | boychawin.com</title>
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
            <meta property="og:description" content={res.tags + res.title} />
            <meta
              property="og:image"

              content={`${process.env.NEXT_PUBLIC_LINK_API}/blogs/images/${res.photo}`}
            />
            <meta name="description" content={res.tags + res.title} />
            <meta name="keywords" content={res.tags} />
            <meta name="author" content={res.author} />
          </Head>
        </>
      );
    });
  };

  const tags = () => {
    return Array.isArray(data) && data?.map((person) => {
      if (person.category === "1") {
        var status = (
          <span className="badge6">
            <h6 className="notification">
              <i> </i> รีวิว
            </h6>
          </span>
        );
      } else if (person.category === "2") {
        var status = (
          <span className="badge5">
            <h6 className="notification">
              <i> </i> ไอที
            </h6>
          </span>
        );
      } else if (person.category === "8") {
        var status = (
          <span className="badge3">
            <h6 className="notification">
              <i> </i> สินค้า
            </h6>
          </span>
        );
      } else if (person.category === "4") {
        var status = (
          <span className="badge6">
            <h6 className="notification">
              <i> </i> สุขภาพ
            </h6>
          </span>
        );
      } else if (person.category === "5") {
        var status = (
          <span className="badge4">
            <h6 className="notification">
              <i> </i> ผลงาน
            </h6>
          </span>
        );
      } else if (person.category === "3") {
        var status = (
          <span className="badge7">
            <h6 className="notification">
              <i> </i> ข่าว
            </h6>
          </span>
        );
      } else if (person.category === "9") {
        var status = (
          <span className="badge4">
            <h6 className="notification">
              <i> </i> คริปโท
            </h6>
          </span>
        );
      } else if (person.category === "11") {
        var status = (
          <span className="badge4">
            <h6 className="notification">
              <i> </i> ภาพยนตร์
            </h6>
          </span>
        );
      } else {
        var status = (
          <span className="badge6">
            <h6 className="notification">
              <i> </i> อื่นๆ
            </h6>
          </span>
        );
      }

      if (person.category === "9") {
        var link_tags = person.link2;
        var image_tags = person.image;
      } else if (person.category === "11") {

        var link_tags = "/movie-detail/" + person.id;
        var image_tags = person.image == "" || person.image == null
          ? "/B_images/boychawin.com_logo.png"
          : "https://image.tmdb.org/t/p/w500/" + person.image;

      } else {
        var link_tags = person.link;
        var image_tags = `${process.env.NEXT_PUBLIC_LINK_API}/blogs/images/${person.image}`
      }

      return (
        <div className="col-sm-4 " data-index={person.id} key={person.id}>
          <a
            className="oflow-hidden pos-relative mb-5 dplay-block"
            href={link_tags}
            title={person.title}
          >
            {status}
            <img className="img-fluid" src={image_tags} alt={person.title} />
          </a>
          <h4 className="pt-5">
            <a title={person.title} href={link_tags}>
              <b>{person.title}</b>
            </a>
          </h4>
          <ul className="list-li-mr-20 pt-5 mb-30">
            <li className="color-lite-black">{thaidate2(person.date)}</li>
            <li>
              <i className="color-primary mr-5 font-12 fas fa-eye" />
              {person.view}
            </li>
          </ul>
        </div>
      );
    });
  };

  return (
    <>
      {Helmet_head()}

      <section>
        <div className="container ">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-sm-12 mb-30">
                  <h4 className="p-title" title="แท็ก">
                    <b>แท็ก : {id}</b>
                  </h4>
                  <div className="row">{tags()}</div>
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

tags.getInitialProps = async (ctx) => {
  const { query } = ctx;

  let data = []
  const { data: res, status } = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/react/tags.php?id=${query.id}`)
  if (res && status == 200) {
    data = await res;
  }

  return { data: data };
};

export default tags;
