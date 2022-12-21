import React, { useState, useEffect } from "react";
import Ad_1 from "../public/include/Ad/Ad";
import Ad_all_index from "../public/include/Ad/Ad_all_index";
import Sidebar from "../public/include/Sidebar";
import Head from "next/head";
import NumberFormat from "react-number-format";
import axios from "axios";
import { thaidate2 } from "../public/components/Function";
import Link from "next/link";

const Review = props => {
  const { data } = props;

  const Index_Review = () => {
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
      } else {
        var status = (
          <span className="badge6">
            <h6 className="notification">
              <i> </i> อื่นๆ
            </h6>
          </span>
        );
      }
      return (
        <>
          <div className="col-sm-4 " data-index={person.id} key={person.id}>
            <Link href={person.link}>
              <a href={person.link}
                className="oflow-hidden pos-relative mb-5 dplay-block"
                title={person.title}
              >
                {status}
                <img
                  className="img-fluid"
                  src={`${process.env.NEXT_PUBLIC_LINK_API}/blogs/images/${person.image}`}
                  alt={person.title}
                />
              </a>
            </Link>

            <h4 className="pt-5">
              <Link href={person.link}>
                <a href={person.link}
                  className="oflow-hidden pos-relative mb-5 dplay-block"
                  title={person.title}
                >
                  <b>{person.title}</b>
                </a>
              </Link>
            </h4>
            <ul className="list-li-mr-20 pt-5 mb-30">
              <li className="color-lite-black">{thaidate2(person.date)}</li>
              <li>
                <i className="color-primary mr-5 font-12 fas fa-eye" />
                <NumberFormat
                    value={person.view}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
              </li>
            </ul>
          </div>
        </>
      );
    });
  };

  const Header_Blogdata = () => {
    return (
      <>
        <Head>
          <title> รีวิว review | boychawin.com</title>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://boychawin.com/review" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="รีวิว - boychawin.com" />
          <meta
            property="og:description"
            content="รีวิว(review) รวมเรื่องรีวิวสถานที่ท่องเที่ยวและอื่นๆ boychawin.com"
          />
          <meta
            property="og:image"
            content="https://boychawin.com/B_images/review.jpg"
          />
          <meta
            name="description"
            content="รีวิว(review) รวมเรื่องรีวิวสถานที่ท่องเที่ยวและอื่นๆ boychawin.com"
          />
          <meta
            name="keywords"
            content="รีวิว, รวมเรื่องรีวิวสถานที่ท่องเที่ยวและอื่นๆ, review"
          />
          <meta name="author" content="Boy Chawin" />
        </Head>
      </>
    );
  };
  return (
    <>
      {Header_Blogdata()}
      <section>
        <div className="container ">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-sm-12 mb-30">
                  <h4 className="p-title" title="บทความ">
                    <b>รีวิว</b>
                  </h4>
                  <div className="row">{Index_Review()}</div>
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

Review.getInitialProps = async (ctx) => {
  let data = [];

  const { data: res1, status:status1 } = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/review.php`)
  if (res1 && status1 == 200) {
    data = await res1;
  }


  return { data: data };
};

export default Review;