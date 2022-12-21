import React, { Component } from "react";
import Ad_1 from "../public/include/Ad/Ad";
import Sidebar from "../public/include/Sidebar";
import Movie_Slide from "../public/components/Movie-detail/Movie_Slide";
import Ad_all_index from "../public/include/Ad/Ad_all_index";
import Head from "next/head";
import ReactPaginate from "react-paginate";
import { thaidate2 } from "../public/components/Function";
import Link from "next/link";
import axios from "axios";
import NumberFormat from "react-number-format";

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

    let data = [];

    const { data: res1, status:status1 } = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/movies.php`)
    if (res1 && status1 == 200) {
      data = await res1;
    }

    return {
      data: data,
    };
  }

  // receivedData() {
  receivedData = () => {

    const { data } = this.props;
    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );

    const postData = slice.map((person) => {
      if (person.category === "11") {
        var status = (
          <span className="badge6_Movie">
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
        <div className="col-sm-4 " data-index={person.id} key={person.id}>
          <Link href={person.link}>
            <a
              className="oflow-hidden pos-relative mb-5 dplay-block"
              title={person.title}
            >
              {status}
              <img
                className="img-fluid"
                src={
                  person.photo == "" ||
                  person.photo == null ||
                  person.photo == 0
                    ? "/B_images/boychawin.com_logo.png"
                    : "https://image.tmdb.org/t/p/w500/" + person.photo
                }
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
                <b>{person.title}</b>
              </a>
            </Link>
          </h4>
          <ul className="list-li-mr-20 pt-5 mb-30">
            <li className="color-lite-black">
              {thaidate2(person.release_date)}
            </li>
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
        {Array.isArray(data) && data?.map((person) => (
          <div
            hidden
            className="col-sm-4"
            data-index={person.id}
            key={person.id}
          >
            <Link href={person.link}>
              <a
                className="oflow-hidden pos-relative mb-5 dplay-block"
                title={person.title}
              >
                {/* <img
                  className="img-fluid"
                  src={
                    person.photo!="" || person.photo==null
                      ? "https://image.tmdb.org/t/p/w500/" + person.photo
                      : "./B_images/boychawin.com_logo.png"
                  }
                  alt={person.title}
                /> */}
              </a>
            </Link>
            <h4 className="pt-5">
              <Link href={person.link}>
                <a
                  className="oflow-hidden pos-relative mb-5 dplay-block"
                  to={person.link}
                  title={person.title}
                >
                  <b>{person.title}</b>
                </a>
              </Link>
            </h4>
            <ul className="list-li-mr-20 pt-5 mb-30">
              <li className="color-lite-black">
                {thaidate2(person.release_date)}
              </li>
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
        ))}

        <Head>
          <title>ภาพยนตร์ยอดนิยม | boychawin.com</title>
          <meta property="og:type" content="website" />z
          <meta property="og:url" content="https://boychawin.com/movie" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="ภาพยนตร์ยอดนิยม - boychawin.com" />
          <meta
            property="og:description"
            content="ภาพยนตร์ยอดนิยมกว่า 10,000 เรื่องให้เลือกชม"
          />
          <meta
            property="og:image"
            content="https://boychawin.com/B_images/movie.jpeg"
          />
          <meta
            name="description"
            content="ภาพยนตร์ยอดนิยมกว่า 10,000 เรื่องให้เลือกชม"
          />
          <meta
            name="keywords"
            content="ภาพยนตร์ยอดนิยม, รายละเอียดหนังออนไลน์, ดูหนัง,ดูรายละเอียดหนังออนไลน์ฟรี,หนังอนไลน์ฟรี,รวมรายชื่อหนังทั่วโลก"
          />
          <meta name="author" content="Boy Chawin" />
        </Head>

        <section>
          <div className="container ">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="row">
                  <div className="col-sm-12 mb-30">
                    <h4 className="p-title" title="ภาพยนตร์ยอดนิยม">
                      <b>ภาพยนตร์ยอดนิยม</b>
                    </h4>
                    <div className="row">
                      <div className="col-12">
                        <Movie_Slide />
                      </div>
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
