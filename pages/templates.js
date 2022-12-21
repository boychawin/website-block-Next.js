import React, { Component } from "react";
import Ad_1 from "../public/include/Ad/Ad";
import Ad_all_index from "../public/include/Ad/Ad_all_index";
import Sidebar from "../public/include/Sidebar";
import Head from "next/head";
import NumberFormat from "react-number-format";
import { thaidate2 } from "../public/components/Function";
import Link from "next/link";
import axios from "axios";

const templates = (props) => {
  const { data } = props;

  const Index_P = () => {
    return Array.isArray(data) && data?.map((person) => {
      if (person.category === "10") {
        var status = (
          <span className="badge6">
            <h6 className="notification">
              <i> </i> {person.tags}
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
          <div className="col-sm-4" data-index={person.id} key={person.id}>
            <Link href={person.link}>
              <a href={person.link}
                className="oflow-hidden pos-relative mb-5 dplay-block"
                to={person.link}
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
  return (
    <>
      <Head>
        <title>เว็บไซต์เทมเพลตฟรี (Free Web Templates) | boychawin.com</title>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://boychawin.com/templates" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="เว็บไซต์เทมเพลตฟรี (Free Web Templates) - boychawin.com"
        />
        <meta
          property="og:description"
          content="Free Web Templates Bootstrap5, HTML5, CSS3, Website รวมเว็บไซต์เทมเพลตฟรี  โดย boychawin.com"
        />
        <meta
          property="og:image"
          content="https://boychawin.com/B_images/templates.png"
        />
        <meta
          name="description"
          content="Free Web Templates Bootstrap5, HTML5, CSS3, Website รวมเว็บไซต์เทมเพลตฟรี  โดย boychawin.com"
        />
        <meta
          name="keywords"
          content="รวมเว็บไซต์เทมเพลตฟรี, รวมเว็บไซต์เทมเพลตฟรี (Free Web Templates), templates,HTML5,CSS3,Bootstrap5"
        />
        <meta name="author" content="Boy Chawin" />
      </Head>

      <section>
        <div className="container ">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-sm-12 mb-30">
                  <h4
                    className="p-title"
                    title="เว็บไซต์เทมเพลตฟรี (Free Web Templates)"
                  >
                    <b>เว็บไซต์เทมเพลตฟรี (Free Web Templates)</b>
                  </h4>
                  <h5 style={{ "text-indent": "1.5em", "margin-top": "0" }}>
                    <b> HTML5, CSS Frameworks เช่น Bootstrap, Website </b>
                    ฟรีเทมเพลต (Free Templates)
                    สามารถเลือกมาใช้งานตามความต้องการของคุณ​ได้
                  </h5>
                  <h5
                    className="mt-10 success"
                    style={{ "text-indent": "1.5em", "margin-top": "0" }}
                  >
                    เว็บไซต์เทมเพลต (Web Templates) คือ เว็บไซต์สำเร็จรูปนั่นเอง
                    ที่จะถูกออกแบบโดย boychawin.com
                    และโครงสร้างที่​ง่ายต่อการแก้ไข้และต่อเติม
                    เพียงผู้ใช้งานต้องกรอกข้อมูลต่าง ๆ
                    ก็สามารถเอาไปใช้งานต่อได้เลยครับ และรองรับ Responsive
                    เว็บไซต์ออกแบบเทมเพลต​ทุกเทมเพลตของเราให้ รองรับ
                    รูปแบบเว็บไซต์แบบ Responsive 100% สามารถ <u>ดาวน์โหลดฟรี</u>{" "}
                    เทมเพลตเว็บไซต์เพื่อใช้งานบนเว็บไซต์ของคุณ{" "}
                    <b>ฟรีเทมเพลต (Free Templates)</b> และ ฟรีธีม HTML
                  </h5>
                  <div className="row mt-30">{Index_P()}</div>
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

templates.getInitialProps = async (ctx) => {

  let data = [];

  const { data: res1, status:status1 } = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/templates.php`)
  if (res1 && status1 == 200) {
    data = await res1;
  }



  return { data: data };
};

export default templates;
