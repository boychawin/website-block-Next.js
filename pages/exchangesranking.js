import React, { Component } from "react";
import Ad_1 from "../public/include/Ad/Ad";
import Sidebar from "../public/include/Sidebar";
import Ad_all_index from "../public/include/Ad/Ad_all_index";
import Head from "next/head";
import axios from "axios";
import ReactTable from "react-table";
import NumberFormat from "react-number-format";
import Link from "next/link";
export default class exchangesranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
    };
  }
  async getUsersData() {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/exchanges?page=https%3A%2F%2Fboychawin.com%2F"
    );
    // console.log(res.data);
    this.setState({ loading: false, users: res.data });
  }

  static async getInitialProps() {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/exchanges?page=https%3A%2F%2Fboychawin.com%2F"
    );
    const data = await res.json();
    return { data: data };
  }

  componentDidMount() {
    this.getUsersData();
  }
  render() {
    const columns = [
      {
        Header: "#",
        id: "trust_score_rank",
        accessor: (d) => d,
        Cell: (props) => (
          <span>
            <i className="color-primary mr-5 font-12 fas fa-star-half-alt"></i>{" "}
            {props.value.trust_score_rank}
          </span>
        ),
        filterable: false,
        sortMethod: (a, b) => {
          if (a.id === b.id) {
            return 0;
          }
          return a.id > b.id ? 1 : -1;
        },
      },
      {
        Header: "ชื่อ",
        id: "name",
        accessor: (d) => d,
        Cell: (props) => (
          <a target="_blank" title={props.value.image} href={props.value.url}>
            {" "}
            <img
              width="18px"
              height="18px"
              src={props.value.image}
              alt={props.value.name}
            />{" "}
            {props.value.name}
          </a>
        ),
        filterable: false,
        sortMethod: (a, b) => {
          if (a.id === b.id) {
            return 0;
          }
          return a.id > b.id ? 1 : -1;
        },
      },
      {
        Header: "คะแนนความน่าเชื่อถือ",
        id: "trust_score",
        accessor: (d) => d,
        Cell: (props) => (
          <NumberFormat
            value={props.value.trust_score}
            displayType={"text"}
            thousandSeparator={true}
            style={{ color: "back" }}
            prefix={"#"}
          />
        ),
        filterable: false,
        sortMethod: (a, b) => {
          if (a.id === b.id) {
            return 0;
          }
          return a.id > b.id ? 1 : -1;
        },
      },
      {
        Header: "ซื้อขาย 24 ชม.",
        id: "trade_volume_24h_btc_normalized",
        accessor: (d) => d,
        Cell: (props) => (
          <NumberFormat
            value={props.value.trade_volume_24h_btc_normalized.toFixed(2)}
            displayType={"text"}
            thousandSeparator={true}
            style={{ color: "green" }}
            prefix={"$"}
          />
        ),
        filterable: false,
        sortMethod: (a, b) => {
          if (a.id === b.id) {
            return 0;
          }
          return a.id > b.id ? 1 : -1;
        },
      },
      {
        Header: "ประเทศ",
        id: "country",
        accessor: (d) => d,
        Cell: (props) => <font>{props.value.country}</font>,
        filterable: false,
        sortMethod: (a, b) => {
          if (a.id === b.id) {
            return 0;
          }
          return a.id > b.id ? 1 : -1;
        },
      },
      {
        Header: "ปีที่ก่อตั้ง",
        id: "year_established",
        accessor: (d) => d,
        Cell: (props) => <font>{props.value.year_established}</font>,
        filterable: false,
        sortMethod: (a, b) => {
          if (a.id === b.id) {
            return 0;
          }
          return a.id > b.id ? 1 : -1;
        },
      },
      {
        Header: "เว็บไซต์",
        id: "year_established",
        accessor: (d) => d,
        Cell: (props) => (
          <a title={props.value.url} target="_blank" href={props.value.url}>
            <i className="fas fa-external-link-alt"></i>
          </a>
        ),
        filterable: false,
        sortMethod: (a, b) => {
          if (a.id === b.id) {
            return 0;
          }
          return a.id > b.id ? 1 : -1;
        },
      },
    ];

    return (
      <>
        <Head>
          <title>ตลาดซื้อ-ขาย คริปโทเคอร์เรนซี | boychawin.com</title>

          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://boychawin.com/cryptocurrency"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="100 อันดับ ตลาดซื้อ-ขาย คริปโทเคอร์เรนซี ทั่วโลก - boychawin.com"
          />
          <meta
            property="og:description"
            content="บทความ ข้อมูลเกี่ยวกับจัดอันดับตลาดซื้อ-ขาย คริปโทเคอร์เรนซี ทั่วโลก (Top Cryptocurrency Exchanges Ranking by Trust Score)"
          />
          <meta
            property="og:image"
            content="https://boychawin.com/B_images/e7ClGus.jpeg"
          />
          <meta
            name="description"
            content="บทความ ข้อมูลเกี่ยวกับจัดอันดับตลาดซื้อ-ขาย คริปโทเคอร์เรนซี ทั่วโลก (Top Cryptocurrency Exchanges Ranking by Trust Score)"
          />
          <meta
            name="keywords"
            content="100 อันดับข้อมูลเกี่ยวกับจัดอันดับตลาดซื้อ-ขาย, คริปโทเคอร์เรนซี, Cryptocurrency Exchanges"
          />
          <meta name="author" content="Boy Chawin" />
        </Head>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-8">
                <div className="row">
                  <div className="col-sm-12 mb-30">
                    <div className="row">
                      <div className="col-4 col-sm-3">
                        <h4 title="คริปโทเคอร์เรนซี">
                          <Link href="/cryptocurrency/">
                            <a href="/cryptocurrency/" title="คริปโทเคอร์เรนซี">
                              <font>
                                <b>คริปโท</b>
                              </font>
                            </a>
                          </Link>
                        </h4>
                      </div>

                      <div className="col-8 col-sm-9">
                        <h4 className="p-title" title="100 อันดับตลาดซื้อ-ขาย">
                          <Link href="/exchangesranking/">
                            <a href="/exchangesranking/" title="100 อันดับตลาดซื้อ-ขาย">
                              <font>
                                <b>100 อันดับตลาดซื้อ-ขาย</b>{" "}
                              </font>
                            </a>
                          </Link>
                        </h4>
                      </div>
                    </div>

                    {/* <h4 className="p-title" title="คริปโทเคอร์เรนซี">
                      <b>
                        100 อันดับ ตลาดซื้อ-ขาย คริปโทเคอร์เรนซี ทั่วโลก{" "}
                        {new Date().getFullYear()}
                      </b>
                    </h4> */}
                    <h4
                      className="center mb-10"
                      title="100 อันดับ ตลาดซื้อ-ขาย คริปโทเคอร์เรนซี ทั่วโลก"
                    >
                      <b>
                        100 อันดับ ตลาดซื้อ-ขาย คริปโทเคอร์เรนซี ทั่วโลก{" "}
                        {new Date().getFullYear()}
                      </b>
                    </h4>
                    <div className="col-12 mb-10">
                      {/* <Nav variant="pills" activeKey="1">
                        <Nav.Item>
                          <Link href="/cryptocurrency/" eventKey="2">
                            <a title="คริปโท">
                              <h5> คริปโท</h5>
                            </a>
                          </Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link
                            eventKey="1"
                            title="100 อันดับตลาดซื้อ-ขาย"
                            href="/exchangesranking/"
                          >
                            <h5> 100 อันดับตลาดซื้อ-ขาย</h5>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav> */}

                      <h5
                        className=" mt-20 pages"
                        title="จัดอันดับตลาดซื้อ-ขาย คริปโทเคอร์เรนซี ทั่วโลก (Top Cryptocurrency Exchanges Ranking by Trust Score) ตามคะแนนความน่าเชื่อถือ"
                      >
                        จัดอันดับตลาดซื้อ-ขาย คริปโทเคอร์เรนซี ทั่วโลก
                        ตามคะแนนความน่าเชื่อถือ (Top Cryptocurrency Exchanges
                        Ranking by Trust Score)
                      </h5>
                      <h5 className="pages">
                        {" "}
                        <b>
                          {" "}
                          การซื้อ-ขาย แลกเปลี่ยนสกุลเงินดิจิทัล(Cryptocurrency
                          Exchanges)
                        </b>
                        เป็นธุรกิจที่อนุญาตให้ลูกค้าซื้อขายสกุลเงินดิจิทัลหรือสกุลเงินดิจิทัลสำหรับทรัพย์สินอื่น
                        ๆ เช่นเงินตรา
                        คือเงินทั่วไปที่รัฐตราขึ้นเพื่อใช้ชำระหนี้ได้ตามกฎหมายหรือสกุลเงินดิจิทัลอื่น
                        ๆ
                        การแลกเปลี่ยนสกุลเงินดิจิทัลอาจเป็นผู้ดูแลสภาพคล่องที่มักจะใช้สเปรดการเสนอราคาเป็นค่าคอมมิชชั่นในการทำธุรกรรมสำหรับบริการหรือเป็นแพลตฟอร์มที่ตรงกันเพียงแค่เรียกเก็บค่าธรรมเนียม
                      </h5>
                    </div>
                    <Ad_1 />
                    <div className="row">
                      <div className="col-12">
                        <ReactTable data={this.state.users} columns={columns} />
                        <Ad_1 />
                      </div>
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
