import React, { Component } from "react";
import axios from "axios";
import ReactTable from "react-table";
import NumberFormat from "react-number-format";
export default class Cryto_Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
    };
  }

  async getUsersData() {

    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&sparkline=false"
    );
    this.setState({ loading: false, users: res.data });
  }
  componentDidMount() {
    this.getUsersData();
  }
  render() {

    const columns = [
      {
        Header: "#",
        id: "market_cap_rank",
        accessor: (d) => d,
        Cell: (props) => <span><i className="color-primary mr-5 font-12 fas fa-star-half-alt"></i> {props.value.market_cap_rank}</span>,
        filterable: false,
        sortMethod: (a, b) => {
          if (a.id === b.id) {
            return 0;
          }
          return a.id > b.id ? 1 : -1;
        },

      },
      {
        Header: "เหรียญ",
        id: "name",
        accessor: (d) => d,
        Cell: (props) => <a href={"/cryptocurrency-detail/" + `27?b=${props.value.id}`}> <img
          width="18px" height="18px"
          src={props.value.image}
          alt={props.value.name}
        /> {props.value.name}</a>,
        filterable: false,
        sortMethod: (a, b) => {
          if (a.id === b.id) {
            return 0;
          }
          return a.id > b.id ? 1 : -1;
        },
      },
      {
        Header: "ราคา",
        id: "current_price",
        accessor: (d) => d,
        Cell: (props) => <NumberFormat
          value={props.value.current_price.toFixed(2)}
          displayType={"text"}
          thousandSeparator={true}
          style={{ color: "back" }}
          prefix={"$"}
        />,
        filterable: false,
        sortMethod: (a, b) => {
          if (a.id === b.id) {
            return 0;
          }
          return a.id > b.id ? 1 : -1;
        },
      },
      {
        Header: "ราคาต่ำสุดที่เคยมีมา",
        id: "atl",
        accessor: (d) => d,
        Cell: (props) => <NumberFormat
          value={props.value.atl.toFixed(2)}
          displayType={"text"}
          thousandSeparator={true}
          style={{ color: "red" }}
          prefix={"$"}
        />,
        filterable: false,
        sortMethod: (a, b) => {
          if (a.id === b.id) {
            return 0;
          }
          return a.id > b.id ? 1 : -1;
        },
      },
      {
        Header: "ราคาสูงสุดที่เคยมีมา",
        id: "ath",
        accessor: (d) => d,
        Cell: (props) => <NumberFormat
          value={props.value.ath.toFixed(2)}
          displayType={"text"}
          thousandSeparator={true}
          style={{ color: "green" }}
          prefix={"$"}
        />,
        filterable: false,
        sortMethod: (a, b) => {
          if (a.id === b.id) {
            return 0;
          }
          return a.id > b.id ? 1 : -1;
        },
      },
      {
        Header: "มูลค่าตามราคาตลาด",
        id: "market_cap",
        accessor: (d) => d,
        Cell: (props) => <NumberFormat
          value={props.value.market_cap.toFixed()}
          displayType={"text"}
          thousandSeparator={true}
          style={{ color: "back" }}
          prefix={"$"}
        />,
        filterable: false,
        sortMethod: (a, b) => {
          if (a.id === b.id) {
            return 0;
          }
          return a.id > b.id ? 1 : -1;
        },
      },
    ];
    return <ReactTable data={this.state.users} columns={columns} />;
  }
}
