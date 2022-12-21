import React from "react";
import Head from "next/head";
import Ad_1 from "../public/include/Ad/Ad";
import Ad_all_index from "../public/include/Ad/Ad_all_index";
import Sidebar from "../public/include/Sidebar";
export default function policy() {
  return (
    <>
      <Head>
        <title>นโยบายความเป็นส่วนตัว policy | boychawin.com</title>

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://boychawin.com/policy" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="นโยบายความเป็นส่วนตัว - boychawin.com"
        />
        <meta
          property="og:description"
          content="นโยบายคุ้มครองความเป็นส่วนตัว(policy) เว็บไซต์ boychawin.com"
        />
        <meta
          property="og:image"
          content="https://boychawin.com/B_images/boychawin.com_logo.png"
        />
        <meta
          name="description"
          content="นโยบายคุ้มครองความเป็นส่วนตัว(policy) เว็บไซต์ boychawin.com"
        />
        <meta
          name="keywords"
          content="นโยบายความเป็นส่วนตัว, นโยบายคุ้มครอง, policy"
        />
        <meta name="author" content="Boy Chawin" />
      </Head>

      <section>
        <div className="container ">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="row">
                <div className="col-sm-12 mb-20">
                  <h4 className="p-title" title="บทความ">
                    <b>นโยบายความเป็นส่วนตัว</b>
                  </h4>
                  <div className="row">
                    <h4 className="mb-10">
                      {" "}
                      <b>
                        {" "}
                        นโยบายคุ้มครองความเป็นส่วนตัวของ เว็บไซต์ boychawin.com
                      </b>
                    </h4>
                    <h5>
                      เพื่อสำรวจความนิยมในการใช้บริการ
                      อันจะเป็นประโยชน์ในการนำสถิติไปใช้ในการปรับปรุงคุณภาพในการให้บริการ
                      เว็บไซต์ boychawin.com
                      จึงจำเป็นต้องจัดเก็บรวบรวมข้อมูลของท่านบางอย่างเพิ่มเติมด้วย
                      ได้แก่ หมายเลขไอพี (IP Address) ชนิดของโปรแกรมค้นผ่าน
                      (Browser Type) โดเมนเนม (Domain Name) บันทึกหน้าเว็บ (web
                      page) ของเว็บไซต์ที่ผู้ใช้เยี่ยมชม เวลาที่เยี่ยมชมเว็บไซต์
                      (Access Times)
                      และเว็บไซต์ที่ผู้ใช้บริการเข้าถึงก่อนหน้านั้น (Referring
                      Website Addresses)
                    </h5>
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
