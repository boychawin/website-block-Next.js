import React from "react";
import axios from "axios";
import { thaidate2 } from "../Function";
import ReactPaginate from "react-paginate";
import Ad_1 from "../Ad/Ad";
import Ad_all_index from "../Ad/Ad_all_index";
import Link from "next/link";

export default class Index_Cryptocurrency extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 10,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  receivedData() {
    axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/cryptocurrency.php`).then((res) => {
      const data = res.data;
      const slice = data.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      const postData = slice.map((person) => {
        if (person.category === "9") {
          var status = (
            <span className="badge6">
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
