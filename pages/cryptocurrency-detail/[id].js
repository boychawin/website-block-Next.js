import { useRouter } from "next/router";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Ad_1 from "../../public/include/Ad/Ad";
import Ad_all_index from "../../public/include/Ad/Ad_all_index";
import Head from "next/head";
import Sidebar from "../../public/include/Sidebar";
import { thaidate2, thaidate3 } from "../../public/components/Function";
import "prismjs";
import NumberFormat from "react-number-format";
import ReactTextTransition, { presets } from "react-text-transition";
import TradingViewWidget from "react-tradingview-widget";
import Cryto_Slide from "../../public/components/Cryptocurrency/Cryto_Slide";
import { useTheme } from "next-themes";
import FBComments from "../../public/components/FB/FBComments";

const cryptocurrency_detail = (props) => {
  const { resolvedTheme } = useTheme();

  const router = useRouter();
  const { id, b } = router.query;
  const { data2 } = props;
  const [state, setData] = useState({ data: [] });

  useEffect(() => {
    fetchCryptocurrencyData();
    state.interval = setInterval(() => fetchCryptocurrencyData(), 20000);
  }, []);
  const fetchCryptocurrencyData = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=250&sparkline=false"
      )
      .then((response) => {
        var wanted = [b];
        var result = response.data.filter((currency) =>
          wanted.includes(currency.id)
        );
        setData({ data: result });
      }, [])
      .catch();
  };

  const Header_Blogdata = () => {
    return state.data?.map((res) => {
      return (
        <>
          <Head data-index={res.id} key={res.id}>
            <title>
              ข้อมูลเหรียญ {res.name} ({res.symbol})| boychawin.com
            </title>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content={`https://boychawin.com/cryptocurrency-detail/${id}?b=${res.id}`}
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:title"
              content={"ข้อมูลเหรียญ " + res.name + " (" + res.symbol + ") "}
            />
            <meta property="og:description" content={res.name + res.symbol} />
            <meta property="og:image" content={res.image} />
            <meta
              name="description"
              content={"ข้อมูลเหรียญ " + res.name + " (" + res.symbol + ") "}
            />
            <meta name="keywords" content={res.name} />
            <meta name="author" content={"boychawin"} />
          </Head>
        </>
      );
    });
  };

  const Header_Blogdata2 = () => {
    return data2.map((res) => {
      return (
        <>
          <Head data-index={res.id} key={res.id}>
            <title>
              ข้อมูล {res.name} ({res.symbol})| boychawin.com
            </title>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content={`https://boychawin.com/cryptocurrency-detail/${id}?b=${res.ids}`}
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:title"
              content={"ข้อมูลเหรียญ" + res.name + res.symbol}
            />
            <meta property="og:description" content={res.name + res.symbol} />
            <meta property="og:image" content={res.image} />
            <meta
              name="description"
              content={"ข้อมูลเหรียญ" + res.name + res.symbol}
            />
            <meta name="keywords" content={res.name} />
            <meta name="author" content={"boychawin"} />
          </Head>
        </>
      );
    });
  };

  const DataTable = () => {
    return state.data?.map((res) => {
      const searchid = id;

      function facebook() {
        window.open(
          "https://www.facebook.com/share.php?u=https://boychawin.com/cryptocurrency-detail/" +
          `${searchid}?b=${res.id}`,
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400"
        );
      }

      function twitter() {
        window.open(
          "https://twitter.com/share?url=https://boychawin.com/cryptocurrency-detail/" +
          `${searchid}?b=${res.id}`,
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400"
        );
      }

      function line() {
        window.open(
          "https://lineit.line.me/share/ui?url=https://boychawin.com/cryptocurrency-detail/" +
          `${searchid}?b=${res.id}`,
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400"
        );
      }

      if (res.current_price < "0") {
        var current_pricet = <font color="red">$</font>;
        var current_price = (
          <NumberFormat
            value={res.current_price}
            displayType={"text"}
            thousandSeparator={true}
            style={{ color: "red" }}
          />
        );
      } else {
        var current_pricet = <font color="green">$</font>;
        var current_price = (
          <NumberFormat
            value={res.current_price}
            displayType={"text"}
            thousandSeparator={true}
            style={{ color: "green" }}
          />
        );
      }

      if (res.total_volume < "0") {
        var total_volume_text = <font color="red">$</font>;
        var total_volume = (
          <NumberFormat
            value={res.total_volume}
            displayType={"text"}
            thousandSeparator={true}
            style={{ color: "red" }}
          />
        );
      } else {
        var total_volume_text = <font color="green">$</font>;
        var total_volume = (
          <NumberFormat
            value={res.total_volume}
            displayType={"text"}
            thousandSeparator={true}
            style={{ color: "green" }}
          />
        );
      }

      if (res.price_change_percentage_24h < "0") {
        var price_change_percentage_24h_text = <font>ราคาลดลง</font>;
        var price_change_percentage_24h = (
          <ReactTextTransition
            text={" (" + res.price_change_percentage_24h + "%)"}
            className="big"
            style={{ color: "red" }}
            inline
          />
        );
      } else {
        var price_change_percentage_24h_text = <font>ราคาเพิ่มขึ้น</font>;
        var price_change_percentage_24h = (
          <ReactTextTransition
            text={" (" + res.price_change_percentage_24h + "%)"}
            className="big"
            style={{ color: "green" }}
            inline
          />
        );
      }
      if (res.circulating_supply != null) {
        var circulating_supplycon = res.circulating_supply.toFixed();
      } else {
        var circulating_supplycon = "9999";
      }
      const circulating_supply = (
        <NumberFormat
          value={circulating_supplycon}
          displayType={"text"}
          thousandSeparator={true}
        />
      );
      if (res.total_supply != null) {
        var total_supplycon = res.total_supply.toFixed();
      } else {
        var total_supplycon = "-";
      }

      const total_supply = (
        <NumberFormat
          value={total_supplycon}
          displayType={"text"}
          thousandSeparator={true}
        />
      );

      const market_cap = (
        <NumberFormat
          value={res.market_cap}
          displayType={"text"}
          thousandSeparator={true}
        />
      );

      var low_24h = (
        <ReactTextTransition text={"$" + res.low_24h} className="big" inline />
      );
      var high_24h = (
        <ReactTextTransition text={"$" + res.high_24h} className="big" inline />
      );
      if (res.max_supply != null) {
        var max_supplycon = res.max_supply.toFixed();
      } else {
        var max_supplycon = "-";
      }
      const max_supply = (
        <NumberFormat
          value={max_supplycon}
          displayType={"text"}
          thousandSeparator={true}
        />
      );

      if (res.market_cap_change_24h != null) {
        var market_cap_change_24hcon = res.market_cap_change_24h.toFixed();
      } else {
        var market_cap_change_24hcon = "-";
      }

      if (res.market_cap_change_24h < "0") {
        var market_cap_change_24h = (
          <NumberFormat
            prefix={"$"}
            value={market_cap_change_24hcon}
            displayType={"text"}
            thousandSeparator={true}
            style={{ color: "red" }}
          />
        );
      } else {
        var market_cap_change_24h = (
          <NumberFormat
            prefix={"$"}
            value={market_cap_change_24hcon}
            displayType={"text"}
            thousandSeparator={true}
            style={{ color: "green" }}
          />
        );
      }

      if (res.market_cap_change_percentage_24h < "0") {
        var market_cap_change_percentage_24ht = <font color="red">%</font>;
        var market_cap_change_percentage_24h = (
          <NumberFormat
            value={res.market_cap_change_percentage_24h}
            displayType={"text"}
            thousandSeparator={true}
            style={{ color: "red" }}
          />
        );
      } else {
        var market_cap_change_percentage_24ht = <font color="green">%</font>;
        var market_cap_change_percentage_24h = (
          <NumberFormat
            value={res.market_cap_change_percentage_24h}
            displayType={"text"}
            thousandSeparator={true}
            style={{ color: "green" }}
          />
        );
      }
      const router = useRouter();
      return (
        <>
          <div className="col-md-12 col-lg-8" data-index={res.id} key={res.id}>
            <h1 className="mt-20 h1font-size">
              <b>{"ข้อมูลเหรียญ " + res.name + " (" + res.symbol + ")"}</b>
            </h1>
            <div className="float-left-right text-center mt-5 mt-sm-0 divboychawin">
              <ul className="list-li-mr-5 mtb-5 ">
                <li>
                  &nbsp; by&nbsp;
                  <a title="contact" href="/contact">
                    <b>boychawin</b>
                  </a>
                </li>
              </ul>
              <ul className="list-li-mr-5 mtb-5 ">
                <li>
                  {thaidate2(res.last_updated)}&nbsp;
                  <i className="color-primary mr-5 font-12 fas fa-star-half-alt"></i>
                  {res.market_cap_rank}
                </li>
              </ul>
            </div>
            <img className="card-img " src={res.image} alt={res.name} />
            <div className="mt-5">
              <Ad_1 />
            </div>
            <div className="float-left-right text-center mt-0 mt-sm-0">
              <ul className="mb-5 list-a-hw-radial-35 list-a-hvr-primary list-li-ml-5">
                <li className="mr-5 ml-0">Share</li>
                <li>
                  <a href="#/#" title="facebook" onClick={facebook}>
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#/#" title="twitter" onClick={twitter}>
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#/#" title="line" onClick={line}>
                    <i className="fab fa-line" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2
                className="p-title pfont-size "
                title={"รายละเอียด " + res.name + res.symbol}
              >
                {"รายละเอียด " + res.name} ({res.symbol}){" "}
              </h2>
              <h5 title={"ข้อมูลเหรียญ" + res.name + res.symbol}>
                <b>{res.name}</b> เป็นรูปแบบหนึ่งของเงินดิจิทัล (digital
                currency) ในตลาดคริปโทเคอร์เรนซี (Cryptocurrency) ทำงานบนระบบ
                Blockchain{" "}
              </h5>
              <br />
              <h6 className="mb-5">
                <b />
                ราคาของเหรียญ{" "}
                <b>
                  {res.name} ({res.symbol}){" "}
                </b>{" "}
                สำหรับข้อมูลวันที่ อัปเดต <u>{thaidate2(res.last_updated)}</u>{" "}
                ราคาเท่ากับ{" "}
                <b>
                  {" "}
                  {current_pricet}
                  {current_price}
                </b>{" "}
                โดยมีปริมาณการเทรด 24 ชั่วโมงเท่ากับ{" "}
                <b>
                  {total_volume_text}
                  {total_volume}{" "}
                </b>
                {price_change_percentage_24h_text} {price_change_percentage_24h}
                ใน 24 ชั่วโมงที่ผ่านมา มีอุปทานหมุนเวียน {
                  circulating_supply
                }{" "}
                เหรียญ และอุปทานทั้งหมด {total_supply} เหรียญ
                ราคาสูงสุดที่เคยมีมา <b> $ {res.ath} </b> ราคาต่ำสุดที่เคยมีมา{" "}
                <b>${res.atl} </b>
                {/* ใช้เครื่องมือจาก Tradingview
                เป็นเว็บไซต์ที่ให้บริการดูกราฟหุ้นทั่วทั้งโลก
                และสามารถดูข้อมูลเพิ่มเติมได้ที่ coingecko.com */}
              </h6>

              <br />

              <br />

              <div className="row ">
                <div className="column grid-list">
                  <font className="notification">ราคา</font>
                  <h4>
                    {current_pricet}
                    {current_price}{" "}
                  </h4>
                </div>
                <div className="column grid-list2">
                  <font className="notification">อันดับตามตลาด(Rank)</font>
                  <h4>#{res.market_cap_rank} </h4>
                </div>
                <div className="column grid-list3">
                  <font className="notification">มูลค่าตามราคาตลาด</font>
                  <h4>${market_cap}</h4>
                </div>
                <div className="column grid-list4">
                  <font className="notification">ปริมาณซื้อขาย 24 ชั่วโมง</font>
                  <h4>
                    {total_volume_text}
                    {total_volume}
                  </h4>
                </div>
                <div className="column grid-list3">
                  <font className="notification">ต่ำ/สูง 24 ชั่วโมง</font>
                  <h4>
                    {low_24h}/{high_24h}
                  </h4>
                </div>
                <div className="column grid-list4">
                  <font className="notification">มูลค่าตลาด 24 ชั่วโมง</font>
                  <h4>{market_cap_change_24h}</h4>
                </div>
                <div className="column grid-list3">
                  <font className="notification">
                    เปอร์เซ็นต์มูลค่าตลาด 24 ชั่วโมง
                  </font>
                  <h4>
                    {market_cap_change_percentage_24h}
                    {market_cap_change_percentage_24ht}
                  </h4>
                </div>
                <div className="column grid-list4">
                  <font className="notification">อุปทานหมุนเวียน</font>
                  <h4>{circulating_supply} เหรียญ</h4>
                </div>
                <div className="column grid-list3">
                  <font className="notification">อุปทานทั้งหมด</font>
                  <h4>{total_supply}</h4>
                </div>
                <div className="column grid-list4">
                  <font className="notification">อุปทานสูงสุด</font>
                  <h4>{max_supply}</h4>
                </div>
                <div className="column grid-list3">
                  <font className="notification">ราคาสูงสุดที่เคยมีมา</font>
                  <h4>${res.ath} </h4>
                  <h6>{thaidate2(res.ath_date)}</h6>
                </div>
                <div className="column grid-list4">
                  <font className="notification">ราคาต่ำสุดที่เคยมีมา</font>
                  <h4>${res.atl}</h4>
                  <h6>{thaidate2(res.atl_date)}</h6>
                </div>
              </div>
              {/* <h6 className="mtb-20 " >ปล. $ คือ ดอลลาร์สหรัฐ (USD) </h6> */}
            </div>

            <div className="mt-5">
              <Ad_1 />
            </div>

            <div>
              <h4 className="p-title mt-5 " title={"กราฟราคา " + res.name}>
                <b>กราฟราคา {res.name}</b>
              </h4>
              <div className="tradingview-widget-container trading-bg ">
                <TradingViewWidget
                  // container_id="tradingview_6dcb2"
                  symbol={res.symbol + "usdt"}
                  width="100%"
                  height="450"
                  interval="D"
                  timezone="Asia/Bangkok"
                  theme={resolvedTheme === "dark" ? "dark" : "light"}
                  style="1"
                  locale="th_TH"
                  // enable_publishing="false"
                  allow_symbol_change="true"
                // toolbar_bg="rgba(0, 0, 0, 0)"
                />
              </div>
              <h6 className="mt-20 center">
                {" "}
                ปล. ถ้ากราฟไม่ขึ้น ตัวอย่าง {res.symbol}usdt ให้ใส่ เช่น{" "}
                {res.symbol}usdc, {res.symbol}usd{" "}
              </h6>
            </div>

            <div className="float-left-right text-center mt-40 mt-sm-20 ">
              <ul className="mb-30 list-li-mt-10 list-li-mr-5 list-a-plr-15 list-a-ptb-7 list-a-bg-grey list-a-br-2 list-a-hvr-primary ">
                <li>
                  <a title={res.symbol} href={"/tags/" + res.symbol}>
                    <i className="fas fa-tag"></i> {res.symbol}
                  </a>
                </li>
              </ul>
              <ul className="mb-30  list-a-hw-radial-35 list-a-hvr-primary list-li-ml-5">
                <li className="mr-10 ml-0">Share</li>
                <li>
                  <a href="#/#" title="facebook" onClick={facebook}>
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#/#" title="twitter" onClick={twitter}>
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#/#" title="line" onClick={line}>
                    <i className="fab fa-line" />
                  </a>
                </li>
              </ul>
            </div>
            {/* f1 */}
            <Ad_1 />
            <div className="brdr-ash-1 opacty-5" />

            <h4 className="p-title mt-50 ">
              <b>บทความอื่นที่น่าสนใจ</b>
            </h4>

            <Cryto_Slide />
            {/* <h4 className="p-title mt-20 ">
              <b>ความคิดเห็น</b>
              <button
                className="b-btn theme--dark b-btn--contained ml-20"
                onClick={() => window.location.reload(false)}
              >
                <i className="fas fa-sync-alt"></i>
              </button>
            </h4> */}

            <div className="sided-70 mb-20 ">
              {/* <FBComments URL_data={router.asPath} /> */}
              {/* <div
                className="fb-comments"
                data-href={
                  "https://boychawin.com/cryptocurrency-detail/" +
                  `${searchid}?b=${res.id}`
                }
                data-numposts={5}
                data-width="100%"
                data-lazy="true"
                data-colorscheme={resolvedTheme === "dark" ? "dark" : "light"}
              /> */}
            </div>

            <div className="mt-5">
              <Ad_all_index />
            </div>
          </div>
        </>
      );
    });
  };

  const DataTable2 = () => {
    return data2.map((res) => {
      const searchid2 = id;

      function facebook2() {
        window.open(
          "https://www.facebook.com/share.php?u=https://boychawin.com/cryptocurrency-detail/" +
          `${searchid2}?b=${res.ids}`,
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400"
        );
      }

      function twitter2() {
        window.open(
          "https://twitter.com/share?url=https://boychawin.com/cryptocurrency-detail/" +
          `${searchid2}?b=${res.ids}`,
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400"
        );
      }

      function line2() {
        window.open(
          "https://lineit.line.me/share/ui?url=https://boychawin.com/cryptocurrency-detail/" +
          `${searchid2}?b=${res.ids}`,
          "_blank",
          "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400"
        );
      }

      if (res.current_price < "0") {
        var current_pricet2 = <font color="red">$</font>;
        var current_price2 = (
          <NumberFormat
            value={res.current_price}
            displayType={"text"}
            thousandSeparator={true}
            style={{ color: "red" }}
          />
        );
      } else {
        var current_pricet2 = <font color="green">$</font>;
        var current_price2 = (
          <NumberFormat
            value={res.current_price}
            displayType={"text"}
            thousandSeparator={true}
            style={{ color: "green" }}
          />
        );
      }

      if (res.total_volume < "0") {
        var total_volume_text2 = <font color="red">$</font>;
        var total_volume2 = (
          <NumberFormat
            value={res.total_volume}
            displayType={"text"}
            thousandSeparator={true}
            style={{ color: "red" }}
          />
        );
      } else {
        var total_volume_text2 = <font color="green">$</font>;
        var total_volume2 = (
          <NumberFormat
            value={res.total_volume}
            displayType={"text"}
            thousandSeparator={true}
            style={{ color: "green" }}
          />
        );
      }

      if (res.circulating_supply != null) {
        var circulating_supplycon2 = res.circulating_supply;
      } else {
        var circulating_supplycon2 = "0";
      }
      const circulating_supply2 = (
        <NumberFormat
          value={circulating_supplycon2}
          displayType={"text"}
          thousandSeparator={true}
        />
      );
      if (res.total_supply != null) {
        var total_supplycon2 = res.total_supply;
      } else {
        var total_supplycon2 = "-";
      }

      const total_supply2 = (
        <NumberFormat
          value={total_supplycon2}
          displayType={"text"}
          thousandSeparator={true}
        />
      );

      // const market_cap2 = (
      //   <NumberFormat
      //     value={res.market_cap}
      //     displayType={"text"}
      //     thousandSeparator={true}
      //   />
      // );

      // var low_24h2 = (
      //   <ReactTextTransition text={"$" + res.low_24h} className="big" inline />
      // );
      // var high_24h2 = (
      //   <ReactTextTransition text={"$" + res.high_24h} className="big" inline />
      // );
      if (res.max_supply != null) {
        var max_supplycon2 = res.max_supply;
      } else {
        var max_supplycon2 = "-";
      }
      const max_supply2 = (
        <NumberFormat
          value={max_supplycon2}
          displayType={"text"}
          thousandSeparator={true}
        />
      );

      // if (res.market_cap_change_24h != null) {
      //   var market_cap_change_24hcon2 = res.market_cap_change_24h;
      // } else {
      //   var market_cap_change_24hcon2 = "-";
      // }

      // if (res.market_cap_change_24h < "0") {
      //   var market_cap_change_24h2 = (
      //     <NumberFormat
      //       prefix={"$"}
      //       value={market_cap_change_24hcon2}
      //       displayType={"text"}
      //       thousandSeparator={true}
      //       style={{ color: "red" }}
      //     />
      //   );
      // } else {
      //   var market_cap_change_24h2 = (
      //     <NumberFormat
      //       prefix={"$"}
      //       value={market_cap_change_24hcon2}
      //       displayType={"text"}
      //       thousandSeparator={true}
      //       style={{ color: "green" }}
      //     />
      //   );
      // }

      // if (res.market_cap_change_percentage_24h < "0") {
      //   var market_cap_change_percentage_24ht2 = <font color="red">%</font>;
      //   var market_cap_change_percentage_24h2 = (
      //     <NumberFormat
      //       value={res.market_cap_change_percentage_24h}
      //       displayType={"text"}
      //       thousandSeparator={true}
      //       style={{ color: "red" }}
      //     />
      //   );
      // } else {
      //   var market_cap_change_percentage_24ht2 = <font color="green">%</font>;
      //   var market_cap_change_percentage_24h2 = (
      //     <NumberFormat
      //       value={res.market_cap_change_percentage_24h}
      //       displayType={"text"}
      //       thousandSeparator={true}
      //       style={{ color: "green" }}
      //     />
      //   );
      // }
      const router = useRouter();
      return (
        <>
          <div className="col-md-12 col-lg-8" data-index={res.id} key={res.id}>
            <h1 className="mt-20 h1font-size">
              <b>{"ข้อมูลเหรียญ " + res.name + " (" + res.symbol + ")"}</b>
            </h1>
            <div className="float-left-right text-center mt-5 mt-sm-0 divboychawin">
              <ul className="list-li-mr-5 mtb-5 ">
                <li>
                  &nbsp; by&nbsp;
                  <a title="boychawin" href="/">
                    <b>boychawin</b>
                  </a>
                </li>
              </ul>
              <ul className="list-li-mr-5 mtb-5 ">
                <li>
                  {thaidate2(res.last_updated)}&nbsp;
                  <i className="color-primary mr-5 font-12 fas fa-star-half-alt"></i>
                  -
                </li>
              </ul>
            </div>
            <img className="card-img " src={res.image} alt={res.name} />
            <div className="mt-5">
              <Ad_1 />
            </div>
            <div className="float-left-right text-center mt-0 mt-sm-0">
              <ul className="mb-5 list-a-hw-radial-35 list-a-hvr-primary list-li-ml-5">
                <li className="mr-5 ml-0">Share</li>
                <li>
                  <a href="#/#" title="facebook" onClick={facebook2}>
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#/#" title="twitter" onClick={twitter2}>
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#/#" title="line" onClick={line2}>
                    <i className="fab fa-line" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2
                className="p-title pfont-size "
                title={"รายละเอียด " + res.name + res.symbol}
              >
                {"รายละเอียด " + res.name} ({res.symbol}){" "}
              </h2>
              <h5 title={"ข้อมูลเหรียญ" + res.name + res.symbol}>
                <b>{res.name}</b> เป็นรูปแบบหนึ่งของเงินดิจิทัล (digital
                currency) ในตลาดคริปโทเคอร์เรนซี (Cryptocurrency) ทำงานบนระบบ
                Blockchain{" "}
              </h5>
              <br />
              <h6 className="mb-5">
                <b />
                ราคาของเหรียญ{" "}
                <b>
                  {res.name} ({res.symbol}){" "}
                </b>{" "}
                สำหรับข้อมูลวันที่ อัปเดต <u>{thaidate2(res.last_updated)}</u>{" "}
                ราคาเท่ากับ{" "}
                <b>
                  {" "}
                  {current_pricet2}
                  {current_price2}
                </b>{" "}
                โดยมีปริมาณการเทรด 24 ชั่วโมงเท่ากับ{" "}
                <b>
                  {total_volume_text2}
                  {total_volume2}{" "}
                </b>
                {/* {price_change_percentage_24h_text2} {price_change_percentage_24h2} */}
                ใน 24 ชั่วโมงที่ผ่านมา มีอุปทานหมุนเวียน {circulating_supply2}{" "}
                เหรียญ และอุปทานทั้งหมด {total_supply2} เหรียญ
                ราคาสูงสุดที่เคยมีมา <b> $ {res.ath} </b> ราคาต่ำสุดที่เคยมีมา{" "}
                <b>${res.atl} </b>
                {/* ใช้เครื่องมือจาก Tradingview
                เป็นเว็บไซต์ที่ให้บริการดูกราฟหุ้นทั่วทั้งโลก
                และสามารถดูข้อมูลเพิ่มเติมได้ที่ coingecko.com */}
              </h6>
              <br />
              <div className="row col center ">
                <i className="fas fa-sync-alt fa-spin"></i> &nbsp;
                ไม่มีการส่งข้อมูลจากแหล่งที่มา
              </div>
              <br />

              <div className="row ">
                <div className="column grid-list">
                  <font className="notification">ราคา</font>
                  <h4>-</h4>
                </div>
                <div className="column grid-list2">
                  <font className="notification">อันดับตามตลาด(Rank)</font>
                  <h4>-</h4>
                </div>
                <div className="column grid-list3">
                  <font className="notification">มูลค่าตามราคาตลาด</font>
                  <h4> - </h4>
                </div>
                <div className="column grid-list4">
                  <font className="notification">ปริมาณซื้อขาย 24 ชั่วโมง</font>
                  <h4>-</h4>
                </div>
                <div className="column grid-list3">
                  <font className="notification">ต่ำ/สูง 24 ชั่วโมง</font>
                  <h4>-</h4>
                </div>
                <div className="column grid-list4">
                  <font className="notification">มูลค่าตลาด 24 ชั่วโมง</font>
                  <h4>-</h4>
                </div>
                <div className="column grid-list3">
                  <font className="notification">
                    เปอร์เซ็นต์มูลค่าตลาด 24 ชั่วโมง
                  </font>
                  <h4>-</h4>
                </div>
                <div className="column grid-list4">
                  <font className="notification">อุปทานหมุนเวียน</font>
                  <h4>{circulating_supply2} เหรียญ</h4>
                </div>
                <div className="column grid-list3">
                  <font className="notification">อุปทานทั้งหมด</font>
                  <h4>{total_supply2}</h4>
                </div>
                <div className="column grid-list4">
                  <font className="notification">อุปทานสูงสุด</font>
                  <h4>{max_supply2}</h4>
                </div>
                <div className="column grid-list3">
                  <font className="notification">ราคาสูงสุดที่เคยมีมา</font>
                  <h4>${res.ath} </h4>
                  <h6>{thaidate2(res.ath_date)}</h6>
                </div>
                <div className="column grid-list4">
                  <font className="notification">ราคาต่ำสุดที่เคยมีมา</font>
                  <h4>${res.atl}</h4>
                  <h6>{thaidate2(res.atl_date)}</h6>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <Ad_1 />
            </div>

            {/* <div>
              <h4 className="p-title mt-5 " title={"กราฟราคา " + res.name}>
                <b>กราฟราคา {res.name}</b>
              </h4>
              <div className="tradingview-widget-container trading-bg ">
                <TradingViewWidget
                  container_id="tradingview_6dcb2"
                  symbol={res.symbol + "usdt"}
                  width="100%"
                  height="500"
                  interval="D"
                  timezone="Asia/Bangkok"
                  theme={resolvedTheme === "dark" ? "dark" : "light"}
                  style="1"
                  locale="th_TH"
                  // enable_publishing="false"
                  allow_symbol_change="true"
                  toolbar_bg="rgba(0, 0, 0, 0)"
                />
              </div>
            </div> */}

            <div className="float-left-right text-center mt-40 mt-sm-20 ">
              <ul className="mb-30 list-li-mt-10 list-li-mr-5 list-a-plr-15 list-a-ptb-7 list-a-bg-grey list-a-br-2 list-a-hvr-primary ">
                <li>
                  <a title={res.symbol} href={"/tags/" + res.symbol}>
                    <i className="fas fa-tag"></i> {res.symbol}
                  </a>
                </li>
              </ul>
              <ul className="mb-30  list-a-hw-radial-35 list-a-hvr-primary list-li-ml-5">
                <li className="mr-10 ml-0">Share</li>
                <li>
                  <a href="#/#" title="facebook" onClick={facebook2}>
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#/#" title="twitter" onClick={twitter2}>
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#/#" title="line" onClick={line2}>
                    <i className="fab fa-line" />
                  </a>
                </li>
              </ul>
            </div>
            {/* f1 */}
            <Ad_1 />
            <div className="brdr-ash-1 opacty-5" />

            <h4 className="p-title mt-50 ">
              <b>บทความอื่นที่น่าสนใจ</b>
            </h4>

            <Cryto_Slide />
            {/* <h4 className="p-title mt-20 ">
              <b>ความคิดเห็น</b>
              <button
                className="b-btn theme--dark b-btn--contained ml-20"
                onClick={() => window.location.reload(false)}
              >
                <i className="fas fa-sync-alt"></i>
              </button>
            </h4> */}

            <div className="sided-70 mb-20 ">
              {/* <FBComments URL_data={router.asPath} /> */}
              {/* <div
                className="fb-comments"
                data-href={
                  "https://boychawin.com/cryptocurrency-detail/" +
                  `${searchid2}?b=${res.ids}`
                }
                data-numposts={5}
                data-width="100%"
              /> */}
            </div>

            <div className="mt-5">
              <Ad_1 />
            </div>
          </div>
        </>
      );
    });
  };

  if (state.data.length > 0) {
    var loginButton = DataTable();
  } else {
    var loginButton = DataTable2();
    // var loginButton2 = Header_Blogdata2();
  }

  return (
    <>
      {Header_Blogdata2()}
      {Header_Blogdata()}
      <section>
        <div className="container ">
          <div className="row">
            {loginButton}
            <div className="d-none d-md-block d-lg-none col-md-3" />
            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
};

cryptocurrency_detail.getInitialProps = async (ctx) => {
  const { query } = ctx;

  let data = [];

  const { data: res1, status: status1 } = await axios.get(`${process.env.NEXT_PUBLIC_LINK_API}/apio/react/cryto_detail2.php?id=${query.id}`)
  if (res1 && status1 == 200) {
    data = await res1;
  }


  return { data2: data };
}
export default cryptocurrency_detail;
