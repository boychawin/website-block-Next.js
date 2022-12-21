import React from "react";
import axios from "axios";
import Slider from "react-slick";
import Carousel from "react-bootstrap/Carousel";
import ReactTextTransition, { presets } from "react-text-transition";
// import Link from "next/link";
class All_data_show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        // {
        //   id: "bitcoin",
        //   name: "Bitcoin",
        //   symbol: "btc",
        //   current_price: "0",
        //   price_change_percentage_24h: "0",
        //   image: "./img/bitcoin.webp",
        //   percent_change_7d: "0",
        // },
        // {
        //   id: "ethereum",
        //   name: "Ethereum",
        //   symbol: "ETH",
        //   current_price: "0",
        //   price_change_percentage_24h: "0",
        //   image: "./img/ethereum.webp",
        //   percent_change_7d: "0",
        // },
        // {
        //   id: "secret",
        //   name: "Secret",
        //   symbol: "scrt",
        //   current_price: "0",
        //   price_change_percentage_24h: "0",
        //   image: "./img/secret.webp",
        //   percent_change_7d: "0",
        // },
        // {
        //   id: "pax-gold",
        //   name: "PAX",
        //   symbol: "paxg",
        //   current_price: "0",
        //   price_change_percentage_24h: "0",
        //   image: "./img/paxg.webp",
        //   percent_change_7d: "0",
        // },
        // {
        //   id: "alpha-finance",
        //   name: "Alpha",
        //   symbol: "alpha",
        //   current_price: "0",
        //   price_change_percentage_24h: "0",
        //   image: "./img/paxg.webp",
        //   percent_change_7d: "0",
        // },
        // {
        //   id: "maker",
        //   name: "Maker",
        //   symbol: "mkr",
        //   current_price: "0",
        //   price_change_percentage_24h: "0",
        //   image: "./img/paxg.webp",
        //   percent_change_7d: "0",
        // },
      ],
    };
  }

  componentDidMount() {
    this.fetchCryptocurrencyData();
    this.interval = setInterval(() => this.fetchCryptocurrencyData(), 30000);
  }

  fetchCryptocurrencyData() {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10000&sparkline=false"
      )
      .then((response) => {
        var wanted = [
          //"pax-gold",
          //"alpha-finance",
          "maker",
          "bitcoin",
          "ethereum",
          //  "secret",
        ];
        var result = response.data.filter((currency) =>
          wanted.includes(currency.id)
        );
        this.setState({ data: result });
      });
    // .catch((err) => console.log(err));
  }

  render() {
    var settings = {
      centerMode: true,
      dots: true,
      infinite: true,
      speed: 10000,
      slidesToScroll: 1,
      slidesToShow: 2,
      autoplay: true,
      autoplaySpeed: 1,
    };

    return (
      <>
        <Slider {...settings}>
          {this.state.data?.map((person) => {
            if (person.price_change_percentage_24h < "0") {
              var ath_change_percentage = (
                <ReactTextTransition
                  text={"  (" + person.price_change_percentage_24h + "%)"}
                  className="big"
                  style={{ color: "#f42222" }}
                  inline
                />
              );
            } else {
              var ath_change_percentage = (
                <ReactTextTransition
                  text={" (" + person.price_change_percentage_24h + "%)"}
                  className="big"
                  style={{ color: "#02d667" }}
                  inline
                />
              );
            }

            return (
              <Carousel.Item
                className="center"
                data-index={person.id}
                key={person.id}
              >

                <div className="row">
                  <div className="col-12 center">
                    <font className="ml-3">
                      <img title={person.symbol} src={person.image} width="18px" height="18px" />
                    </font>
                    <font className="ml-1 mr-1">
                      {person.symbol}
                    </font>
                    <font className="ml-11">
                      <ReactTextTransition
                        text={" $" + person.current_price}
                        className="big"
                        inline
                      />
                    </font>
                    <font className="ml-2 teb-hidden">
                      {ath_change_percentage}
                    </font>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Slider>
      </>
    );
  }
}

export default All_data_show;
