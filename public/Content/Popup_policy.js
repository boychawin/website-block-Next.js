import React from "react";
import CookieConsent from "react-cookie-consent";
export default function Popup_policy() {

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="ตกลง"
        declineButtonText="ไม่"
        cookieName="OOPPDO"
        style={{ background: "#1b2836" }}
        buttonStyle={{
          color: "#fff",
          fontSize: "24px",
          background: "#02d667",
          "border-radius": "25px",
          fontWeight: "bold"
        }}
        expires={365}
      >
        <a className="color-white " href="/policy">
          <h6 className="p-titlechat">BoyChawin.com</h6>{" "}
        </a>
        <h6 style={{ fontSize: "13px" }}>
          เพื่อสำรวจความนิยมในการใช้บริการ
          อันจะเป็นประโยชน์ในการนำสถิติไปใช้ในการปรับปรุงคุณภาพในการให้บริการ
          เว็บไซต์ boychawin.com
          จึงจำเป็นต้องจัดเก็บรวบรวมข้อมูลของท่านบางอย่างเพิ่มเติมด้วย
        </h6>{" "}
        <a href="/policy">
          {" "}
          <h6>
            <u>อ่านเพิ่มเติม!</u>{" "}
          </h6>
        </a>
      </CookieConsent>
    </>
  );
}
