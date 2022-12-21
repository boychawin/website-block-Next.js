import React from "react";
import axios from "axios";
import { thaidate2 } from "../Function";
import Link from "next/link";
class Hit_Day extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: [],
    };
  }

  // state = {
  //     persons: [],
  //   };
  async componentDidMount() {

    let data = []
    const { data: res, status } = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/snowview.php`)
    if (res && status == 200) {
      data = await res;
    }
    console.log(data)
    this.setState({ persons: data });

  }

  render() {
    return (
      <>
        {/* {JSON.stringify(this.state)} */}
        {this.state?.persons?.map((person) => {
          if (person.category === "9") {
            var badge = "badgeCryto";
            var title = "เหรียญ " + person.title;
            var image = (
              <img
                className="img-fluid"
                src={person.image}
                alt={person.title}
              />
            );
            var link = `/cryptocurrency-detail/${person.link}?b=${person.ids}`;
          } else if (person.category === "11") {
            var badge = "badgeMovie";
            var title = "ภาพยนตร์ " + person.title;
            var image = (
              <img
                className="img-fluid"
                src={
                  person.image == "" || person.image == null || person.image == 0
                    ? "/B_images/boychawin.com_logo.png"
                    : "https://image.tmdb.org/t/p/w500/" + person.image
                }
                alt={person.title}
              />
            );
            var link = `/movie-detail/${person.link}`;
          } else {
            var badge = "badge";
            var title = person.title;
            var image = (
              <img
                className="img-fluid"
                src={`${process.env.NEXT_PUBLIC_LINK_API}/blogs/images/${person.image}`}
                alt={person.title}
              />
            );
            var link = `/blog-detail/${person.link}`;
          }
          return (
            <div className="mt-10" data-index={person.title} key={person.title}>
              <Link href={link}>
                <a
                  className="oflow-hidden pos-relative mb-5 dplay-block  "
                  title={person.title}
                  href={link}
                >
                  <div className="wh-100x abs-tlr">
                    <span className={badge}>
                      <h6 className="notification">อันดับ {person.Rank}</h6>
                    </span>
                    {image}
                  </div>
                  <div className="ml-120 min-h-100x">
                    <h5>{title}</h5>
                    <h6 className="color-lite-black pt-5">
                      {thaidate2(person.date)}{" "}
                    </h6>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </>
    );
  }
}

export default Hit_Day;
