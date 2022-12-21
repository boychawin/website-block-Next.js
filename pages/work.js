import React, { Component } from "react";
import Ad_1 from "../public/include/Ad/Ad";
import Sidebar from "../public/include/Sidebar";
import Ad_all_index from "../public/include/Ad/Ad_all_index";
import Head from "next/head";
import ReactPaginate from "react-paginate";
import Link from "next/link";
import axios from "axios";


export default class blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 30,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  static async getInitialProps(ctx) {
    // const res = await fetch(
    //   "https:///api/8a5da52ed126447d359e70c05721a8aa/work_content.php?key=3c6e0b8a9c15224a8228b9a98ca1531d"
    // );
    // const json = await res.json();
    return { data: []};
  }

  // receivedData() {
  receivedData = () => {

    const { data } = this.props;
    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );

    const postData = slice.map((person) => {
      return (
        <div className="col-sm-4 " data-index={person.id} key={person.id}>
          <Link href={"/" + person.id}>
            <a
              className="oflow-hidden pos-relative mb-5 dplay-block"
              title={
                "รับออกแบบระบบ พัฒนาเว็บไซต์ ทุกประเภท Web Application ราคาคุยได้ ดูแลตลอดชีพ " +
                person.data
              }
            >
              <img
                className="img-fluid"
                src={
                  "https://boychawin.com/B_images/img_work/1_%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A%E0%B9%84%E0%B8%8B%E0%B8%95%E0%B9%8C%20Front-end%20%E0%B9%81%E0%B8%A5%E0%B8%B0%20Back-end%20%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%84%E0%B8%B8%E0%B8%A2%E0%B9%84%E0%B8%94%E0%B9%89%20%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5%E0%B8%95%E0%B8%A5%E0%B8%AD%E0%B8%94%E0%B8%8A%E0%B8%B5%E0%B8%9E.png"
                }
                alt={
                  "รับออกแบบระบบ พัฒนาเว็บไซต์ ทุกประเภท Web Application ราคาคุยได้ ดูแลตลอดชีพ " +
                  person.data
                }
              />
            </a>
          </Link>
          <h4 className="pt-5">
            <Link href={"/" + person.id}>
              <a
                className="oflow-hidden pos-relative mb-5 dplay-block"
                // to={person.id}
                title={
                  "รับออกแบบระบบ พัฒนาเว็บไซต์ ทุกประเภท Web Application ราคาคุยได้ ดูแลตลอดชีพ " +
                  person.data
                }
              >
                <b>รับจ้างทำระบบ พัฒนาเว็บไซต์ ที่ {person.data}</b>
              </a>
            </Link>
          </h4>
        </div>
      );
    });

    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),

      postData,
    });
    // });
  };
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };

  componentDidMount() {
    this.receivedData();
  }

  render() {
    const { data } = this.props;

    return (
      <>
        {Array.isArray(data) && data?.map((person, index) => (
          <div
            hidden
            className="col-sm-4"
            data-index={person.id}
            key={person.id}
          >
            <Link href={"/" + person.id}>
              <a
                className="oflow-hidden pos-relative mb-5 dplay-block"
                title={
                  "รับออกแบบระบบ พัฒนาเว็บไซต์ ทุกประเภท Web Application ราคาคุยได้ ดูแลตลอดชีพ "  +
                  person.data
                }
              >
                <img
                  className="img-fluid"
                  src={
                    "https://boychawin.com/B_images/img_work/1_%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A%E0%B9%84%E0%B8%8B%E0%B8%95%E0%B9%8C%20Front-end%20%E0%B9%81%E0%B8%A5%E0%B8%B0%20Back-end%20%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%84%E0%B8%B8%E0%B8%A2%E0%B9%84%E0%B8%94%E0%B9%89%20%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5%E0%B8%95%E0%B8%A5%E0%B8%AD%E0%B8%94%E0%B8%8A%E0%B8%B5%E0%B8%9E.png"
                  }
                  alt={person.data}
                />
              </a>
            </Link>
            <h4 className="pt-5">
              <Link href={"/" + person.id}>
                <a
                  className="oflow-hidden pos-relative mb-5 dplay-block"
                  to={person.id}
                  title={
                    "รับออกแบบระบบ พัฒนาเว็บไซต์ ทุกประเภท Web Application " +
                    person.data
                  }
                >
                  <b>รับจ้างทำระบบ พัฒนาเว็บไซต์ ณ {person.data}</b>
                </a>
              </Link>
            </h4>
          </div>
        ))}

        <Head>
          <title>
            รับออกแบบระบบ พัฒนาเว็บไซต์ ทุกประเภท Web Application |
            boychawin.com
          </title>
          <meta property="og:type" content="website" />z
          <meta property="og:url" content="https://boychawin.com/work" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="รับออกแบบระบบ พัฒนาเว็บไซต์ ทุกประเภท Web Application - boychawin.com"
          />
          <meta
            property="og:description"
            content="รับออกแบบระบบ พัฒนาเว็บไซต์ ทุกประเภท Web Application รับทำเว็บไซต์ทุกประเภท ด้วย PHP, NodeJS ,Python Django MySql , HTML , CSS , JavaScript , React Next.js, Vue.js Nuxt.js Bootstrap รองรับ Responsive ทุกหน้าจอ"
          />
          <meta
            property="og:image"
            content="https://boychawin.com/B_images/img_work/1_%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A%E0%B9%84%E0%B8%8B%E0%B8%95%E0%B9%8C%20Front-end%20%E0%B9%81%E0%B8%A5%E0%B8%B0%20Back-end%20%E0%B8%A3%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%84%E0%B8%B8%E0%B8%A2%E0%B9%84%E0%B8%94%E0%B9%89%20%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5%E0%B8%95%E0%B8%A5%E0%B8%AD%E0%B8%94%E0%B8%8A%E0%B8%B5%E0%B8%9E.png"
          />
          <meta
            name="description"
            content="รับออกแบบระบบ พัฒนาเว็บไซต์ ทุกประเภท Web Application รับทำเว็บไซต์ทุกประเภท ด้วย PHP, NodeJS ,Python Django MySql , HTML , CSS , JavaScript , React Next.js, Vue.js Nuxt.js Bootstrap รองรับ Responsive ทุกหน้าจอ"
          />
          <meta
            name="keywords"
            content="รับออกแบบระบบ พัฒนาเว็บไซต์ ทุกประเภท Web Application, การท่องเที่ยว, เทคโนโลยี,รับออกแบบระบบ พัฒนาเว็บไซต์ ทุกประเภท Web Application"
          />
          <meta name="author" content="boychawin.com" />
        </Head>

        <section>
          <div className="container ">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="row">
                  <div className="col-sm-12 mb-30">
                    <h4
                      className="p-title"
                      title="รับออกแบบระบบ พัฒนาเว็บไซต์ ทุกประเภท Web Application"
                    >
                      <b>
                        รับออกแบบระบบ พัฒนาเว็บไซต์ ทุกประเภท Web Application
                      </b>
                    </h4>
                    <div className="row">
                      <Ad_1 />
                      {this.state.postData}
                      <Ad_1 />
                      <div className="row col-12">
                        <ReactPaginate
                          previousLabel={"ก่อนหน้า"}
                          nextLabel={"ถัดไป"}
                          breakLabel={"..."}
                          breakClassName={"break-me"}
                          pageCount={this.state.pageCount}
                          marginPagesDisplayed={2}
                          pageRangeDisplayed={5}
                          onPageChange={this.handlePageClick}
                          containerClassName={"pagination"}
                          subContainerClassName={"pages pagination"}
                          activeClassName={"active"}
                        />
                      </div>

                      <Ad_all_index />
                    </div>
                  </div>
                </div>

                <Ad_1 />
                <Ad_all_index />

                <div className="col-sm-12 mtb-10 ">
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
}
