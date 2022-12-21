import React, { Component } from "react";
import axios from "axios";
import { thaidate2 } from "../Function";
import ReactPaginate from "react-paginate";
import Ad_1 from "../Ad/Ad";
import Ad_all_index from "../Ad/Ad_all_index";
import Link from "next/link";

export default class Index_Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 12,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  receivedData() {



    axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/boyblog.php`).then((res) => {
      const data = res.data;
      const slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      const postData = slice.map((person) => {
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
          <div
            className="col-sm-4 "
            
            data-index={person.id}
            key={person.id}
          >
            <Link href={person.link}>
              <a
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
    return (
      <>
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
      </>
    );
  }
}
