import React, { Component } from "react";
import Ad_1 from "../public/include/Ad/Ad";
import Sidebar from "../public/include/Sidebar";
import Ad_all_index from "../public/include/Ad/Ad_all_index";
import Head from "next/head";
import Cryto_Table from "../public/components/Cryptocurrency/Cryto_Table";
import axios from "axios";
import { thaidate2 } from "../public/components/Function";
import ReactPaginate from "react-paginate";
import Link from "next/link";

export default class cryptocurrency extends Component {
  static async getInitialProps(ctx) {

    let data = [];

    const { data: res1, status:status1 } = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/cryptocurrency.php`)
    if (res1 && status1 == 200) {
      data = await res1;
    }

    return { data: data };
  }

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 15,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  receivedData() {
    const { data } = this.props;
    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );

    const postData = slice.map((person) => {
      if (person.category === "9") {
        var status = (
          <span className="badge6_Cryto">
            <h6 className="notification">
              <i> </i>อันดับ {person.market_cap_rank}
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
        <div className="col-sm-4 " data-index={person.id} key={person.id}>
          <Link href={person.link}>
            <a
              className="oflow-hidden pos-relative mb-5 dplay-block"
              title={person.title}
            >
              {status}
              <img
                className="img-fluid"
                src={person.image}
                alt={person.title}
              />
            </a>
          </Link>
          <h4 className="pt-5">
            <Link href={person.link}>
              <a
                className="oflow-hidden pos-relative mb-5 dplay-block"
                to={person.link}
                title={person.title}
              >
                <b>
                  ข้อมูลเหรียญ {person.name} ({person.symbol})
                </b>
              </a>
            </Link>
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

    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),

      postData,
    });
  }
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
        {Array.isArray(data) && data?.map((person) => (
          <div
            hidden
            className="col-sm-4 "
            data-index={person.id}
            key={person.id}
          >
            <Link href={person.link}>
              <a
                className="oflow-hidden pos-relative mb-5 dplay-block"
                title={person.title}
              >
                <img
                  className="img-fluid"
                  src={person.image}
                  alt={person.title}
                />
              </a>
            </Link>
            <h4 className="pt-5">
              <Link href={person.link}>
                <a
                  className="oflow-hidden pos-relative mb-5 dplay-block"
                  to={person.link}
                  title={person.title}
                >
                  <b>
                    ข้อมูลเหรียญ {person.name} ({person.symbol})
                  </b>
                </a>
              </Link>
            </h4>
            <ul className="list-li-mr-20 pt-5 mb-30">
              <li className="color-lite-black">{thaidate2(person.date)}</li>
              <li>
                <i className="color-primary mr-5 font-12 fas fa-eye" />
                {person.view}
              </li>
            </ul>
          </div>
        ))}

        <Head>
          <title>คริปโทเคอร์เรนซี | boychawin.com</title>

          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://boychawin.com/cryptocurrency"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="คริปโทเคอร์เรนซี - boychawin.com"
          />
          <meta
            property="og:description"
            content="บทความ ข้อมูลเกี่ยวกับสกุลเงินดิจิตอล คริปโทเคอร์เรนซี (Cryptocurrency)"
          />
          <meta
            property="og:image"
            content="https://boychawin.com/B_images/cryptocurrency boychawin.com.jpg"
          />
          <meta
            name="description"
            content="บทความ ข้อมูลเกี่ยวกับสกุลเงินดิจิตอล คริปโทเคอร์เรนซี (Cryptocurrency)"
          />
          <meta
            name="keywords"
            content="คริปโทเคอร์เรนซี, ข้อมูลเกี่ยวกับสกุลเงินดิจิตอล, Cryptocurrency"
          />
          <meta name="author" content="Boy Chawin" />
        </Head>

        <section>
          <div className="container ">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="row">
                  <div className="col-sm-12 mb-30">
                    <div className="row">
                      <div className="col-4 col-sm-3">
                        <h4 className="p-title" title="คริปโทเคอร์เรนซี">
                          <Link href="/cryptocurrency/">
                            <a title="คริปโทเคอร์เรนซี">
                              <font>
                                <b>คริปโท</b>
                              </font>
                            </a>
                          </Link>
                        </h4>
                      </div>

                      <div className="col-8 col-sm-9">
                        <h4 title="100 อันดับตลาดซื้อ-ขาย">
                          <Link href="/exchangesranking/">
                            <a title="100 อันดับตลาดซื้อ-ขาย">
                              <font>
                                <b>100 อันดับตลาดซื้อ-ขาย</b>
                              </font>
                            </a>
                          </Link>
                        </h4>
                      </div>
                    </div>

                    <div className="col-12 mb-10"></div>
                    <h4 className="center mb-10" title="คริปโทเคอร์เรนซี">
                      <b>250 เหรียญ สูงสุดตามมูลค่าตามราคาตลาด</b>
                    </h4>
                    <div className="row">
                      <div className="col-12">
                        <Cryto_Table />
                      </div>
                      <Ad_1 />
                      <div className="col-12">
                        <h4 className="p-title" title="คริปโทเคอร์เรนซี">
                          <b>คริปโทเคอร์เรนซี</b>
                        </h4>
                      </div>

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
}
