import React from "react";
import axios from "axios";
import { thaidate2 } from "../Function";
import Link from "next/link";

export default class Index_Portfolio extends React.Component {
  state = {
    persons2: [],
  };

  async componentDidMount() {
    let data = []
    const { data: res, status } = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/portfolio.php`)
    if (res && status == 200) {
      data = await res;
    }
    this.setState({ persons2: data });

  }

  render() {
    return (
      <>
        {/* {JSON.stringify(this.state.persons2)} */}
        {this.state.persons2.map((person) => {
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
                  <a
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
                  {person.view}
                </li>
              </ul>
            </div>
          );
        })}
      </>
    );
  }
}
