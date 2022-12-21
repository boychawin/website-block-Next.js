import Link from "next/link";
import Effect1 from "../components/Header/Effect";
import Dark_mode from "../components/Dark_Mode/dark_mode";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import th from "../locales/th";
import en from "../locales/en";

const Header = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "th" ? th : en;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  const [session, loading] = useSession();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [click3, setClick3] = useState(false);
  const handleClick3 = () => setClick3(!click3);
  const closeMobileMenu3 = () => setClick3(false);

  useEffect(() => {
    var cx = "13681fd5c30c2f488";
    var gcse = document.createElement("script");
    gcse.type = "text/javascript";
    gcse.async = true;
    gcse.src = "https://cse.google.com/cse.js?cx=" + cx;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(gcse, s);
    gcse.onload = function () {
      var search = document.createElement("gcse:search");
      // Note the element ID name
      var searchBox = document.getElementById("search-box");
      searchBox.appendChild(search);
    };
  }, []);

  return (
    <>
      {/* {JSON.stringify(session)} */}
      <header>
        <div className="container2  ">
          <div className="menu-nav-icon">
            <ul className={click ? "nav-options2 active" : "nav-options2"}>
              <li className="option2" onClick={closeMobileMenu}>
                <Link href="/">
                  <a title="หน้าแรก">
                    <span role="img" aria-label="about us">
                      <i className=" fas fa-home" />
                    </span>
                  </a>
                </Link>
              </li>
              <li className="option2" onClick={closeMobileMenu}>
                <Link href="/blog/">
                  <a title="บทความ">
                    <span role="img" aria-label="price"></span>
                    <font className="menuu">บทความ</font>
                  </a>
                </Link>
              </li>
              <li className="option2" onClick={closeMobileMenu}>
                <Link href={`/cryptocurrency/`}>
                  <a title="คริปโท">
                    <span role="img" aria-label="contact"></span>
                    <font className="menuu">คริปโท</font>
                  </a>
                </Link>
              </li>
              <li className="option2" onClick={closeMobileMenu}>
                <Link href="/contact/">
                  <a title="เกี่ยวกับเรา">
                    {" "}
                    <font className="menuu ">เกี่ยวกับเรา</font>
                  </a>
                </Link>
              </li>

              <li className="b-btn theme--dark b-btn--contained mr-10 mb-15 mt-15 ml-15">
                <span className="b-btn__content mtb-5 mr-10">
                  <div className="dropdown">
                    <button className="dropbtn">
                      {" "}
                      <i
                        style={session ? { color: "#02d667" } : { color: "" }}
                        className="fas fa-user-circle"
                      />{" "}
                    </button>
                    <div className="dropdown-content">
                      {!session && (
                        <>
                          <Link href="/login/">
                            <a
                              href="/login/"
                              title="เข้าสู่ระบบ "
                              onClick={closeMobileMenu}
                            >
                              <i className="fas fa-sign-in-alt"></i> เข้าสู่ระบบ
                            </a>
                          </Link>
                        </>
                      )}
                      {session && (
                        <>
                          {" "}
                          <Link href="/dashboard/">
                            <a
                              href="/dashboard/"
                              title="หน้าหลัก"
                              onClick={closeMobileMenu}
                            >
                              {" "}
                              <div className=" fas fa-home mr-40">
                                {" "}
                                หน้าหลัก{" "}
                              </div>
                            </a>
                          </Link>
                          <Link href="/profile/">
                            <a
                              href="/profile/"
                              itle="ข้อมูลส่วนตัว"
                              onClick={closeMobileMenu}
                            >
                              {" "}
                              <div class="fas fa-user-alt  mr-10">
                                {" "}
                                ข้อมูลส่วนตัว
                              </div>
                            </a>
                          </Link>
                          {/* <Link href="/">
                            <a
                              href="/"
                              onClick={closeMobileMenu}
                              style={{ color: "#1b2836" }}
                              onClick={signOut}
                              title="ออกจากระบบ"
                            >
                              {" "}
                              <div className="fas fa-sign-out-alt mr-10">
                                ออกจากระบบ
                              </div>
                            </a>
                          </Link> */}
                        </>
                      )}
                    </div>
                  </div>

                  <a
                    onClick={closeMobileMenu}
                    title="เลี้ยงกาแฟหน่อยสิ"
                    href="https://www.buymeacoffee.com/boychawi"
                    target="_blank"
                  >
                    {" "}
                    <i className="fas fa-coffee mr-0" />{" "}
                  </a>
                  <a href="#/#" >
                    <Dark_mode />
                  </a>
                </span>
              </li>
            </ul>

            <div className="mobile-menu2" onClick={handleClick}>
              {click ? (
                <a href="#/#" ><div className="menu-icon2 fas fa-align-right"></div></a>
              ) : (
                <a href="#/#" ><div className="menu-icon2 fas fa-align-left"></div></a>
              )}
            </div>
          </div>

          <Link href="#/#" >
            <a href="#/#" title="หน้าแรก" className="logo ">
              <Effect1 />
            </a>
          </Link>

          <ul className={click3 ? "nav-options3 active" : "nav-options3"}>
            <div className="csearch">
              <div id="search-box"></div>
            </div>
          </ul>

          <div className="right-area" onClick={handleClick3}>
            {click3 ? (
              <a
                href="#/#"
                title="ค้นหาสิครับ"
                className="menu-icon3 fas fas fa-search-minus"
              ></a>
            ) : (
              <a
                href="#/#"
                title="ค้นหาสิครับ"
                className="menu-icon3 fas fas fa-search"
              ></a>
            )}
          </div>

          <ul className="main-menu">
            <li>
              <Link href="/" >
                <a href="/" title="หน้าแรก">
                  {" "}
                  <i className="menuu fas fa-home" />
                </a>
              </Link>
            </li>

            <li>
              <Link href="/blog/">
                <a href="/blog/" title={t.blog}>
                  {" "}
                  <font
                    className={
                      router.asPath == "/blog" ? "menuu active" : "menuu"
                    }
                  >
                    {t.blog}
                  </font>{" "}
                </a>
              </Link>
            </li>
            <li>
              <Link href="/cryptocurrency/">
                <a href="/cryptocurrency/" title={t.cryptocurrency}>
                  <font
                    className={
                      router.asPath == "/cryptocurrency"
                        ? "menuu active"
                        : "menuu"
                    }
                  >
                    {t.cryptocurrency}
                  </font>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact/">
                <a href="/contact/" title={t.about}>
                  {" "}
                  <font
                    className={
                      router.asPath == "/contact" ? "menuu active" : "menuu"
                    }
                  >
                    {t.about}
                  </font>
                </a>
              </Link>
            </li>

            <li className="b-btn theme--dark b-btn--contained mr-10">
              <span className="b-btn__content mtb-5 mr-10">
                <div className="dropdown">
                  <button className="dropbtn">
                    {" "}
                    <i
                      style={session ? { color: "#02d667" } : { color: "" }}
                      className="fas fa-user-circle"
                    />{" "}
                  </button>
                  <div className="dropdown-content">
                    {!session && (
                      <>
                        <Link href="https://www.guwork.co/login">
                          <a
                            href="https://www.guwork.co/login"
                            title="เข้าสู่ระบบ"
                            onClick={closeMobileMenu}
                          >
                            <i className="fas fa-sign-in-alt"></i> เข้าสู่ระบบ
                          </a>
                        </Link>
                      </>
                    )}
                    {session && (
                      <>
                        {" "}
                        <Link href="/dashboard/">
                          <a href="/dashboard/" title="หน้าหลัก" onClick={closeMobileMenu}>
                            {" "}
                            <div className=" fas fa-home mr-40"> หน้าหลัก </div>
                          </a>
                        </Link>
                        <Link href="/profile/">
                          <a
                            href="/profile/"
                            title="ข้อมูลส่วนตัว"
                            onClick={closeMobileMenu}
                          >
                            {" "}
                            <div class="fas fa-user-alt  mr-10">
                              {" "}
                              ข้อมูลส่วนตัว
                            </div>
                          </a>
                        </Link>
                        {/* <Link href="#/#" >
                          <a
                            onClick={closeMobileMenu}
                            style={{ color: "#1b2836" }}
                            onClick={signOut}
                            title="ออกจากระบบ"
                          >
                            {" "}
                            <div className="fas fa-sign-out-alt mr-10">
                              ออกจากระบบ
                            </div>
                          </a>
                        </Link> */}
                      </>
                    )}
                  </div>
                </div>

                <a
                  href="https://www.buymeacoffee.com/boychawi"
                  title="เลี้ยงกาแฟหน่อยสิ"
                  target="_blank"
                >
                  {" "}
                  <i className="fas fa-coffee" />{" "}
                </a>
                <a href="#/#" >
                  <Dark_mode />
                </a>
                {/* <i title="แปลภาษา" className="fas fa-globe-americas mr-10" />{" "} */}
                {/* <br />
                <div className="dropdown">
                  <button className="dropbtn">
                    <i className="fas fa-globe-americas" />
                  </button>
                  <div className="dropdown-content-left">
                    {router.locales.map((locale) => (
                      <div key={locale}>
                       <Link href={router.asPath} locale={locale} >
                        <a>{locale}</a>
                      </Link>
                      </div>
                     
                    ))}
                  </div>
                </div> */}
                <div className="bc-box">
                  <select onChange={changeLanguage} defaultValue={locale}>
                    <option value="th">TH</option>
                    <option value="en">EN</option>
                  </select>
                </div>
              </span>
            </li>
          </ul>

          <div className="clearfix" />
          {/* <div id="fb-root" /> */}
        </div>
        {/* <div className="container2">
          <All_data_show />
        </div> */}
      </header>
      {/* <Bcsearch /> */}
    </>
  );
};

export default Header;
