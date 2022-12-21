import React, { Component } from "react";
import axios from "axios";
import NumberFormat from "react-number-format";
import { cardExpiry } from "../Function";

class Covid19 extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://covid19.th-stat.com/api/open/today`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    const NewConfirmed = JSON.stringify(this.state.persons.NewConfirmed);
    const Confirmed = JSON.stringify(this.state.persons.Confirmed);

    const Recovered = JSON.stringify(this.state.persons.Recovered);
    const NewRecovered = JSON.stringify(this.state.persons.NewRecovered);

    const Deaths = JSON.stringify(this.state.persons.Deaths);
    const NewDeaths = JSON.stringify(this.state.persons.NewDeaths);

    if (NewConfirmed) {
      var NewConfirmed2 = (
        <NumberFormat
          value={JSON.stringify(this.state.persons.NewConfirmed)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"+"}
        />
      );
    } else {
      var NewConfirmed2 = "-";
    }

    if (NewRecovered) {
      var NewRecovered2 = (
        <NumberFormat
          value={JSON.stringify(this.state.persons.NewRecovered)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"+"}
        />
      );
    } else {
      var NewRecovered2 = "-";
    }

    if (NewDeaths) {
      var NewDeaths2 = (
        <NumberFormat
          value={JSON.stringify(this.state.persons.NewDeaths)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"+"}
        />
      );
    } else {
      var NewDeaths2 = "-";
    }

    return (
      <>
        <h4 className="p-title " title="ติดตามเราบน Facebook">
          <b>
            โควิด-19 :{" "}
            <NumberFormat
              format={cardExpiry}
              value={JSON.stringify(this.state.persons.UpdateDate)}
              displayType={"text"}
              thousandSeparator={true}
            />
          </b>
        </h4>
        <div className="center ">
          <div className="alert alert-info " role="alert">
            <h5 className="center notification">ติดเชื้อ </h5>
            <p className="card-text color-white center">
              <NumberFormat
                value={Confirmed}
                displayType={"text"}
                thousandSeparator={true}
              />
            </p>
            <span>{NewConfirmed2}</span>
          </div>
          <div className="alert alert-success" role="alert">
            <h5 className="center notification">หายแล้ว</h5>
            <p className="card-text color-white center">
              <NumberFormat
                value={Recovered}
                displayType={"text"}
                thousandSeparator={true}
              />
            </p>
            <span>{NewRecovered2}</span>
          </div>
          <div className="alert alert-danger" role="alert">
            <h5 className="center notification">เสียชีวิต</h5>
            <p className="card-text color-white center">
              <NumberFormat
                value={Deaths}
                displayType={"text"}
                thousandSeparator={true}
              />
            </p>
            <span>{NewDeaths2}</span>
          </div>
        </div>
      </>
    );
  }
}

export default Covid19;
